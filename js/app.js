!function(a,e,n,t){a.fn.doubleTapToGo=function(t){return"ontouchstart"in e||navigator.msMaxTouchPoints||navigator.userAgent.toLowerCase().match(/windows phone os 7/i)?(this.each(function(){var e=!1;a(this).on("click",function(n){var t=a(this);t[0]!=e[0]&&(n.preventDefault(),e=t)}),a(n).on("click touchstart MSPointerDown",function(n){for(var t=!0,r=a(n.target).parents(),i=0;i<r.length;i++)r[i]==e[0]&&(t=!1);t&&(e=!1)})}),this):!1}}(jQuery,window,document),$("nav li:has(ul)").doubleTapToGo(),$(".expand").click(function(){$expand=$(this),$content=$expand.next(),$content.slideToggle(500,function(){$expand.text(function(){return $content.is(":visible")?"Hide Explanation":"Show Explanation"})})}),$(".skillhide").click(function(){$skillhide=$(this),$content=$skillhide.next(),$content.slideToggle(500,function(){$skillhide.text(function(){return $content.is(":visible")?"Hide Full Skill Order":"Show Full Skill Order"})})}),angular.module("myApp",["rzModule"]).controller("MyController",["$scope",function(a){a.slider_range={value:325,options:{floor:100,ceil:1e3,step:25,onChange:function(){var e=function(e){return Math.round(e/a.slider_range.value*100)/100};a.rangeData.ms=a.slider_range.value,a.rangeData.nexus=e(19e3),a.rangeData.tf=e(5600),a.rangeData.noc=e(4e3),a.rangeData.lux=e(3400),a.rangeData.noc2=e(2500),a.rangeData.nidalee=e(1500),a.rangeData.vision=e(1200),a.rangeData.zilb=e(900),a.rangeData.turretaa=e(775),a.rangeData.caitaa=e(650),a.rangeData.zilaa=e(550),a.rangeData.flash=e(425),a.rangeData.jug=e(175),a.rangeData.melee=e(125),a.rangeData.teemo=e(100)}}},a.rangeData={ms:325,nexus:58.46,tf:17.23,noc:12.31,lux:10.46,noc2:7.69,nidalee:4.62,vision:3.69,zilb:2.77,turretaa:2.38,caitaa:2,zilaa:1.69,flash:1.31,jug:.54,melee:.38,teemo:.31},a.slider_speed={value:325,options:{floor:325,ceil:425,step:5,onChange:function(){var e=Math.round(1.4*a.slider_speed.value),n=Math.round(1.55*a.slider_speed.value),t=Math.round(1.7*a.slider_speed.value),r=Math.round(1.85*a.slider_speed.value),i=Math.round(1.99*a.slider_speed.value),o=function(a){return a>490?Math.round(.5*(a-490)+475):490>=a&&a>415?Math.round(.8*(a-415)+415):void 0};a.speedData.rank1=o(e),a.speedData.rank2=o(n),a.speedData.rank3=o(t),a.speedData.rank4=o(r),a.speedData.rank5=o(i)}}},a.speedData={rank1:447,rank2:482,rank3:507,rank4:531,rank5:554},a.slider_slow={value:325,options:{floor:325,ceil:425,step:5,onChange:function(){var e=Math.round(.6*a.slider_slow.value),n=Math.round(a.slider_slow.value*(1-.55)),t=Math.round(a.slider_slow.value*(1-.7)),r=Math.round(a.slider_slow.value*(1-.85)),i=Math.round(a.slider_slow.value*(1-.99)),o=function(a){return 220>a?Math.round(.5*(a-220)+220):a};a.slowData.rank1=o(e),a.slowData.rank2=o(n),a.slowData.rank3=o(t),a.slowData.rank4=o(r),a.slowData.rank5=o(i)}}},a.slowData={rank1:208,rank2:183,rank3:159,rank4:135,rank5:112},a.slider_swifties={value:325,options:{floor:325,ceil:425,step:5,onChange:function(){var e=.75,n=Math.round(a.slider_swifties.value*(1-.4*e)),t=Math.round(a.slider_swifties.value*(1-.55*e)),r=Math.round(a.slider_swifties.value*(1-.7*e)),i=Math.round(a.slider_swifties.value*(1-.85*e)),o=Math.round(a.slider_swifties.value*(1-.99*e)),l=function(a){return 220>a?Math.round(.5*(a-220)+220):a};a.swiftiesData.rank1=l(n),a.swiftiesData.rank2=l(t),a.swiftiesData.rank3=l(r),a.swiftiesData.rank4=l(i),a.swiftiesData.rank5=l(o)}}},a.swiftiesData={rank1:227,rank2:206,rank3:187,rank4:169,rank5:152}}]);
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
