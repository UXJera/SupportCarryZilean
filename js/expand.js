$(".expand").click(function () {

    $expand = $(this);
    //getting the next element
    $content = $expand.next();
    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
    $content.slideToggle(500, function () {
        //execute this after slideToggle is done
        //change text of header based on visibility of content div
        $expand.text(function () {
            //change text based on condition
            return $content.is(":visible") ? "Collapse" : "Show Explanation";
        });
    });

});

$(".skillhide").click(function () {

    $skillhide = $(this);
    //getting the next element
    $content = $skillhide.next();
    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
    $content.slideToggle(500, function () {
        //execute this after slideToggle is done
        //change text of header based on visibility of content div
        $skillhide.text(function () {
            //change text based on condition
            return $content.is(":visible") ? "Collapse" : "Show Full Skill Order";
        });
    });

});

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
