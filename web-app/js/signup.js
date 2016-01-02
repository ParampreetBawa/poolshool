jQuery(document).ready(function () {
    (function(Conf){
        var SignUpModel = Conf.MainModel.extend({

        });
        var SignUpView = Conf.MainView.extend({
            model: SignUpModel,
            events : {
                'click .signup-form .btn':'register',
                'click .login-form .btn':'login',
                'click .login-show-form':'showLoginForm',
                'click .register-show-form':'showRegisterForm'
            },

            refresh: function () {
                var arr = Conf.mainModel.get("viewsRefreshStatus")
                arr.trigger('change');
            },
            register : function (e) {
                e.preventDefault();
                var view = this;
                var email = this.$el.find(".email-box").val();
                var domain = this.$el.find("#domain-sel").val()
                if(!email || domain === "-1") {
                    return
                }

                $.ajax({
                    type:'POST',
                    url : Conf.serverUrl + '/user/register',
                    data:{email:email+"@"+domain},
                    success : function (data) {
                        if(data.code === 0) {
                            view.$el.find(".error").css('display','block');
                            view.$el.find(".error").text(data.msg)
                        }else {
                            view.$el.modal('hide');
                        }
                    },
                    error:function(data) {
                        view.$el.find(".registration-error").css('display','block');
                        view.$el.find(".registration-error").text(data.msg)
                    }
                });
            },
            showLoginForm: function (e) {
                e.preventDefault();
                this.$el.find(".signup-form").hide();
                this.$el.find(".login-form").show();
            },

            showRegisterForm: function (e) {
                e.preventDefault();
                this.$el.find(".login-form").hide();
                this.$el.find(".signup-form").show();
            },

            login : function (e) {
                e.preventDefault();
                var view = this;
                var rem = this.$el.find("input[name='_spring_security_remember_me']").val()
                var uname = this.$el.find("input[name='j_username']").val()
                var pass = this.$el.find("input[name='j_password']").val()
                $.ajax({
                    type:'POST',
                    url : Conf.serverUrl + '/j_spring_security_check',
                    data:{j_username:uname,j_password:pass,_spring_security_remember_me:rem},
                    success : function (data) {
                        if(data.error) {
                            view.$el.find(".error").show();
                            view.$el.find(".error").text(data.error);
                        }else if(data.success) {
                            view.$el.find(".error").hide();
                            view.$el.find(".error").text('');
                            view.$el.modal('hide');
                            view.refreshAllViews();
                        }
                    },
                    error:function(data) {
                        view.$el.find(".error").show();
                        view.$el.find(".error").text('Some error occurred');
                    }
                });
            }
        });

        Conf.SignUpView = SignUpView;
    })(Config);
});