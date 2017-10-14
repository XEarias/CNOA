angular.module('cnoa')

    .controller("galeriaController", ["instagramService", "$scope",  function (instagramService, $scope) {

        var xeap = this;
        
        xeap.medias = []

        
        xeap.listo = {
            scroll: true,
            pull: true
        }
        
        
        xeap.siguiente = null;
        
        instagramService.getMedia().then(function(res){
            
            xeap.medias = res.medias;
            
              xeap.siguiente = res.pagination;
            
           
            
        }).finally(function(){
            
            localStorage.setItem("instagram", xeap.medias[0].id);
            
        })
        
        
        
        xeap.ptr = function () {


            if (xeap.listo.pull) {

                xeap.listo.pull = false;

                instagramService.getMedia().then(function (res) {

                    xeap.medias = res.medias;


                    
                    xeap.siguiente = res.pagination;

                }).finally(function (res) {

                    xeap.listo.pull = true;
                    
                    
                    localStorage.setItem("instagram", xeap.medias[0].id);
                    $scope.$broadcast('scroll.refreshComplete');
                });

            }
        }
        
        
        
         xeap.infiniteScroll = function(){
            
           
            if (xeap.listo.scroll && xeap.siguiente) {
              
                xeap.listo.scroll = false;
                
                instagramService.siguiente(xeap.siguiente).then(function(res){
                    
                    var medias_siguientes = res.medias;

                    angular.forEach(medias_siguientes, function (valor, llave) {

                        xeap.medias.push(valor)

                    })
                    
                    xeap.siguiente = res.pagination;
                    
                }).finally(function (res) {

                    xeap.listo.scroll = true;

                    $scope.$broadcast('scroll.infiniteScrollComplete');
                });
                
                
                
            }
            
            
        }
        
        
        
        


}])
