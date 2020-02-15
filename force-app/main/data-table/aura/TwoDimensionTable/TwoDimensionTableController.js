({
    doInit : function(component, event, helper) {
        var data = component.get('v.data');

        if(data) {
            let rowHeaders = [];
            let columnHeaders = [];
            // let rowTree = {};
            // let columnTree = {};
            let rows = [];
            let columns = [];

            let columnHeaderSet = new Set();
            // get row & column headers
            for(let oneRowHeader in data) {
                rowHeaders.push(oneRowHeader);

                for(let oneColumnHeader in data[oneRowHeader]) {
                    columnHeaderSet.add(oneColumnHeader);
                }
            }
            columnHeaders = Array.from(columnHeaderSet);

            // calc row level (width) 
            let rowWidth = 1;
            for(let oneRowHeader of rowHeaders) {
                rowWidth = Math.max(rowWidth, (oneRowHeader.split('.').length));
            }

            // calc column level (height)
            let columnHeight = 1;
            for(let oneColumnHeader of columnHeaders) {
                columnHeight = Math.max(columnHeight, (oneColumnHeader.split('.').length));
            }
            
            // #region merge row headers; calc rowspan, colspan; push all rows data
            let theLeafRowHeaders = rowHeaders.filter((e) =>
                !rowHeaders.some(innerEle => innerEle !== e && innerEle.startsWith(e + '.'))
            );
            let theNonLeafRowHeaders = rowHeaders.map(e => {
                return {
                    header : e,
                    count : theLeafRowHeaders.filter(innerEle => innerEle !== e && innerEle.startsWith(e + '.')).length
                };
            }).filter(e => e.count > 0);
            
            let previousRowHeaderItems = [];  
            for(let oneRowHeader of theLeafRowHeaders) {
                let rowHeaderItems = oneRowHeader.split('.');
                let oneRow = { items: [], originalHeader : oneRowHeader };
                let currentRowHeaderItems = [];
                let theActualFirstItemFound =false;

                let theNewestRowHeaderItems = [];
                for(let i = 0; i < rowHeaderItems.length; i++) {
                    // calc rowspan, colspan
                    let colspan = 1;
                    if(i === rowHeaderItems.length - 1) {
                        colspan = (rowWidth - rowHeaderItems.length) + 1;
                    }
                    let rowHeaderLabel = rowHeaderItems[i].replace(/%%full_stop%%/g, '.');
                    let oneRowHeaderWithSpanItem = { showLeftBorder : false, fieldValue : rowHeaderLabel, type : 'String', headerType : 'row', rowItemType : 'RowHeader', colspan : colspan, rowspan : 1, addRowSpan : function() { this.rowspan++ } }
                    currentRowHeaderItems.push(oneRowHeaderWithSpanItem);
                    if(helper.doMerge(previousRowHeaderItems, currentRowHeaderItems, i, e => e.fieldValue)) {
                        // merge headers
                        previousRowHeaderItems[i].addRowSpan();
                        theNewestRowHeaderItems[i] = previousRowHeaderItems[i];
                    } else {
                        oneRow.items.push(oneRowHeaderWithSpanItem);
                        theNewestRowHeaderItems[i] = oneRowHeaderWithSpanItem;
                        if(!theActualFirstItemFound) {
                            theActualFirstItemFound = true;
                            if(i !== 0) {
                                oneRowHeaderWithSpanItem.showLeftBorder = true;
                            }
                        }
                    }
                }
                previousRowHeaderItems = theNewestRowHeaderItems;
                // previousRowHeaderItems = currentRowHeaderItems;
                // push row data
                for(let oneColumnHeader of columnHeaders) {
                    let value = data[oneRowHeader] !== undefined && data[oneRowHeader][oneColumnHeader] !== undefined ? data[oneRowHeader][oneColumnHeader] : null;
                    // if(value === null || value === undefined) {
                    //     value = helper.getValueFromNonLeafRows(data, oneColumnHeader, theNonLeafRowHeaders);
                    // }
                    oneRow.items.push({ fieldValue : value, type : component.get('v.type'), colspan : 1, rowspan : 1, columnHeader : oneColumnHeader });
                }
                rows.push(oneRow);
            }
            // group non-leaf nodes value
            for(let oneRowHeader of theNonLeafRowHeaders) {
                let allMatchedLeafRows = rows.filter(e => e.originalHeader !== oneRowHeader.header && e.originalHeader.startsWith(oneRowHeader.header));
                let theFirstRow = allMatchedLeafRows[0];
                let theRestRows = allMatchedLeafRows.slice(1);

                for(let oneColumnHeader in data[oneRowHeader.header]) {
                    let value = data[oneRowHeader.header][oneColumnHeader];
                    let theFirstRowMatchedIndex = theFirstRow.items.map(e => e.columnHeader).flat().indexOf(oneColumnHeader);
                    theFirstRow.items[theFirstRowMatchedIndex] = { fieldValue : value, rowspan: oneRowHeader.count, type : component.get('v.type') } ;
                    for(let oneRestRow of theRestRows) {
                        let oneRestRowMatchedIndex = oneRestRow.items.map(e => e.columnHeader).flat().indexOf(oneColumnHeader);
                        oneRestRow.items.splice(oneRestRowMatchedIndex, 1);
                    }
                }
            }
            // #endregion
            
            // #region merge column headers; calc rowspan, colspan;
            columns.push([{ label : component.get('v.cornerLabel'), headerType : 'joint', colspan : rowWidth, rowspan : columnHeight }]);
            let previousColumnHeaderItems = [];
            for(let oneColumnHeader of columnHeaders) {
                let columnHeaderItems = oneColumnHeader.split('.');
                let currentColumnHeaderItems = [];

                let theNewestColHeaderItems = [];
                for(let i = 0; i < columnHeaderItems.length; i++) {
                    let rowspan = 1;
                    if(i === columnHeaderItems.length - 1) {
                        rowspan = (columnHeight - columnHeaderItems.length) + 1;
                    }
                    if(!columns[i]) {
                        columns[i] = [];
                    }
                    let colHeaderLabel = columnHeaderItems[i].replace(/%%full_stop%%/g, '.');                    
                    let oneColumnHeaderWithSpanItem = { showLeftBorder : false, headerType : 'col',  label : colHeaderLabel, colspan : 1, rowspan : rowspan, addColSpan : function() { this.colspan++ } }
                    currentColumnHeaderItems.push(oneColumnHeaderWithSpanItem);
                    if(helper.doMerge(previousColumnHeaderItems, currentColumnHeaderItems, i, e => e.label)) {
                        // merge headers
                        previousColumnHeaderItems[i].addColSpan();
                        theNewestColHeaderItems[i] = previousColumnHeaderItems[i];
                    } else {
                        columns[i].push(oneColumnHeaderWithSpanItem);
                        theNewestColHeaderItems[i] = oneColumnHeaderWithSpanItem;
                    }
                }
                previousColumnHeaderItems = theNewestColHeaderItems;
            }

            let columnsProperties = component.get('v.columnsProperties');
            for(let oneColumn of columns) {
                if(oneColumn[0].rowspan !== columnHeight) {
                    oneColumn[0].showLeftBorder = true;
                }
                if(columnsProperties) {
                    for(let oneColumnItem of oneColumn) { 
                        if(columnsProperties[oneColumnItem.label]) {
                            Object.assign(oneColumnItem, columnsProperties[oneColumnItem.label]);
                        }
                    }
                }
            }

            // #endregion
            
            component.set('v.rows', rows);
            component.set('v.columns', columns);
        }
    }
    
})