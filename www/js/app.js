angular.module('cnoa', ['ionic'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            if (window.cordova && window.cordova.plugins.Keyboard) {

                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

                cordova.plugins.Keyboard.disableScroll(true);


                if (window.StatusBar) {
                    StatusBar.styleDefault();
                }
            }



          



        });
    })

    .config(["$stateProvider", "$urlRouterProvider", "$httpProvider", "$sceProvider", function ($stateProvider, $urlRouterProvider, $httpProvider, $sceProvider) {


        $sceProvider.enabled(false);

        $httpProvider.defaults.cache = false;

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'js/views/home.view.tpl',
                controller: 'homeController as home',
                cache: false
            })


            ////////////////////////////////////////////////////////
            //////////////// Quienes somos y derivados /////////////
            ////////////////////////////////////////////////////////


            .state('quienesSomos', {

                url: "/quienes-somos",
                templateUrl: 'js/views/quienesSomos.view.tpl'

            })


            .state('nosotros', {

                url: "/nosotros",
                templateUrl: 'js/views/nosotros.view.tpl'

            })

            .state('vision', {

                url: "/vision",
                templateUrl: 'js/views/vision.view.tpl'

            })

            .state('mision', {

                url: "/mision",
                templateUrl: 'js/views/mision.view.tpl'

            })

            .state('dondeEstamos', {

                url: "/donde-estamos",
                templateUrl: 'js/views/dondeEstamos.view.tpl'

            })

            ////////////////////////////////////////////////////////
            //////////////// Estructura y derivados ////////////////
            ////////////////////////////////////////////////////////

            .state('estructura', {

                url: "/estructura-organizacional",
                templateUrl: 'js/views/estructuraOrganizacional.view.tpl'

            })


            ////////////////////////////////////////////////////////
            //////////// Lineas de accion y derivados //////////////
            ////////////////////////////////////////////////////////

            .state('lineasAccion', {

                url: "/lineas-de-accion",
                templateUrl: 'js/views/lineasAccion.view.tpl'

            })

            .state('fortalecimiento', {

                url: "/fortalecimiento-organizacional",
                templateUrl: 'js/views/fortalecimientoOrganizacional.view.tpl'

            })

            .state('incidencia', {

                url: "/incidencia-politica",
                templateUrl: 'js/views/incidenciaPolitica.view.tpl'

            })

            .state('territorio', {

                url: "/territorio-y-territorialidad",
                templateUrl: 'js/views/territorio.view.tpl'

            })

            .state('comunicacion', {

                url: "/comunicacion",
                templateUrl: 'js/views/comunicacion.view.tpl'

            })

            .state('equidad', {

                url: "/equidad-de-genero",
                templateUrl: 'js/views/equidad.view.tpl'

            })

            .state('infancia', {

                url: "/enfasis-de-infancia",
                templateUrl: 'js/views/infancia.view.tpl'

            })


            ////////////////////////////////////////////////////////
            ///////////////// Noticias y derivados /////////////////
            ////////////////////////////////////////////////////////

            .state('noticiasMenu', {

                url: "/menu-noticias",
                templateUrl: 'js/views/noticiasMenu.view.tpl',
                controller: 'noticiasMenuController as noticiasMenu',
                cache: false

            })

            .state('noticiasFace', {

                url: "/noticias-afro",
                templateUrl: 'js/views/noticiasFace.view.tpl',
                controller: 'noticiasFaceController as noticiasFace'

            })


            .state('noticiasFaceIndividual', {

                url: "/noticias-afro/:id",
                templateUrl: 'js/views/noticiasFace.individual.view.tpl',
                controller: 'noticiasFaceIndividualController as noticiasFaceIndividual',
                params: {
                    image: null,
                    message: null,
                    created_time: null
                }

            })

            .state('noticiasWP', {

                url: "/noticias-cnoa",
                templateUrl: 'js/views/noticiasWP.view.tpl',
                controller: 'noticiasWPController as noticiasWP'

            })


            .state('noticiasWPIndividual', {

                url: "/noticias-cnoa/:id",
                templateUrl: 'js/views/noticiasWP.individual.view.tpl',
                controller: 'noticiasWPIndividualController as noticiasWPIndividual',
                params: {
                    image: null,
                    date: null,
                    content: null,
                    title: null
                }

            })



            ////////////////////////////////////////////////////////
            ///////////////// Noticias y derivados /////////////////
            ////////////////////////////////////////////////////////

            .state('galeria', {

                url: "/galeria",
                templateUrl: 'js/views/galeria.view.tpl',
                controller: 'galeriaController as galeria'

            })

            .state('galeriaIndividual', {

                url: "/galeria/:id",
                templateUrl: 'js/views/galeriaIndividual.view.tpl',
                controller: 'galeriaIndividualController as galeriaIndividual',
                params: {
                    image: null,
                    tags: null,
                    comments: null,
                    text: null,
                    tags: null,
                    likes: null


                }

            })


            ////////////////////////////////////////////////////////
            ///////////////// Documentos y derivados /////////////////
            ////////////////////////////////////////////////////////

            .state('documentos', {

                url: "/documentos",
                templateUrl: 'js/views/documentos.view.tpl',
                controller: 'documentosController as documentos'

            })

            .state('documentosIndividual', {

                url: "/documentos/:id",
                templateUrl: 'js/views/documentosIndividual.view.tpl',
                controller: 'documentosIndividualController as documentosIndividual',
                params: {

                    title: null,
                    content: null,
                    url_descarga: null,
                    image: null,
                    date: null

                }

            })
        
        
        
        //////////////////////////////////////////
        /////// RUTAS ESTRUCTURA WP //////////////
        //////////////////////////////////////////
        
        .state('quienesSomosIndividual', {

                url: "/quienes-somos/:id",
                templateUrl: 'js/views/quienesSomos.individual.view.tpl',
                controller: 'quienesSomosIndividualController as quienesSomosIndividual',
                resolve: {
                    
                    "datos": ["$q", "WPservice", "$stateParams",function($q, WPservice, $stateParams){
                        
                        
                        var defered = $q.defer();
                        var promise = defered.promise;
                        
                       
                        
                        
                        WPservice.getEstruc($stateParams.id).then(function(res){
                
                            defered.resolve(res);
                            
                        })
                        
                        
                        
                        
                        return promise;
                    }]
                    
                }

            })
        
        
        .state('lineasAccionIndividual', {

                url: "/lineas-de-accion/:id",
                templateUrl: 'js/views/lineasAccion.individual.view.tpl',
                controller: 'lineasAccionIndividualController as lineasAccionIndividual',
                resolve: {
                    
                    "datos": ["$q", "WPservice", "$stateParams",function($q, WPservice, $stateParams){
                        
                        
                        var defered = $q.defer();
                        var promise = defered.promise;
                        
                       
                        
                        
                        WPservice.getEstruc($stateParams.id).then(function(res){
                            
                        
                            defered.resolve(res);
                            
                        })
                        
                        
                        
                        
                        return promise;
                    }]
                    
                }

            })
        
        .state('estructuraOrganizacionalIndividual', {

                url: "/estructura-organizacional/:id",
                templateUrl: 'js/views/estructuraOrganizacional.individual.view.tpl',
                controller: 'estructuraOrganizacionalIndividualController as estructuraOrganizacionalIndividual',
                resolve: {
                    
                    "datos": ["$q", "WPservice", "$stateParams",function($q, WPservice, $stateParams){
                        
                        
                        var defered = $q.defer();
                        var promise = defered.promise;
                        
                       
                        
                        
                        WPservice.getEstruc($stateParams.id).then(function(res){
                            
                        
                            defered.resolve(res);
                            
                        })
                        
                        
                        
                        
                        return promise;
                    }]
                    
                }

            })
        



        $urlRouterProvider.when('', '/');

}])
