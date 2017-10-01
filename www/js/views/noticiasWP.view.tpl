<ion-view hide-back-button="false" hide-nav-bar="false">

    <div class="bar bar-subheader noticias">
        <h2 class="title" style="color: black">NOTICIAS</h2>
    </div>
    <ion-content>


        <ion-refresher class="top-relative" on-refresh="noticiasWP.ptr()"></ion-refresher>

        <div ng-if="!noticiasWP.posts.length" class="spinner-centrado">
            <ion-spinner></ion-spinner>

        </div>


        <ion-list class=" top-relative">
            <ion-item class="item-thumbnail-left" ng-repeat="post in noticiasWP.posts track by post.id" ui-sref="noticiasWPIndividual({id: post.id, image: post.image || 'img/logo-home-recortado.png', content: post.content, date: post.date, title: post.title})">

                <img ng-src="{{ post.image || 'img/logo-home-recortado.png'}}">
                <div class="post-mensaje">
                    {{post.title | trim : 120}}
                </div>

            </ion-item>
        </ion-list>


        <ion-infinite-scroll immediate-check="false" icon="ion-loading-c" on-infinite="noticiasWP.infiniteScroll()">
        </ion-infinite-scroll>

    </ion-content>
</ion-view>
