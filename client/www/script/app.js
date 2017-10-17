'use strict';

/*
    Vue instance must be on load to be able to execute virtual DOM rendering
*/
window.onload = function() {
    new Vue({
        el: '#app',
        data: {
            /*
                Initialize here all your scopes and models
            */
            textValue: ''
        },
        created: function() {
            console.log('Instance Created . . .');
        },
        ready: function() {
            console.log('Instance Ready . . .');
        },
        methods: {
            /*
                Intialize here all your functions
            */
            clearInput: function() {
                this.textValue = "";
            }
        }


    })
};