angular.module('cnoa')

.controller("quienesSomosIndividualController", ["$stateParams", "datos", function($stateParams, datos){
    
    var xeap = this;
    

   xeap.datos = datos;
    
}])