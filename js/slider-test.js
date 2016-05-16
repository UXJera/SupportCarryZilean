angular.module('myApp', ['rzModule'])
  .controller('MyController', ['$scope', function($scope) {
    $scope.slider_range = {
      value: 325,
      options: {
        floor: 100,
        ceil: 1000,
        step: 25,
        onChange: function () {
          var ranger = function(i) {
            return Math.round((i / $scope.slider_range.value)*100)/100;
          }
          $scope.rangeData.ms = $scope.slider_range.value;
          $scope.rangeData.nexus = ranger(19000);
          $scope.rangeData.tf = ranger(5600);
          $scope.rangeData.noc = ranger(4000);
          $scope.rangeData.lux = ranger(3400);
          $scope.rangeData.noc2 = ranger(2500);
          $scope.rangeData.nidalee = ranger(1500);
          $scope.rangeData.vision = ranger(1200);
          $scope.rangeData.zilb = ranger(900);
          $scope.rangeData.turretaa = ranger(775);
          $scope.rangeData.caitaa = ranger(650);
          $scope.rangeData.zilaa = ranger(550);
          $scope.rangeData.flash = ranger(425);
          $scope.rangeData.jug = ranger(175);
          $scope.rangeData.melee = ranger(125);
          $scope.rangeData.teemo = ranger(100);
        },
      }
    };
    $scope.rangeData = {
      ms: 325,
      nexus: 58.46,
      tf: 17.23,
      noc: 12.31,
      lux: 10.46,
      noc2: 7.69,
      nidalee: 4.62,
      vision: 3.69,
      zilb: 2.77,
      turretaa: 2.38,
      caitaa: 2,
      zilaa: 1.69,
      flash: 1.31,
      jug: .54,
      melee:.38,
      teemo:.31,
    };
  $scope.slider_speed = {
    value: 325,
    options: {
      floor: 325,
      ceil: 425,
      step: 5,
      onChange: function () {
        var rank1 = Math.round($scope.slider_speed.value * 1.4);
        var rank2 = Math.round($scope.slider_speed.value * 1.55);
        var rank3 = Math.round($scope.slider_speed.value * 1.7);
        var rank4 = Math.round($scope.slider_speed.value * 1.85);
        var rank5 = Math.round($scope.slider_speed.value * 1.99);
        var limiter = function(i) {
          if (i > 490) {
            return Math.round(((i-490)*.5)+475);
          } else if (i <=490 && i > 415) {
            return Math.round(((i-415)*.8)+415);
          }
        }
        $scope.speedData.rank1 = limiter(rank1);
        $scope.speedData.rank2 = limiter(rank2);
        $scope.speedData.rank3 = limiter(rank3);
        $scope.speedData.rank4 = limiter(rank4);
        $scope.speedData.rank5 = limiter(rank5);
      },
    }
  };
  $scope.speedData = {
    rank1: 447,
    rank2: 482,
    rank3: 507,
    rank4: 531,
    rank5: 554,
  };
  $scope.slider_slow = {
    value: 325,
    options: {
      floor: 325,
      ceil: 425,
      step: 5,
      onChange: function () {
        var rank1 = Math.round($scope.slider_slow.value * (1-.4));
        var rank2 = Math.round($scope.slider_slow.value * (1-.55));
        var rank3 = Math.round($scope.slider_slow.value * (1-.7));
        var rank4 = Math.round($scope.slider_slow.value * (1-.85));
        var rank5 = Math.round($scope.slider_slow.value * (1-.99));
        var limiter = function(i) {
          if (i < 220) {
            return Math.round(((i-220)*.5)+220);
          } else {
            return i;
          }
        }
        $scope.slowData.rank1 = limiter(rank1);
        $scope.slowData.rank2 = limiter(rank2);
        $scope.slowData.rank3 = limiter(rank3);
        $scope.slowData.rank4 = limiter(rank4);
        $scope.slowData.rank5 = limiter(rank5);
      },
    }
  };
  $scope.slowData = {
    rank1: 208,
    rank2: 183,
    rank3: 159,
    rank4: 135,
    rank5: 112,
  };
  $scope.slider_swifties = {
    value: 325,
    options: {
      floor: 325,
      ceil: 425,
      step: 5,
      onChange: function () {
        var swifties = .75;
        var rank1 = Math.round($scope.slider_swifties.value * (1-(.4*swifties)));
        var rank2 = Math.round($scope.slider_swifties.value * (1-(.55*swifties)));
        var rank3 = Math.round($scope.slider_swifties.value * (1-(.7*swifties)));
        var rank4 = Math.round($scope.slider_swifties.value * (1-(.85*swifties)));
        var rank5 = Math.round($scope.slider_swifties.value * (1-(.99*swifties)));
        var limiter = function(i) {
          if (i < 220) {
            return Math.round(((i-220)*.5)+220);
          } else {
            return i;
          }
        }
        $scope.swiftiesData.rank1 = limiter(rank1);
        $scope.swiftiesData.rank2 = limiter(rank2);
        $scope.swiftiesData.rank3 = limiter(rank3);
        $scope.swiftiesData.rank4 = limiter(rank4);
        $scope.swiftiesData.rank5 = limiter(rank5);
      },
    }
  };
  $scope.swiftiesData = {
    rank1: 227,
    rank2: 206,
    rank3: 187,
    rank4: 169,
    rank5: 152,
  };
}]);
