function clickPhotos () {
    document.getElementById("profileFrame").setAttribute("src","profile-photos.html");
    document.getElementById("profile__photos").style = "color:black;"
    document.getElementById("profile__info").style = "color: #d9d9d9;"
    document.getElementById("profile__mention").style = "color: #d9d9d9;"
}

function clickInfo () {
    document.getElementById("profileFrame").setAttribute("src","profile-info.html");
    document.getElementById("profile__photos").style = "color: #d9d9d9;"
    document.getElementById("profile__info").style = "color:black;"
    document.getElementById("profile__mention").style = "color: #d9d9d9;"
}

function clickMention () {
    document.getElementById("profileFrame").setAttribute("src","profile-mention.html");
    document.getElementById("profile__photos").style = "color: #d9d9d9;"
    document.getElementById("profile__info").style = "color: #d9d9d9;"
    document.getElementById("profile__mention").style = "color:black;"
}