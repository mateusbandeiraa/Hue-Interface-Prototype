$(document).ready(function () {
    $("#hue-logo").click(function () {
        scrollTop();
    });

    $("#btn-search").click(function () {
        if ($("#search-field").val() == "") {
            toggleSearch();
        } else {
            // DO SEARCH
        }
    });

    $("#nav-toggler").click(function(){
        toggleNav();
    });

    $("#search-field").blur(function () {
        if ($("#search-field").val() == "" && !$("#btn-search").is(":hover")) {
            toggleSearch();
        }
    });

    $(".upvote").click(function (e) {
        $(e.currentTarget).addClass("active");
        $(e.currentTarget).next().addClass("upvoted");
        $(e.currentTarget).next().removeClass("downvoted");
        $(e.currentTarget).next().next().removeClass("active");
    });
    $(".downvote").click(function (e) {
        $(e.currentTarget).addClass("active");
        $(e.currentTarget).prev().addClass("downvoted");
        $(e.currentTarget).prev().removeClass("upvoted");
        $(e.currentTarget).prev().prev().removeClass("active");
    });
});

function scrollTop() {
    $('html, body').animate({ scrollTop: 0 }, 'fast');
}

function toggleSearch() {
    var searchVisible = $("#search-field").hasClass("visible");

    if (searchVisible) {
        hideSearch();
    } else {
        showSearch();
    }
}

function toggleNav(){
    var header = $("header");
    var nav = $("nav");
    var navActive = header.hasClass("active");

    if(navActive){
        header.removeClass("active");
    } else{
        header.addClass("active")
    }
}

function showSearch() {
    var searchField = $("#search-field");
    var logo = $("#hue-logo");
    logo.removeClass("visible").addClass("invisible");
    searchField.removeClass("invisible").addClass("visible").focus();
}
function hideSearch() {
    var searchField = $("#search-field");
    var logo = $("#hue-logo");
    searchField.removeClass("visible").addClass("invisible");
    logo.removeClass("invisible").addClass("visible")
}