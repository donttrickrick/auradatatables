({
    doInit : function(component, event, helper) {
        var data = component.get('v.data');
        
        if(data) {
            var rowHeaders = [];
            var columnHeaders = [];
            var rows = [];
            let columns = [];

            // get row & column headers
            for(let oneRowHeader in data) {
                rowHeaders.push(oneRowHeader);
                if(columnHeaders.length == 0) {
                    for(let oneColumnHeader in data[oneRowHeader]) {
                        columnHeaders.push(oneColumnHeader);
                    }
                }
            }

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
            let previousRowHeaderItems = [];  
            for(let oneRowHeader of rowHeaders) {
                let rowHeaderItems = oneRowHeader.split('.');
                let oneRow = { items: [] };
                let allRowItems = [];
                let theActualFirstItemFound =false;

                for(let i = 0; i < rowHeaderItems.length; i++) {
                    // calc rowspan, colspan
                    let colspan = 1;
                    if(i === rowHeaderItems.length - 1) {
                        colspan = (rowWidth - rowHeaderItems.length) + 1;
                    }
                    let oneRowHeaderWithSpanItem = { showLeftBorder : false, fieldValue : rowHeaderItems[i], type : 'String', rowItemType : 'RowHeader', colspan : colspan, rowspan : 1, addRowSpan : function() { this.rowspan++ } }
                    if(previousRowHeaderItems[i] && previousRowHeaderItems[i].fieldValue === rowHeaderItems[i]) {
                        // merge headers
                        previousRowHeaderItems[i].addRowSpan();
                        oneRowHeaderWithSpanItem = previousRowHeaderItems[i];
                        
                    } else {
                        oneRow.items.push(oneRowHeaderWithSpanItem);
                        if(!theActualFirstItemFound) {
                            theActualFirstItemFound = true;
                            if(i !== 0) {
                                oneRowHeaderWithSpanItem.showLeftBorder = true;
                            }
                        }
                    }
                    allRowItems.push(oneRowHeaderWithSpanItem);
                }
                previousRowHeaderItems = allRowItems;
                // push row data
                for(let oneColumnHeader of columnHeaders) {
                    let value = data[oneRowHeader] !== undefined && data[oneRowHeader][oneColumnHeader] !== undefined ? data[oneRowHeader][oneColumnHeader] : null;
                    oneRow.items.push({ fieldValue : value, type : component.get('v.type') });
                }
                rows.push(oneRow);
            }
            // #endregion
            
            // #region merge column headers; calc rowspan, colspan;
            columns.push([{ label : component.get('v.cornerLabel'), colspan : rowWidth, rowspan : columnHeight }]);
            let previousColumnHeaderItems = [];
            for(let oneColumnHeader of columnHeaders) {
                let columnHeaderItems = oneColumnHeader.split('.');
                let allColumnItems = [];

                for(let i = 0; i < columnHeaderItems.length; i++) {
                    let rowspan = 1;
                    if(i === columnHeaderItems.length - 1) {
                        rowspan = (columnHeight - columnHeaderItems.length) + 1;
                    }
                    if(!columns[i]) {
                        columns[i] = [];
                    }
                    
                    let oneColumnHeaderWithSpanItem = { showLeftBorder : false, label : columnHeaderItems[i], colspan : 1, rowspan : rowspan, addColSpan : function() { this.colspan++ } }
                    if(previousColumnHeaderItems[i] && previousColumnHeaderItems[i].label === columnHeaderItems[i]) {
                        // merge headers
                        previousColumnHeaderItems[i].addColSpan();
                        oneColumnHeaderWithSpanItem = previousColumnHeaderItems[i];
                    } else {
                        columns[i].push(oneColumnHeaderWithSpanItem);
                    }
                    allColumnItems.push(oneColumnHeaderWithSpanItem);
                }
                previousColumnHeaderItems = allColumnItems;
            }

            for(let oneColumn of columns) {
                if(oneColumn[0].rowspan !== columnHeight) {
                    oneColumn[0].showLeftBorder = true;
                }
            }
            // #endregion
            
            component.set('v.rows', rows);
            component.set('v.columns', columns);
        }
    }
    
})