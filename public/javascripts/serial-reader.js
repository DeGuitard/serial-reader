var serialReader = angular.module('serialReader', ['ngAnimate', 'ngTouch', 'ngSanitize', 'ui.bootstrap', 'ui.select']);

serialReader.controller('MainCtrl', mainCtrl);
serialReader.controller('MangaCtrl', mangaCtrl);
serialReader.controller('MangaDetailsCtrl', mangaDetailsCtrl);
serialReader.filter('criteria', criteriaFilter);