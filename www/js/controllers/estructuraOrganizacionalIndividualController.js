angular.module('cnoa')

    .controller("estructuraOrganizacionalIndividualController", ["$stateParams", "datos", "$scope", function ($stateParams, datos, $scope) {

        var xeap = this;


        xeap.datos = datos;


        
        if(xeap.datos.video){
            
            xeap.datos.videoAuto = xeap.datos.video.split("?")[0] + "?autoplay=1&" + xeap.datos.video.split("?")[1];
        }
        

        xeap.reproducirVideo = function () {

            $ionicPopup.show({
                template: '<iframe class="video" ng-src="{{estructuraOrganizacionalIndividual.datos.videoAuto}}" frameborder="0" allowfullscreen></iframe>',
                scope: $scope,
                buttons: [
                    {
                        text: 'CERRAR',
                        type: 'button-positive'
                    }
                ]
            })

        }

}])
