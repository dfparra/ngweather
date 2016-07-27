(function(){
  angular.module('ngweather')
          .controller('DailyController', DailyController);

  DailyController.$inject = ['$scope', 'WeatherService'];

  function DailyController($scope, WeatherService){
    $scope.dailyData = WeatherService.weather;
    // $scope.summaryLookup = {
    //   'Drizzle': 'There will be some drizzle',
    //   'Partly Cloudy': 'The skies will be partly cloudy',
    // };

    $scope.$watch(function(){
      return WeatherService.weather;
    }, function(value){
      // console.log(value);
      $scope.dailyData = value;
    });

  }
})();
