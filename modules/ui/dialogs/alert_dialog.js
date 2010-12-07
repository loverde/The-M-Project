// ==========================================================================
// Project:   The M-Project - Mobile HTML5 Application Framework
// Copyright: (c) 2010 M-Way Solutions GmbH. All rights reserved.
// Creator:   Dominik
// Date:      23.11.2010
// License:   Dual licensed under the MIT or GPL Version 2 licenses.
//            http://github.com/mwaylabs/The-M-Project/blob/master/MIT-LICENSE
//            http://github.com/mwaylabs/The-M-Project/blob/master/GPL-LICENSE
// ==========================================================================

m_require('ui/dialog.js');

/**
 * @class
 *
 * The root object for AlertDialogView.
 *
 */
M.AlertDialogView = M.DialogView.extend(
/** @scope M.AlertDialogView.prototype */ {

    /**
     * The type of this object.
     *
     * @property {String}
     */
    type: 'M.AlertDialogView',

    /**
     * The default title of an alert dialog.
     *
     * @property {String}
     */
    title: 'Alert',

    /**
     * The default message of an alert dialog.
     *
     * @property {String}
     */
    message: '',

    /**
     * The default transition of an alert dialog.
     *
     * @property {String}
     */
    transition: M.TRANSITION.POP,

    /**
     * Determines whether the dialog gets a default ok button.
     *
     * @property {Boolean}
     */
    hasOkButton: YES,

    /**
     * Renders a button as an input tag. Input is automatically converted by jQuery mobile.
     */
    render: function() {
        this.html = '<div data-role="dialog" id="' + this.id + '">';
        this.html += '<div data-role="header" data-position="fixed"><h1>' + this.title + '</h1></div>';
        this.html += '<div data-role="content">' + this.message;

        if(this.hasOkButton) {
            var button = M.ButtonView.design({
                value: 'OK',
                cssClass: 'b',
                target: this,
                action: 'dialogWillClose',
                role: 'onOk'
            });
            this.buttonIds.push(button.id);
            this.html += button.render();
        }

        this.html += '</div>';        
        this.html += '</div>';
        
        $('body').append(this.html);
    }

});