<ion-view hide-back-button="false" hide-nav-bar="false">
    
    <div class="bar bar-subheader noticias">
            <h2 class="title" style="color: black">NOTICIA AFRO</h2>
        </div>
    
    <ion-content>
        
        <img class="top-relative imagen-post" ng-src="{{noticiasFaceIndividual.post.image || 'img/logo-home-recortado.png'}}">

        <div class="parrafo top-relative" ng-bind-html="noticiasFaceIndividual.post.message | url">
            

        </div>

        <div class="parrafo top-relative" style="font-weight:bold; text-align: right">
            Fecha de publicación: {{noticiasFaceIndividual.post.created_time | date: "dd-MM-yyyy"}}
        </div>
    </ion-content>
</ion-view>
