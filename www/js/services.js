angular.module("cnoa")

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
        
        this.getImagePost = function (id){
            
            
            
            var defered = $q.defer();
            var promise = defered.promise;

            facebookTokenFactory.then(function (token) {

                $http.get("https://graph.facebook.com/v2.10/"+id+"/attachments?access_token=" + token)

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

}])
