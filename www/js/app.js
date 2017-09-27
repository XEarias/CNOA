angular.module('cnoa', ['ionic'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            if (window.cordova && window.cordova.plugins.Keyboard) {

                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })

    .config(["$stateProvider", function ($stateProvider) {



        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'js/views/home.view.tpl',
                controller: 'homeController as home'
            })


}])
