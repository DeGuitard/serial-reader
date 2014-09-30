var mangaCtrl = function ($scope, $http, $modal) {
    $scope.loading = true;
    $scope.itemPerPage = 30;
    $scope.currentPage = 1;

    $scope.openDetails = function(selection) {
        var modalInstance =  $modal.open({
            templateUrl: 'manga-details-modal.html',
            controller: 'MangaDetailsCtrl',
            resolve: {
                selectedManga: function() {
                    return selection;
                }
            }
        });

        modalInstance.result.then(function(filters) {
            if (filters !== undefined) {
                $scope.filters = filters;
            }
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

var mangaDetailsCtrl = function($scope, $modalInstance, selectedManga) {
    $scope.manga = selectedManga;
    $scope.search = function(term) {
        $scope.filters = {genres: term};
        $scope.ok();
    };
    $scope.ok = function() {
        $modalInstance.close($scope.filters);
    };
};