function signup () {
    const id = document.getElementById("id").value;
    const pw1 = document.getElementById("pw1").value;
    const pw2 = document.getElementById("pw2").value;
    const terms = document.getElementById("terms").checked;
    
    if(id === ""){
        alert("이름을 입력해주시겠어요?");
        
    } else if(pw1 === ""){
        alert("비밀번호를 입력해주시겠어요?");
        
    } else if(pw1 !== pw2){
        alert("비밀번호가 일치하지 않습니다.")
    
    } else if(terms === false){
        alert("약관에 동의해주세요.")
    
    } else {
        alert("Welcome to Open 💜!")
    }

}