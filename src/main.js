var posts = [{ "id": 0, "section": 0, "author": "Obi-Wan Quibebe", "upvotes": 16045, "downvotes": 1001, "title": "Magnificent, aren't they?", "src": "../res/meme_1.jpg", "description": "Upper text: 'How many Obi-Wan memes do you have on your phone?'. Image: Obi-Wan and Lama Su walking on a corridor. Obi-Wan is looking at a clone army. Scene subtitle: '200,000 with more than a million well on the way'" },
{ "id": 1, "section": 1, "author": "Gendelf teh gey", "upvotes": 1300, "downvotes": 150, "title": "When your slice of pizza falls on the floor", "src": "../res/meme_2.png", "description": "Image: Theoden King. Scene subtitle: 'What can men do against such reckless hate?'" },
{ "id": 2, "section": 2, "author": "definately not Evil Morty", "upvotes": 1050, "downvotes": 45, "title": "Rick and Morty got renewed", "src": "../res/meme_3.gif", "description": "Gif: Morty having seizures on the floor. Subtitle: 'Uncontrollably excited'" },
{ "id": 3, "section": 1, "author": "Theoden K", "upvotes": 300, "downvotes": 45, "title": "Final answer", "src": "../res/meme_4.jpg", "description": "Théoden is on the Who Wants to Be a Millionaire. The question is: 'Where was Gondor when the Westfold fell? A(Selected answer): 'Not giving a fuck', B: 'Imladris', C: 'Prancing Pony Inn', D(Correct nswer): 'Gondor'. "},
{ "id": 4, "section": 0, "author": "AnaKimJong-Un", "upvotes": 66, "downvotes": 1, "title": "Just saw this on the parking lot", "src": "../res/meme_5.jpg", "description": "A silver car with a green sticker of a Toyota logo with Yoda ears. The name 'Toyoda' is written below it." },
{ "id": 5, "section": 7, "author": "BSuser", "upvotes": 2, "downvotes": 0, "title": "Quando pego a folha do kahoot de papel", "src": "../res/meme_6.gif", "description": "Gif: Ewan McGregor olha para uma folha de papel, coloca-o sobre uma mesa e grita histéricamente." },
{ "id": 6, "section": 7, "author": "Rickão", "upvotes": 500, "downvotes": 6, "title": "TRIGGERED", "src": "../res/meme_7.jpg", "description": "Manchete: 'SP teve 800km de cabos furtados em 4 meses'. Abaixo, Patrick Estrela está com brilho nos olhos." }];

var sections = [{ "id": 0, "name": "Star Wars Prequels", "subscribers": 489497, "img": "../res/star_wars_prequels.jpg", "cover": "../res/star_wars_prequels_cover_2.jpg" },
{ "id": 1, "name": "LOTR Memes", "subscribers": 3791000, "img": "../res/lotr_memes.png", "cover": "../res/lotr_memes_cover.jpg" },
{ "id": 2, "name": "Rick &amp Morty", "subscribers": 137002, "img": "../res/rick_and_morty.jpg", "cover": "../res/rick_and_morty_cover.jpg" },
{ "id": 3, "name": "Avingadores da deprê", "subscribers": 2012, "img": "../res/avengers_depression.jpg", "cover": "../res/avengers_depression_cover.jpg" },
{ "id": 4, "name": "Seleção Brasileira memes", "subscribers": 2213417, "img": "../res/selecao_brasileira.jpg", "cover": "../res/selecao_brasileira_cover.jpg" },
{ "id": 5, "name": "Nicholas Cage", "subscribers": 1526, "img": "../res/nic_cage.jpg", "cover": "../res/nic_cage_cover.jpg" },
{ "id": 6, "name": "Choque de Cultura", "subscribers": 468, "img": "../res/choque_cultura.jpg", "cover": "../res/choque_cultura_cover.png" },
{ "id": 7, "name": "Unirisos", "subscribers": 1234, "img": "../res/unirisos.jpg", "cover": "../res/unirisos_cover.jpg" }];

