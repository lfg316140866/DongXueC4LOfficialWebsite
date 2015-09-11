///Version:1.0
/// <reference path="../../../Js/ThirdLib/jquery.js" />
/// <reference path="CmnMis.js" />
/// <reference path="CmnMisFrame.js" />
/// <reference path="CmnMisUserForm.js" />

(function () {
    //控件命名空间
    var _Control = CmnMis.UI.Control;
    //----------------------------------------------
    _Control.BasRowControl = function (colName,controlCfg,keyFieldName) {
        /// <summary>数据列表中的数据行控件基类</summary>
        /// <param name="colName" type="String">字段名</param>
        /// <param name="controlCfg" type="Object">控件配置</param>
        /// <param name="keyFieldName" type="String">主键字段名</param>

        this.Init = function (data) {
            /// <summary>初始化数据列</summary>
            /// <param name="data" type="Array">列表数据</param>
        }

        this.AfterFillData = function () {
            /// <summary>在列表数据填充完成后触发</summary>
        }

    };
    //----------------------------------------------
    _Control.PrintRow = function (colName, controlCfg, keyFieldName) {
        /// <summary>行数据打印控件</summary>
        /// <param name="colName" type="String">字段名</param>
        /// <param name="controlCfg" type="Object">控件配置</param>
        /// <param name="keyFieldName" type="String">主键字段名</param>

        //继承基类
        Cmn.Object.Inherit(this, _Control.BasRowControl, [colName, controlCfg, keyFieldName]);

        var _Self = this;

        this.Init = function (data) {
            /// <summary>初始化数据列</summary>
            /// <param name="data" type="Array">列表数据</param>
            
            for (var _i = 0; _i < data.length; _i++) {
                data[_i][colName] = "<a target='_blank' class='cmn-tmp-PrintRow'><img src='Image/print.gif' /></a>";
            }
        }

        this.AfterFillData = function () {
            /// <summary>在列表数据填充完成后触发</summary>

            $(CmnMis.CurUserForm.GetSelector(".cmn-tmp-PrintRow")).each(function () {
                //alert("主键：" + CmnMis.CurUserForm.GetCurRecKeyVal($(this)));

                var _downUrl = CmnMis.Func.GetItfUrl(CmnMis.CurUserForm, CmnMis.CurUserForm.Cfg.MethodName.GetRecList);
                var _ajaxParam = CmnMis.CurUserForm.GetRecAjaxParam();
                var _where = "[" + keyFieldName + "]='" + CmnMis.CurUserForm.GetCurRecKeyVal($(this)) + "'";

                if (_ajaxParam["Condition"]) { _ajaxParam["Condition"] = _ajaxParam["Condition"] + " and " + _where;  }
                else { _ajaxParam["Condition"] = _where; }

                for (var _key in _ajaxParam) {
                    _downUrl = Cmn.Func.AddParamToUrl(_downUrl, _key + "=" + encodeURIComponent(_ajaxParam[_key]));
                }

                _downUrl = Cmn.Func.AddParamToUrl(CmnAjax.Func.GetProxyUrl(_downUrl), "method=GetExcel&FileName=" + controlCfg["TemplateFileName"]);

                //设置下载csv链接
                $(this).attr("href", _downUrl);
            });
        }
    }
    //----------------------------------------------
})();