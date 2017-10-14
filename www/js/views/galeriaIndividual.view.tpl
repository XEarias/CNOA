<ion-view hide-back-button="false" hide-nav-bar="false">
    <div class="bar bar-subheader galeria">
        <h2 class="title">GALERIA</h2>
    </div>

    <ion-content>

        <img class="top-relative imagen-post" ng-src="{{galeriaIndividual.media.image || 'img/logo-home-recortado.png'}}" style="margin-top: 40px">

        <div class="parrafo top-relative wp" ng-bind-html="galeriaIndividual.media.text | url | hashtags : galeriaIndividual.media.tags"></div>
        
        
        <div class="parrafo top-relative">
        
            <div class="data-media"><img src="img/heart.svg">{{galeriaIndividual.media.likes}}</div>
            <div class="data-media"><img src="img/comment.png">{{galeriaIndividual.media.comments}}</div>
            
        </div>
        <ion-list class=" top-relative">
            <ion-item class="item-thumbnail-left" ng-repeat="comment in galeriaIndividual.comments track by comment.id">
                <a class="item-content">
                <img ng-src="{{ comment.from.profile_picture || 'img/logo-home-recortado.png'}}">
                <div class="post-mensaje  negar">
                    <div><b>{{comment.from.username}}</b></div>
                    <div ng-bind-html="comment.text | hashtagsx | url"></div>
                </div>
                </a>
            </ion-item>
        </ion-list>
        
        <!--
        <div class="parrafo top-relative wp" ng-repeat="tag in galeriaIndividual.media.tags" style="padding-top: 5px; padding-bottom: 0px; color: #003569">
            #{{tag}}
        </div>
-->
        
        

    </ion-content>
</ion-view>
