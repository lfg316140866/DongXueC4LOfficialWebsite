/// <reference path="../../../Js/CmnAjax.js" />
/// <reference path="../../../Js/CmnMis/CmnMisFunc.js" />
/// <reference path="../../../Js/jquery.js" />
/// <reference path="../../../Js/Cmn.js" />
/// <reference path="../../../Js/CmnAjax.js" />
/// <reference path="../../../Js/CmnMis/CmnMisControl.js" />



//------------------------UserSelect控件类----------------------
//ERP控件 非基础控件

(function (control, object) {

    control.UserSelect = function (controlContainer, colName, controlCfg) {
        /// <summary>SelectBySort控件类</summary>
        /// <param name="controlContainer" type="String">控件容器</param>
        /// <param name="colName" type="String">字段名称</param>
        /// <param name="controlCfg" type="String">控件配置</param>

        this.SelectBySort = control.NewControl(controlContainer, "SelectBySort", colName, controlCfg);
        //设置接口地址
        this.SelectBySort.InterfaceUrl = "/Itf/CSharp/CmnMisItf.aspx?method=GetSqlData&ItfName=Cmn_Ctl_UserSelect_AutoComplete";

        object.Inherit(this, control.BasControl, [controlContainer, "UserSelect", colName, controlCfg]);
      
    }
    //初始化控件配置
    control.UserSelect.prototype.InitControl = function (controlCfg) {
        //指向本身
        var _self = this;
        _self.SelectBySort.InitControl(controlCfg);
    }
    //获取控件的值
    control.UserSelect.prototype.GetValue = function () {
         
    }

    //设置控件的值
    //value:需要往控件中设置的值
    control.UserSelect.prototype.SetValue = function (value) {
        
    }
    //设置控件的宽度
    //value:需要往控件中设置的宽度值
    control.UserSelect.prototype.SetWidth = function (Width) {
       
    }
    //初始化控件
    control.UserSelect.prototype.Init = function () {
         
    }
    //设置输入焦点
    control.UserSelect.prototype.SetFocus = function () {
         
    }

})(CmnMis.UI.Control, Cmn.Object);
