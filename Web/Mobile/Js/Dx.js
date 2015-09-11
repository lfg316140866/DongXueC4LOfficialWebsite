/// <reference path="jquery-1.9.1.min.js" />
/// <reference path="Cmn.js" />
/// <reference path="CmnAjax.js" />
/// <reference path="CmnFuncExd.js" />
/// <reference path="animate/AnimateFrame.js" />
/// <reference path="animate/Scenes.js" />
/// <reference path="animate/ScenesSwitch.js" />

var _LoadingPic;
$(document).ready(function () {
    LoadingPic = setInterval(function () {
        if ($(".load_line").hasClass("update")) {
            $(".load_line").removeClass("update");
        }
        else {
            $(".load_line").addClass("update");
        }
    }, 300);

    $(".LoadingWrap").css("display", "block");
    Cmn.Func.ImageLazyLoading("body", function (pro) {
        $(".LoadingNum").html(pro + "%")
    }, function () {
        clearInterval(_LoadingPic);
        $(".LoadingWrap").delay(500).fadeOut(800);

        setTimeout(function () {
            $(".JscPopFloat>div").hide();
            $(".JscPopFloat").show();
            $(".title_btn").addClass("title_btn1");
            $(this).removeClass("title_btn1");
            $(".JscReservationFloat").show();
        }, 10000);

        Cmn.Func.ImageLazyLoading("body", function (pro) {

        }, function () {

        }, "lazypath2");
    });
    AnimateFrame.Init(500, SwitchMode.Shifting, Direction.Up, Direction.Down);



})