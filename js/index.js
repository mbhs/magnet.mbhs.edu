/* A bs-ed version of jquery's add/remove class so the articles grow a little when you hover over them */
$(".hover-column").hover(function(){
    $(this).toggleClass("animated pulse");
});

// $(window).on('hashchange', function() {
//     console.log("HASHCHANGING!!!");
//     var hash = window.location.hash.substring(1);
//     var hashes = hash.split("#");
//     console.log(hash, hashes);
// 	if(hash === ""){
// 		openTab("overview", null);
// 	} else {
//         openTab(hashes[0], hashes[1]);
//     }
//     $("html, body").scrollTop(0);
// });

$(".tag").click(function(e) {
   // var newhash = e.target.id.split("#").slice(1);
   // openTab(...newhash);
   // $("html, body").scrollTop(0);
   document.location.hash = e.target.id
   console.log(e.target.id);
   e.preventDefault();
   return false;
});


$(window).on('hashchange', function(){
    var newhash = document.location.hash.split("#").slice(1);
//    console.log(newhash);
    processHashes(newhash);
});



/* The following functions describe tab utilities, like on overview.html
   that have a lower navbar for navigating multiple pages in one.
 */

$(function(){
    // array of hashes (#science#class -> [science, class])
    var hashes = window.location.hash.split("#").splice(1, 3);
    $(".nostart").hide(); // always hide all technical descriptions of classes
    if(hashes.length === 0) {//} || hashes.length === 1 && (hashes[0] === "overview" || hashes[0] === "undefined")){
        $(".tabcontent").first().css("display", "block"); // display first tab
        $(".tablinks").first().addClass("active"); // make first tab active
        return;
    }
    processHashes(hashes);
});

function processHashes(hashes) {
     // array of hashes in the url (#science#class -> [science, class])
    var subject = hashes[0];
    var _class = hashes[1];
    openTab(subject, _class);

    if (hashes.length > 1) {
        var offset = 55; // account for the size of the header
        $("html, body").animate({
            scrollTop: $("#" + hashes[1]).position().top - offset  // animate a scroll down to that class
        }, 750);
    } else {
        $("html, body").scrollTop(0);
    }
}

function openTab(subject, _class) {
    subject = (subject === "undefined") ? "overview" : subject;
    $(".tabcontent").hide(); // hide all tabs and content to start
    $(".tablinks").removeClass("active");
    $("#" + subject)[0].style.display = "block"; // display only the passed tab content
    $("#" + subject + "_tab").addClass("active"); // display grey "pressed" color on the passed tab button
    location.hash = "#" + _class == null ? subject : subject + "#" + _class;
}


// $(".tag").click(function(e, d, g) {
//     location.hash = e.target.redirect;
//     location.reload();
// });

function toggle(id) {
    $('#' + id).toggle(); /* to toggle formal descriptions */
}

// $(window).on('scroll', function(event) {
//     /* scrolling to make the navbar stick to the top if the top div has been scrolled off the screen */
//     var scrollValue = $(window).scrollTop();
//     if (scrollValue > 197) { /* hardcoded for now */
//         $('.navbar').addClass('fixed-top');
//         $("#fixer").show();
//     } else {
//         $(".navbar").removeClass("fixed-top");
//         $("#fixer").hide();
//     }
// });
