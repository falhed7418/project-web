/*global module, inject */
'use strict';

define(['app', 'angularMocks'], function(app) {
	describe('projectWeb.view2 module', function() {

		beforeEach(module('projectWeb.view2'));

		describe('view2 controller', function(){

			it('should ....', inject(function($controller) {
			//spec body
			var view2Ctrl = $controller('View2Ctrl', { $scope: {} });
			expect(view2Ctrl).toBeDefined();
		}));

		});
	});
});