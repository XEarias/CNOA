angular.module('cnoa')

    .controller("lineasAccionController", ["$stateParams", "WPservice", function ($stateParams, WPservice) {

        var xeap = this;

        WPservice.getEstruc(1584).then(function (res) {

            xeap.imagenPrincipal = res.image
        })

        

}])
