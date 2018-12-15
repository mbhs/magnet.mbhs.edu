$(".hover-column").hover(function(){
    $(this).toggleClass("animated pulse");
});




$(window).on('hashchange', function() {
	hash = window.location.hash.substring(1);
	if(hash == ""){
		return;
	} else {
		openTab(hash);
	}
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
    var _class = hashes[0];
    openTab(_class);

    if (hashes.length > 1) {
        $("html, body").animate({
            scrollTop: $("#" + hashes[1]).position().top  // animate a scroll down to that class
        }, 1000);
    }
}

function openTab(name) {
    $(".tabcontent").hide(); // hide all tabs and content to start
    $(".tablinks").removeClass("active");
    $("#" + name)[0].style.display = "block"; // display only the passed tab content
    $("#" + name + "Tab").addClass("active"); // display grey "pressed" color on the passed tab button
}


$(".tag").click(function(e, d, g) {
    location.hash = e.target.id;
    location.reload();
});

function toggle(id) {
    $('#' + id).toggle("highlight", {}, 500);
}