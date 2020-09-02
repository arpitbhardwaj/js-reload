'use strict';
(function() {

    function checkPasswordComplexity(password) {
        //let regex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$');
        //let regex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$','gi');
        //shorthand syntax
        let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        //let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/gi;
        return regex.test(password);
    }

    display(checkPasswordComplexity('Stronger1'));

})();