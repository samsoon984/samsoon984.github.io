
var 여로1 = document.getElementById('이동!');

var 리버스1 = document.getElementById('리버스1');
var 리버스2 = document.getElementById('리버스2');
var 리버스3 = document.getElementById('리버스3');

var 츄츄1 = document.getElementById('츄츄1');
var 츄츄2 = document.getElementById('츄츄2');
var 츄츄3 = document.getElementById('츄츄3');
var 츄츄4 = document.getElementById('츄츄4');
var 츄츄5 = document.getElementById('츄츄5');
 

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function go_calc(num1, num2, num3){
    calcmonster = (num1 * (60 / 7.5) * 60).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    calcExpPerHour = ((num1 * (60 / 7.5) * 60) * num2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    calcMoney = (num1 * (60 / 7.5) * 60 * 7.5 * num3).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function load_data(){
    var amountOfmonsters = 22;
    var exp_of_monster = 101389;
    var level_of_monster = 201;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("1사냥터").innerText = "풍화된 분노의 땅";
    document.getElementById("1마릿수1").innerText = amountOfmonsters;
    document.getElementById("1마릿수2").innerText = calcmonster;
    document.getElementById("1경험치").innerText = calcExpPerHour;
    document.getElementById("1메소").innerText = calcMoney;
    var amountOfmonsters = 23;
    var exp_of_monster = 104101;
    var level_of_monster = 202;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("2사냥터").innerText = "풍화된 슬픔의 땅";
    document.getElementById("2마릿수1").innerText = amountOfmonsters;
    document.getElementById("2마릿수2").innerText = calcmonster;
    document.getElementById("2경험치").innerText = calcExpPerHour;
    document.getElementById("2메소").innerText = calcMoney;
    var amountOfmonsters = 35;
    var exp_of_monster = 107125;
    var level_of_monster = 203;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("3사냥터").innerText = "숨겨진 호숫가";
    document.getElementById("3마릿수1").innerText = amountOfmonsters;
    document.getElementById("3마릿수2").innerText = calcmonster;
    document.getElementById("3경험치").innerText = calcExpPerHour;
    document.getElementById("3메소").innerText = calcMoney;
    var amountOfmonsters = 26;
    var exp_of_monster = 217564;
    var level_of_monster = 209;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("4사냥터").innerText = "숨겨진 화염지대";
    document.getElementById("4마릿수1").innerText = amountOfmonsters;
    document.getElementById("4마릿수2").innerText = calcmonster;
    document.getElementById("4경험치").innerText = calcExpPerHour;
    document.getElementById("4메소").innerText = calcMoney;
    var amountOfmonsters = 29;
    var exp_of_monster = 217564;
    var level_of_monster = 209;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("5사냥터").innerText = "숨겨진 동굴";
    document.getElementById("5마릿수1").innerText = amountOfmonsters;
    document.getElementById("5마릿수2").innerText = calcmonster;
    document.getElementById("5경험치").innerText = calcExpPerHour;
    document.getElementById("5메소").innerText = calcMoney;
    var amountOfmonsters = 21;
    var exp_of_monster = 248003;
    var level_of_monster = 210;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("11사냥터").innerText = "숨겨진 연구열차";
    document.getElementById("11마릿수1").innerText = amountOfmonsters;
    document.getElementById("11마릿수2").innerText = calcmonster;
    document.getElementById("11경험치").innerText = calcExpPerHour;
    document.getElementById("11메소").innerText = calcMoney;
    var amountOfmonsters = 21;
    var exp_of_monster = 253673;
    var level_of_monster = 211;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("12사냥터").innerText = "숨겨진 지하열차";
    document.getElementById("12마릿수1").innerText = amountOfmonsters;
    document.getElementById("12마릿수2").innerText = calcmonster;
    document.getElementById("12경험치").innerText = calcExpPerHour;
    document.getElementById("12메소").innerText = calcMoney;
    var amountOfmonsters = 31;
    var exp_of_monster = 265808;
    var level_of_monster = 213;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("13사냥터").innerText = "숨겨진 M타워";
    document.getElementById("13마릿수1").innerText = amountOfmonsters;
    document.getElementById("13마릿수2").innerText = calcmonster;
    document.getElementById("13경험치").innerText = calcExpPerHour;
    document.getElementById("13메소").innerText = calcMoney;
    var amountOfmonsters = 21;
    var exp_of_monster = 265808;
    var level_of_monster = 213;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("21사냥터").innerText = "츄릅포레스트 깊은곳";
    document.getElementById("21마릿수1").innerText = amountOfmonsters;
    document.getElementById("21마릿수2").innerText = calcmonster;
    document.getElementById("21경험치").innerText = calcExpPerHour;
    document.getElementById("21메소").innerText = calcMoney;
    var amountOfmonsters = 28;
    var exp_of_monster = 277832;
    var level_of_monster = 215;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("22사냥터").innerText = "격류지대 1";
    document.getElementById("22마릿수1").innerText = amountOfmonsters;
    document.getElementById("22마릿수2").innerText = calcmonster;
    document.getElementById("22경험치").innerText = calcExpPerHour;
    document.getElementById("22메소").innerText = calcMoney;
    var amountOfmonsters = 26;
    var exp_of_monster = 278138;
    var level_of_monster = 215;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("23사냥터").innerText = "격류지대 2";
    document.getElementById("23마릿수1").innerText = amountOfmonsters;
    document.getElementById("23마릿수2").innerText = calcmonster;
    document.getElementById("23경험치").innerText = calcExpPerHour;
    document.getElementById("23메소").innerText = calcMoney;
    var amountOfmonsters = 28;
    var exp_of_monster = 265808;
    var level_of_monster = 215.5;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("24사냥터").innerText = "격류지대 3";
    document.getElementById("24마릿수1").innerText = amountOfmonsters;
    document.getElementById("24마릿수2").innerText = calcmonster;
    document.getElementById("24경험치").innerText = calcExpPerHour;
    document.getElementById("24메소").innerText = calcMoney;
    var amountOfmonsters = 24;
    var exp_of_monster = 281090;
    var level_of_monster = 215.5;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("25사냥터").innerText = "폭포아래";
    document.getElementById("25마릿수1").innerText = amountOfmonsters;
    document.getElementById("25마릿수2").innerText = calcmonster;
    document.getElementById("25경험치").innerText = calcExpPerHour;
    document.getElementById("25메소").innerText = calcMoney;
    var amountOfmonsters = 24;
    var exp_of_monster = 309470;
    var level_of_monster = 220;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("31사냥터").innerText = "숨겨진 일리야드 들판";
    document.getElementById("31마릿수1").innerText = amountOfmonsters;
    document.getElementById("31마릿수2").innerText = calcmonster;
    document.getElementById("31경험치").innerText = calcExpPerHour;
    document.getElementById("31메소").innerText = calcMoney;
    var amountOfmonsters = 22;
    var exp_of_monster = 309470;
    var level_of_monster = 220;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("32사냥터").innerText = "숨겨진 펑고스 숲";
    document.getElementById("32마릿수1").innerText = amountOfmonsters;
    document.getElementById("32마릿수2").innerText = calcmonster;
    document.getElementById("32경험치").innerText = calcExpPerHour;
    document.getElementById("32메소").innerText = calcMoney;
    var amountOfmonsters = 38;
    var exp_of_monster = 319394.5;
    var level_of_monster = 221.5;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("41사냥터").innerText = "닭이 뛰노는 곳 3";
    document.getElementById("41마릿수1").innerText = amountOfmonsters;
    document.getElementById("41마릿수2").innerText = calcmonster;
    document.getElementById("41경험치").innerText = calcExpPerHour;
    document.getElementById("41메소").innerText = calcMoney;

    var amountOfmonsters = 30;
    var exp_of_monster = 329417;
    var level_of_monster = 223;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("42사냥터").innerText = "본색을 드러내는 곳 1";
    document.getElementById("42마릿수1").innerText = amountOfmonsters;
    document.getElementById("42마릿수2").innerText = calcmonster;
    document.getElementById("42경험치").innerText = calcExpPerHour;
    document.getElementById("42메소").innerText = calcMoney;

    var amountOfmonsters = 28;
    var exp_of_monster = 335675;
    var level_of_monster = 224;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("43사냥터").innerText = "춤추는 구두 점령지 1";
    document.getElementById("43마릿수1").innerText = amountOfmonsters;
    document.getElementById("43마릿수2").innerText = calcmonster;
    document.getElementById("43경험치").innerText = calcExpPerHour;
    document.getElementById("43메소").innerText = calcMoney;

    var amountOfmonsters = 28;
    var exp_of_monster = 349836;
    var level_of_monster = 226;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("44사냥터").innerText = "악몽의 시계탑 2층";
    document.getElementById("44마릿수1").innerText = amountOfmonsters;
    document.getElementById("44마릿수2").innerText = calcmonster;
    document.getElementById("44경험치").innerText = calcExpPerHour;
    document.getElementById("44메소").innerText = calcMoney;
    var amountOfmonsters = 	33;
    var exp_of_monster = 397208;
    var level_of_monster = 230.5;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("51사냥터").innerText = "물과 햇살의 숲";
    document.getElementById("51마릿수1").innerText = amountOfmonsters;
    document.getElementById("51마릿수2").innerText = calcmonster;
    document.getElementById("51경험치").innerText = calcExpPerHour;
    document.getElementById("51메소").innerText = calcMoney;
    var amountOfmonsters = 28;
    var exp_of_monster = 408788;
    var level_of_monster = 232;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("52사냥터").innerText = "흙의 숲";
    document.getElementById("52마릿수1").innerText = amountOfmonsters;
    document.getElementById("52마릿수2").innerText = calcmonster;
    document.getElementById("52경험치").innerText = calcExpPerHour;
    document.getElementById("52메소").innerText = calcMoney;
    var amountOfmonsters = 20;
    var exp_of_monster = 446505;
    var level_of_monster = 237;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("53사냥터").innerText = "동굴 아랫길";
    document.getElementById("53마릿수1").innerText = amountOfmonsters;
    document.getElementById("53마릿수2").innerText = calcmonster;
    document.getElementById("53경험치").innerText = calcExpPerHour;
    document.getElementById("53메소").innerText = calcMoney;
    var amountOfmonsters = 29;
    var exp_of_monster = 446505;
    var level_of_monster = 237;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("54사냥터").innerText = "동굴 윗길";
    document.getElementById("54마릿수1").innerText = amountOfmonsters;
    document.getElementById("54마릿수2").innerText = calcmonster;
    document.getElementById("54경험치").innerText = calcExpPerHour;
    document.getElementById("54메소").innerText = calcMoney;
    var amountOfmonsters = 21;
    var exp_of_monster = 458617;
    var level_of_monster = 238.5;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("55사냥터").innerText = "다섯 갈래 동굴";
    document.getElementById("55마릿수1").innerText = amountOfmonsters;
    document.getElementById("55마릿수2").innerText = calcmonster;
    document.getElementById("55경험치").innerText = calcExpPerHour;
    document.getElementById("55메소").innerText = calcMoney;



    var amountOfmonsters = 32;
    var exp_of_monster = 454564;
    var level_of_monster = 238;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("61사냥터").innerText = "형님들 구역 2";
    document.getElementById("61마릿수1").innerText = amountOfmonsters;
    document.getElementById("61마릿수2").innerText = calcmonster;
    document.getElementById("61경험치").innerText = calcExpPerHour;
    document.getElementById("61메소").innerText = calcMoney;
    var amountOfmonsters = 37;
    var exp_of_monster = 462670;
    var level_of_monster = 239;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("62사냥터").innerText = "그림자가 춤추는 곳 2";
    document.getElementById("62마릿수1").innerText = amountOfmonsters;
    document.getElementById("62마릿수2").innerText = calcmonster;
    document.getElementById("62경험치").innerText = calcExpPerHour;
    document.getElementById("62메소").innerText = calcMoney;
    var amountOfmonsters = 37;
    var exp_of_monster = 466747;
    var level_of_monster = 239.5;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("63사냥터").innerText = "그림자가 춤추는 곳 3";
    document.getElementById("63마릿수1").innerText = amountOfmonsters;
    document.getElementById("63마릿수2").innerText = calcmonster;
    document.getElementById("63경험치").innerText = calcExpPerHour;
    document.getElementById("63메소").innerText = calcMoney;
    var amountOfmonsters = 33;
    var exp_of_monster = 470824;
    var level_of_monster = 240;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("64사냥터").innerText = "그림자가 춤추는 곳 4";
    document.getElementById("64마릿수1").innerText = amountOfmonsters;
    document.getElementById("64마릿수2").innerText = calcmonster;
    document.getElementById("64경험치").innerText = calcExpPerHour;
    document.getElementById("64메소").innerText = calcMoney;
    var amountOfmonsters = 31;
    var exp_of_monster = 485614;
    var level_of_monster = 241;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("65사냥터").innerText = "폐쇄 구역";
    document.getElementById("65마릿수1").innerText = amountOfmonsters;
    document.getElementById("65마릿수2").innerText = calcmonster;
    document.getElementById("65경험치").innerText = calcExpPerHour;
    document.getElementById("65메소").innerText = calcMoney;
    var amountOfmonsters = 37;
    var exp_of_monster = 485614;
    var level_of_monster = 241;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("66사냥터").innerText = "폐쇄 구역 2";
    document.getElementById("66마릿수1").innerText = amountOfmonsters;
    document.getElementById("66마릿수2").innerText = calcmonster;
    document.getElementById("66경험치").innerText = calcExpPerHour;
    document.getElementById("66메소").innerText = calcMoney;
    var amountOfmonsters = 37;
    var exp_of_monster = 485614;
    var level_of_monster = 241;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("67사냥터").innerText = "폐쇄 구역 3";
    document.getElementById("67마릿수1").innerText = amountOfmonsters;
    document.getElementById("67마릿수2").innerText = calcmonster;
    document.getElementById("67경험치").innerText = calcExpPerHour;
    document.getElementById("67메소").innerText = calcMoney;
    var amountOfmonsters = 27;
    var exp_of_monster = 497733.5;
    var level_of_monster = 242.5;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("68사냥터").innerText = "그날의 트뤼에페 2";
    document.getElementById("68마릿수1").innerText = amountOfmonsters;
    document.getElementById("68마릿수2").innerText = calcmonster;
    document.getElementById("68경험치").innerText = calcExpPerHour;
    document.getElementById("68메소").innerText = calcMoney;
    var amountOfmonsters = 35;
    var exp_of_monster = 505712.5;
    var level_of_monster = 243.5;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("69사냥터").innerText = "그날의 트뤼에페 3";
    document.getElementById("69마릿수1").innerText = amountOfmonsters;
    document.getElementById("69마릿수2").innerText = calcmonster;
    document.getElementById("69경험치").innerText = calcExpPerHour;
    document.getElementById("69메소").innerText = calcMoney;
    var amountOfmonsters = 32;
    var exp_of_monster = 514237.5;
    var level_of_monster = 244.5;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("70사냥터").innerText = "그날의 트뤼에페 4";
    document.getElementById("70마릿수1").innerText = amountOfmonsters;
    document.getElementById("70마릿수2").innerText = calcmonster;
    document.getElementById("70경험치").innerText = calcExpPerHour;
    document.getElementById("70메소").innerText = calcMoney;
    


    var amountOfmonsters = 23;
    var exp_of_monster = 509964;
    var level_of_monster = 244;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("71사냥터").innerText = "거울빛에 물든 바다 2";
    document.getElementById("71마릿수1").innerText = amountOfmonsters;
    document.getElementById("71마릿수2").innerText = calcmonster;
    document.getElementById("71경험치").innerText = calcExpPerHour;
    document.getElementById("71메소").innerText = calcMoney;

    var amountOfmonsters = 23;
    var exp_of_monster = 514237.5;
    var level_of_monster = 244.5;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("72사냥터").innerText = "거울빛에 물든 바다 3";
    document.getElementById("72마릿수1").innerText = amountOfmonsters;
    document.getElementById("72마릿수2").innerText = calcmonster;
    document.getElementById("72경험치").innerText = calcExpPerHour;
    document.getElementById("72메소").innerText = calcMoney;

    var amountOfmonsters = 26;
    var exp_of_monster = 518511;
    var level_of_monster = 245;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("73사냥터").innerText = "거울빛에 물든 바다 4";
    document.getElementById("73마릿수1").innerText = amountOfmonsters;
    document.getElementById("73마릿수2").innerText = calcmonster;
    document.getElementById("73경험치").innerText = calcExpPerHour;
    document.getElementById("73메소").innerText = calcMoney;

    var amountOfmonsters = 28;
    var exp_of_monster = 527106;
    var level_of_monster = 246;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("74사냥터").innerText = "거울빛에 물든 바다 5";
    document.getElementById("74마릿수1").innerText = amountOfmonsters;
    document.getElementById("74마릿수2").innerText = calcmonster;
    document.getElementById("74경험치").innerText = calcExpPerHour;
    document.getElementById("74메소").innerText = calcMoney;

    var amountOfmonsters = 28;
    var exp_of_monster = 531427.5;
    var level_of_monster = 246.5;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("75사냥터").innerText = "거울빛에 물든 바다 6";
    document.getElementById("75마릿수1").innerText = amountOfmonsters;
    document.getElementById("75마릿수2").innerText = calcmonster;
    document.getElementById("75경험치").innerText = calcExpPerHour;
    document.getElementById("75메소").innerText = calcMoney;

    var amountOfmonsters = 31;
    var exp_of_monster = 535749;
    var level_of_monster = 247;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("76사냥터").innerText = "거울빛에 물든 바다 7";
    document.getElementById("76마릿수1").innerText = amountOfmonsters;
    document.getElementById("76마릿수2").innerText = calcmonster;
    document.getElementById("76경험치").innerText = calcExpPerHour;
    document.getElementById("76메소").innerText = calcMoney;

    var amountOfmonsters = 38;
    var exp_of_monster = 544459;
    var level_of_monster = 248;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("77사냥터").innerText = "거울빛에 비친 빛의 신전 2";
    document.getElementById("77마릿수1").innerText = amountOfmonsters;
    document.getElementById("77마릿수2").innerText = calcmonster;
    document.getElementById("77경험치").innerText = calcExpPerHour;
    document.getElementById("77메소").innerText = calcMoney;

    var amountOfmonsters = 39;
    var exp_of_monster = 548838;
    var level_of_monster = 248.5;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("78사냥터").innerText = "거울빛에 비친 빛의 신전 3";
    document.getElementById("78마릿수1").innerText = amountOfmonsters;
    document.getElementById("78마릿수2").innerText = calcmonster;
    document.getElementById("78경험치").innerText = calcExpPerHour;
    document.getElementById("78메소").innerText = calcMoney;

    var amountOfmonsters = 38;
    var exp_of_monster = 553217;
    var level_of_monster = 249;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("79사냥터").innerText = "거울빛에 비친 빛의 신전 4";
    document.getElementById("79마릿수1").innerText = amountOfmonsters;
    document.getElementById("79마릿수2").innerText = calcmonster;
    document.getElementById("79경험치").innerText = calcExpPerHour;
    document.getElementById("79메소").innerText = calcMoney;




    var amountOfmonsters = 38;
    var exp_of_monster = 527106;
    var level_of_monster = 246;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("81사냥터").innerText = "빛이 마지막으로 닿는 곳 6";
    document.getElementById("81마릿수1").innerText = amountOfmonsters;
    document.getElementById("81마릿수2").innerText = calcmonster;
    document.getElementById("81경험치").innerText = calcExpPerHour;
    document.getElementById("81메소").innerText = calcMoney;
    var amountOfmonsters = 38;
    var exp_of_monster = 544459;
    var level_of_monster = 248;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("82사냥터").innerText = "끝없이 추락하는 심해 3";
    document.getElementById("82마릿수1").innerText = amountOfmonsters;
    document.getElementById("82마릿수2").innerText = calcmonster;
    document.getElementById("82경험치").innerText = calcExpPerHour;
    document.getElementById("82메소").innerText = calcMoney;
    var amountOfmonsters = 32;
    var exp_of_monster = 553217;
    var level_of_monster = 249;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("83사냥터").innerText = "끝없이 추락하는 심해 5";
    document.getElementById("83마릿수1").innerText = amountOfmonsters;
    document.getElementById("83마릿수2").innerText = calcmonster;
    document.getElementById("83경험치").innerText = calcExpPerHour;
    document.getElementById("83메소").innerText = calcMoney;
    var amountOfmonsters = 24;
    var exp_of_monster = 584807;
    var level_of_monster = 250;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("84사냥터").innerText = "별이 삼켜진 심해 1";
    document.getElementById("84마릿수1").innerText = amountOfmonsters;
    document.getElementById("84마릿수2").innerText = calcmonster;
    document.getElementById("84경험치").innerText = calcExpPerHour;
    document.getElementById("84메소").innerText = calcMoney;
    var amountOfmonsters = 38;
    var exp_of_monster = 584807;
    var level_of_monster = 250;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("85사냥터").innerText = "별이 삼켜진 심해 3";
    document.getElementById("85마릿수1").innerText = amountOfmonsters;
    document.getElementById("85마릿수2").innerText = calcmonster;
    document.getElementById("85경험치").innerText = calcExpPerHour;
    document.getElementById("85메소").innerText = calcMoney;
    var amountOfmonsters = 40;
    var exp_of_monster = 594040;
    var level_of_monster = 251;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("86사냥터").innerText = "별이 삼켜진 심해 6";
    document.getElementById("86마릿수1").innerText = amountOfmonsters;
    document.getElementById("86마릿수2").innerText = calcmonster;
    document.getElementById("86경험치").innerText = calcExpPerHour;
    document.getElementById("86메소").innerText = calcMoney;



    var amountOfmonsters = 33;
    var exp_of_monster = 594040;
    var level_of_monster = 251;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("91사냥터").innerText = "사상의 경계 2";
    document.getElementById("91마릿수1").innerText = amountOfmonsters;
    document.getElementById("91마릿수2").innerText = calcmonster;
    document.getElementById("91경험치").innerText = calcExpPerHour;
    document.getElementById("91메소").innerText = calcMoney;
    var amountOfmonsters = 37;
    var exp_of_monster = 584807;
    var level_of_monster = 250;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("92사냥터").innerText = "사상의 경계 4";
    document.getElementById("92마릿수1").innerText = amountOfmonsters;
    document.getElementById("92마릿수2").innerText = calcmonster;
    document.getElementById("92경험치").innerText = calcExpPerHour;
    document.getElementById("92메소").innerText = calcMoney;
    var amountOfmonsters = 35;
    var exp_of_monster = 594040;
    var level_of_monster = 251;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("93사냥터").innerText = "사상의 경계 5";
    document.getElementById("93마릿수1").innerText = amountOfmonsters;
    document.getElementById("93마릿수2").innerText = calcmonster;
    document.getElementById("93경험치").innerText = calcExpPerHour;
    document.getElementById("93메소").innerText = calcMoney;
    var amountOfmonsters = 38;
    var exp_of_monster = 589423.5;
    var level_of_monster = 251;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("94사냥터").innerText = "사상의 경계 6";
    document.getElementById("94마릿수1").innerText = amountOfmonsters;
    document.getElementById("94마릿수2").innerText = calcmonster;
    document.getElementById("94경험치").innerText = calcExpPerHour;
    document.getElementById("94메소").innerText = calcMoney;
    var amountOfmonsters = 32;
    var exp_of_monster = 612643;
    var level_of_monster = 253;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("95사냥터").innerText = "미지의 안개 2";
    document.getElementById("95마릿수1").innerText = amountOfmonsters;
    document.getElementById("95마릿수2").innerText = calcmonster;
    document.getElementById("95경험치").innerText = calcExpPerHour;
    document.getElementById("95메소").innerText = calcMoney;
    var amountOfmonsters = 37;
    var exp_of_monster = 607980.5;
    var level_of_monster = 252.5;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("96사냥터").innerText = "미지의 안개 3";
    document.getElementById("96마릿수1").innerText = amountOfmonsters;
    document.getElementById("96마릿수2").innerText = calcmonster;
    document.getElementById("96경험치").innerText = calcExpPerHour;
    document.getElementById("96메소").innerText = calcMoney;
    var amountOfmonsters = 36;
    var exp_of_monster = 603318;
    var level_of_monster = 252;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("97사냥터").innerText = "미지의 안개 4";
    document.getElementById("97마릿수1").innerText = amountOfmonsters;
    document.getElementById("97마릿수2").innerText = calcmonster;
    document.getElementById("97경험치").innerText = calcExpPerHour;
    document.getElementById("97메소").innerText = calcMoney;
    var amountOfmonsters = 35;
    var exp_of_monster = 612643;
    var level_of_monster = 253;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("98사냥터").innerText = "미지의 안개 5";
    document.getElementById("98마릿수1").innerText = amountOfmonsters;
    document.getElementById("98마릿수2").innerText = calcmonster;
    document.getElementById("98경험치").innerText = calcExpPerHour;
    document.getElementById("98메소").innerText = calcMoney;
    var amountOfmonsters = 39;
    var exp_of_monster = 607980.5;
    var level_of_monster = 252.3;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("99사냥터").innerText = "미지의 안개 6";
    document.getElementById("99마릿수1").innerText = amountOfmonsters;
    document.getElementById("99마릿수2").innerText = calcmonster;
    document.getElementById("99경험치").innerText = calcExpPerHour;
    document.getElementById("99메소").innerText = calcMoney;
    var amountOfmonsters = 31;
    var exp_of_monster = 622041;
    var level_of_monster = 254;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("100사냥터").innerText = "공허의 파도 3";
    document.getElementById("100마릿수1").innerText = amountOfmonsters;
    document.getElementById("100마릿수2").innerText = calcmonster;
    document.getElementById("100경험치").innerText = calcExpPerHour;
    document.getElementById("100메소").innerText = calcMoney;
    var amountOfmonsters = 33;
    var exp_of_monster = 622041;
    var level_of_monster = 254;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("101사냥터").innerText = "공허의 파도 4";
    document.getElementById("101마릿수1").innerText = amountOfmonsters;
    document.getElementById("101마릿수2").innerText = calcmonster;
    document.getElementById("101경험치").innerText = calcExpPerHour;
    document.getElementById("101메소").innerText = calcMoney;
    var amountOfmonsters = 33;
    var exp_of_monster = 622041;
    var level_of_monster = 254;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("102사냥터").innerText = "공허의 파도 5";
    document.getElementById("102마릿수1").innerText = amountOfmonsters;
    document.getElementById("102마릿수2").innerText = calcmonster;
    document.getElementById("102경험치").innerText = calcExpPerHour;
    document.getElementById("102메소").innerText = calcMoney;
    var amountOfmonsters = 34;
    var exp_of_monster = 622041;
    var level_of_monster = 254;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("103사냥터").innerText = "공허의 파도 6";
    document.getElementById("103마릿수1").innerText = amountOfmonsters;
    document.getElementById("103마릿수2").innerText = calcmonster;
    document.getElementById("103경험치").innerText = calcExpPerHour;
    document.getElementById("103메소").innerText = calcMoney;



    var amountOfmonsters = 35;
    var exp_of_monster = 650504;
    var level_of_monster = 257;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("111사냥터").innerText = "고통의 미궁 중심부 3";
    document.getElementById("111마릿수1").innerText = amountOfmonsters;
    document.getElementById("111마릿수2").innerText = calcmonster;
    document.getElementById("111경험치").innerText = calcExpPerHour;
    document.getElementById("111메소").innerText = calcMoney;
    var amountOfmonsters = 36;
    var exp_of_monster = 661261;
    var level_of_monster = 258.25;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("112사냥터").innerText = "고통의 미궁 중심부 4";
    document.getElementById("112마릿수1").innerText = amountOfmonsters;
    document.getElementById("112마릿수2").innerText = calcmonster;
    document.getElementById("112경험치").innerText = calcExpPerHour;
    document.getElementById("112메소").innerText = calcMoney;
    var amountOfmonsters = 35;
    var exp_of_monster = 661261;
    var level_of_monster = 258;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("113사냥터").innerText = "고통의 미궁 중심부 6";
    document.getElementById("113마릿수1").innerText = amountOfmonsters;
    document.getElementById("113마릿수2").innerText = calcmonster;
    document.getElementById("113경험치").innerText = calcExpPerHour;
    document.getElementById("113메소").innerText = calcMoney;
    var amountOfmonsters = 24;
    var exp_of_monster = 661261;
    var level_of_monster = 258;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("114사냥터").innerText = "고통의 미궁 중심부 7";
    document.getElementById("114마릿수1").innerText = amountOfmonsters;
    document.getElementById("114마릿수2").innerText = calcmonster;
    document.getElementById("114경험치").innerText = calcExpPerHour;
    document.getElementById("114메소").innerText = calcMoney;
    var amountOfmonsters = 28;
    var exp_of_monster = 670940;
    var level_of_monster = 259;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("115사냥터").innerText = "고통의 미궁 최심부 1";
    document.getElementById("115마릿수1").innerText = amountOfmonsters;
    document.getElementById("115마릿수2").innerText = calcmonster;
    document.getElementById("115경험치").innerText = calcExpPerHour;
    document.getElementById("115메소").innerText = calcMoney;
    var amountOfmonsters = 29;
    var exp_of_monster = 670940;
    var level_of_monster = 259;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("116사냥터").innerText = "고통의 미궁 최심부 6";
    document.getElementById("116마릿수1").innerText = amountOfmonsters;
    document.getElementById("116마릿수2").innerText = calcmonster;
    document.getElementById("116경험치").innerText = calcExpPerHour;
    document.getElementById("116메소").innerText = calcMoney;


    var amountOfmonsters = 32;
    var exp_of_monster = 680638;
    var level_of_monster = 260;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("121사냥터").innerText = "세계의 눈물 하단 1";
    document.getElementById("121마릿수1").innerText = amountOfmonsters;
    document.getElementById("121마릿수2").innerText = calcmonster;
    document.getElementById("121경험치").innerText = calcExpPerHour;
    document.getElementById("121메소").innerText = calcMoney;
    var amountOfmonsters = 32;
    var exp_of_monster = 685535;
    var level_of_monster = 261.5;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("122사냥터").innerText = "세계의 눈물 하단 2";
    document.getElementById("122마릿수1").innerText = amountOfmonsters;
    document.getElementById("122마릿수2").innerText = calcmonster;
    document.getElementById("122경험치").innerText = calcExpPerHour;
    document.getElementById("122메소").innerText = calcMoney;
    var amountOfmonsters = 31;
    var exp_of_monster = 690432;
    var level_of_monster = 261;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("123사냥터").innerText = "세계의 눈물 하단 3";
    document.getElementById("123마릿수1").innerText = amountOfmonsters;
    document.getElementById("123마릿수2").innerText = calcmonster;
    document.getElementById("123경험치").innerText = calcExpPerHour;
    document.getElementById("123메소").innerText = calcMoney;
    var amountOfmonsters = 31;
    var exp_of_monster = 695337;
    var level_of_monster = 261.5;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("124사냥터").innerText = "세계의 눈물 중단 2";
    document.getElementById("124마릿수1").innerText = amountOfmonsters;
    document.getElementById("124마릿수2").innerText = calcmonster;
    document.getElementById("124경험치").innerText = calcExpPerHour;
    document.getElementById("124메소").innerText = calcMoney;
    var amountOfmonsters = 30;
    var exp_of_monster = 700242;
    var level_of_monster = 262;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("125사냥터").innerText = "세계의 눈물 중단 3";
    document.getElementById("125마릿수1").innerText = amountOfmonsters;
    document.getElementById("125마릿수2").innerText = calcmonster;
    document.getElementById("125경험치").innerText = calcExpPerHour;
    document.getElementById("125메소").innerText = calcMoney;
    var amountOfmonsters = 31;
    var exp_of_monster = 700242;
    var level_of_monster = 262;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("126사냥터").innerText = "세계가 끝나는 곳 1-4";
    document.getElementById("126마릿수1").innerText = amountOfmonsters;
    document.getElementById("126마릿수2").innerText = calcmonster;
    document.getElementById("126경험치").innerText = calcExpPerHour;
    document.getElementById("126메소").innerText = calcMoney;
    var amountOfmonsters = 30;
    var exp_of_monster = 705181.5;
    var level_of_monster = 262.5;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("127사냥터").innerText = "세계가 끝나는 곳 1-5";
    document.getElementById("127마릿수1").innerText = amountOfmonsters;
    document.getElementById("127마릿수2").innerText = calcmonster;
    document.getElementById("127경험치").innerText = calcExpPerHour;
    document.getElementById("127메소").innerText = calcMoney;
    var amountOfmonsters = 34;
    var exp_of_monster = 710121;
    var level_of_monster = 263;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("128사냥터").innerText = "세계가 끝나는 곳 1-6";
    document.getElementById("128마릿수1").innerText = amountOfmonsters;
    document.getElementById("128마릿수2").innerText = calcmonster;
    document.getElementById("128경험치").innerText = calcExpPerHour;
    document.getElementById("128메소").innerText = calcMoney;
    var amountOfmonsters = 31;
    var exp_of_monster = 710121;
    var level_of_monster = 263;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("129사냥터").innerText = "세계가 끝나는 곳 2-3";
    document.getElementById("129마릿수1").innerText = amountOfmonsters;
    document.getElementById("129마릿수2").innerText = calcmonster;
    document.getElementById("129경험치").innerText = calcExpPerHour;
    document.getElementById("129메소").innerText = calcMoney;
    var amountOfmonsters = 32;
    var exp_of_monster = 721247;
    var level_of_monster = 264;
    go_calc(amountOfmonsters, exp_of_monster, level_of_monster);
    document.getElementById("130사냥터").innerText = "세계가 끝나는 곳 2-5";
    document.getElementById("130마릿수1").innerText = amountOfmonsters;
    document.getElementById("130마릿수2").innerText = calcmonster;
    document.getElementById("130경험치").innerText = calcExpPerHour;
    document.getElementById("130메소").innerText = calcMoney;


    











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