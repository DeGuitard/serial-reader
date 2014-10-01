var mainCtrl = function($scope, $window) {
    $scope.filters = [];

    $scope.addCriteria = function(crit, val) {
        if ($scope.filters[crit] === undefined) {
            $scope.filters[crit] = [val];
        } else if ($scope.filters[crit].indexOf(val) == -1) {
            $scope.filters[crit].push(val);
        }
    };

    $scope.removeCriteria = function(crit, val) {
        var index = $scope.filters[crit].indexOf(val);
        if (index > -1) {
            if ($scope.filters[crit].length == 1) {
                delete $scope.filters[crit];
            } else {
                $scope.filters[crit].splice(index, 1);
            }
        }
    };

    $scope.isViewportLarge = function() {
        var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        return w >= 992;
    };

    $scope.toggleSidebar = function(direction) {
        if (!$scope.isViewportLarge()) {
            $scope.sidebarVisible = direction;
        } else {
            $scope.sidebarVisible = true;
        }
    };

    // Sidebar hidden at start only for small devices.
    if ($scope.isViewportLarge()) {
        $scope.sidebarVisible = true;
    }
};