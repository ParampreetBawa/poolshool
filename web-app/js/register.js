jQuery(document).ready(function () {
    (function(Conf){
        var RegisterView = Conf.MainView.extend({
            template: _.template($("#register-template").html()),
            events : {
                'click .btn': 'create'
            },

            create: function (e) {
                e.preventDefault();
                var view = this;
                var data = {
                    firstName : this.$el.find("input[name='firstName']").val(),
                    lastName : this.$el.find("input[name='lastName']").val(),
                    invitationId : getInvitationId()
                }
                $.ajax({
                    type:'POST',
                    url : Conf.serverUrl + '/user/create',
                    data : data,
                    success: function (data) {
                        view.login(data.email)
                    },
                    failure: function () {

                    }
                })
            },

            login: function (email) {
                $.ajax({
                    type:'POST',
                    url : Conf.serverUrl + '/j_spring_security_check',
                    data:{j_username:email,j_password:"register",_spring_security_remember_me:true},
                    success : function (data) {
                        if(data.error) {

                        }else if(data.success) {
                            window.location = Conf.serverUrl + '/html/home.html'
                        }
                    },
                    error:function(data) {

                    }
                });
            },

            refresh: function() {
                this.fetch();
            },
            render: function () {
                var view = this;
                view.fetch();
            },

            renderAfterFetch: function (data) {
                this.$el.html(this.template(data));
            },

            fetch: function () {
                var view = this;
                $.ajax({
                    type:'GET',
                    url :Conf.serverUrl + '/user/invite',
                    data:{invitationId:getInvitationId()},
                    success: function (data) {
                        view.renderAfterFetch(data);
                    },failure: function (data) {

                    }
                });
            }
        });

        Conf.RegisterView = RegisterView;
    })(Config);
})