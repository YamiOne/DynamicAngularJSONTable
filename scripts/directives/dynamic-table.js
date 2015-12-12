(function(){
    
    "use strict";
    
    angular.module('myApp')
        .directive('dynamicTable', dynamicTable);

        function dynamicTable(){
            var directive = {
                restrict: 'EA',
                scope: {
                    people: '=',
                    title: '='
                },
                controller: directiveController,
                templateUrl: 'views/dynamic-table-template.html',
                link: link,
                //transclude: true, // so you can put additional elements inside the directive
                //replace: true, // so html interprets element as <div> or smth and not as a custom html5 element
            };
            return directive;
        };

        function link (scope, element, attrs) { // DOM manipulation, listening
            element.click(function(){
                console.log(element);
            });
        };
        
        function directiveController(){
            //stuff here
        };
})();
