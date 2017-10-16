<ion-view hide-back-button="false" hide-nav-bar="false">
   <div class="bar bar-subheader lineas-accion">
            <h2 class="title">{{lineasAccionIndividual.datos.title}}</h2>
        </div>
    
    <ion-content>
        
        <img ng-if="lineasAccionIndividual.datos.image && !lineasAccionIndividual.datos.video" class="imagen-principal-seccion" ng-src="{{lineasAccionIndividual.datos.image}}">
        
        <iframe ng-if="lineasAccionIndividual.datos.video" class="video top-relative" ng-src="{{lineasAccionIndividual.datos.video}}" frameborder="0" allowfullscreen></iframe>

        <div ng-if="!lineasAccionIndividual.datos.image && !lineasAccionIndividual.datos.video" style="margin-top: 60px;"></div>
        
        <div class="titulo" ng-class="{'top-relative': lineasAccionIndividual.datos.video || (!lineasAccionIndividual.datos.image && !lineasAccionIndividual.datos.video)}">
            {{lineasAccionIndividual.datos.title}}
        </div>

        <div class="parrafo" ng-bind-html="lineasAccionIndividual.datos.content" ng-class="{'top-relative': lineasAccionIndividual.datos.video || (!lineasAccionIndividual.datos.image && !lineasAccionIndividual.datos.video)}">
           
        </div>
        
        <div ng-if="lineasAccionIndividual.datos.url_descarga" style="text-align:center; position:relative; top: 40px; font-family: BN; ">
            <div style=" width: 350px; max-width: 70%; margin: auto;">
                <a  ng-href="{{lineasAccionIndividual.datos.url_descarga}}" class="button button-block button-positive" style="font-size: 26px; ">
                  MAS INFORMACIÓN
                </a>
            </div>
        </div>


    </ion-content>
</ion-view>
