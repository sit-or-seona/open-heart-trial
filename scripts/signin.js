function signin () {
    const id = document.getElementById("id").value;
    const pw = document.getElementById("pw").value;
    
    if(id === ""){
        alert("이름이 뭐예요~");
        
    } else if(pw === ""){
        alert("비밀번호 뭐예요~");
        
    } else {
        alert("Welcome back!")
        pageLanding ();
    }
}
function pageLanding () {
    location.href = "landing.html";
}