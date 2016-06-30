(function () {
    'use strict';
    /**
    * @ngdoc object
    * @name app.awepkg
    * @requires core.page.factory:$page
    * @requires setting
    **/
    angular.module('awepkg.module', [
        //module dependencies goes here
    ]);
})();
(function () {
    'use strict';
    /**
     * @ngdoc object
     * @name app.awepkg.config
     **/
    angular.module('awepkg.module').config( /*@ngInject*/ function ($stateProvider) {
        //
        // Routes
        //
        $stateProvider
            //
            // Add
            //
            .state('app.awepkg-add', {
                url: '/awepkg/add',
                title: 'New awepkg',
                views: {
                    'content': {
                        templateUrl: 'app/modules/awepkg/crud/awepkg-add.html',
                        controller: 'AwepkgCtrl',
                        controllerAs: 'vm'
                    }
                },
                resolve: {

                }
            })
            //
            // List
            //
            .state('app.awepkg-list', {
                url: '/awepkg/',
                title: 'Listing awepkg',
                views: {
                    'content': {
                        templateUrl: 'app/modules/awepkg/crud/awepkg-list.html',
                        controller: 'AwepkgCtrl',
                        controllerAs: 'vm'
                    }
                },
                resolve: {

                }
            })
            //
            // View
            //
            .state('app.awepkg-view', {
                url: '/awepkg/:id',
                title: 'View of awepkg',
                views: {
                    'content': {
                        templateUrl: 'app/modules/awepkg/crud/awepkg-view.html',
                        controller: 'AwepkgCtrl',
                        controllerAs: 'vm'
                    }
                },
                resolve: {

                }
            });
    });
})();
(function () {
    'use strict';
    /**
    * @ngdoc object
    * @name app.awepkg.controller:AwepkgCtrl
    * @requires core.page.factory:$page
    * @requires setting
    **/
    angular.module('awepkg.module').controller('AwepkgCtrl', /*@ngInject*/ function ($page, setting) {
        var vm = this;
        /**
         *
         * SEO
         * 
         **/
        $page.title(setting.name + setting.titleSeparator + ' ');
        boot();

        function boot() { }
    });
})();
(function () {
    'use strict';
    /**
     * @ngdoc object
     * @name app.awepkg.module.provider
     **/
    angular.module('awepkg.module').provider('awepkg', /*@ngInject*/ function awepkgProvider() {
        this.$get = this.get = /*@ngInject*/ function ($scope, lodash) {
            var _ = lodash;
            return {
                //this.methods     
            }
        }
        //this.methods
    });
})();
(function () {
    'use strict';
    /**
     * @ngdoc object
     * @name app.awepkg.module.service:Awepkg
     **/
    angular.module('awepkg.module').service('Awepkg', /*@ngInject*/ function ($q, $sessionStorage, $http, $timeout, $log, lodash) {
        var _ = lodash,
            self = this;
        var Awepkg = function (params) {
            params = params ? params : {};
            params.busy = params.busy ? params.busy : false;
            angular.extend(this, params);
        }
    Awepkg.prototype.save = save;

        // Persistence
        function save(cloud) {
            //
            // Creating a promise
            //
            var deferred = $q.defer();
            //
            // Persistis data
            //
            if (!this.id)
                $sessionStorage.newAwepkg = this;
        else
            $sessionStorage.openAwepkg = this;

            if (cloud) {
                var url = 'api_url_goes_here'
                if (this.id) {
                    $http.put(url, this).success(function (response) {
                        deferred.resolve(response);
                    }).error(function (response) {
                        $log.error('impossible to save Awepkg', response);
                        deferred.reject(response);
                    });
                } else {
                    $http.post(url, this).success(function (response) {
                        deferred.resolve(response);
                    }).error(function (response) {
                        $log.error('impossible to create Awepkg', response);
                        deferred.reject(response);
                    });
                }
            }
            return deferred.promise;
        }
        return Awepkg;
    });
})();
angular.module('awepkg').run(['$templateCache', function($templateCache) {$templateCache.put('app/modules/awepkg/crud/awepkgadd.html','<div id=awepkg-module-add></div>');
$templateCache.put('app/modules/awepkg/crud/awepkglist.html','<div id=awepkg-module-list></div>');
$templateCache.put('app/modules/awepkg/crud/awepkgview.html','<div id=awepkg-module-view></div>');}]);