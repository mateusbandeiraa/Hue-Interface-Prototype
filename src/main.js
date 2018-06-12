$(document).ready(function () {
    $("#hue-logo").click(function () {
        var header = $("header");
        if (header.hasClass("active")) {
            header.removeClass("active");
        } else {
            scrollTop();
        }
    });

    $("#btn-search").click(function(){
        toggleSearch();
    });

    $("#nav-toggler").click(function () {
        toggleNav();
    });

    $(".upvote").click(function (e) {
        if ($(e.currentTarget).hasClass("active")) {
            $(e.currentTarget).removeClass("active");
            $(e.currentTarget).next().removeClass("upvoted");
        } else {
            $(e.currentTarget).addClass("active");
            $(e.currentTarget).next().addClass("upvoted");
            $(e.currentTarget).next().removeClass("downvoted");
            $(e.currentTarget).next().next().removeClass("active");
        }
    });
    $(".downvote").click(function (e) {
        if ($(e.currentTarget).hasClass("active")) {
            $(e.currentTarget).removeClass("active");
            $(e.currentTarget).prev().removeClass("downvoted");
        } else {
            $(e.currentTarget).addClass("active");
            $(e.currentTarget).prev().addClass("downvoted");
            $(e.currentTarget).prev().removeClass("upvoted");
            $(e.currentTarget).prev().prev().removeClass("active");
        }
    });
});

function scrollTop() {
    $('html, body').animate({ scrollTop: 0 }, 'fast');
}

function toggleNav() {
    var header = $("header");
    var nav = $("nav");
    var navActive = header.hasClass("active");

    if (navActive) {
        header.removeClass("active");
    } else {
        header.addClass("active")
    }
}

function toggleSearch(){
    var searchDiv = $("#search");
    var searchField = $("#search-field");
    var btnSearch = $("#btn-search");

    if(searchField.hasClass("visible")){
        searchField.removeClass("visible");
        searchDiv.removeClass("active");
        btnSearch.removeClass("active");
    }else{
        searchDiv.addClass("active");
        searchField.addClass("visible");
        btnSearch.addClass("active");
    }
}