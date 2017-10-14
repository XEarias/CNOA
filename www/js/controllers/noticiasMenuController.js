angular.module('cnoa')

    .controller("noticiasMenuController", ["WPservice", "$scope", "facebookService", "ultimoFactory", function (WPservice, $scope, facebookService, ultimoFactory) {

        xeap = this;
        
        
        
        
        
         ////////////BLOQUE WPK////////////////

        if (ultimoFactory.obtener("wp") === null) {

            WPservice.getPost("post",15).then(function (res) {

                xeap.cantidadWP = res.length + "+";

            })

        } else {
            WPservice.getPost("post", 15).then(function (res) {


                var posicion = null;

                angular.forEach(res, function (valor, llave) {

                    if (valor.id == ultimoFactory.obtener("wp")) {

                        posicion = llave;

                    }

                })

                if (posicion === null) {

                    xeap.cantidadWP = res.length + "+";

                } else if (posicion > 0) {

                    xeap.cantidadWP = posicion;

                }

            })



        }
        
        
        

        ////////////BLOQUE FACEBOOK////////////////

        if (ultimoFactory.obtener("facebook") === null) {

            facebookService.getPost(15).then(function (res) {

                xeap.cantidadFacebook = res.data.length + "+";

            })

        } else {
            facebookService.getPost(15).then(function (res) {


                var posicion = null;

                angular.forEach(res.data, function (valor, llave) {

                    if (valor.id == ultimoFactory.obtener("facebook")) {

                        posicion = llave;

                    }

                })

                if (posicion === null) {

                    xeap.cantidadFacebook = res.data.length + "+";

                } else if (posicion > 0) {

                    xeap.cantidadFacebook = posicion;

                }

            })



        }
    }])
