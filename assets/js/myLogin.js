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
    var layer = layui.layer;
    form.verify({
        pwd: [
            /^[\S]{6,12}$/
            , '密码必须6到12位，且不能出现空格'
        ],
    
        repwd: function(value) {
            var pwd = $("#form-reg [name=password]").val();
            if (pwd !== value) {
                return "两次密码不一致!";
            };
        }
    
    });

    // 注册提交事件
    $("#form-reg").on("submit", function (e) {
        e.preventDefault();
        var data = {
            username: $("#form-reg [name=username]").val(),
            password: $("#form-reg [name=password]").val()
        };
        $.post("http://ajax.frontend.itheima.net/api/reguser", data,
            function (res) {
                if (res.status !== 0) {
                    return layer.msg(res.message);
                }
                layer.msg("注册成功,请登录!");
                $("#link_reg").click();
            }
        );
    }); 

    // 登录事件
    $("#form-login").on("submit", function (e) {
        e.preventDefault();
        var data = {
            username: $("#form-login [name=username]").val(),
            password: $("#form-login [name=password]").val()
        };
        $.post("http://ajax.frontend.itheima.net/api/login", data,
            function (res) {
                if (res.status !== 0) {
                     
                }
            },
            
        );
    });
})