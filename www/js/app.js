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

    .config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {



        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'js/views/home.view.tpl',
                controller: 'homeController as home'
            })

        
        ////////////////////////////////////////////////////////
        //////////////// Quienes somos y derivados /////////////
        ////////////////////////////////////////////////////////
        
        
        .state('quienesSomos', {
            
            url: "/quienes-somos",
            templateUrl: 'js/views/quienesSomos.view.tpl',
            controller: 'quienesSomosController as quienesSomos'
            
        })
        
        
        ////////////////////////////////////////////////////////
        //////////////// Estructura y derivados ////////////////
        ////////////////////////////////////////////////////////
        
        .state('estructura', {
            
            url: "/estructura-organizacional",
            templateUrl: 'js/views/estructuraOrganizacional.view.tpl',
            controller: 'estructuraController as estructura'
            
        })
        
        
        ////////////////////////////////////////////////////////
        //////////// Lineas de accion y derivados //////////////
        ////////////////////////////////////////////////////////
        
        .state('lineasAccion', {
            
            url: "/lineas-de-accion",
            templateUrl: 'js/views/lineasAccion.view.tpl',
            controller: 'lineasAccionController as lineasAccion'
            
        })
        
        ////////////////////////////////////////////////////////
        ///////////////// Noticias y derivados /////////////////
        ////////////////////////////////////////////////////////
        
        .state('noticias', {
            
            url: "/noticias",
            templateUrl: 'js/views/noticias.view.tpl',
            controller: 'noticiasController as noticias'
            
        })
        
        
        ////////////////////////////////////////////////////////
        ///////////////// Noticias y derivados /////////////////
        ////////////////////////////////////////////////////////
        
        .state('galeria', {
            
            url: "/galeria",
            templateUrl: 'js/views/galeria.view.tpl',
            controller: 'galeriaController as galeria'
            
        })
        
        
        $urlRouterProvider.when('', '/');

}])
