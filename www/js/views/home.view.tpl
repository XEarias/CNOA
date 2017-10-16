<ion-view hide-back-button="false" hide-nav-bar="false">
    <ion-content>

        <img class="logo-principal" src="img/logo-estandar.png">

        <ion-list class="menu-principal">
            <ion-item ui-sref="quienesSomos">
                <img src="img/menu-iconos/principal/ICONOS -01.png"> 
                <span>QUIÉNES SOMOS</span>
                <i class="icon ion-chevron-right"></i>
                
            </ion-item>
            <ion-item ui-sref="estructuraOrganizacionalIndividual({id:1578})">
                <img src="img/menu-iconos/principal/ICONOS -02.png">
                <span>ESTRUCTURA ORGANIZACIONAL</span>
                <i class="icon ion-chevron-right"></i>
                
            </ion-item>
            <ion-item  ui-sref="lineasAccion">
                <img src="img/menu-iconos/principal/ICONOS -03.png">
                <span>LINEAS DE ACCIÓN</span>
                <i class="icon ion-chevron-right"></i>
            </ion-item>
            <ion-item ui-sref="noticiasMenu" style="position:relative;">
                <img src="img/menu-iconos/principal/ICONOS -04.png"> 
                <span>NOTICIAS</span>
                <i class="icon ion-chevron-right"></i>
                <div class="cantidad-nuevo" ng-if="home.cantidadNoticias">{{home.cantidadNoticias}}</div>
            </ion-item>
            <ion-item ui-sref="documentos">
                <img src="img/menu-iconos/principal/ICONOS -05.png">
                <span>DOCUMENTOS</span>
                <i class="icon ion-chevron-right"></i>
            </ion-item>
            <ion-item ui-sref="galeria" style="position:relative;">
                <img src="img/menu-iconos/principal/ICONOS -06.png"> 
                <span>GALERÍA</span>
                <i class="icon ion-chevron-right"></i>
                <div class="cantidad-nuevo" ng-if="home.cantidadGaleria">{{home.cantidadGaleria}}</div>
            </ion-item>
        </ion-list>

    </ion-content>
</ion-view>
