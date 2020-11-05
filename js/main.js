
var 여로1 = document.getElementById('여로1');
var 여로2 = document.getElementById('여로2');
var 여로3 = document.getElementById('여로3');
var 여로4 = document.getElementById('여로4');
var 여로5 = document.getElementById('여로5');

var 리버스1 = document.getElementById('리버스1');
var 리버스2 = document.getElementById('리버스2');
var 리버스3 = document.getElementById('리버스3');

function go_calc(num1, num2, num3){
    calcmonster = (num1 * (60 / 7.5) * 60).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    calcExpPerHour = ((num1 * (60 / 7.5) * 60) * num2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    calcMoney = (num1 * (60 / 7.5) * 60 * 7.5 * num3).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

여로1.addEventListener('click', function(){
    var amountOfmonsters = 22;
    var exp_of_monster = 101389;
    var level_of_monster = 201
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("사냥터").innerText = "풍화된 분노의 땅";
    document.getElementById("마릿수1").innerText = amountOfmonsters;
    document.getElementById("마릿수2").innerText = calcmonster;
    document.getElementById("경험치").innerText = calcExpPerHour;
    document.getElementById("메소").innerText = calcMoney;
})
여로2.addEventListener('click', function(){
    var amountOfmonsters = 23;
    var exp_of_monster = 104101;
    var level_of_monster = 202
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("사냥터").innerText = "풍화된 슬픔의 땅";
    document.getElementById("마릿수1").innerText = amountOfmonsters;
    document.getElementById("마릿수2").innerText = calcmonster;
    document.getElementById("경험치").innerText = calcExpPerHour;
    document.getElementById("메소").innerText = calcMoney;
})

여로3.addEventListener('click', function(){
    var amountOfmonsters = 35;
    var exp_of_monster = 107125;
    var level_of_monster = 203
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("사냥터").innerText = "숨겨진 호숫가";
    document.getElementById("마릿수1").innerText = amountOfmonsters;
    document.getElementById("마릿수2").innerText = calcmonster;
    document.getElementById("경험치").innerText = calcExpPerHour;
    document.getElementById("메소").innerText = calcMoney;
})

여로4.addEventListener('click', function(){
    var amountOfmonsters = 26;
    var exp_of_monster = 217564;
    var level_of_monster = 209
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("사냥터").innerText = "숨겨진 화염지대";
    document.getElementById("마릿수1").innerText = amountOfmonsters;
    document.getElementById("마릿수2").innerText = calcmonster;
    document.getElementById("경험치").innerText = calcExpPerHour;
    document.getElementById("메소").innerText = calcMoney;
})

여로5.addEventListener('click', function(){
    var amountOfmonsters = 29;
    var exp_of_monster = 217564;
    var level_of_monster = 209
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("사냥터").innerText = "숨겨진 동굴";
    document.getElementById("마릿수1").innerText = amountOfmonsters;
    document.getElementById("마릿수2").innerText = calcmonster;
    document.getElementById("경험치").innerText = calcExpPerHour;
    document.getElementById("메소").innerText = calcMoney;
})

리버스1.addEventListener('click', function(){
    var amountOfmonsters = 21;
    var exp_of_monster = 248003;
    var level_of_monster = 210
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("사냥터").innerText = "숨겨진 연구열차";
    document.getElementById("마릿수1").innerText = amountOfmonsters;
    document.getElementById("마릿수2").innerText = calcmonster;
    document.getElementById("경험치").innerText = calcExpPerHour;
    document.getElementById("메소").innerText = calcMoney;
})

리버스2.addEventListener('click', function(){
    var amountOfmonsters = 21;
    var exp_of_monster = 253673;
    var level_of_monster = 211
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("사냥터").innerText = "숨겨진 지하열차";
    document.getElementById("마릿수1").innerText = amountOfmonsters;
    document.getElementById("마릿수2").innerText = calcmonster;
    document.getElementById("경험치").innerText = calcExpPerHour;
    document.getElementById("메소").innerText = calcMoney;
})

리버스3.addEventListener('click', function(){
    var amountOfmonsters = 31;
    var exp_of_monster = 265808;
    var level_of_monster = 213
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("사냥터").innerText = "숨겨진 M타워";
    document.getElementById("마릿수1").innerText = amountOfmonsters;
    document.getElementById("마릿수2").innerText = calcmonster;
    document.getElementById("경험치").innerText = calcExpPerHour;
    document.getElementById("메소").innerText = calcMoney;
})


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