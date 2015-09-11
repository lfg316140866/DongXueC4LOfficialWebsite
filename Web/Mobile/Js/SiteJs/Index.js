/// <reference path="../Cmn.js" />
/// <reference path="../CmnAjax.js" />
/// <reference path="../jquery-1.9.1.min.js" />
/// <reference path="../animate/AnimateFrame.js" />
/// <reference path="../WechatShare.js" />

var _IsFrist = true;
$(function () {
    Index = new function () {
        /// <summary>首页业务逻辑</summary>
        CallJsApiWXConfigItf("http://suimojiama.dongfeng-citroen.com.cn/JsApiWXConfig.aspx");
        SetWechatShare("启动向前的力量，新C4L全擎登场!", "启动向前的力量，新C4L全擎登场!", location.href, "images/ShareImg.jpg");
        //点击评鉴C4LIcon
        $(".JscPower").on("touchstart", function () {
            setTimeout(function () {
                $(".JscPopFloat").hide();
                AnimateFrame.SlideTo("Home");
            }, 300);
        });
        $(".JscCore").on("touchstart", function () {
            setTimeout(function () {
                $(".JscPopFloat").hide();
                AnimateFrame.SlideTo("Page5");
            }, 300);
        });
        $(".JscOutstanding").on("touchstart", function () {
            setTimeout(function () {
                $(".JscPopFloat").hide();
                AnimateFrame.SlideTo("Page7");
            }, 300);
        });
        $(".JscSafety").on("touchstart", function () {
            setTimeout(function () {
                $(".JscPopFloat").hide();
                AnimateFrame.SlideTo("Page21");
            }, 300);
        });
        
        $(".JscSubmitFloat2").on("touchstart", function () {
            $(".JscC4l").addClass("active");
            $(".JscPopFloat").hide();
        });
        //if ((".JscSubmitFloat").is(":visible")) {
        //    $(".JscPopFloat").hide();
        //}
        
        $(".JscCozys").on("touchstart", function () {
            setTimeout(function () {
                $(".JscPopFloat").hide();
                AnimateFrame.SlideTo("Page15");
            }, 300);

        });
        $(".JscIntelligent").on("touchstart", function () {
            setTimeout(function () {
                $(".JscPopFloat").hide();
                AnimateFrame.SlideTo("Page10");
            }, 300);
        });
        $(".submit_float").on("touchstart", function () {
            $(".submit_float").addClass("select");
            $(this).removeClass("select");
        });

        /////<summary>视频业务逻辑</summary>
        //CmnAjax.FillData([".JscVideoList1", ".JscVideoList2", ".JscVideoList3"], "/Itf/Php/AjaxItf.php?method=GetSqlData&ItfName=GetMobileVideo", "", function (dat) {
        //    $(".video_bigbg i").on("touchstart", function () {
        //        var _index = $(this).index(".video_bigbg i");
        //        var _VideoUrl = $(this).attr("attc");
        //        $(".JscPopFloat>div").hide();
        //        $(".JscPopFloat").show();
        //        $(".JscVideoFloat").show();
        //        $("#JscVideoLi").html("<video style='width:100%; height:100%' autoplay='autoplay' controls='controls' class='' src='" + _VideoUrl + "'></video>");
        //        //$(".JscVideos").eq(_index).html("<video width='640' height='490' autoplay controls class='dat-video_url-src' src=''></video>");
        //    });
        //});

        //点击参数配置大栏目
        $(".JscConfiguration .JscConfigurationImg").hide();
        $(".car_parameters1 .JscConfiguration").eq(0).find(".JscConfigurationImg").show();
        $(".JscConfiguration .Technical_btn").off("click").on("click", function () {
            $(".JscCanshuAbs").scrollTop(0);
            if ($(this).next(".JscConfigurationImg").is(":visible")) {
                $(this).next(".JscConfigurationImg").hide();
            } else {
                $(".JscConfigurationImg").hide();
                $(this).next(".JscConfigurationImg").show();
            }
        });
        //参数配置配置
        $(".JscConfigList").change(function () {
            var _configIndex=$(this).attr("config");
            $(".JscpubPrice").hide();
            $(".JscCarParameters").hide();
            var _index = $(".JscConfigList select option:selected").index();
            $(".JscpubPrice").eq(_index).show();
            $(".JscCarParameters").eq(_index).show();
            $(".JscConfiguration .JscConfigurationImg").hide();
            $(".JscCarParameters").eq(_index).find(".JscConfigurationImg").eq(0).show();
        });

        /// <summary>经销商查询的业务逻辑</summary>
        CmnAjax.FillData(".JscProvince", "/Itf/Php/AjaxItf.php?method=GetSqlData&ItfName=GetProvince", "", function (dat) {
            if (dat.IsSuccess == "1") {
                Index.ProvinceCityChange();
                $("#DealerProvince").change();
            }
        });

        //填充省下拉框,获取选中的下拉框的值
        this.ProvinceCityChange = function () {
            $("#DealerProvince").on("change", function () {
                var _id = $(this).val();
                //$("#DealerCity").html("<option class='JscCity dat-city_id-value dat-city_desc' value=''>一周之内</option>");
                CmnAjax.FillData(".JscCity", "/Itf/Php/AjaxItf.php?method=GetSqlData&ItfName=GetCity", { "province_id": _id }, function (dat) {
                    $("#DealerCity").on("change", function () {
                        var _dealerCityID = $("#DealerCity").val();
                        CmnAjax.FillData(".JscDealerSearchFloatAdressDetailed", "/Itf/Php/AjaxItf.php?method=GetSqlData&ItfName=GetDealerInfo", { "city_id": _dealerCityID }, function (dat) {
                        });
                    });
                    $("#DealerCity").change();
                });
            });
        }
        //经销商信息防止冒泡
        $(".search_address_list ul").on("touchmove", function (e) {
            e.stopPropagation()
        });
        //参数配置表防止冒泡
        $(".JscCanshuAbs").on("touchmove", function (e) {
            e.stopPropagation()
        });
    }
});
