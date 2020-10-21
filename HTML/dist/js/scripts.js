const btnAbout = $("#js_about__btn"),
headerTitle = $("#js_sub__title span"),
buttonLogo = $("#js_btn__logo"),
buttonToggle = $("#js_btn__toggle"),
titleITem = $("#js_main__title h1"),
navItem = $("#js_hero__nav li");

const URL = location.pathname;

function init() {
    tweenMaxAniFrom_Width('main', 1.5, 'SlowMo.easeOut' , 0.5);
    tweenMaxStagger(titleITem, 1, 'Power0.easeNone' , 2 , 0.2);
    tweenMaxStagger(navItem, 1, 'Power0.easeNone' , 2.2 , 0.5);
    tweenMaxAniFrom_Y(buttonLogo, 1.5, 'Power0.easeOut' , 0.5);
    tweenMaxAniFrom_Y(headerTitle, 1.5, 'Power0.easeOut' , 0.5);
    tweenMaxAniFrom_Y(buttonToggle, 1.5, 'Power0.easeOut' , 0.5);
    navBtnClick();
    $(window).resize(resizeContents);
    
    if (URL === "/HTML/about.html") {
        $("main").load("sections/section2.html");
    }
}





init();