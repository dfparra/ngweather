(function(){
  angular.module('ngweather')
          .controller('HourlyController', HourlyController);

  HourlyController.$inject = ['$scope', 'WeatherService'];

  function HourlyController($scope, WeatherService){
    $scope.hourlyData = WeatherService.weather;
    $scope.summaryLookup = {
      'Drizzle': 'There will be some drizzle',
      'Partly Cloudy': 'The skies will be partly cloudy',
    };

    $scope.$watch(function(){
      return WeatherService.weather;
    }, function(value){
      // console.log(value);
      $scope.hourlyData = value;
    });

  }
})();
