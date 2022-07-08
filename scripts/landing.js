function getTime () {
    const date = new Date();
    const hours = String(date.getHours());
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const time = hours+":"+minutes
    document.getElementById("time").innerText = time;
} getTime();
setInterval(getTime, 1000);

function clickHome () {
    document.getElementById("contentFrame").setAttribute("src","home.html");
    document.getElementById("menu__home").setAttribute("src","./images/home-click.png");
    document.getElementById("menu__like").setAttribute("src","./images/like.png");
    document.getElementById("menu__chat").setAttribute("src","./images/chat.png");
    document.getElementById("menu__search").setAttribute("src","./images/search.png");
    document.getElementById("menu__profile").setAttribute("src","./images/profile.png");
}

function clickLike () {
    document.getElementById("contentFrame").setAttribute("src","like.html");
    document.getElementById("menu__home").setAttribute("src","./images/home.png");
    document.getElementById("menu__like").setAttribute("src","./images/like-click.png");
    document.getElementById("menu__chat").setAttribute("src","./images/chat.png");
    document.getElementById("menu__search").setAttribute("src","./images/search.png");
    document.getElementById("menu__profile").setAttribute("src","./images/profile.png");
}

function clickChat () {
    document.getElementById("contentFrame").setAttribute("src","chat.html");
    document.getElementById("menu__home").setAttribute("src","./images/home.png");
    document.getElementById("menu__like").setAttribute("src","./images/like.png");
    document.getElementById("menu__chat").setAttribute("src","./images/chat-click.png");
    document.getElementById("menu__search").setAttribute("src","./images/search.png");
    document.getElementById("menu__profile").setAttribute("src","./images/profile.png");
}

function clickSearch () {
    document.getElementById("contentFrame").setAttribute("src","search.html");
    document.getElementById("menu__home").setAttribute("src","./images/home.png");
    document.getElementById("menu__like").setAttribute("src","./images/like.png");
    document.getElementById("menu__chat").setAttribute("src","./images/chat.png");
    document.getElementById("menu__search").setAttribute("src","./images/search-click.png");
    document.getElementById("menu__profile").setAttribute("src","./images/profile.png");
}

function clickProfile () {
    document.getElementById("contentFrame").setAttribute("src","profile.html");
    document.getElementById("menu__home").setAttribute("src","./images/home.png");
    document.getElementById("menu__like").setAttribute("src","./images/like.png");
    document.getElementById("menu__chat").setAttribute("src","./images/chat.png");
    document.getElementById("menu__search").setAttribute("src","./images/search.png");
    document.getElementById("menu__profile").setAttribute("src","./images/profile-click.png");
}