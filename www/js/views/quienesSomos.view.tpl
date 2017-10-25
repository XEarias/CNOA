<ion-view hide-back-button="false" hide-nav-bar="false">
     <div class="bar bar-subheader quienes-somos">
            <h2 class="title">QUIÉNES SOMOS</h2>
        </div>
    
    <ion-content>
       
        <img class="imagen-principal-seccion" ng-src="{{quienesSomos.imagenPrincipal}}">

        <ion-list class="quienes-somos menu-principal-seccion">
            <ion-item ui-sref="quienesSomosIndividual({id:1561})">
                <img src="img/menu-iconos/quienes-somos/ICONOS -07.png">
                <span>NOSOTROS</span>
                <i class="icon ion-chevron-right"></i>

            </ion-item>
            <ion-item ui-sref="quienesSomosIndividual({id:1563})">
                <img src="img/menu-iconos/quienes-somos/ICONOS -08.png">
                <span>MISIÓN</span>
                <i class="icon ion-chevron-right"></i>

            </ion-item>
            <ion-item ui-sref="quienesSomosIndividual({id:1565})">
                <img src="img/menu-iconos/quienes-somos/ICONOS -09.png">
                <span>VISIÓN</span>
                <i class="icon ion-chevron-right"></i>
            </ion-item>
            <ion-item ui-sref="quienesSomosIndividual({id:1567})">
                <img src="img/menu-iconos/quienes-somos/ICONOS -10.png">
                <span>DONDE ESTAMOS</span>
                <i class="icon ion-chevron-right"></i>
            </ion-item>

        </ion-list>

    </ion-content>
</ion-view>
