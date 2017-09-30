angular.module('cnoa')

.controller("noticiasFaceController",["facebookService", function(facebookService){
    
    var xeap = this;
   
    xeap.posts = [];
    
    facebookService.getPost(15).then(function(res){
        
        xeap.posts = res.data;
        
        angular.forEach(xeap.posts, function(valor, llave){
            
            facebookService.getImagePost(valor.id).then(function(res){
                
                valor.attachments = res;
                
            })
            
            
            xeap.posts[llave] = valor
            console.log(valor)
        })
        
    });
    
    
}])