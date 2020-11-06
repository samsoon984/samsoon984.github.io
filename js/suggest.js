function submitbtn(){
    var getEmail = document.getElementById('email')
    getEmail.select();
    document.execCommand("Copy");
    alert(`${getEmail.value} 복사 완료!`)
    document.execCommand("copy");
}