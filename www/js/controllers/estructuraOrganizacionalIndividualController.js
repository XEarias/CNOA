angular.module('cnoa')

.controller("estructuraOrganizacionalIndividualController", ["$stateParams", "datos", function($stateParams, datos){
    
    var xeap = this;
    

   xeap.datos = datos;
    
}])