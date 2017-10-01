angular.module("cnoa")

    .filter("trim", [function () {

        return function (cadena, cantidad) {

            if (cadena) {
                var cadena_formateada = cadena.slice(0, cantidad).trim();

                return cadena.length > cantidad ? cadena_formateada + "..." : cadena;
            } else{
                
                return cadena;
            }
        }

}])

    .value('WPValue', {
        user: "comunicaciones",
        password: "9uFZ TvD4 jRaA 6v4W znTq mZcS"

    })

    .factory("WPFactory", ["WPValue", "$window", function (WPValue, $window) {


        return $window.btoa(WPValue.user + ":" + WPValue.password);

    }])


    .value("facebookIDValue", {

        id: "892885644056578",
        clave: "38603b872b25d6ae7fcf524665142dda"

    })

    .factory("facebookTokenFactory", ["$http", "facebookIDValue", "$q", function ($http, facebookIDValue, $q) {

        var defered = $q.defer();
        var promise = defered.promise;


        $http.get("https://graph.facebook.com/oauth/access_token?client_id=" + facebookIDValue.id + "&client_secret=" + facebookIDValue.clave + "&grant_type=client_credentials", )

            .then(function (res) {
                if (res.data.error) {

                    defered.reject(res.data.error);

                } else {

                    defered.resolve(res.data.access_token)
                }
            })

        return promise;

    }])

    .service("facebookService", ["$http", "$q", "facebookTokenFactory", function ($http, $q, facebookTokenFactory) {


        this.getPost = function (limite) {

            var defered = $q.defer();
            var promise = defered.promise;

            facebookTokenFactory.then(function (token) {

                limite = limite ? limite : 10;

                $http.get("https://graph.facebook.com/v2.10/convergenciacnoa/posts?access_token=" + token + "&limit=" + limite)

                    .then(function (res) {
                        if (res.data.error) {

                            defered.reject(res.data.error);


                        } else {

                            defered.resolve(res.data)
                        }
                    })

            })

            return promise;






        }

        this.getImagePost = function (id) {



            var defered = $q.defer();
            var promise = defered.promise;

            facebookTokenFactory.then(function (token) {

                $http.get("https://graph.facebook.com/v2.10/" + id + "/attachments?access_token=" + token)

                    .then(function (res) {

                        if (res.data.error) {

                            defered.reject(res.data.error);


                        } else {

                            defered.resolve(res.data.data)
                        }
                    })

            })

            return promise;

        }


        this.siguiente = function (url) {


            var defered = $q.defer();
            var promise = defered.promise;

            facebookTokenFactory.then(function (token) {


                $http.get(url)

                    .then(function (res) {
                        if (res.data.error) {

                            defered.reject(res.data.error);


                        } else {

                            defered.resolve(res.data)
                        }
                    })

            })

            return promise;



        }


}])

    .service("WPservice", ["$http", "$q", "$httpParamSerializer", "WPFactory", function ($http, $q, $httpParamSerializer, WPFactory) {

        this.getPost = function (tipo, cantidad, salto) {

            var defered = $q.defer();
            var promise = defered.promise;

            cantidad = cantidad ? cantidad : 10;
            salto = salto ? salto : 0

            $http.get("http://convergenciacnoa.org/wp-json/wp/v2/posts?" +
                $httpParamSerializer({
                    per_page: cantidad,
                    offset: salto,
                    type: tipo
                }), {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        Authorization: "Basic " + WPFactory
                    }
                }).then(function (res) {

                var posts = [];

                angular.forEach(res.data, function (valor, key) {
                    if (valor.status == 'publish' && valor.type == tipo) {

                        var post = {
                            content: valor.content.rendered,
                            date: valor.x_date,
                            title: valor.title.rendered,
                            image: valor.x_featured_media_original,
                            id: valor.id
                        };

                        posts.push(post);

                    }

                })

                defered.resolve(posts);

            })


            return promise;

        }
        
        
        
        
         this.getDocs = function (cantidad, salto) {

            var defered = $q.defer();
            var promise = defered.promise;

            cantidad = cantidad ? cantidad : 10;
            salto = salto ? salto : 0

            $http.get("http://convergenciacnoa.org/wp-json/wp/v2/docsapp?" +
                $httpParamSerializer({
                    per_page: cantidad,
                    offset: salto
                }), {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        Authorization: "Basic " + WPFactory
                    }
                }).then(function (res) {

                var posts = [];

                angular.forEach(res.data, function (valor, key) {
                    if (valor.status == 'publish') {

                        var post = {
                            date: valor.x_date,
                            title: valor.title.rendered,
                            image: valor.x_featured_media_original,
                            id: valor.id,
                            url_descarga: valor.x_metadata
                            
                        };

                        posts.push(post);

                    }

                })

                defered.resolve(posts);

            })


            return promise;

        }





}])
