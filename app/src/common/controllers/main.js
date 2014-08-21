'use strict';

angular.module('adminApp')
  .controller('MainCtrl', function ($scope, $window) {
    
    $scope.popupHeight = $window.innerHeight + 'px';
    $scope.popupWidth = $window.innerWidth + 'px';

    $scope.popupStyle = {
    	'width': $scope.popupWidth,
    	'height' : $scope.popupHeight,
    	'overflow-y' : 'scroll'
    }
    

    $scope.morphInit = function (){
    	var docElem = window.document.documentElement, didScroll, scrollPosition;

    	// trick to prevent scrolling when opening/closing button
    	function noScrollFn() {
    	    window.scrollTo( scrollPosition ? scrollPosition.x : 0, scrollPosition ? scrollPosition.y : 0 );
    	}

    	function noScroll() {
    	    window.removeEventListener( 'scroll', scrollHandler );
    	    window.addEventListener( 'scroll', noScrollFn );
    	}

    	function scrollFn() {
    	    window.addEventListener( 'scroll', scrollHandler );
    	}

    	function canScroll() {
    	    window.removeEventListener( 'scroll', noScrollFn );
    	    scrollFn();
    	}

    	function scrollHandler() {
    	    if( !didScroll ) {
    	        didScroll = true;
    	        setTimeout( function() { scrollPage(); }, 60 );
    	    }
    	};

    	function scrollPage() {
    	    scrollPosition = { x : window.pageXOffset || docElem.scrollLeft, y : window.pageYOffset || docElem.scrollTop };
    	    didScroll = false;
    	};

    	scrollFn();

    	[].slice.call( document.querySelectorAll( '.morph-button' ) ).forEach( function( bttn ) {
    	    new UIMorphingButton( bttn, {
    	        closeEl : '.icon-close',
    	        onBeforeOpen : function() {
    	            // don't allow to scroll
    	            noScroll();
    	        },
    	        onAfterOpen : function() {
    	            // can scroll again
    	            canScroll();
    	        },
    	        onBeforeClose : function() {
    	            // don't allow to scroll
    	            noScroll();
    	        },
    	        onAfterClose : function() {
    	            // can scroll again
    	            canScroll();
    	        }
    	    } );
    	} );
    }

    $scope.morphInit();





  });
