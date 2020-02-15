({
    doInit : function(component, event, helper) {
        component.set('v.thId', 'two-dimention-table-th-' + new Date().getTime() + String(Math.round(Math.random()*100000)));
        
    },
    setStickyHeader : function(component, event, helper) {
        // let defaultTop = event.getParam('arguments').top;
        if(component.get('v.isSticky')) {
            let th = document.getElementById(component.get('v.thId'));
            th.style.position = 'sticky';
            if(component.get('v.type') === 'row' || component.get('v.type') === 'joint') {
                th.style.left = th.offsetLeft + 'px';
            }
            if(component.get('v.type') === 'col' || component.get('v.type') === 'joint') {
                th.style.top = (th.offsetTop - 1) + 'px';
            }
        }
    }
})
