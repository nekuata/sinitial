/**
 * Created by nekuata on 2017/7/20.
 */
$(document).ready(function () {
    // 初始化Table
    postTable();

    /*// 初始化Toolbar
    $("div.toolbar").html('<div id="toolbar" class="btn-group">\n' +
        '        <button id="btn_add" type="button" class="btn btn-default">\n' +
        '            <span class="fa fa-plus" aria-hidden="true"></span>新增' +
        '        </button>\n' +
        '        <button id="btn_edit" type="button" class="btn btn-default">\n' +
        '            <span class="fa fa-pencil" aria-hidden="true"></span>修改' +
        '        </button>\n' +
        '        <button id="btn_delete" type="button" class="btn btn-default">\n' +
        '            <span class="fa fa-remove" aria-hidden="true"></span>删除' +
        '        </button>\n' +
        '    </div>');*/

    // 初始化Button的点击事件
    buttonInit();

    // 丢掉datatables报错信息（官方方案之一）
    $.fn.dataTable.ext.errMode = 'throw';

});

//提示信息
var lang = {
    "sProcessing": "处理中...",
    "sLengthMenu": "每页 _MENU_ 项",
    "sZeroRecords": "没有匹配结果",
    "sInfo": "当前显示第 _START_ 至 _END_ 项，共 _TOTAL_ 项。",
    "sInfoEmpty": "当前显示第 0 至 0 项，共 0 项",
    "sInfoFiltered": "(由 _MAX_ 项结果过滤)",
    "sInfoPostFix": "",
    "sSearch": "搜索:",
    "sUrl": "",
    "sEmptyTable": "表中数据为空",
    "sLoadingRecords": "载入中...",
    "sInfoThousands": ",",
    "oPaginate": {
        "sFirst": "首页",
        "sPrevious": "上页",
        "sNext": "下页",
        "sLast": "末页",
        "sJump": "跳转"
    },
    "oAria": {
        "sSortAscending": ": 以升序排列此列",
        "sSortDescending": ": 以降序排列此列"
    }
};

//初始化表格
var postTable = function () {
    var tableParam = {};
    tableParam.Init = $("#post_list").dataTable({
        destroy: true, //创建表格前先删除旧表格
        // dom: '<"top"f>rt<"bottom"lp>i<"clear">',
        // dom: '<"toolbar">frtip',
        dom: "<'row'<'col-sm-6'><'col-sm-6'>>" + "<'row'<'col-sm-12'tr>>" + "<'row'<'col-sm-2'l><'col-sm-3'i><'col-sm-7'p>>",
        language: lang,  //提示信息
        // autoWidth: false,  //禁用自动调整列宽
        stripeClasses: ["odd", "even"],  //为奇偶行加上样式，兼容不支持CSS伪类的场合
        processing: true,  //隐藏加载提示,自行处理
        serverSide: true,  //启用服务器端分页
        lengthMenu: [[5,25,50,100,-1],[5,25,50,100,"All"]],
        pageLength: 5,
        pagingType: "full_numbers",  //分页样式：simple,simple_numbers,full,full_numbers
        searching: true,  //原生搜索
        orderMulti: false,  //启用多列排序
        order: [],  //取消默认排序查询,否则复选框一列会出现小箭头
        renderer: "bootstrap",  //渲染样式：Bootstrap和jquery-ui
        columnDefs:[
            {"targets": 'nosort', "orderable": false}    //包含上样式名‘nosort’的禁止排序
        ],
        ajax: {
            url: '/post/list',
            type: 'POST',
            dataType: "json"
        },
        //列表表头字段
        columns: [
            {data : "postId", "orderable": false, "width": "2%", "render": function(data){ return '<input type="checkbox" name="'+data+'">'; }},
            {data : "postStatus"},
            {data : "postTitle"},
            {data : "user.nickName"},
            {data : "postDate", "render": function(data){return moment(data).format('MM.DD.YYYY');}},
            {data : "postId",
                render: function (data, type, row) {
                    return '<button class="btn btn-info btn-sm" onclick="updatePost('+data+')"><i class="fa fa-pencil"></i>修改</button>' +
                        '&nbsp;&nbsp;' +
                        '<button class="btn btn-danger btn-sm" onclick="delPost('+data+')"><i class="fa fa-remove"></i>删除</button>';
                }
            }
        ]
    }).api();
//此处需调用api()方法,否则返回的是JQuery对象而不是DataTables的API对象

    return tableParam;
};

function updatePost(postId) {
    window.open("/post/update/"+postId, "_self");
}

function delPost(postId) {
    bootbox.confirm({
        message: "确认删除？",
        buttons: {
            confirm: {
                label: '确认',
                className: 'btn-success'
            },
            cancel: {
                label: '取消',
                className: 'btn-danger'
            }
        },
        callback: function (result) {
            if (result) {
                $.ajax({
                    url: "/post/del/" + postId,
                    type: "post",
                    dataType: "text",
                    success: function () {
                        postTable().Init.api().ajax.reload(false);
                        $(".bootbox-close-button").click();
                    },
                    error: function () {
                        alert("删除失败");
                        $(".bootbox-close-button").click();
                    }
                });
            } else {
                $(".bootbox-close-button").click();
            }
        }
    });
}


function buttonInit() {

    // 初始化页面上面的按钮事件

    /*$(document).click(function (e) {
        var _con = $(".modal-content");   // 设置目标区域
        if (!_con.is(e.target) && _con.has(e.target).length === 0) { // Mark 1
            $(".bootbox-close-button").click();
        }
    });*/

    $("#btn_add").click(function () {
        window.open("/post/add/page","_self");
    });

    $("#btn_query").click(function () {
        postTable().Init.ajax.reload(false);
    });
}