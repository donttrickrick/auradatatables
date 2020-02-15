({
    doMerge : function(thePreviousItems, theCurrentItems, index, getLabel) {
        let doMerge = true;
        for(let i = 0; i <= index; i++) {
            let onePreviousItem = thePreviousItems[i];
            let oneCurrentItem = theCurrentItems[i];

            if(onePreviousItem && oneCurrentItem && getLabel(onePreviousItem) === getLabel(oneCurrentItem)) {
                doMerge &= true;
            } else {
                doMerge = false;
                break;
            }
        }
        return doMerge;
    }
})