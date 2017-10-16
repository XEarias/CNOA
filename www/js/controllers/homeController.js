angular.module('cnoa')

    .controller("homeController", ["ultimoFactory", "instagramService", "WPservice", "facebookService", "$ionicPlatform", "$q", function (ultimoFactory, instagramService, WPservice, facebookService, $ionicPlatform, $q) {

        var xeap = this;



/*
        ////promesa que cambia el badge
        var deferedNoticias = $q.defer();
        var promiseNoticias = deferedNoticias.promise;


        var deferedGaleria = $q.defer();
        var promiseGaleria = deferedGaleria.promise;

        promiseNoticias.then(function(res){
            console.log("noticias")
            console.log(res)
            
        })
        
        promiseGaleria.then(function(res){
            console.log("galeria")
            console.log(res)
            
        })
*/









      

        /////////////////BLOQUE DE INSTAGRAM///////////////

        if (ultimoFactory.obtener("instagram") === null) {

            instagramService.getMedia().then(function (res) {

                xeap.cantidadGaleria = res.medias.length + "+";


                //promesa para el badge
                //deferedGaleria.resolve(-1);

            });

        } else {

            instagramService.getMedia().then(function (res) {

                var posicion = null;

                angular.forEach(res.medias, function (valor, llave) {

                    if (valor.id == ultimoFactory.obtener("instagram")) {

                        posicion = llave;

                    }

                })

                if (posicion === null) {

                    xeap.cantidadGaleria = res.medias.length + "+";


                    //promesa para el badge
                    deferedGaleria.resolve(-1);

                } else if (posicion > 0) {

                    xeap.cantidadGaleria = posicion;

                    //promesa para el badge
                    //deferedGaleria.resolve(posicion);
                }

            });


        }



        ////////// BLOQUE DE NOTICIAS //////////////


        if (ultimoFactory.obtener("wp") === null || ultimoFactory.obtener("facebook") === null) {

            xeap.cantidadNoticias = "15+";
            
            
            //promesa para el badge
            //deferedNoticias.resolve(-1);

        } else {

            var cantidadWP = 0;
            var cantidadFacebook = 0;

            WPservice.getPost("post", 15).then(function (res) {

                var posicion = null;

                angular.forEach(res, function (valor, llave) {

                    if (valor.id == ultimoFactory.obtener("wp")) {

                        posicion = llave;

                    }

                })

                if (posicion === null) {

                    cantidadWP = null;

                } else if (posicion > 0) {

                    cantidadWP = posicion;

                }


            }).finally(function () {



                facebookService.getPost(15).then(function (resFace) {

                    var posicionFace = null;


                    angular.forEach(resFace.data, function (valor, llave) {

                        if (valor.id == ultimoFactory.obtener("facebook")) {

                            posicionFace = llave;

                        }

                    })

                    if (posicionFace === null) {

                        cantidadFacebook = null;

                    } else if (posicionFace > 0) {

                        cantidadFacebook = posicionFace;

                    }

                }).finally(function () {


                    if (cantidadFacebook === null || cantidadWP === null) {

                        xeap.cantidadNoticias = "15+";


                        //promesa para el badge
                        //deferedNoticias.resolve(-1);

                    } else {


                        xeap.cantidadNoticias = cantidadFacebook + cantidadWP;


                        //promesa para el badge
                        //deferedNoticias.resolve(xeap.cantidadNoticias);

                    }


                })



            })

        }
        
        
        /*
        
        
        $q.all([promiseGaleria, 2]).then(function (res) {
            console.log("hola")

            $ionicPlatform.ready(function () {
                
                

                cordova.plugins.notification.badge.requestPermission(function (granted) {
                    {

                        if (res[0] === null || res[1] === null) {

                            cordova.plugins.notification.badge.set(15);

                        } else {

                            var total = res[0] + res[1];
                            if (total < 15) {

                                cordova.plugins.notification.badge.set(total);
                                
                            } else{

                                  cordova.plugins.notification.badge.set(15);
                                
                            }



                        }
                        
                       

                    };

                })

            })

        })
        
        
        */



}])
