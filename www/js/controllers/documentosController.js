angular.module('cnoa')

    .controller("documentosController", ["WPservice", "$scope", function (WPservice, $scope) {

        var xeap = this;

        xeap.posts = [];

        xeap.salto = 10;

        xeap.listo = {
            scroll: true,
            pull: true
        }

        xeap.filtro = "todos";
        
        xeap.filtroFinal = undefined;
        

        xeap.cambiarFiltro = function (valor) {

            console.log(valor)

            if (valor == "todos") {

                xeap.filtroFinal = undefined;

            } else {
                
                
                xeap.filtroFinal = valor;

            }

        }



        xeap.ptr = function () {


            if (xeap.listo.pull) {

                xeap.listo.pull = false;
                WPservice.getDocs(10).then(function (res) {

                    xeap.posts = res;
                    salto = 0;

                }).finally(function () {


                    xeap.listo.pull = true;
                    $scope.$broadcast('scroll.refreshComplete');
                });
            }


        }


        xeap.infiniteScroll = function () {


            if (xeap.listo.scroll) {

                xeap.listo.scroll = false;

                WPservice.getDocs(10, xeap.salto).then(function (res) {

                    if (res) {

                        angular.forEach(res, function (valor, llave) {

                            xeap.posts.push(valor)

                        })
                        xeap.salto = xeap.salto + 10;
                    }

                }).finally(function () {

                    xeap.listo.scroll = true;
                    $scope.$broadcast('scroll.infiniteScrollComplete');
                });
            }


        }


        WPservice.getDocs(10).then(function (res) {

            xeap.posts = res;

        }).finally(function () {

            console.log(xeap.posts[0])

        })





}])
