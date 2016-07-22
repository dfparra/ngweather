

(function(){
  angular.module('ngweather')
          .config(RouteConfig);

  RouteConfig.$inject = ['$routeProvider','$locationProvider'];

  function RouteConfig($routeProvider, $locationProvider){
    $routeProvider
    //templateUrl says go find this page
    //template takes what you type and puts it on the screen

    .when('/', {
      templateUrl: 'html/views/home.html',
      controller: 'HomeController'
    })
    .when('/hourly', {
      template: 'hourly'
    })
    .when('/minutely', {
      template: 'minutely'
    })
    .when('/daily', {
      template: 'daily'
    })
    .otherwise({
      redirectTo: '/'
    });


    // $locationProvider.html5Mode(true);
  }
})();
