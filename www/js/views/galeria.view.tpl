<ion-view hide-back-button="false" hide-nav-bar="false">
    
    <div class="bar bar-subheader galeria">
        <h2 class="title">GALERIA</h2>
    </div>
    <ion-content>
        <ion-refresher class="top-relative" on-refresh="galeria.ptr()"></ion-refresher>


        <div style="text-align: center;" class="top-relative">
            <div ng-repeat="media in galeria.medias" class="imagen-galeria" ui-sref="galeriaIndividual({id:media.id, image: media.images.standard_resolution.url, text: media.caption.text, tags: media.tags, likes: media.likes.count, comments: media.comments.count})">
                <img ng-src="{{media.images.thumbnail.url}}">

            </div>
        </div>
        
         <ion-infinite-scroll immediate-check="false" icon="ion-loading-c" on-infinite="galeria.infiniteScroll()">
        </ion-infinite-scroll>
    </ion-content>
</ion-view>
