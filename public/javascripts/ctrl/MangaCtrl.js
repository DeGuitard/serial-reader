var mangaCtrl = function ($scope, $http, $modal) {
    $scope.loading = true;
    $scope.itemPerPage = 30;
    $scope.currentPage = 1;

    $scope.checkGenres = function(actual, expected) {
        if (expected === undefined) {
            return true;
        }
        var containsAllGenres = true;
        angular.forEach(expected.genres, function(val) {
            if (actual.genres.indexOf(val) == -1) {
                containsAllGenres = false;
            }
        });
        return containsAllGenres;
    };

    $scope.openDetails = function(selection) {
        var modalInstance =  $modal.open({
            templateUrl: 'manga-details-modal.html',
            controller: 'MangaDetailsCtrl',
            resolve: {
                selectedManga: function() {
                    return selection;
                },
                filters: function() {
                    return $scope.filters;
                }
            }
        });

        modalInstance.result.then(function(filters) {
            $scope.filters = filters;
        });
    };

    $http.post('/mangas').success(function(data) {
        $scope.loading = false;
        $scope.loadingSuccess = true;
        $scope.mangas = data;
        $scope.itemsCount = $scope.mangas.length;
    }).error(function (err) {
        $scope.loading = false;
        $scope.loadingFailure = true;
    });
};

var mangaDetailsCtrl = function($scope, $http, $modalInstance, selectedManga, filters) {
    $scope.manga = angular.extend({}, selectedManga);
    $scope.filters = filters;
    $scope.chapter = {};

    $scope.lookForManga = function(title) {
        $scope.loading = true;
        $http.post('/mangas', {title: title}).success(function(data) {
            $scope.loading = false;
            delete $scope.manga.suggestions;
            delete $scope.chapter.selected;
            angular.extend($scope.manga, data[0]);
        }).error(function (err) {
            $scope.loading = false;
            $scope.loadingFailure = true;
        });
    };
    $scope.lookForManga($scope.manga.title);

    $scope.addCriteria = function(crit, val) {
        if (angular.isArray($scope.filters[crit])) {
            $scope.filters[crit].push(val);
        } else {
            $scope.filters[crit] = [val];
        }
        $modalInstance.close($scope.filters);
    };

    $scope.close = function() {
        $modalInstance.close($scope.filters);
    };
};