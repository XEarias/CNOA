<ion-view hide-back-button="false" hide-nav-bar="false">

    <div class="bar bar-subheader noticias">
        <h2 class="title" style="color: black">DOCUMENTOS</h2>
    </div>
    <ion-content>


        <ion-refresher class="top-relative" on-refresh="documentos.ptr()"></ion-refresher>

        <div ng-if="!documentos.posts.length" class="spinner-centrado">
            <ion-spinner></ion-spinner>

        </div>
        <div class="top-relative" style="padding: 5px; padding-right: 20px; padding-bottom: 15px; text-align: right;">
            <b>Ver:</b> <select ng-model="documentos.filtro" ng-change="documentos.cambiarFiltro(documentos.filtro)">
                <option value="todos" selected>Todos</option>
                <option value="interes">Documentos de interés</option>
                <option value="comunicado">Comunicados C.N.O.A</option>
                <option value="publicacion">Publicaciones C.N.O.A</option>
            
            </select>
        
        </div>

        <ion-list class=" top-relative">
            <ion-item class="item-thumbnail-left" ng-repeat="post in (documentos.posts | filter: {tipo_documento: documentos.filtroFinal}) track by post.id " ui-sref="documentosIndividual({id: post.id, image: post.image || 'img/doc.png', content: post.content, date: post.date, title: post.title, url_descarga:post.url_descarga})">

                <img ng-src="{{ post.image || 'img/doc.png'}}">
                <div class="post-mensaje documento">
                    {{post.title | trim : 120}}
                </div>

            </ion-item>
        </ion-list>


        <ion-infinite-scroll immediate-check="false" icon="ion-loading-c" on-infinite="documentos.infiniteScroll()">
        </ion-infinite-scroll>

    </ion-content>
</ion-view>
