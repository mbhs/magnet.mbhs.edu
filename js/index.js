$(".hover-column").hover(function(){
    $(this).toggleClass("animated pulse");
});




$(window).on('hashchange', function() {
    hash = window.location.hash.substring(1);
    hashes = hash.split("#")
	if(hash == ""){
		openTab("overview", null);
	} else {
        openTab(hashes[0], hashes[1]);
    }
    $("html, body").scrollTop(0);
});


$(function(){
    // array of hashes (#science#class -> [science, class])
    var hashes = window.location.hash.split("#").splice(1, 3);
    $(".nostart").hide(); // always hide all technical descriptions of classes
    if(hashes.length == 0){
        $(".tabcontent").first().css("display", "block"); // display first tab
        $(".tablinks").first().addClass("active"); // make first tab active
        return;
    }
    processHashes(hashes);
})

function processHashes(hashes) {
     // array of hashes in the url (#science#class -> [science, class])
    var subject = hashes[0];
    var _class = hashes[1];
    openTab(subject, _class);

    if (hashes.length > 1) {
        var offset = 55; // account for the size of the header 
        $("html, body").animate({
            scrollTop: $("#" + hashes[1]).position().top - offset  // animate a scroll down to that class
        }, 1000);
    } else {
        $("html, body").scrollTop(0);
    }


}

function openTab(subject, _class) {
    subject = (subject == "undefined") ? "overview" : subject;
    console.log(subject)
    $(".tabcontent").hide(); // hide all tabs and content to start
    $(".tablinks").removeClass("active");
    $("#" + subject)[0].style.display = "block"; // display only the passed tab content
    $("#" + subject + "_tab").addClass("active"); // display grey "pressed" color on the passed tab button
    location.hash = _class == null ? subject : subject + "#" + _class;
}


$(".tag").click(function(e, d, g) {
    location.hash = e.target.redirect;
    location.reload();
});

function toggle(id) {
    $('#' + id).toggle("highlight", {}, 500);
}