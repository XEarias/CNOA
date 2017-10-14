angular.module('cnoa')

    .controller("homeController", ["ultimoFactory", "instagramService", "WPservice", "facebookService", "$cordovaBadge", function (ultimoFactory, instagramService, WPservice, facebookService, $cordovaBadge) {

        var xeap = this;



        $cordovaBadge.hasPermission().then(function (yes) {
            
               console.log("hola")
              $cordovaBadge.set(3)


            
        }, function (no) {
            // You do not have permission
        });


        //localStorage.setItem("instagram", "1622781408095006093_5567543090");

        /////////////////BLOQUE DE INSTAGRAM///////////////

        if (ultimoFactory.obtener("instagram") === null) {

            instagramService.getMedia().then(function (res) {

                xeap.cantidadGaleria = res.medias.length + "+";


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

                } else if (posicion > 0) {

                    xeap.cantidadGaleria = posicion;

                }

            });


        }



        ////////// BLOQUE DE NOTICIAS //////////////


        if (ultimoFactory.obtener("wp") === null || ultimoFactory.obtener("facebook") === null) {

            xeap.cantidadNoticias = "15+";

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
                        console.log("hola")
                        xeap.cantidadNoticias = "15+";

                    } else {


                        xeap.cantidadNoticias = cantidadFacebook + cantidadWP;

                    }


                })



            })

        }



}])
