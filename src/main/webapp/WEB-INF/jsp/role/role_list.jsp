<%--
  Created by IntelliJ IDEA.
  User: nekuata
  Date: 2017/7/20
  Time: 8:29
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <title>用户管理</title>
    <c:set var="root" value="${pageContext.request.contextPath}"/>

    <%--bootstrap--%>
    <link type="text/css" rel="stylesheet" href="${root}/resources/bootstrap-3.0/css/bootstrap.min.css">
    <%--datetimepicker--%>
    <link type="text/css" rel="stylesheet" href="${root}/resources/bootstrap-3.0/extension/datetimepicker/css/bootstrap-datetimepicker.min.css">
    <%--datatables--%>
    <link type="text/css" rel="stylesheet" href="${root}/resources/dataTables/css/dataTables.bootstrap.min.css">
    <%--awesome--%>
    <link type="text/css" rel="stylesheet" href="${root}/resources/font-awesome-4.7.0/css/font-awesome.min.css">
    <%--ztree--%>
    <link type="text/css" rel="stylesheet" href="${root}/resources/ztree/css/awesome.css">

    <%--jquery--%>
    <script src="${root}/resources/jquery/jquery-3.2.1.min.js" type="text/javascript"></script>
    <%--bootstrap--%>
    <script src="${root}/resources/bootstrap-3.0/js/bootstrap.min.js" type="text/javascript"></script>
    <%--bootbox--%>
    <script src="${root}/resources/bootstrap-3.0/extension/bootbox/bootbox.min.js" type="text/javascript"></script>
    <%--datetimepicker--%>
    <script src="${root}/resources/bootstrap-3.0/extension/datetimepicker/js/bootstrap-datetimepicker.min.js" type="text/javascript"></script>
    <script src="${root}/resources/bootstrap-3.0/extension/datetimepicker/js/bootstrap-datetimepicker.zh-CN.js" type="text/javascript"></script>
    <%--dataTables--%>
    <script src="${root}/resources/dataTables/js/jquery.dataTables.min.js" type="text/javascript"></script>
    <script src="${root}/resources/dataTables/js/dataTables.bootstrap.min.js" type="text/javascript"></script>
    <%--ztree--%>
    <script type="text/javascript" src="${root}/resources/ztree/js/jquery.ztree.core.js"></script>
    <script type="text/javascript" src="${root}/resources/ztree/js/jquery.ztree.excheck.js"></script>
    <script type="text/javascript" src="${root}/resources/ztree/js/jquery.ztree.exedit.js"></script>

    <script type="text/javascript" src="${root}/resources/role/js/role-custom.js"></script>
</head>

<body>

<div class="panel-body">

    <form class="form-inline" id="formSearch">

        <%--昵称模糊搜索--%>
        <div class="form-group" style="margin-top: 5px">
            <label for="nickNameSearch">昵称：</label>
            <input type="text" class="form-control" id="nickNameSearch" placeholder="请输入昵称">
        </div>

        <%--用户名模糊搜索--%>
        <div class="form-group" style="margin-top: 5px;margin-left: 10px">
            <label for="roleNameSearch">用户名：</label>
            <input type="text" class="form-control" id="roleNameSearch" placeholder="请输入用户名">
        </div>

        <%--确认按钮--%>
        <input type="button" id="btn_query" class="btn btn-primary" style="margin-top: 5px;margin-left: 10px" value="查询">
    </form>
    <br>

    <div id="toolbar" class="btn-group">
        <button id="btn_add" type="button" class="btn btn-default">
            <span class="fa fa-plus" aria-hidden="true"></span>新增
        </button>
        <button id="btn_edit" type="button" class="btn btn-default">
            <span class="fa fa-pencil" aria-hidden="true"></span>修改
        </button>
        <button id="btn_delete" type="button" class="btn btn-default">
            <span class="fa fa-remove" aria-hidden="true"></span>删除
        </button>
    </div>

    <table id="role_list" class="table table-striped table-bordered">
        <thead>
        <tr>
            <th><input type="checkbox"></th>
            <th>角色Id</th>
            <th>角色名称</th>
            <th>角色信息</th>
            <th>操作</th>
        </tr>
        </thead>
        <tbody></tbody>
        <!-- tbody是必须的 -->
    </table>
</div>
</body>
</html>
