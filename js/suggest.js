function submitbtn(){
    var useremail = document.getElementById('email').value;
    var emailcheck = useremail.includes('@' && '.');
    if (emailcheck){
        var d = new Date();
        var newfile = CreateObject("Scripting.FileSystemObject"); 
        var s = newfile.CreateTextFile(`../suggest/${d}.txt`);
        s.writeline(useremail);
        s.writeline(document.getElementById('inputsuggest').value);
        alert('제출되었습니다!!');

    } else{
        alert('올바른 이메일을 입력해주세요!!')
    }
}