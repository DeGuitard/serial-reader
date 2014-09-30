var mainCtrl = function($scope, $window) {
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