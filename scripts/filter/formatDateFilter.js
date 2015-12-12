(function(){
    
    angular.module('myApp')
        .filter('formatDateForUser', formatDateForUser);
    
    formatDateForUser.$inject = ['DateFormatFactory'];
    
    function formatDateForUser(DateFormatFactory){
        return function(input, parameter, key){
            if (key.indexOf('date') > -1 || key.indexOf('datum') > -1){    
                return DateFormatFactory.formatForUser(input, parameter);
            } else {
                return input;
            }
        };
    };
}());