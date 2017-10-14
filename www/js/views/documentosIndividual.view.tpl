<ion-view hide-back-button="false" hide-nav-bar="false">
    <div class="bar bar-subheader noticias">
        <h2 class="title" style="color: black">DOCUMENTOS</h2>
    </div>

    <ion-content>

        <div style="position:relative; top: 100px; text-align:center;"><img style="width: 50%;" ng-src="{{documentosIndividual.doc.image || 'img/doc.png'}}"></div>

        <div class="titulo top-relative" style="top: 100px;">
            {{documentosIndividual.doc.title | uppercase}}
        </div>

        <div class="parrafo top-relative" style="top: 100px;" ng-bind-html="documentosIndividual.doc.content">



        </div>
        <div style="text-align:center; position:relative; top: 100px; font-family: BN; ">
            <div style=" width: 350px; max-width: 70%; margin: auto;">
                <a  ng-href="{{documentosIndividual.doc.url_descarga}}" class="button button-block button-positive" style="font-size: 26px; ">
                  DESCARGAR
                </a>
            </div>

        </div>


        <!--
        
        <div class="parrafo top-relative" style="top: 100px;" >
           <button ng-click="documentosIndividual.descargar()">descargar</button>
            
            {{documentosIndividual.progreso}}

        </div>
-->
        <!--
        <div class="parrafo top-relative" style="font-weight:bold; text-align: right; top: 100px;">
            Fecha de publicación: {{documentosIndividual.post.date | date: "dd-MM-yyyy"}}
        </div>
-->
    </ion-content>
</ion-view>
