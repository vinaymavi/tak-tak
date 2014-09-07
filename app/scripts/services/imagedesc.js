'use strict';

/**
 * @ngdoc service
 * @name persistentInterViewApp.imageDesc
 * @description
 * # imageDesc
 * Service in the persistentInterViewApp.
 */
angular.module('persistentInterViewApp')
  .service('imageDesc', function imageDesc($resource) {
    return $resource('/imageDesc.json');
  });
