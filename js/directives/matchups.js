sczApp.directive("matchupList", function() {

	return {

		restrict: "E",

		scope: {

			listing: '=',

		},

		templateUrl: "/js/views/matchups.html"

	};

});
