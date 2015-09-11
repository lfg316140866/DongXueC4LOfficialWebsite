/// <reference path="../animate/AnimateFrame.js" />
/// <reference path="../Cmn.js" />
/// <reference path="../CmnAjax.js" />
/// <reference path="../jquery-1.9.1.min.js" />
/// <summary>Mobile版</summary>
$(function () {
    if (!Cmn.Func.IsWeiXin()) {
        $(".Js_FuChen").css({ "margin": "5px 0" });
    }
    //点击首页按钮
    $(".JscHome").on("touchstart", function () {
        AnimateFrame.SlideTo("firstpage");
    });

    //点击评鉴C4L按钮
    $(".JscC4l,.JscRightNav").on("touchstart", function () {
        $(".JscIconLi").removeClass("active");
        $(".JscC4l").addClass("active");
        $(".JscPopFloat>div").hide();
        $(".JscPopFloat").show();
        $(".JscSubmitFloat").show();
    });
    //点击配置表按钮
    $(".JscConf").on("touchstart", function () {
        AnimateFrame.SlideTo("Page29");
    });
    //点击新闻发布按钮
    $(".JscNews").on("touchstart", function () {
        AnimateFrame.SlideTo("Page28");
    });
    ////点击精彩下载按钮
    //$(".JscWonderful").on("touchstart", function () {
    //    AnimateFrame.SlideTo("Page27");
    //});
    //显示显示下部菜单Icon
    $(".JscNavList").show();
    $(".JscLeftNav").on("touchstart", function () {
        $(".JscLeftNav").hide();
        $(".JscRightNav").hide();
        $(".JscNavList").show();
        $(".JscTriangleBtn").css({ "bottom": "99px" });
        if (!Cmn.Func.IsWeiXin()) {
            $(".JscTriangleBtn").css({ "bottom": "69px" });
        }
    });
    
    /// <summary>滑动业务逻辑</summary>
    AnimateFrame.OnScenesAfterShow = function () {
        if (AnimateFrame.CurScenes.ID == "firstpage") {
            $(".JscLeftNav").hide();
            $(".JscRightNav").hide();
            //$(".JscNavList").css({ "bottom": "0px" });
            $(".JscNavList").show();
        } else {
            $(".JscLeftNav").show();
            $(".JscRightNav").show();
            $(".JscNavList").show();
            $(".JscNavList").hide();
            //$(".JscNavList").css({ "bottom": "-100px" });
            $(".JscTriangleBtn").css({ "bottom": "0px" });
            if (!Cmn.Func.IsWeiXin()) {
                $(".JscTriangleBtn").css({ "bottom": "-25px" });
                $(".Jsc3").css({ "bottom": "-35px" });
                $("#Page16 .JscTitle16").css({ "bottom": "0px" });
                $(".title_5_3").css("top", "667px");
            }
        }
        if (AnimateFrame.CurScenes.ScenesNo >= 1 && AnimateFrame.CurScenes.ScenesNo < 28) {
            $(".JscIconLi").removeClass("active");
            $(".JscC4l").addClass("active");
        }
        if (AnimateFrame.CurScenes.ID == "firstpage") {
            $(".JscIconLi").removeClass("active");
            $(".JscHome").addClass("active");
        } else if (AnimateFrame.CurScenes.ID == "Page29") {
            $(".JscIconLi").removeClass("active");
            $(".JscConf").addClass("active");
        }
        else if (AnimateFrame.CurScenes.ID == "Page28") {
            $(".JscIconLi").removeClass("active");
            $(".JscNews").addClass("active");
        }
        else if (AnimateFrame.CurScenes.ID == "Page27") {
            $(".JscIconLi").removeClass("active");
            $(".JscWonderful").addClass("active");
        }
    }

    /// <summary>留资方法逻辑</summary>
    function Reservation() {
        $(".JscPopFloat>div").hide();
        $(".JscPopFloat").show();
        $(".title_btn").addClass("title_btn1");
    }
    //点击预约试驾
    $(".JscReservation").on("click", function () {
        Reservation();
        $(this).removeClass("title_btn1");
        $(".JscReservationFloat").show();
    });
    //点击预购订车
    $(".JscBooking").on("click", function () {
        Reservation();
        $(this).removeClass("title_btn1");
        $(".JscBookingFloat").show();

    });
    $(".JscCloseBtn").on("touchstart", function () {
        $(".title_btn").addClass("title_btn1");
        $(".JscPopFloat").hide();
    });

    //获取焦点的时候
    $("input").focus(function () {
        $(".Js_SubmitBtn").hide();
    });
    //失去焦点的时候
    $("input").blur(function () {
        $(".Js_SubmitBtn").show();
    });
    //绑定省市区
    new PCAS("Province1", "City1", "County1");
    new PCAS("Province2", "City2", "County2");
    //var _sex1 = $(".Selectsex").eq(0).attr("values");
    $(".JscSex").on("click", function () {
        $(this).parents(".JscSelectSexBox").find(".JscSex").removeClass("select");
        $(this).addClass("select");
    });
    //即刻预约试驾
    var _Submit = false;
    $(".Js_SubmitBtn").on("click", function () {
        if (_Submit) { return; }
        var _obj = $(this).parents(".Js_FuChen");
        var _siteAddress = _obj.attr("siteaddress");
        var _name = _obj.find(".Js_UserName").val();
        var _sex = _obj.find(".JscSelectSexBox").find(".JscSex.select").attr("values");
        var _phone = _obj.find(".Js_Phone").val();
        var _car_time = _obj.find(".JscBuyCarTime").val();
        var _province = _obj.find(".Js_IsProvince").val();
        var _city = _obj.find(".Js_IsCity").val();
        var _county = _obj.find(".Js_IsCounty").val();
        var _checkPhone = /^0?1[3|4|5|8][0-9]\d{8}$/;
        //if (_obj.find(".JscCheck").prop("checked")) {
        //    var _disclaimer = "是";
        //} else {
        //    var _disclaimer = "否";
        //}

        if (_name == "") {
            SiteFunc.Alert("请输入您的姓名！");
            return;
        }
        //一般性别会默认选择一个，但是还是判断一下
        if (_sex == "" || _sex == undefined) {
            SiteFunc.Alert("请选择您的性别！");
            return;
        }
        if (_phone == "") {
            SiteFunc.Alert("请输入您的手机号！");
            return;
        }
        if (!_checkPhone.test(_phone)) {
            SiteFunc.Alert("请输入正确的11位手机号！");
            return;
        }
        if (_car_time == "" || _car_time == undefined) {
            SiteFunc.Alert("请选择您的计划购车时间");
            return;
        }
        if (_province == "" || _province == SiteFunc.ProvinceCityStr.Province) {
            SiteFunc.Alert("请选择您所在的省！");
            return;
        }
        if (_city == "" || _city == "城市") {
            SiteFunc.Alert("请选择您所在的市！");
            return;
        }
        if (_county == "" || _county == "区/县") {
            SiteFunc.Alert("请选择您所在的地区！");
            return;
        }
        //留资
        var _param = {
            "name": _name,
            "sex": _sex,
            "phone": _phone,
            "car_time": _car_time,
            "province": _province,
            "city": _city,
            "county": _county,
            "siteaddress": _siteAddress,
            "site": "C4L新官网-Mobile",
            "source": location.href,
            //"disclaimer": _disclaimer
        }
        _Submit = true;
        CmnAjax.PostData("/Itf/Php/AjaxItf.php?method=GetSqlData&ItfName=AddTestDrive", _param, function (data) {
            if (data.IsSuccess == "1") {
                Cmn.alert("提交成功！");
                _Submit = false;
            }
        });
    });
});
