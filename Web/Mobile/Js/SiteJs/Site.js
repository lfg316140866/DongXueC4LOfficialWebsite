/// <reference path="../jquery-1.9.1.min.js" />
/// <reference path="../Cmn.js" />
/// <reference path="../CmnAjax.js" />
/// <reference path="../CmnFuncExd.js" />


$(function () {
    var Page7; 
    (Page7 = new function () {
        this.IsAnimate = 0;
        this.IsAnimating = false;
        Cmn.Func.TouchSlide("#Page7", 20, function (dir) {
            //event.stopPropagation();
            if (Page7.IsAnimating) { return; }
            $(".JscBg7 img").css({ "width": "640px" });
            if (dir == "up") {
                Page7.IsAnimating = true;
                if (Page7.IsAnimate == 1) {
                    AnimateFrame.SlideTo(AnimateFrame.GetNextScenesNo(), "", "", function () {
                        Page7.IsAnimating = false;
                    });
                }
                else {
                    $(".JscBg7").stop(true, true).animate({ "width": "100%" }, function () {
                        Page7.IsAnimate = 1;
                        Page7.IsAnimating = false;
                    });
                }
            }
            else if (dir == "down") {
                Page7.IsAnimating = true;
                if (Page7.IsAnimate == 0) {
                    AnimateFrame.SlideTo(AnimateFrame.GetPreScenesNo(), "", "", function () {
                        Page7.IsAnimating = false;
                    });
                }
                else {
                    $(".JscBg7").stop(true, true).animate({ "width": "0" }, function () {
                        Page7.IsAnimate = 0;
                        Page7.IsAnimating = false;
                    });
                }
            }
        });
    });

    var Page11;
    (Page11 = new function () {
        this.IsAnimate = 0;
        this.IsAnimating = false;
        this.MoveDec = 0;
        Cmn.Func.TouchSlide("#Page11", 1, function (dir,dec) {
            Page11.MoveDec = dec;
            if (dir == "left") {
                if (($("#Page11 .title_11_2").offset().left-300) > -1400) {
                    $("#Page11 .title_11_2").stop(true).animate({ "left": $("#Page11 .title_11_2").offset().left - 300 }, "linear");
                }
            }
            else if (dir == "right") {
                if (($("#Page11 .title_11_2").offset().left+300) < 0) {
                    $("#Page11 .title_11_2").stop(true).animate({ "left": $("#Page11 .title_11_2").offset().left + 300 }, "linear");
                }
            } 
        }, function (dir) {
            if (Page11.MoveDec < 10) { return;}
            if (dir == "up") {
                if (!Page11.IsAnimating) {
                    Page11.IsAnimating = true;
                    AnimateFrame.SlideTo(AnimateFrame.GetNextScenesNo(), "", "", function () {
                        Page11.IsAnimating = false;
                    });
                }
            }
            else if (dir == "down") {
                if (!Page11.IsAnimating) {
                    Page11.IsAnimating = true;
                    AnimateFrame.SlideTo(AnimateFrame.GetPreScenesNo(), "", "", function () {
                        Page11.IsAnimating = false;
                    });
                }
            }
        }, 2)
    });

    var Page12;
    (Page12 = new function () {
        this.IsAnimate = 0;
        this.IsAnimating = false;
        Cmn.Func.TouchSlide("#Page12", 20, function (dir) {
            if (Page12.IsAnimating) { return; }
            if (dir == "up") {
                Page12.IsAnimating = true;
                if (Page12.IsAnimate == 1) {
                    AnimateFrame.SlideTo(AnimateFrame.GetNextScenesNo(), "", "", function () {
                        Page12.IsAnimating = false;
                    });
                }
                else {
                    $(".JscTitle123").fadeIn(function () {
                        setTimeout(function () {
                            $(".JscTitle122").fadeIn();
                        }, 200);
                        Page12.IsAnimate = 1;
                        Page12.IsAnimating = false;
                    });
                }
            }
            else if (dir == "down") {
                Page12.IsAnimating = true;
                if (Page12.IsAnimate == 0) {
                    AnimateFrame.SlideTo(AnimateFrame.GetPreScenesNo(), "", "", function () {
                        Page12.IsAnimating = false;
                    });
                }
                else {
                    $(".JscTitle123").fadeOut(function () {
                        $(".JscTitle122").hide();
                        Page12.IsAnimate = 0;
                        Page12.IsAnimating = false;
                    });
                }
            }
        });
    });

    var Page14;
    (Page14 = new function () {
        this.IsAnimate = 0;
        this.IsAnimating = false;
        Cmn.Func.TouchSlide("#Page14", 20, function (dir) {
            //event.stopPropagation();
            if (Page14.IsAnimating) { return; }
            if (dir == "up") {
                Page14.IsAnimating = true;
                if (Page14.IsAnimate == 2) {
                    AnimateFrame.SlideTo(AnimateFrame.GetNextScenesNo(), "", "", function () {
                        Page14.IsAnimating = false;
                    });
                }
                else if (Page14.IsAnimate == 0) {
                    $(".JscBg141").fadeIn(function () {
                        Page14.IsAnimate = 1;
                        Page14.IsAnimating = false;
                    });
                }
                else if (Page14.IsAnimate == 1) {
                    $(".JscBg142").fadeIn(function () {
                        Page14.IsAnimate = 2;
                        Page14.IsAnimating = false;
                    });
                }
            }
            else if (dir == "down") {
                Page14.IsAnimating = true;
                if (Page14.IsAnimate == 0) {
                    AnimateFrame.SlideTo(AnimateFrame.GetPreScenesNo(), "", "", function () {
                        Page14.IsAnimating = false;
                    });
                }
                else if (Page14.IsAnimate == 1) {
                    $(".JscBg141").fadeOut(function () {
                        Page14.IsAnimate = 0;
                        Page14.IsAnimating = false;
                    });
                }
                else if (Page14.IsAnimate == 2) {
                    $(".JscBg142").fadeOut(function () {
                        Page14.IsAnimate = 1;
                        Page14.IsAnimating = false;
                    });
                }
            }
        });
    });

    var Page19;
    (Page19 = new function () {
        this.IsAnimate = 0;
        this.IsAnimating = false;
        Cmn.Func.TouchSlide("#Page19", 20, function (dir) {
            if (Page19.IsAnimating) { return; }
            $(".JscBg19 img").css({ "width": "640px" });
            if (dir == "up") {
                Page19.IsAnimating = true;
                if (Page19.IsAnimate == 1) {
                    AnimateFrame.SlideTo(AnimateFrame.GetNextScenesNo(), "", "", function () {
                        Page19.IsAnimating = false;
                    });
                }
                else {
                    $(".JscBg19").stop(true, true).animate({ "width": "100%" }, function () {
                        Page19.IsAnimate = 1;
                        Page19.IsAnimating = false;
                    });
                }
            }
            else if (dir == "down") {
                Page19.IsAnimating = true;
                if (Page19.IsAnimate == 0) {
                    AnimateFrame.SlideTo(AnimateFrame.GetPreScenesNo(), "", "", function () {
                        Page19.IsAnimating = false;
                    });
                } else {
                    $(".JscBg19").stop(true, true).animate({ "width": "0%" }, function () {
                        Page19.IsAnimate = 0;
                        Page19.IsAnimating = false;
                    });
                }
            }
        });
    });

    var Page16;
    (Page16 = new function () {
        this.IsAnimate = 0;
        this.IsAnimating = false;
        this.MoveDec=0;
        Cmn.Func.TouchSlide("#Page16", 1, function (dir, dec) {
            Page16.MoveDec = dec;
            if (dir == "left") {
                if (($("#Page16 .title_16_4").offset().left-300) > -824) {
                    $("#Page16 .title_16_4").stop(true).animate({ "left": $("#Page16 .title_16_4").offset().left - 300 }, "linear");
                    $("#Page16 .title_16_3").stop(true).animate({ "left": $("#Page16 .title_16_3").offset().left - 10 }, "linear");
                }
            }
            else if (dir == "right") {
                if (($("#Page16 .title_16_4").offset().left+300) < 1) {
                    $("#Page16 .title_16_4").stop(true).animate({ "left": $("#Page16 .title_16_4").offset().left + 300 }, "linear");
                    $("#Page16 .title_16_3").stop(true).animate({ "left": $("#Page16 .title_16_3").offset().left + 10 }, "linear");
                }
            }
        }, function (dir) {
            if (Page16.MoveDec < 10) { return;}
            if (dir == "up") {
                if (!Page16.IsAnimating) {
                    Page16.IsAnimating = true;
                    AnimateFrame.SlideTo(AnimateFrame.GetNextScenesNo(), "", "", function () {
                        Page16.IsAnimating = false;
                    });
                }
            }
            else if (dir == "down") {
                if (!Page16.IsAnimating) {
                    Page16.IsAnimating = true;
                    AnimateFrame.SlideTo(AnimateFrame.GetPreScenesNo(), "", "", function () {
                        Page16.IsAnimating = false;
                    });
                }
            }
        },2)
    });

    var Page18;
    (Page18 = new function () {
        this.IsAnimate = 0;
        this.IsAnimating = false;
        this.MoveDec = 0;
        Cmn.Func.TouchSlide("#Page18", 1, function (dir, dec) {
            Page18.MoveDec = dec;
            if (dir == "left") {
                if (($("#Page18 .title_18_2").offset().left-300) > -900) {
                    $("#Page18 .title_18_2").stop(true).animate({ "left": $("#Page18 .title_18_2").offset().left - 300 }, "linear");
                }
            }
            else if (dir == "right") {
                if (($("#Page18 .title_18_2").offset().left+300) < 0) {
                    $("#Page18 .title_18_2").stop(true).animate({ "left": $("#Page18 .title_18_2").offset().left + 300 }, "linear");
                }
            }
            
        }, function (dir) {
            if (Page18.MoveDec < 10) { return;}
            if (dir == "up") {
                if (!Page18.IsAnimating) {
                    Page18.IsAnimating = true;
                    AnimateFrame.SlideTo(AnimateFrame.GetNextScenesNo(), "", "", function () {
                        Page18.IsAnimating = false;
                    });
                }
            }
            else if (dir == "down") {
                if (!Page18.IsAnimating) {
                    Page18.IsAnimating = true;
                    AnimateFrame.SlideTo(AnimateFrame.GetPreScenesNo(), "", "", function () {
                        Page18.IsAnimating = false;
                    });
                }
            }
        }, 2)
    });
    if (!Cmn.Func.IsWeiXin()) {
        $(".hint").css({ "padding-top": "0px" });
        $(".hint").css({ "line - height": "7px" });
        $(".Inner").css("top", "-25px");
        $("#firstpage>.Inner").css("top", "-50px");
        $("#firstpage>.Bg").css("top", "-35px");
        $("#Page16>.Inner").css("top", "0");
        $("#Page17>.Bg").css("top", "3px");
        $(".JscBg7").css("top", "-40px");
    }
});


