angular.module('cnoa')

.controller("galeriaIndividualController", [ "$stateParams", "instagramService",function($stateParams, instagramService){
    
    var xeap = this;
   
    xeap.media = $stateParams;
    
    
    instagramService.getComments(xeap.media.id).then(function(res){
        
        xeap.comments = res;
        
        
    })
    
}])