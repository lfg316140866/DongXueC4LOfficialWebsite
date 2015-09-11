/// <reference path="../../../Js/CmnAjax.js" />
/// <reference path="../../../Js/CmnMis/CmnMisFunc.js" />
/// <reference path="../../../Js/jquery.js" />
/// <reference path="../../../Js/Cmn.js" />
/// <reference path="../../../Js/CmnAjax.js" />
/// <reference path="../../../Js/CmnMis/CmnMisControl.js" />



//--------------------------------SelectBySort控件类----------------------
//ERP控件 非基础控件

(function (control, object) {

    control.SelectBySort = function (controlContainer, colName, controlCfg) {
        /// <summary>SelectBySort控件类</summary>
        /// <param name="controlContainer" type="String">控件容器</param>
        /// <param name="colName" type="String">字段名称</param>
        /// <param name="controlCfg" type="String">控件配置</param>

        //接口地址
        this.InterfaceUrl = InterfaceUrl;

        object.Inherit(this, control.BasControl, [controlContainer, "SelectBySort", colName, controlCfg]);
      
    }
    //初始化控件配置
    control.SelectBySort.prototype.InitControl = function (controlCfg) {
        //指向本身
        var _self = this,
            //获取uuid 唯一标示
            _uuid = Cmn.GetUUID(),
            //查询条件
            _where = "";

        //初始化控件配置 
        _self.ControlCfg = _self.InitControlConfig(controlCfg);
        
        //控件配置
        _self.ControlCfg = Cmn.Extend({
            //类型集合 将会生成select选择控件 {Name:"",FillSql:"",FieldName:""}
            Sorts: []
        }, _self.ControlCfg);

        //选择器
        _self.Selector = {
            //容器选择器
            Wrap: ".cmn-SelectBySort-Wrap",
            //分类选择器
            Sort: ".cmn-SelectBySort-Sort",
            //分类容器选择器
            SortsWrap: ".cmn-SelectBySort-SortsWrap",
            //输入框选择器
            Input: ".cmn-SelectBySort-Input",
            //记录列表选择器
            OptionList: ".cmn-SelectBySort-OptionList",
            //记录列表填充项选择器
            OptionListItem: ".cmn-SelectBySort-OptionListItem",
            //显示的文本选择器
            Text: ".cmn-SelectBySort-OptionListItemText",
            //选中的选择器
            Select: ".Select"
        };

        ////设置该空间浮层的唯一标示
        //_self.ControlDom.find(_self.Selector.Wrap).hide().attr("id",_uuid);
        ////然后把这货放在body下面
        //_self.ControlDom.find(_self.Selector.Wrap).insertAfter(_self.ControlDom);
        
        //绑定 autocomplete 
        Cmn.UI.CustomAutoComplete(_self.Selector.Wrap, _self.InterfaceUrl, {
            //序列化参数
            SerializeParam: function (val) {
                return {
                    "method": "ExecSql",
                    "ExecSql": _self.ControlCfg.FillSql,
                    "param": val
                };
            },
            Selector: {
                InputSelector: _self.Selector.Input,
                //显示的数据集合的容器选择器
                OptionList: _self.Selector.OptionList,
                //显示的项选择器
                Item: _self.Selector.OptionListItem,
                //显示的文本选择器
                Text: _self.Selector.Text,
                //选中项的选择器
                ItemSelect: _self.Selector.Select
            },
            Change: function (val, text) {
                alert(text);
            }
        });


        //不存在类型配置
        if (_self.ControlCfg.Sorts.length <= 0) {



        }
        else {
            //存在类型配置

            //保存类型模板
            //var _sortsTemp = $("#" + _uuid).find(_self.Selector.Sort).remove().clone(true, true),
            //    //类型的容器
            //    _sortsWrap = $("#" + _uuid).find(_self.Selector.SortsWrap);

            ////遍历类型配置 生成类型选项
            //for (var _i = 0; _i < _self.ControlCfg.Sorts.length; _i++) {
            //    //当前类型配置
            //    var _sortCfg = _self.ControlCfg.Sorts[_i];
            //    //添加类型的dom
            //    _sortsWrap.append(_sortsTemp);

            //    //生成类型选择下拉框
            //    (function (sortCfg,sortsTemp) {

            //        sortsTemp.append("<option>--" + sortCfg.Name + "--</option>");

            //        //获取控件数据
            //        CmnMis.UI.Control.GetControlData(sortCfg, "", function (data) {
            //            var _data = data,
            //                _option = "";

            //            if (!!_data) {

            //                if (!(typeof _data == "object")) { _data = $.parseJSON(_data); };

            //                //遍历集合拿到每个json
            //                $.each(_data, function (index, items) {
            //                    // 项的key val 以及数据的的长度每个json只能有两个值
            //                    var _key = "", _val = "", _len = 0;        

            //                    if (!object.IsType(items, "object")) { Cmn.Log("OptionList : 数据格式违法！必须为json数组"); return; }

            //                    $.each(items, function (i, item) {       //遍历json
            //                        if (_len == 0) { _key = item; }        //拿到第一个给key
            //                        else if (_len == 1) { _val = item; }   //拿到第二个给value
            //                        else { return; }                    // 丢掉多余的数据
            //                        _len++;
            //                    });

            //                    _option += "<option value=\"" + _key + "\">" + _val + "</option>";

            //                });
            //            }

            //            sortsTemp.append($(_option));

            //        });


            //    })(_sortCfg, _sortsTemp);

            //}  
        }


    }
    //获取控件的值
    control.SelectBySort.prototype.GetValue = function () {
         
    }

    //设置控件的值
    //value:需要往控件中设置的值
    control.SelectBySort.prototype.SetValue = function (value) {
        
    }
    //设置控件的宽度
    //value:需要往控件中设置的宽度值
    control.SelectBySort.prototype.SetWidth = function (Width) {
       
    }
    //初始化控件
    control.SelectBySort.prototype.Init = function () {
         
    }
    //设置输入焦点
    control.SelectBySort.prototype.SetFocus = function () {
         
    }

})(CmnMis.UI.Control, Cmn.Object);
