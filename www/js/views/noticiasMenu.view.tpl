<ion-view hide-back-button="false" hide-nav-bar="false">
    <div class="bar bar-subheader noticias">
        <h2 class="title" style="color: black">NOTICIAS</h2>
    </div>

    <ion-content>


        <div ui-sref="noticiasWP" class="padding top-relative" style="top:90px"> <img src="img/fondos-secciones/noticias_cnoa.png" class="imagen-post radius">
            <div class="cantidad-nuevo" ng-if="noticiasMenu.cantidadWP">{{noticiasMenu.cantidadWP}}</div>
        </div>

        <div ui-sref="noticiasFace" class="padding top-relative" style="top:90px"> <img src="img/fondos-secciones/noticias_afro.png" class="imagen-post radius">
            <div class="cantidad-nuevo" ng-if="noticiasMenu.cantidadFacebook">{{noticiasMenu.cantidadFacebook}}</div>
        </div>


    </ion-content>
</ion-view>
