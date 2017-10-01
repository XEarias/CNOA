<ion-view hide-back-button="false" hide-nav-bar="false">
   <div class="bar bar-subheader noticias">
            <h2 class="title" style="color: black">NOTICIA</h2>
        </div>
    
    <ion-content>
       
        <img class="top-relative imagen-post" ng-src="{{documentosIndividual.post.image || 'img/logo-home-recortado.png'}}">

        <div class="parrafo top-relative wp" ng-bind-html="documentosIndividual.post.content">
          

        </div>

        <div class="parrafo top-relative" style="font-weight:bold; text-align: right">
            Fecha de publicación: {{documentosIndividual.post.date | date: "dd-MM-yyyy"}}
        </div>
    </ion-content>
</ion-view>
