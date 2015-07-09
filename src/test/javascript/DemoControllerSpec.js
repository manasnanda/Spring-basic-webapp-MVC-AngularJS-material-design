
    // testing controller, jasmine spec
    describe('AppCtrl', function() {

        var $httpBackend, _$rootScope, createController, authRequestHandler;
        beforeEach(module('progressLinearDemo1'));

        // inject() is used to inject arguments of all given functions
        it('should provide a version', inject(function(version) {
          expect(version).toEqual('1.0-snap');
        }));

        //beforeEach(inject(function($injector) {
        /*
        beforeEach(inject(function(_$httpBackend_, $rootScope, $route,  $controller){

            // mock
            //$httpBackend = $injector.get('$httpBackend');
            $httpBackend = _$httpBackend_;

            //$rootScope = $injector.get('$rootScope');
            _$rootScope = $rootScope;

            //var $controller = $injector.get('$controller');
            createController = function() {
                return $controller('AppController', {'$scope' : $rootScope });
            };

        }));
        */

        /*
        afterEach(function() {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });
        */

    });

