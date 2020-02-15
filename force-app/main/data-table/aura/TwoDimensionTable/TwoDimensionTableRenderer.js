({
    // Your renderer method overrides go here
    afterRender: function(component) { 
        this.superAfterRender();
        // console.log('table rendered');
        // setTimeout(function() {
            // let scrollTop = component.find('table-wrapper').scrollTop;
        component.find('header-item') && component.find('header-item').length > 0 && component.find('header-item').forEach(e => { 
            e.applySticky();
        });
        component.set('v.isStickyInitDone', true);
        // }, 3000);
    }
})