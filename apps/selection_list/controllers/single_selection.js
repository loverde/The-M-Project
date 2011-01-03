SelectionList.SingleSelectionController = M.Controller.extend({

    orientation: '',

    setOrientation: function(isFirstLoad) {

        var orientation = M.Environment.getOrientation();
        console.log('orientation detected: ' + orientation);
        this.set('orientation', orientation);

    },

    setSelection: function() {

        var selectionList = M.ViewManager.getView('singleSelection', 'selectionList');
        var textField = M.ViewManager.getView('singleSelection', 'textField');

        if(!textField.value || textField.value === '') {

            /*M.DialogView.alert({

                title: 'Error',

                message: 'You have to enter a value in the text field in order to set the selection list\'s selection.'

            });*/
            M.Logger.log('You have to enter a value in the text field in order to set the selection list\'s selection.', M.WARN);
            
        } else {

            selectionList.setSelection(textField.value);

        }

    },

    getSelection: function() {

        var selectionList = M.ViewManager.getView('singleSelection', 'selectionList');

        /*M.DialogView.alert({

            title: 'Selected Item',

            message: selectionList.getSelection(YES) ? selectionList.getSelection(YES).label : 'Nothing selected...'

        });*/

        M.Logger.log(selectionList.getSelection(YES) ? selectionList.getSelection(YES).label : 'Nothing selected...', M.INFO);

    }
    
})