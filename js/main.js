
var 여로1 = document.getElementById('이동!');

var 리버스1 = document.getElementById('리버스1');
var 리버스2 = document.getElementById('리버스2');
var 리버스3 = document.getElementById('리버스3');

var 츄츄1 = document.getElementById('츄츄1');
var 츄츄2 = document.getElementById('츄츄2');
var 츄츄3 = document.getElementById('츄츄3');
var 츄츄4 = document.getElementById('츄츄4');
var 츄츄5 = document.getElementById('츄츄5');



function go_calc(num1, num2, num3){
    calcmonster = (num1 * (60 / 7.5) * 60).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    calcExpPerHour = ((num1 * (60 / 7.5) * 60) * num2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    calcMoney = (num1 * (60 / 7.5) * 60 * 7.5 * num3).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function load_data(){
    var amountOfmonsters = 22;
    var exp_of_monster = 101389;
    var level_of_monster = 201
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("1사냥터").innerText = "풍화된 분노의 땅";
    document.getElementById("1마릿수1").innerText = amountOfmonsters;
    document.getElementById("1마릿수2").innerText = calcmonster;
    document.getElementById("1경험치").innerText = calcExpPerHour;
    document.getElementById("1메소").innerText = calcMoney;
    var amountOfmonsters = 23;
    var exp_of_monster = 104101;
    var level_of_monster = 202
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("2사냥터").innerText = "풍화된 슬픔의 땅";
    document.getElementById("2마릿수1").innerText = amountOfmonsters;
    document.getElementById("2마릿수2").innerText = calcmonster;
    document.getElementById("2경험치").innerText = calcExpPerHour;
    document.getElementById("2메소").innerText = calcMoney;
    var amountOfmonsters = 35;
    var exp_of_monster = 107125;
    var level_of_monster = 203
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("3사냥터").innerText = "숨겨진 호숫가";
    document.getElementById("3마릿수1").innerText = amountOfmonsters;
    document.getElementById("3마릿수2").innerText = calcmonster;
    document.getElementById("3경험치").innerText = calcExpPerHour;
    document.getElementById("3메소").innerText = calcMoney;
    var amountOfmonsters = 26;
    var exp_of_monster = 217564;
    var level_of_monster = 209
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("4사냥터").innerText = "숨겨진 화염지대";
    document.getElementById("4마릿수1").innerText = amountOfmonsters;
    document.getElementById("4마릿수2").innerText = calcmonster;
    document.getElementById("4경험치").innerText = calcExpPerHour;
    document.getElementById("4메소").innerText = calcMoney;
    var amountOfmonsters = 29;
    var exp_of_monster = 217564;
    var level_of_monster = 209
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("5사냥터").innerText = "숨겨진 동굴";
    document.getElementById("5마릿수1").innerText = amountOfmonsters;
    document.getElementById("5마릿수2").innerText = calcmonster;
    document.getElementById("5경험치").innerText = calcExpPerHour;
    document.getElementById("5메소").innerText = calcMoney;
    var amountOfmonsters = 21;
    var exp_of_monster = 248003;
    var level_of_monster = 210
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("11사냥터").innerText = "숨겨진 연구열차";
    document.getElementById("11마릿수1").innerText = amountOfmonsters;
    document.getElementById("11마릿수2").innerText = calcmonster;
    document.getElementById("11경험치").innerText = calcExpPerHour;
    document.getElementById("11메소").innerText = calcMoney;
    var amountOfmonsters = 21;
    var exp_of_monster = 253673;
    var level_of_monster = 211
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("12사냥터").innerText = "숨겨진 지하열차";
    document.getElementById("12마릿수1").innerText = amountOfmonsters;
    document.getElementById("12마릿수2").innerText = calcmonster;
    document.getElementById("12경험치").innerText = calcExpPerHour;
    document.getElementById("12메소").innerText = calcMoney;
    var amountOfmonsters = 31;
    var exp_of_monster = 265808;
    var level_of_monster = 213
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("13사냥터").innerText = "숨겨진 M타워";
    document.getElementById("13마릿수1").innerText = amountOfmonsters;
    document.getElementById("13마릿수2").innerText = calcmonster;
    document.getElementById("13경험치").innerText = calcExpPerHour;
    document.getElementById("13메소").innerText = calcMoney;
    var amountOfmonsters = 21;
    var exp_of_monster = 265808;
    var level_of_monster = 213
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("21사냥터").innerText = "츄릅포레스트 깊은곳";
    document.getElementById("21마릿수1").innerText = amountOfmonsters;
    document.getElementById("21마릿수2").innerText = calcmonster;
    document.getElementById("21경험치").innerText = calcExpPerHour;
    document.getElementById("21메소").innerText = calcMoney;
    var amountOfmonsters = 28;
    var exp_of_monster = 277832;
    var level_of_monster = 215
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("22사냥터").innerText = "격류지대 1";
    document.getElementById("22마릿수1").innerText = amountOfmonsters;
    document.getElementById("22마릿수2").innerText = calcmonster;
    document.getElementById("22경험치").innerText = calcExpPerHour;
    document.getElementById("22메소").innerText = calcMoney;
    var amountOfmonsters = 26;
    var exp_of_monster = 278138;
    var level_of_monster = 215
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("23사냥터").innerText = "격류지대 2";
    document.getElementById("23마릿수1").innerText = amountOfmonsters;
    document.getElementById("23마릿수2").innerText = calcmonster;
    document.getElementById("23경험치").innerText = calcExpPerHour;
    document.getElementById("23메소").innerText = calcMoney;
    var amountOfmonsters = 28;
    var exp_of_monster = 265808;
    var level_of_monster = 215.5
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("24사냥터").innerText = "격류지대 3";
    document.getElementById("24마릿수1").innerText = amountOfmonsters;
    document.getElementById("24마릿수2").innerText = calcmonster;
    document.getElementById("24경험치").innerText = calcExpPerHour;
    document.getElementById("24메소").innerText = calcMoney;
    var amountOfmonsters = 24;
    var exp_of_monster = 281090;
    var level_of_monster = 215.5
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("25사냥터").innerText = "폭포아래";
    document.getElementById("25마릿수1").innerText = amountOfmonsters;
    document.getElementById("25마릿수2").innerText = calcmonster;
    document.getElementById("25경험치").innerText = calcExpPerHour;
    document.getElementById("25메소").innerText = calcMoney;
    var amountOfmonsters = 24;
    var exp_of_monster = 309470;
    var level_of_monster = 220
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("31사냥터").innerText = "숨겨진 일리야드 들판";
    document.getElementById("31마릿수1").innerText = amountOfmonsters;
    document.getElementById("31마릿수2").innerText = calcmonster;
    document.getElementById("31경험치").innerText = calcExpPerHour;
    document.getElementById("31메소").innerText = calcMoney;
    var amountOfmonsters = 22;
    var exp_of_monster = 309470;
    var level_of_monster = 220
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("32사냥터").innerText = "숨겨진 펑고스 숲";
    document.getElementById("32마릿수1").innerText = amountOfmonsters;
    document.getElementById("32마릿수2").innerText = calcmonster;
    document.getElementById("32경험치").innerText = calcExpPerHour;
    document.getElementById("32메소").innerText = calcMoney;
    var amountOfmonsters = 38;
    var exp_of_monster = 319394.5;
    var level_of_monster = 221.5
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("41사냥터").innerText = "닭이 뛰노는 곳 3";
    document.getElementById("41마릿수1").innerText = amountOfmonsters;
    document.getElementById("41마릿수2").innerText = calcmonster;
    document.getElementById("41경험치").innerText = calcExpPerHour;
    document.getElementById("41메소").innerText = calcMoney;

    var amountOfmonsters = 30;
    var exp_of_monster = 329417;
    var level_of_monster = 223
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("42사냥터").innerText = "본색을 드러내는 곳 1";
    document.getElementById("42마릿수1").innerText = amountOfmonsters;
    document.getElementById("42마릿수2").innerText = calcmonster;
    document.getElementById("42경험치").innerText = calcExpPerHour;
    document.getElementById("42메소").innerText = calcMoney;

    var amountOfmonsters = 28;
    var exp_of_monster = 335675;
    var level_of_monster = 224
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("43사냥터").innerText = "춤추는 구두 점령지 1";
    document.getElementById("43마릿수1").innerText = amountOfmonsters;
    document.getElementById("43마릿수2").innerText = calcmonster;
    document.getElementById("43경험치").innerText = calcExpPerHour;
    document.getElementById("43메소").innerText = calcMoney;

    var amountOfmonsters = 28;
    var exp_of_monster = 349836;
    var level_of_monster = 226
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("44사냥터").innerText = "악몽의 시계탑 2층";
    document.getElementById("44마릿수1").innerText = amountOfmonsters;
    document.getElementById("44마릿수2").innerText = calcmonster;
    document.getElementById("44경험치").innerText = calcExpPerHour;
    document.getElementById("44메소").innerText = calcMoney;
    var amountOfmonsters = 	33;
    var exp_of_monster = 397208;
    var level_of_monster = 230.5
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("51사냥터").innerText = "물과 햇살의 숲";
    document.getElementById("51마릿수1").innerText = amountOfmonsters;
    document.getElementById("51마릿수2").innerText = calcmonster;
    document.getElementById("51경험치").innerText = calcExpPerHour;
    document.getElementById("51메소").innerText = calcMoney;
    var amountOfmonsters = 28;
    var exp_of_monster = 408788;
    var level_of_monster = 232
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("52사냥터").innerText = "흙의 숲";
    document.getElementById("52마릿수1").innerText = amountOfmonsters;
    document.getElementById("52마릿수2").innerText = calcmonster;
    document.getElementById("52경험치").innerText = calcExpPerHour;
    document.getElementById("52메소").innerText = calcMoney;
    var amountOfmonsters = 20;
    var exp_of_monster = 446505;
    var level_of_monster = 237
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("53사냥터").innerText = "동굴 아랫길";
    document.getElementById("53마릿수1").innerText = amountOfmonsters;
    document.getElementById("53마릿수2").innerText = calcmonster;
    document.getElementById("53경험치").innerText = calcExpPerHour;
    document.getElementById("53메소").innerText = calcMoney;
    var amountOfmonsters = 29;
    var exp_of_monster = 446505;
    var level_of_monster = 237
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("54사냥터").innerText = "동굴 윗길";
    document.getElementById("54마릿수1").innerText = amountOfmonsters;
    document.getElementById("54마릿수2").innerText = calcmonster;
    document.getElementById("54경험치").innerText = calcExpPerHour;
    document.getElementById("54메소").innerText = calcMoney;
    var amountOfmonsters = 21;
    var exp_of_monster = 458617;
    var level_of_monster = 238.5
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("55사냥터").innerText = "다섯 갈래 동굴";
    document.getElementById("55마릿수1").innerText = amountOfmonsters;
    document.getElementById("55마릿수2").innerText = calcmonster;
    document.getElementById("55경험치").innerText = calcExpPerHour;
    document.getElementById("55메소").innerText = calcMoney;

}



















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