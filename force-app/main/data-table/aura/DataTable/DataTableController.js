({
	doInit : function(component, event, helper) {
		// component.addValueProvider('value', 'Good');
        if(component.get('v.data')) {
            var dataList = component.get('v.data');
            var columns = component.get('v.columns');
            var rows = [];
            for(let oneData of dataList) {
                let oneRow = { items :[] };
                for(let oneColume of columns) {
                    let oneItem = {};
                    
                    if((oneColume.fieldName === 'Id' || oneColume.fieldName === 'Name') && oneColume.type === 'Reference') {
                        oneItem.fieldValue = { Name: oneData['Name'], Id: oneData['Id'] };
                        oneItem.type = oneColume.type;
                        oneItem.data = oneData;
                    } else {
                        let value = oneData;
                        for(let oneFieldPath of oneColume.fieldName.split('.')) {

                            if(value) {
                                value = value[oneFieldPath];
                            }
                        }
                        
                        // value = value || '-';

                        oneItem.fieldValue = value; 
                        // oneItem.fieldValue = oneData[oneColume.fieldName];
                        oneItem.type = oneColume.type;
                    }
                    oneRow.items.push(oneItem);
                }
                rows.push(oneRow);
                // if(rows.length> 1000) break;
            }
            component.set('v.rows', rows);
            
        }
	},
    handleScroll : function(component, event, helper) {
        // debugger;
    }
})