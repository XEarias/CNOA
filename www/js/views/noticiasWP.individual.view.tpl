<ion-view hide-back-button="false" hide-nav-bar="false">
   <div class="bar bar-subheader noticias">
            <h2 class="title" style="color: black">NOTICIA CNOA</h2>
        </div>
    
    <ion-content>
       
        <img class="top-relative imagen-post" ng-src="{{noticiasWPIndividual.post.image || 'img/logo-home-recortado.png'}}">

        <div class="parrafo top-relative wp" ng-bind-html="noticiasWPIndividual.post.content">
          

        </div>

        <div class="parrafo top-relative" style="font-weight:bold; text-align: right">
            Fecha de publicación: {{noticiasWPIndividual.post.date | date: "dd-MM-yyyy"}}
        </div>
    </ion-content>
</ion-view>
