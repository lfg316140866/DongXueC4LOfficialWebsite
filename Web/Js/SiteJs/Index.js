/// <reference path="../ThirdLib/jquery.js" />
/// <reference path="../Cmn.js" />
/// <reference path="../CmnAjax.js" />
/// <reference path="../CmnFuncExd.js" />
/// <reference path="../animate/AnimateFrame.js" />

//首页业务逻辑 此处名称可以和页面对应起来 也可以和场景ID对应
$(function () {
    Index = function () {
        /// <summary>首页业务逻辑</summary>
        //首页图片填充
        CmnAjax.FillData(".JscHomeKVList", "/Itf/Php/AjaxItf.php?method=GetSqlData&ItfName=GetHomeKV", "", function (dat) {
            if (dat.IsSuccess == 1) {

            }
        }, "", "", function (data) {
            for (var _i = 0; _i < data.length; _i++) {
                if (data[_i]["link"] == "" || data[_i]["link"] == "#") {
                    data[_i]["target"] = "_self";
                    data[_i]["style"] = "cursor:default";
                }
                else {
                    data[_i]["target"] = "_blank";
                    data[_i]["style"] = "cursor:pointer";
                }
            }
        });

        //有奖问答关闭
        $(".Jsc_joinno_btn,.Jsc_answer_close_btn").on("click", function () {
            $(".Jsc_pop_float").hide();
        });
        //有奖调查问卷
        $(".Jsc_join_btn").on("click", function () {
            $(".Jsc_answer_home>div").hide();
            $(".Jsc_answer_modules1").show();
        });

        $(".JscNextBtn").on("click", function () {
            var _obj = $(this);
            var _optionsname = _obj.attr("optionsname");
            $(".error_msg").hide();
            $(".Jsc_answer_float>div").hide();
            $(".answer_close_btn").show();
            $(".answer_tip").show();
            $(".answer_car").show();
            if ($("#" + _optionsname + "_A_set").prop("checked") == true) {
                if (_optionsname == "first") {
                    $(".Jsc_answer_modules2").show();
                } else if (_optionsname == "second") {
                    $(".Jsc_answer_modules3").show();
                } else if (_optionsname == "three") {
                    $(".Jsc_answer_inf").show();
                }
            } else if ($("#" + _optionsname + "_B_set").prop("checked") == true) {
                $(".error_msg").hide();
                $(".JscErrorMsg1").show();
            } else if ($("#" + _optionsname + "_C_set").prop("checked") == true) {
                $(".error_msg").hide();
                $(".JscErrorMsg2").show();
            }
        });


        /// <summary>精彩下载业务逻辑</summary>
        var _NewDate;
        //点击焦点新闻
        $(".JscFocusNews").on("click", function () {
            var _news_type = $(this).attr("newstypes");
            if (_news_type == "1") {
                $("#page21").show();
                AnimateFrame.SlideTo("page21");
                NewsList()
            } else if (_news_type == "2") {
                $("#page31").show();
                AnimateFrame.SlideTo("page31");
                NewsList2()
            }
        });

        var _NewDate;
        var _NewNavData;
        var _NewsDesListData = [];
        //焦点新闻
        function NewsList() {
            var _newsListDataPaging = new CmnAjax.DataPaging([".JscNewNav"], "/Itf/Php/AjaxItf.php?method=GetSqlData&ItfName=GetNews", {"news_type": "1"}, ".Jsc_page_nav", 8, function (dat) {
                Cmn.FillData(".JscNewsDesList", _NewsDesListData, false);
                Cmn.FillData(".JscNewsCon", _NewNavData[0], false);
                NewPortList();
                if (dat.IsSuccess == 1) {
                    $(".JscNewsNavBox").cycle("destroy").cycle({
                        fx: 'scrollHorz',
                        pager: $(".JscCarouselMsg"),
                        timeout: 2000,
                        activePagerClass: "carousel_update",
                        speed: 1000,
                        pause: 1
                    });
                }
            }, "", "", "", function (data) {
                _NewDate = data;
                _NewNavData = data;
                _NewsDesListData = [];
                for (var _i = 0; _i < (data.length - 1); _i++) {
                    _NewsDesListData[_i] = data[_i + 1];
                }
            });
            _newsListDataPaging.Paging.ActiveClass = "append";
        }

        //媒体报道
        var _NewNavData2;
        var _NewsDesListData2 = [];

        function NewsList2() {
            //新闻填充
            var _newsListDataPaging2;
            _newsListDataPaging2 = new CmnAjax.DataPaging([".JscNewNav2"], "/Itf/Php/AjaxItf.php?method=GetSqlData&ItfName=GetNews", {"news_type": "2"}, ".Jsc_page_nav2", 8, function (dat) {
                Cmn.FillData(".JscNewsDesList2", _NewsDesListData2, false);
                Cmn.FillData(".JscNewsCon2", _NewNavData2[0], false);
                NewPortList();
                //点击当前显示新闻详情
                if (dat.IsSuccess == 1) {
                    $(".JscNewsNavBox2").cycle("destroy").cycle({
                        fx: 'scrollHorz',
                        pager: $(".JscCarouselMsg2"),
                        timeout: 2000,
                        activePagerClass: "carousel_update",
                        speed: 1000,
                        pause: 1
                    });
                }
            }, "", "", "", function (data) {
                _NewDate = data;
                _NewNavData2 = data;
                _NewsDesListData2 = [];
                for (var _i = 0; _i < (data.length - 1); _i++) {
                    _NewsDesListData2[_i] = data[_i + 1];
                }
            });
            _newsListDataPaging2.Paging.ActiveClass = "append";
        }

        //新闻资讯内容浮层
        function NewPortList() {
            $(".Jsc_news_more,.JscNewNav,.JscNewsDesList,.Jsc_news_more2,.JscNewNav2,.JscNewsDesList2").off("click").click(function () {
                $(".Jsc_pop_float>div").hide();
                $(".Jsc_pop_float").show();
                $(".Jsc_inf_float").show();
                var _date_id = $(this).attr("news_id");
                for (var _i = 0; _i < _NewDate.length; _i++) {
                    if (_NewDate[_i]["news_id"] == _date_id) {
                        $("#JscNewTitle").html(_NewDate[_i]["title"]);
                        $("#JscContent").html(_NewDate[_i]["content"]);
                        setTimeout(function () {
                            $(".inf_box").mCustomScrollbar("destroy");
                            $(".inf_box").mCustomScrollbar({
                                autoDraggerLength: false,
                                scrollButtons: {
                                    enable: false,
                                    scrollType: "continuous",
                                    scrollSpeed: "auto",
                                    scrollAmount: 40
                                },
                                theme: "light" /*"light", "dark", "light-2", "dark-2", "light-thick", "dark-thick", "light-thin", "dark-thin"*/
                            });
                        }, 10);
                        break;
                    }
                }
            });
        };

        //点击轮毂小图
        $(".JscMinTires").on("click", function () {
            $(".JscMaxTires").show();
        });
        $(".JscTireClose").on("click", function () {
            $(".JscMaxTires").hide();
        });
    }();
});