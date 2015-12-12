(function(){
    "use strict";
    
    angular.module('myApp')
    .controller('dynamicTableCtrl', dynamicTableCtrl); 
    
        function dynamicTableCtrl(){
            var vm = this;
            
            vm.info = [
                {name: 'Name 1', date: '2015-10-15 00:00:00', type: 'human'},
                {name: 'Name 2', date: '2015-10-15 00:00:00', type: 'human'},
                {name: 'Name 3', date: '2015-10-01 00:00:00', type: 'alien'},
                {name: 'Name 4', date: '2015-10-20', type: 'alien'},
                {name: 'Name 5', date: '2015-10-17 00:00:00', type: 'alien'},
            ];
        };
            
})();