var postModel = "<article class=\"post\" id=\"post-%post-id%\"><section class=\"post-info\"><h2>%post-title%</h2><ul class=\"fa-ul\"><li class=\"section-name\"><a class=\"discrete\" href=\"%section-link%\"><span class=\"fa-li\"><i class=\"fas fa-map-marker\" title=\"Seção\"></i></span>%post-section%</a></li><li class=\"author-name\"><span class=\"fa-li\"><i class=\"fas fa-user\" title=\"Autor\"></i></span>%post-author%</li></ul></section><section class=\"post-content\"><img class=\"img-card-bottom\" src=\"%post-img%\" alt=\"%post-description%\"></section><section class=\"post-actions\"><div class=\"align-left\"><button class=\"btn-round upvote %upvote-active%\" type=\"button\" title=\"Upvote\" post-id=\"%post-id%\"><i class=\"fas fa-lg fa-angle-up\"></i></button><span class=\"upvote-counter %counter-active%\" post-id=\"%post-id%\">%post-score%</span><button class=\"btn-round downvote %downvote-active%\" type=\"button\" title=\"Downvote\" post-id=\"%post-id%\"><i class=\"fas fa-lg fa-angle-down\"></i></button></div><div class=\"align-center\"><button type=\"button\" class=\"btn-round\" title=\"Comentários\"><i class=\"fas fa-lg fa-comment-alt\"></i></button></div><div class=\"align-right\"><button type=\"button\" class=\"btn-round\" title=\"Compartilhar\"><i class=\"fas fa-lg fa-share-square\"></i></button></div></section></article>";
var user = "";
var users = [];
var votes = [];
var subscribings = [];
var curUrl = window.location.href;
var rootUrl = curUrl.substring(0, curUrl.lastIndexOf('/') + 1);
$(document).ready(function () {
    if (getCookie("user") != "") {
        user = JSON.parse(getCookie("user"));
    }
    if (getCookie("users") != "") {
        users = JSON.parse(getCookie("users"));
    } else {
        users = [];
    }
    refreshVotes();
    refreshSubscribings();

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
            window.location.href = rootUrl + "busca.html?q=" + encodeURI(query);
        }
    });

    $("#search").submit(function(e){
        e.preventDefault();
        query = searchField.val();
        window.location.href = rootUrl + "busca.html?q=" + encodeURI(query);
    });

    searchField.on("blur", function () {
        if (searchField.val() == "" && !btnSearch.is(":hover")) {
            hideSearch();
        }
    });


    $("#nav-toggler").click(function () {
        toggleNav();
    });

    $("#btn-collapse-menu").click(function () {
        toggleNav();
    });

    $(".upvote").click(function (e) {
        var postID = $(e.currentTarget).attr("post-id");
        console.log('aha');
        vote(user, postID, true);
    });
    $(".downvote").click(function (e) {
        var postID = $(e.currentTarget).attr("post-id");
        vote(user, postID, false);
    });

    if (user != "") {
        $("#greeting").html("Bem vindo, " + user.name);
        $("nav").children()[0].innerHTML = `
        <li>
            <a class="btn-round" href="#">Perfil</a>
            <a class="btn-round" href="#">Ajustes</a>
            <a class="btn-round" href="#">Notificações</a>
            <a class="btn-round" href="#" id="btn-logout">Logout</a>
        </li>
        `;

        $("#btn-logout").click(function () {
            logout();
        });
    }
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

function writeUser(e) {
    user = e;
    users.push(user);
    setCookie("users", JSON.stringify(users));
}

function getUser(email) {
    users = getCookie("users");
    if (users != "")
        users = JSON.parse(users);

    for (var i = 0; i < users.length; i++) {
        if (users[i].email == email) {
            return users[i];
        }
    }

    return null;

}

function getScore(post) {
    var baseUpvotes = post.upvotes;
    var baseDownvotes = post.downvotes;

    var score = baseUpvotes - baseDownvotes;

    refreshVotes();

    for (var i = 0; i < votes.length; i++) {
        if (votes[i].post == post.id) {
            if (votes[i].up) {
                score++;
            } else {
                score--;
            }
        }
    }

    return score;
}

function logout() {
    user = {};
    setCookie("user", "");
    window.location.href = rootUrl + "index.html";
}

