/* A bs-ed version of jquery's add/remove class so the articles grow a little when you hover over them */
$(".hover-column").mouseover(function(e) {
    this.old = this.className;
    this.className += ' animated pulse hover-column';
});

$(".hover-column").mouseout(function(e) {
    this.className = this.old;
});

/* The following functions describe tab utilities, like on overview.html
   that have a lower navbar for navigating multiple pages in one.
 */
function openTab(evt, name) {
    $(".tabcontent").hide(); /* hide all tabs */
    $(".tablinks").removeClass("active"); /* remove old active tab */
    $("#" + name)[0].style.display = "block"; /* show new tab */
    evt.currentTarget.className += " active"; /* activate new tab */
}

$(function () {
    var hashes = window.location.hash.split("#").splice(1, 3); /* get tab from url */
    if (hashes.length > 0) {
        /* Show the current tab */
        $("#" + hashes[0])[0].style.display = "block";
        $("#t" + hashes[0]).addClass("active");
        if (hashes.length > 1) {
            /* Scroll down to the selected class */
            $("html, body").animate({ scrollTop: $('#'+hashes[1]).position().top }, 1000);
        }
    } else {
        /* To show the first tab because nothing has been selected */
        var a = $(".tabcontent");
        if (a.length > 0) { a[0].style.display = "block"; }
    }
    $(".nostart").hide(); /* hide formal descriptions */
});

$(".tag").click(function(e, d, g) {
    /* clicked on a link in overview.html */
    location.hash = e.target.id;
    location.reload(); /* for safari */
});

function toggle(id) {
    $('#' + id).toggle("highlight", {}, 500); /* to toggle formal descriptions */
}

$(window).on('scroll', function(event) {
    /* scrolling to make the navbar stick to the top if the top div has been scrolled off the screen */
    var scrollValue = $(window).scrollTop();
    if (scrollValue > 197) { /* hardcoded for now */
        $('.navbar').addClass('fixed-top');
        $("#fixer").show();
    } else {
        $(".navbar").removeClass("fixed-top");
        $("#fixer").hide();
    }
});