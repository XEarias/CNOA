<ion-view hide-back-button="false" hide-nav-bar="false">
   <div class="bar bar-subheader lineas-accion">
            <h2 class="title">{{estructuraOrganizacionalIndividual.datos.title}}</h2>
        </div>
    
    <ion-content>
        
        <img ng-if="estructuraOrganizacionalIndividual.datos.image && !estructuraOrganizacionalIndividual.datos.video" class="imagen-principal-seccion" ng-src="{{estructuraOrganizacionalIndividual.datos.image}}">
        
        <iframe ng-if="estructuraOrganizacionalIndividual.datos.video" class="video top-relative" ng-src="{{estructuraOrganizacionalIndividual.datos.video}}" frameborder="0" allowfullscreen></iframe>

        <div ng-if="!estructuraOrganizacionalIndividual.datos.image && !estructuraOrganizacionalIndividual.datos.video" style="margin-top: 60px;"></div>
        
        <div class="titulo" ng-class="{'top-relative': estructuraOrganizacionalIndividual.datos.video || (!estructuraOrganizacionalIndividual.datos.image && !estructuraOrganizacionalIndividual.datos.video)}">
            {{estructuraOrganizacionalIndividual.datos.title}}
        </div>

        <div class="parrafo" ng-bind-html="estructuraOrganizacionalIndividual.datos.content" ng-class="{'top-relative': estructuraOrganizacionalIndividual.datos.video || (!estructuraOrganizacionalIndividual.datos.image && !estructuraOrganizacionalIndividual.datos.video)}">
           
        </div>
        
        <div ng-if="estructuraOrganizacionalIndividual.datos.url_descarga" style="text-align:center; position:relative; top: 40px; font-family: BN; ">
            <div style=" width: 350px; max-width: 70%; margin: auto;">
                <a  ng-href="{{estructuraOrganizacionalIndividual.datos.url_descarga}}" class="button button-block button-positive" style="font-size: 26px; ">
                  MAS INFORMACIÓN
                </a>
            </div>
        </div>


    </ion-content>
</ion-view>
