angular.module('cnoa')

    .controller("lineasAccionIndividualController", ["$stateParams", "datos", "$ionicPopup", "$scope", function ($stateParams, datos, $ionicPopup, $scope) {

        var xeap = this;


        xeap.datos = datos;

        if (xeap.datos.video) {

            xeap.datos.videoAuto = xeap.datos.video.split("?")[0] + "?autoplay=1&" + xeap.datos.video.split("?")[1];
        }

        xeap.reproducirVideo = function () {

            $ionicPopup.show({
                template: '<iframe class="video" ng-src="{{lineasAccionIndividual.datos.videoAuto}}" frameborder="0" allowfullscreen></iframe>',
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
