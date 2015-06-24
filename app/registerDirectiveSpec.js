/**
 * Created by Richard on 24/06/2015.
 */
describe('Register Directive', function() {

    var scope,
        element,
        compiled,
        html,
        someone;

    beforeEach(module("signup"));
    beforeEach(module('registerTemplate.html'));
    beforeEach(inject(function($rootScope, $compile) {
        scope = $rootScope.$new();

        brandClass = "brand-logo";
        brandImage = "<div class='" + brandClass + "'></div>";
        //brandImage = "hello";
        html = "<cs-signup-form>" + brandImage + "</cs-signup-form>";
        compiled = $compile(html);
        element = compiled(scope);
        scope.$digest();

    }));
    it('should render element and contain image', function(){
        expect(element.html()).toContain(brandClass);
    })
});