<ion-view hide-back-button="false" hide-nav-bar="false">

    <div class="bar bar-subheader noticias">
        <h2 class="title" style="color: black">NOTICIAS</h2>
    </div>
    <ion-content>


        <ion-refresher class="top-relative" on-refresh="documentos.ptr()"></ion-refresher>

        <div ng-if="!documentos.posts.length" class="spinner-centrado">
            <ion-spinner></ion-spinner>

        </div>


        <ion-list class=" top-relative">
            <ion-item class="item-thumbnail-left" ng-repeat="post in documentos.posts track by post.id" ui-sref="documentosIndividual({id: post.id, image: post.image || 'img/doc.png', content: post.content, date: post.date, title: post.title})">

                <img ng-src="{{ post.image || 'img/doc.png'}}">
                <div class="post-mensaje">
                    {{post.title | trim : 120}}
                </div>

            </ion-item>
        </ion-list>


        <ion-infinite-scroll immediate-check="false" icon="ion-loading-c" on-infinite="documentos.infiniteScroll()">
        </ion-infinite-scroll>

    </ion-content>
</ion-view>
