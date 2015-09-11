/// <reference path="../../../Js/CmnMis/CmnMis.js" />
/// <reference path="../../../Js/md5.js" />
/// <reference path="../../../Js/CmnMis/CmnMisUserForm.js" />

CmnMis.CurUserForm.BeforeFillRecList.Add(function (data) {
    for (var _i = 0; _i < data.length; _i++) {
        data[_i]["TaskDesc"] = data[_i]["TaskDesc"] + "</br>" +
            "<b style='cursor: pointer; color: #00f;margin-left:2px;' class='jscRightCfgBtn'>[详细查询]</b>";
    }

});

CmnMis.CurUserForm.AfterRecListLoad.Add(function () {
    var _curFormDom = $(CmnMis.CurUserForm.GetUserFormSelector());

    _curFormDom.find(".jscRightCfgBtn").off("click").on("click", function () {

        var _recid = CmnMis.CurUserForm.GetCurRecKeyVal(this);

        CmnMis.Frame.ShowUserForm(399,
					{ ViewState: "List", Condition: "[a.TaskID=" + _recid + "]", data: { "a.TaskID": _recid } });
    });

}); 


