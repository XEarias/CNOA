angular.module('cnoa')

    .controller("noticiasFaceController", ["facebookService", "$scope",  function (facebookService, $scope) {

        var xeap = this;

        xeap.posts = [];


        xeap.listo = {
            scroll: true,
            pull: true
        }
        
        
        xeap.siguiente = null;


        xeap.ptr = function () {


            if (xeap.listo.pull) {

                xeap.listo.pull = false;

                facebookService.getPost(15).then(function (res) {

                    xeap.posts = res.data;

                    angular.forEach(xeap.posts, function (valor, llave) {

                        facebookService.getImagePost(valor.id).then(function (resImage) {

                            valor.attachments = resImage;

                        })

                        xeap.posts[llave] = valor

                    })
                    
                    xeap.siguiente = res.paging.next;

                }).finally(function (res) {

                    xeap.listo.pull = true;
                    
                    localStorage.setItem("facebook", xeap.posts[0].id);

                    $scope.$broadcast('scroll.refreshComplete');
                });

            }
        }


        xeap.infiniteScroll = function(){
            
            
            if (xeap.listo.scroll && xeap.siguiente) {

                xeap.listo.scroll = false;
                
                facebookService.siguiente(xeap.siguiente).then(function(res){
                    
                    
                    
                    var posts_siguientes = res.data;

                    angular.forEach(posts_siguientes, function (valor, llave) {

                        facebookService.getImagePost(valor.id).then(function (resImage) {

                            valor.attachments = resImage;

                        })

                        xeap.posts.push(valor)

                    })
                    
                    xeap.siguiente = res.paging.next;
                    
                }).finally(function (res) {

                    xeap.listo.scroll = true;
                    
                    

                    $scope.$broadcast('scroll.infiniteScrollComplete');
                });
                
                
                
            }
            
            
        }


        facebookService.getPost(15).then(function (res) {

            xeap.posts = res.data;

            angular.forEach(xeap.posts, function (valor, llave) {

                facebookService.getImagePost(valor.id).then(function (resImage) {

                    valor.attachments = resImage;

                })

                xeap.posts[llave] = valor

            })
            
            
             xeap.siguiente = res.paging.next;

        }).finally(function(){
            
            
            localStorage.setItem("facebook", xeap.posts[0].id);
            
        })


}])
