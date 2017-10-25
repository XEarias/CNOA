angular.module('cnoa')

    .controller("quienesSomosController", ["$stateParams", "WPservice", function ($stateParams, WPservice) {

        var xeap = this;


        WPservice.getEstruc(1582).then(function (res) {

            xeap.imagenPrincipal = res.image
        })
}])
