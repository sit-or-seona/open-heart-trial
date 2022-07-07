function signup () {
    const id = document.getElementById("id").value;
    const pw1 = document.getElementById("pw1").value;
    const pw2 = document.getElementById("pw2").value;
    const terms = document.getElementById("terms").checked;
    
    if(id === ""){
        alert("이름이 뭐예요~");
        
    } else if(pw1 === ""){
        alert("비밀번호 뭐예요~");
        
    } else if(pw1 !== pw2){
        alert("삐삡- 비밀번호가 일치하지 않아요!")
    
    } else if(terms === false){
        alert("약관에 체크해주세요~")
    
    } else {
        alert("Welcome to Open-💜!")
        pageLanding();
    }
}

function pageLanding () {
    location.href = "landing.html";
}