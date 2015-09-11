/// <reference path="../../../Js/Cmn.js" />
/// <reference path="../../../Js/CmnAjax.js" />
/// <reference path="../../../Js/CmnFuncExd.js" />
/// <reference path="../../../Js/jquery-1.9.1.min.js" />

$(function () {
    (Index = new function () {
        new PCAS("Province1", "City1","");
        $(".JscAttesting").on("click", function () {
            $(".Jsc_attesting_float").show();
        });

        $(".JscCheckBox").on("click", function () {
            if ($(this).find(".CheckBoxImg1").is(":visible")==true) {
                $(".checkimg").hide();
                $(".CheckBoxImg2").show();
            } else{
                $(".checkimg").hide();
                $(".CheckBoxImg1").show();
            }
        });
        var _Submit = false;
        $(".JscSubMitBtn").on("click", function () {
            var _name = $(".JscName").val();
            var _sex = $(".JscSex").find("option:selected").val();
            var _phone = $(".JscPhone").val();
            var _province = $("#DealerProvince").val();
            var _city = $("#DealerCity").val();
            //var _dealer = $(".JscDealer").find("option:selected").text();
            var _checkPhone = /^0?1[3|4|5|8][0-9]\d{8}$/;
            var _disclaimer = ($(".check2").is(":visible") ? "同意" : "不同意");
            if (_name == "") {
                Cmn.alert("请输入您的姓名！");
                return;
            }
            //一般性别会默认选择一个，但是还是判断一下
            if (_sex == "" || _sex == undefined) {
                Cmn.alert("请选择您的性别！");
                return;
            }
            if (_phone == "") {
                Cmn.alert("请输入您的手机号！");
                return;
            }
            if (!_checkPhone.test(_phone)) {
                Cmn.alert("请输入正确的11位手机号！");
                return;
            }
            if (_province == "") {
                Cmn.alert("请选择您所在的省！");
                return;
            }
            if (_city == "" || _city == "城市") {
                Cmn.alert("请选择您所在的市！");
                return;
            }
            //留资
            var _param = {
                "name": _name,
                "sex": _sex,
                "phone": _phone,
                "province": _province,
                "city": _city,
                //"dealer_name": _dealer,
                "site": "新C4L重返好声音",
                "source": location.href,
                "disclaimer": _disclaimer
            }
            _Submit = true;
            CmnAjax.PostData("/Itf/Php/AjaxItf.php?method=GetSqlData&ItfName=AddTestDrive", _param, function (data) {
                if (data.IsSuccess == "1") {
                    Cmn.alert("提交成功！");
                    _Submit = false;
                }
            });

        });

        ///// <summary>经销商查询的业务逻辑</summary>
        //CmnAjax.FillData(".JscProvince", "/Itf/Php/AjaxItf.php?method=GetSqlData&ItfName=GetProvince", "", function (dat) {
        //    if (dat.IsSuccess == "1") {
        //        Index.ProvinceCityChange();
        //        $("#DealerProvince").change();
        //    }
        //});

        ////填充省下拉框,获取选中的下拉框的值
        //this.ProvinceCityChange = function () {
        //    $("#DealerProvince").on("change", function () {
        //        var _id = $(this).val();
        //        //$("#DealerCity").html("<option class='JscCity dat-city_id-value dat-city_desc' value=''>一周之内</option>");
        //        CmnAjax.FillData(".JscCity", "/Itf/Php/AjaxItf.php?method=GetSqlData&ItfName=GetCity", { "province_id": _id }, function (dat) {
        //            $("#DealerCity").on("change", function () {
        //            //    var _dealerCityID = $("#DealerCity").val();
        //            //    CmnAjax.FillData(".JscDealerSearchFloatAdressDetailed", "/Itf/Php/AjaxItf.php?method=GetSqlData&ItfName=GetDealerInfo", { "city_id": _dealerCityID }, function (dat) {
        //            //    });
        //            });
        //            //$("#DealerCity").change();
        //        });
        //    });
        //}
    });
});