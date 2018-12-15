$(".hover-column").mouseover(function(e) {
    this.old = this.className;
    this.className += ' animated pulse hover-column';
});

$(".hover-column").mouseout(function(e) {
    this.className = this.old;
});

function openTab(evt, name) {
    $(".tabcontent").hide();
    $(".tablinks").removeClass("active");
    $("#" + name)[0].style.display = "block";
    evt.currentTarget.className += " active";
}

$(function () {
    var hashes = window.location.hash.split("#").splice(1, 3);
    if (hashes.length > 0) {
        $("#" + hashes[0])[0].style.display = "block";
        $("#t" + hashes[0]).addClass("active");
        if (hashes.length > 1) {
            $("html, body").animate({ scrollTop: $('#'+hashes[1]).position().top }, 1000);
        }
    } else {
        $(".tabcontent")[0].style.display = "block";
    }
    $(".nostart").hide();
});

$(".tag").click(function(e, d, g) {
    location.hash = e.target.id;
    location.reload();
});

function toggle(id) {
    $('#' + id).toggle("highlight", {}, 500);
}