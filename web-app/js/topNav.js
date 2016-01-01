jQuery(document).ready(function () {
    (function(Conf){
        var TopNavModel = Backbone.Model.extend({
            url: Conf.serverUrl + '/async/topNav',
            defaults : {
                isLoggedIn:false,
                deals :0,
                notifications:0
            }
        });

        var TopNavView = Backbone.View.extend({
            model: TopNavModel,
            template: _.template($("#topnav-template").html()),
            events : {
                'click .logout': 'logout'
            },
            render: function () {
                var view = this;
                view.fetch();
            },

            renderAfterFetch: function () {
                this.$el.html(this.template(this.model.toJSON()));
            },

            fetch: function () {
                var view = this;
                this.model = new TopNavModel();
                this.model.fetch({
                    timeout:10000,
                    data:{},
                    success: function (collection,response,options) {
                        view.renderAfterFetch();
                    },
                    error: function (collection,response,options) {

                    }
                })
            },
            logout: function (e) {
                e.preventDefault();
                $.ajax({
                    type: 'POST',
                    url: Conf.serverUrl + '/logout/index',
                    success: function (data) {
                        console.log("here")
                        window.location = window.location.href;
                    },
                    error : function (data) {
                        console.log("here")
                        window.location = window.location.href;
                    }
                });
            }
        });

        Conf.TopNavView = TopNavView;
    })(Config);
})