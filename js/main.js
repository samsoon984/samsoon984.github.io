
var testbutton = document.getElementById('여로1');
testbutton.addEventListener('click', function(){
  document.getElementById("사냥터").innerText = 123123;
})



var calcbutton = document.getElementById('calc');
calcbutton.addEventListener('click', function(){
    var spawn_monsters = document.getElementById('spawn_monsters').value;
    var exp_of_monster = document.getElementById('exp_of_monster').value;
    var calcmonster = spawn_monsters * (60 / 7.5) * 60;
    var calcExpPerHour = calcmonster * exp_of_monster;
    parentTr = document.getElementById('tabletest');
    parentTr.children[0].innerHTML = "123";

    document.getElementById("expresult").innerText = parseInt(calcExpPerHour); 
    document.getElementById("countresult").innerText = parseInt(calcmonster);


})