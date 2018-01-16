var indexApp = angular.module('indexApp', []);
    indexApp.controller("publicHeaderCtrl", function ($scope) {
        $scope.showHeaderNav = function(){
            event.stopPropagation();
            $('.public-header-nav-link').fadeToggle('fast');
            $('main').fadeToggle('fast');
            $('html').click(function(){
                $('.public-header-nav-link').fadeOut('fast');
               $('main').fadeIn('fast');
            });
        };
    });
    indexApp.controller('articlesCtrl', function($scope){
        $scope.changeArticleType = function(articleTypeCode){
            $.ajax({
                url: 'test.json',
                type: 'get',
                dataType: 'json'
            })
            .done(function() {
                console.log("success");
            })
            .fail(function() {
                console.log("error");
            })
            .always(function() {
                console.log("complete");
            });
            
        };
    });
