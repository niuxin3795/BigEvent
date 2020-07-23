$(function () {
    $("#link_login").on('click', function () {
        $(".box-login").hide();
        $(".box-reg").show();
    });
    $("#link_reg").on('click', function () {
        $(".box-login").show();
        $(".box-reg").hide();
    });

    var form = layui.form;
    form.verify({
        pwd: [
            /^[\S]{6,12}$/
            , '密码必须6到12位，且不能出现空格'
        ]
    })


})