function generatePostHTML(post) {
    var counterActive = "";
    var upActive = "";
    var downActive = "";
    refreshVotes();
    user = getCookie("user");
    if (user != "")
        user = JSON.parse(user);

    for (var i = 0; i < votes.length; i++) {
        if (votes[i].user == user.email && votes[i].post == post.id) {
            if (votes[i].up) {
                counterActive = "upvoted";
                upActive = "active";
            } else {
                counterActive = "downvoted";
                downActive = "active";
            }
            break;
        }
    }
    return postModel.replace(/%post-id%/g, post.id).replace("%post-title%", post.title).replace("%post-section%", sections[post.section].name).replace("%section-link%", rootUrl + "secao.html?h=" + post.section).replace("%post-author%", post.author).replace("%post-img%", post.src).replace("%post-description%", post.description).replace("%upvote-active%", upActive).replace("%counter-active%", counterActive).replace("%post-score%", getScore(post)).replace("%downvote-active%", downActive);
}

function setCookie(cname, cvalue, exdays) {
    document.cookie = cname + "=" + cvalue + ";" + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function deuRuim() {
    setCookie("user", "");
    setCookie("users", "");
    setCookie("votes", "");
    setCookie("subscribings", "");
    user = {};
    users = [];
    votes = [];
    subscribings = [];
}

function vote(user, post, up) {
    if (user == "") {
        return;
    }
    var vote = { "user": user.email, "post": post, "up": up };
    refreshVotes();

    var saved = false;
    var deleted = false;
    for (var i = 0; i < votes.length; i++) {
        if (votes[i].user == vote.user && votes[i].post == vote.post) {
            if (votes[i].up == vote.up) {
                votes.splice(votes.indexOf(vote), 1);
                deleted = true;
            } else {
                votes[i] = vote;
            }
            saved = true;
            break;
        }
    }

    console.log(votes);
    if (!saved) {
        votes.push(vote);
    }
    if (deleted) {
        $(".upvote-counter[post-id=\"" + post + "\"]").removeClass("downvoted");
        $(".downvote[post-id=\"" + post + "\"]").removeClass("active");
        $(".upvote-counter[post-id=\"" + post + "\"]").removeClass("upvoted");
        $(".upvote[post-id=\"" + post + "\"]").removeClass("active");
    } else if (vote.up) {
        $(".upvote-counter[post-id=\"" + post + "\"]").addClass("upvoted");
        $(".upvote-counter[post-id=\"" + post + "\"]").removeClass("downvoted");

        $(".upvote[post-id=\"" + post + "\"]").addClass("active");
        $(".downvote[post-id=\"" + post + "\"]").removeClass("active");
    } else {
        $(".upvote-counter[post-id=\"" + post + "\"]").addClass("downvoted");
        $(".upvote-counter[post-id=\"" + post + "\"]").removeClass("upvoted");

        $(".upvote[post-id=\"" + post + "\"]").removeClass("active");
        $(".downvote[post-id=\"" + post + "\"]").addClass("active");
    }
    setCookie("votes", JSON.stringify(votes));

    $(".upvote-counter[post-id=\"" + post + "\"]").html(getScore(posts[post]));

    //console.log(votes);

}

function refreshVotes() {
    votes = getCookie("votes");
    if (votes != "") {
        votes = JSON.parse(votes);
    } else {
        votes = [];
    }
}

function refreshSubscribings() {
    subscribings = getCookie("subscribings");
    if (subscribings != "") {
        subscribings = JSON.parse(subscribings);
    } else {
        subscribings = [];
    }
}

function subscribe(user, section) {
    var subscribe = { "user": user, "section": parseInt(section, 10) };
    refreshSubscribings();
    if (isSubscribed(user, section) >= 0) {
        return;
    }
    subscribings.push(subscribe);
    setCookie("subscribings", JSON.stringify(subscribings));
    refreshSubscribings();
}

function unsubscribe(user, section) {
    var index = isSubscribed(user, section);
    refreshSubscribings();
    subscribings.splice(index, 1);
    setCookie("subscribings", JSON.stringify(subscribings));
    refreshSubscribings();
}

function isSubscribed(user, section) {
    refreshSubscribings();
    for (var i = 0; i < subscribings.length; i++) {
        var subscribe = subscribings[i];
        if (subscribe.user == user && subscribe.section == section) {
            return i;
        }
    }
    return -1;
}