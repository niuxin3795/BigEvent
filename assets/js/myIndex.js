$(function () {
    // 获取用户信息
    getUserinfo();
    var layer = layui.layer;
    // 退出登录
    $("#btnExit").on("click", function () {
        layer.confirm('确定退出登录?', {icon: 3, title:'提示'}, function(index){
            //do something
            localStorage.removeItem("token");
            location.href = "/myLogin.html";
            layer.close(index);
          });
    });

})

function getUserinfo() {
    $.ajax({
        type: "GET",
        url: "/my/userinfo",
        // headers: {
        //     Authorization: localStorage.getItem("token") || ""
        // },

        success: function (res) {
            if (res.status != 0) return layui.layer.msg("获取信息失败!");

            renderAvatar(res.data);
           
        },

        
    });
};

function renderAvatar(user) {
    var uname = user.nickname || user.username;
    $("#welcome").html("欢迎&nbsp;&nbsp;" + uname);
    if (user.user_pic != null) {
        $(".layui-nav-img").attr("src", user.user_pic).show();
        $(".text-avatar").hide();
    } else {
        var first = uname[0].toUpperCase();
        $(".text-avatar").html(first).show();
        $(".layui-nav-img").hide();
    }
}