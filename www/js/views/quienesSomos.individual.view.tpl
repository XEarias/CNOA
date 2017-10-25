<ion-view hide-back-button="false" hide-nav-bar="false">
   <div class="bar bar-subheader quienes-somos">
            <h2 class="title">{{quienesSomosIndividual.datos.title}}</h2>
        </div>
    
    <ion-content>
        
        <img ng-if="quienesSomosIndividual.datos.image && !quienesSomosIndividual.datos.video" class="imagen-principal-seccion" ng-src="{{quienesSomosIndividual.datos.image}}">
        
        <div ng-if="quienesSomosIndividual.datos.video" class="top-relative video-contenedor">
            <iframe class="video" ng-src="{{quienesSomosIndividual.datos.video}}" frameborder="0" allowfullscreen></iframe>
            <div class="hover-video" ng-click="quienesSomosIndividual.reproducirVideo()"></div>

        </div>
        

        <div ng-if="!quienesSomosIndividual.datos.image && !quienesSomosIndividual.datos.video" style="margin-top: 60px;"></div>
        
        <div class="titulo" ng-class="{'top-relative': quienesSomosIndividual.datos.video || (!quienesSomosIndividual.datos.image && !quienesSomosIndividual.datos.video)}">
            {{quienesSomosIndividual.datos.title}}
        </div>

        <div class="parrafo" ng-bind-html="quienesSomosIndividual.datos.content" ng-class="{'top-relative': quienesSomosIndividual.datos.video || (!quienesSomosIndividual.datos.image && !quienesSomosIndividual.datos.video)}">
           
        </div>
        
        <div ng-if="quienesSomosIndividual.datos.url_descarga" style="text-align:center; position:relative; top: 40px; font-family: BN; ">
            <div style=" width: 350px; max-width: 70%; margin: auto;">
                <a  ng-href="{{quienesSomosIndividual.datos.url_descarga}}" class="button button-block button-positive" style="font-size: 26px; ">
                  MAS INFORMACIÓN
                </a>
            </div>
        </div>


    </ion-content>
</ion-view>
