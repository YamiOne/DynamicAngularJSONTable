angular.module('myApp', ['ngRoute']);

angular.module('myApp')
    .config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider){
        $routeProvider
            .when('/', {
                templateUrl: 'views/dynamic_table.html',
                controller: 'dynamicTableCtrl',
                controllerAs: 'DT'
            });
    };