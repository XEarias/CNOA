angular.module('cnoa')

    .controller("noticiasWPController", ["WPservice", "$scope", function (WPservice, $scope) {

        var xeap = this;

        xeap.posts = [];

        xeap.salto = 10;

        xeap.listo = {
            scroll: true,
            pull: true
        }


        xeap.ptr = function () {


            if (xeap.listo.pull) {

                xeap.listo.pull = false;
                WPservice.getPost("post", 15).then(function (res) {

                    xeap.posts = res;
                    salto = 0;

                }).finally(function () {


                    xeap.listo.pull = true;
                    localStorage.setItem("wp", xeap.posts[0].id);
                    $scope.$broadcast('scroll.refreshComplete');
                });
            }


        }


        xeap.infiniteScroll = function () {


            if (xeap.listo.scroll) {

                xeap.listo.scroll = false;

                WPservice.getPost("post", 15, xeap.salto).then(function (res) {

                    if (res) {

                        angular.forEach(res, function (valor, llave) {

                            xeap.posts.push(valor)

                        })
                        xeap.salto = xeap.salto + 15;
                    }

                }).finally(function () {

                    xeap.listo.scroll = true;
                    $scope.$broadcast('scroll.infiniteScrollComplete');
                    
                });
            }


        }


        WPservice.getPost("post", 15).then(function (res) {

            xeap.posts = res;

        }).finally(function(){
            
            localStorage.setItem("wp", xeap.posts[0].id);
            
        })





}])
