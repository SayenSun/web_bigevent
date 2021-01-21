$(function() {
    // 点击"去注册账号"的链接
    $("#link_reg").on("click", function() {
        $(".login-box").hide();
        $(".reg-box").show();
    });

    // 点击"去登陆"的链接
    $("#link_login").on("click", function() {
        $(".login-box").show();
        $(".reg-box").hide();
    });
    // 从 layUI中获取form对象
    var form = layui.form;
    // 通过form.verify()函数自定义校验规则
    form.verify({
        // 自定义了一个叫做pwd的校验规则
        pwd: [/^[\S]{6,12}$/, "密码必须6到12位，且不能出现空格"],
        // 校验两次密码是否一致
        repwd: function(value) {
            var pwd = $(".reg-box [name=password]");
            if (pwd !== value) {
                return "两次密码不一致";
            }
        },
    });
});