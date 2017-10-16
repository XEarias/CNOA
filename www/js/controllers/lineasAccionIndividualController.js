angular.module('cnoa')

.controller("lineasAccionIndividualController", ["$stateParams", "datos", function($stateParams, datos){
    
    var xeap = this;
    

   xeap.datos = datos;
    
}])