!function(a,e,n,t){a.fn.doubleTapToGo=function(t){return"ontouchstart"in e||navigator.msMaxTouchPoints||navigator.userAgent.toLowerCase().match(/windows phone os 7/i)?(this.each(function(){var e=!1;a(this).on("click",function(n){var t=a(this);t[0]!=e[0]&&(n.preventDefault(),e=t)}),a(n).on("click touchstart MSPointerDown",function(n){for(var t=!0,r=a(n.target).parents(),i=0;i<r.length;i++)r[i]==e[0]&&(t=!1);t&&(e=!1)})}),this):!1}}(jQuery,window,document),$("nav li:has(ul)").doubleTapToGo(),$(".expand").click(function(){$expand=$(this),$content=$expand.next(),$content.slideToggle(500,function(){$expand.text(function(){return $content.is(":visible")?"Hide Explanation":"Show Explanation"})})}),$(".skillhide").click(function(){$skillhide=$(this),$content=$skillhide.next(),$content.slideToggle(500,function(){$skillhide.text(function(){return $content.is(":visible")?"Hide Full Skill Order":"Show Full Skill Order"})})}),
angular.module("myApp",["rzModule"])
.config(function($locationProvider) {
  $locationProvider.html5Mode({
     enabled: true,
     requireBase: false,
     rewriteLinks: false
  });
})
$(".discussion").click(function () {
    $skillhide = $(this);
    //getting the next element
    $content = $skillhide.next();
    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
    $content.slideToggle(500, function () {
        //execute this after slideToggle is done
        //change text of header based on visibility of content div
        $skillhide.text(function () {
            //change text based on condition
            return $content.is(":visible") ? "Collapse" : "Discussion";
        });
    });

});
$(document).ready(function() {
  $('.nav-trigger').on('click', function() {
    $('.primary-nav').toggleClass('isOpen');
  });
});
