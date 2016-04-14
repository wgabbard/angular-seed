
'use strict';
// Declare app level module which depends on views, and components
angular.module('myApp', ['ngRoute', 'quizQuestions'])
.config(function($routeProvider) {
  	$routeProvider.when('/start', { templateUrl: 'partials/start.html' });
	$routeProvider.when('/quiz', { templateUrl: 'partials/questions.html' });
	$routeProvider.when('/finish', { templateUrl: 'partials/finish.html' });
	$routeProvider.otherwise({ redirectTo: '/quiz' });
});

angular.module('quizQuestions', []);

