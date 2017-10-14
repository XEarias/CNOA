angular.module("cnoa")

    .filter("hashtags", [function () {


        return function (cadena, hashtags) {

            angular.forEach(hashtags, function (valor, key) {

                var pattern = new RegExp("#" + valor, 'gi');
                cadena = cadena.replace(pattern, "<span class='hashtag'>#" + valor + "</span>");

            })

            return cadena;
        }


    }])


    .filter("hashtagsx", [function () {


        return function (cadena) {

            var partes = cadena.split(" ");
            var nuevaCadena = [];
            angular.forEach(partes, function (valor, key) {

                if (valor.search("#") != -1) {

                    nuevaCadena.push(" <span class='hashtag'>" + valor + "</span>");

                } else {

                    nuevaCadena.push(" " + valor);

                }

            })

            return nuevaCadena.join("");
        }


    }])


    .filter("trim", [function () {

        return function (cadena, cantidad) {

            if (cadena) {
                var cadena_formateada = cadena.slice(0, cantidad).trim();

                return cadena.length > cantidad ? cadena_formateada + "..." : cadena;
            } else {

                return cadena;
            }
        }

}])


    .filter("url", [function () {

        return function (cadena) {

            if (cadena) {

                if (cadena.search("http") != -1) {
                    /*
                    var inicio = cadena.search("http");

                    if (cadena.indexOf(" ", inicio) != -1) {

                        var fin = cadena.indexOf(" ", inicio);

                        var cadena_reemplazar = cadena.substr(inicio, fin - inicio - 2);

                        return cadena.replace(cadena_reemplazar, "<a href='" + cadena_reemplazar + "'>" + cadena_reemplazar + "</a>");

                    } else {

                        var cadena_reemplazar = cadena.substr(inicio, cadena.length - inicio);

                        return cadena.replace(cadena_reemplazar, "<a href='" + cadena_reemplazar + "'>" + cadena_reemplazar + "</a>");

                    }


                */


                    var partes = cadena.split(" ");
                    var nuevaCadena = [];
                    angular.forEach(partes, function (valor, key) {

                        if (valor.search("http") != -1) {

                            nuevaCadena.push(" " + valor.split("http")[0] + " <a href='http" + valor.split("http")[1] + "'>http" + valor.split("http")[1] + "</a>");

                        } else if (valor.search("www") != -1) {

                            nuevaCadena.push(" " + valor.split("www")[0] + " <a href='http://www" + valor.split("www")[1] + "'>" + valor.split("www")[1] + "</a>");

                        } else {

                            nuevaCadena.push(" " + valor);

                        }

                    })

                    return nuevaCadena.join("");


                } else {

                    return cadena
                }


                //return cadena.length > cantidad ? cadena_formateada + "..." : cadena;
            } else {

                return cadena;
            }
        }

}])

    .value('instagramValue', {
        clientId: "6ec5839727ca4672b4fee1212e22cd46",
        access_token: "5567543090.1677ed0.fdb54b86d249472393326af128afff4c"

    })


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


        $http.get("https://graph.facebook.com/oauth/access_token?client_id=" + facebookIDValue.id + "&client_secret=" + facebookIDValue.clave + "&grant_type=client_credentials")

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
                    type: tipo,
                    categories: 9
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

            $http.get("http://convergenciacnoa.org/wp-json/wp/v2/docsapp", {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    Authorization: "Basic " + WPFactory
                }
            }).then(function (res) {

                var posts = [];

                angular.forEach(res.data, function (valor, key) {
                    if (valor.status == 'publish') {

                        var post = {
                            content: valor.content.rendered,
                            date: valor.x_date,
                            title: valor.title.rendered,
                            image: valor.x_featured_media_original,
                            id: valor.id,
                            url_descarga: valor.x_metadata.url_descarga,
                            tipo_documento: valor.x_metadata.tipo_documento

                        };

                        posts.push(post);

                    }

                })

                defered.resolve(posts);

            })


            return promise;

        }





}])

    .service('instagramService', ["$http", "$q", "$httpParamSerializer", "instagramValue", "$sce", function ($http, $q, $httpParamSerializer, instagramValue, $sce) {



        this.getMedia = function (cantidad) {


            var defered = $q.defer();
            var promise = defered.promise;

            $http({
                method: 'JSONP',
                url: "https://api.instagram.com/v1/users/self/media/recent/",
                params: {
                    callback: 'JSON_CALLBACK',
                    access_token: instagramValue.access_token
                }
            }).then(function (res) {

                defered.resolve({
                    medias: res.data.data,
                    pagination: res.data.pagination.next_max_id
                });

            })

            return promise;

        }

        this.getComments = function (id) {

            var defered = $q.defer();
            var promise = defered.promise;


            $http({
                method: 'JSONP',
                url: "https://api.instagram.com/v1/media/" + id + "/comments",
                params: {
                    callback: 'JSON_CALLBACK',
                    access_token: instagramValue.access_token
                }
            }).then(function (res) {

                defered.resolve(res.data.data);

            })

            return promise;


        }



        this.siguiente = function (id) {


            var defered = $q.defer();
            var promise = defered.promise;


            var params = {};


            $http({
                method: 'JSONP',
                url: "https://api.instagram.com/v1/users/self/media/recent/",
                params: {

                    callback: 'JSON_CALLBACK',
                    access_token: instagramValue.access_token,
                    count: 18,
                    next_max_id: id

                }
            }).then(function (res) {

                defered.resolve({
                    medias: res.data.data,
                    pagination: res.data.pagination.next_max_id
                });

            })


            return promise;



        }

}])

    .factory("ultimoFactory", [function () {


        return {
            definir: function (tipo, id) {

               localStorage.setItem(tipo, id);


            },
            obtener: function (tipo) {

                return localStorage.getItem(tipo);


            }
        }


}])
