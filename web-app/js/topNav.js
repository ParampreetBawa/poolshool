jQuery(document).ready(function () {
    (function(Conf){
        var TopNavModel = Conf.MainModel.extend({
            url: Conf.serverUrl + '/async/topNav',
            defaults : {
                deals :0,
                notifications:0
            }
        });

        var TopNavView = Conf.MainView.extend({
            model: TopNavModel,
            template: _.template($("#topnav-template").html()),
            events : {
                'click .logout': 'logout'
            },

            refresh: function() {
                this.fetch();
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
                var view = this;
                $.ajax({
                    type: 'POST',
                    url: Conf.serverUrl + '/logout/index',
                    success: function (data) {
                        view.refreshAllViews();
                    },
                    error : function (data) {
                        view.refreshAllViews();
                    }
                });
            }
        });

        Conf.TopNavView = TopNavView;
    })(Config);
})