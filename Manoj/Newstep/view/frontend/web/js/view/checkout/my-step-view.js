/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
/*jshint browser:true jquery:true*/
/*global confirm:true*/
define(
    [
        'ko',
        'uiComponent',
        'underscore',
        'Magento_Checkout/js/model/step-navigator',
        'Magento_Checkout/js/model/quote'
    ],
    function (ko, Component, _, stepNavigator, quote) {
        'use strict';
        /**
         *
         * mystep - is the name of the component's .html template,
         * my_module - is the name of the your module directory.
         *
         */
        return Component.extend({
            defaults: {
                template: 'Manoj_Newstep/checkout/mystep',
            },
           
            //add here your logic to display step,
            isVisible: ko.observable(false),


            initialize: function () {

                this._super();
                // register your step
                stepNavigator.registerStep(
                    //step code will be used as step content id in the component template
                    'checkout',
                    //step alias                    
                    'checkout',
                    //step title value
                    'Checkout',
                    //observable property with logic when display step or hide step
                    this.isVisible,

                    _.bind(this.navigate, this),

                    /**
                     * sort order value
                     * 'sort order value' < 10: step displays before shipping step;
                     * 10 < 'sort order value' < 20 : step displays between shipping and payment step
                     * 'sort order value' > 20 : step displays after payment step
                     */
                    5
                );

                return this;
            },

            

            navigate: function () {

        },

        /**
        * @returns void
        */
        navigateToNextStep: function () {
            stepNavigator.next();
        }
          
        });
    }
);

