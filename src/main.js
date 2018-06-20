$(document).ready(function () {
    searchDiv = $("#search");
    searchField = $("#search-field");
    btnSearch = $("#btn-search");

    $("#hue-logo").click(function () {
        var header = $("header");
        if (header.hasClass("active")) {
            header.removeClass("active");
        } else {
            scrollTop();
        }
    });

    btnSearch.click(function () {
        query = searchField.val();
        if (query == "") {
            toggleSearch();
            wasBlurred = false;

        } else {
            var location = window.location.href;
            location = location.substring(0, location.lastIndexOf('/'));
            window.location.href = location + "/busca.html?q=" + encodeURI(query);
        }
    });

    searchField.on("blur", function () {
        if (searchField.val() == "" && !btnSearch.is(":hover")) {
            hideSearch();
        }
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

function hideSearch() {
    searchField.removeClass("active");
    searchDiv.removeClass("active");
    searchDiv.val("");
    btnSearch.removeClass("active");
    btnSearch.blur();

}

function showSearch() {
    searchDiv.addClass("active");
    searchField.addClass("active");
    btnSearch.addClass("active");
    searchField.focus();
}

function toggleSearch() {

    if (searchField.hasClass("active")) {
        hideSearch()
    } else {
        showSearch();
    }
}