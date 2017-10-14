<ion-view hide-back-button="false" hide-nav-bar="false">
   
       <div class="bar bar-subheader noticias">
            <h2 class="title" style="color: black">NOTICIAS AFRO</h2>
        </div>
    <ion-content>
     
        <ion-refresher class="top-relative" on-refresh="noticiasFace.ptr()"></ion-refresher>
        <div ng-if="!noticiasFace.posts.length" class="spinner-centrado">
            <ion-spinner></ion-spinner>

        </div>


        <ion-list class=" top-relative">
            <ion-item class="item-thumbnail-left" ng-repeat="post in noticiasFace.posts track by post.id" ui-sref="noticiasFaceIndividual({id: post.id, image: post.attachments[0].media.image.src || 'img/logo-home-recortado.png', message: post.message, created_time: post.created_time})">

                <img ng-src="{{ post.attachments[0].media.image.src || 'img/logo-home-recortado.png'}}">
                <div class="post-mensaje" >
                    {{post.message | trim : 90}}
                </div>

            </ion-item>
        </ion-list>

        
    <ion-infinite-scroll immediate-check="false" icon="ion-loading-c" on-infinite="noticiasFace.infiniteScroll()">
        </ion-infinite-scroll>


    </ion-content>
    
</ion-view>
