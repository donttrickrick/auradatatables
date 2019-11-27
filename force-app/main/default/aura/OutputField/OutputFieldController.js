({
    doInit: function(component, event, helper) {
        if(component.get('v.type') === 'Multi-Select') {
            let valueList = [];
            if(component.get('v.value') && typeof component.get('v.value') === 'string') {
                for(const e of component.get('v.value').split(';')) {
                    e && valueList.push(e);
                }
            }
            component.set('v.modifiedValue', valueList);
        }
    },
    handleClickUrl : function(component, event, helper) {
		event.preventDefault();
        component.find('navService').navigate({    
           "type": "standard__recordPage",
           "attributes": {
               "recordId": component.get('v.value.Id'),
               "actionName": "view"
           }
    	});
	}
})