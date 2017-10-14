angular.module('cnoa')

    .controller("documentosIndividualController", ["$stateParams", "$cordovaFileTransfer", "$sce", function ($stateParams, $cordovaFileTransfer, $sce) {

        var xeap = this;

        xeap.doc = $stateParams;
        //console.log(xeap.post)



        


        xeap.descargar = function () {
            /*
                    xeap.progreso = 0;

                    // File name only
                    var nombreArchivo = xeap.post.url_descarga.split("/").pop();

                    // Save location
                    var directorio = cordova.file.externalRootDirectory + "Documentos CNOA/" + nombreArchivo;

                    xeap.progreso = "Iniciando descarga..."

                    $cordovaFileTransfer.download(xeap.post.url_descarga, directorio, {}, true).then(function (result) {

                        xeap.progreso = "Descarga Completa."

                    }, function (error) {

                        xeap.progreso = "Descarga fállida."

                    }, function (progress) {

                       // xeap.progreso = (((progress.loaded / progress.total) * 100).trunc()).toString() + "%.";

                    });


            */

        }





}])
