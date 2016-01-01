jQuery(document).ready(function () {
    (function(Conf){
        var Feed = Backbone.Model.extend({
            defaults : {
                id:'',
                heading: ''
            }
        });

        var Feeds = Backbone.Collection.extend({
            model:Feed
        })
        var LeftNavModel = Backbone.Model.extend({
            url:Conf.serverUrl + '/async/leftNavFeed',
            parse: function (data) {
                return {feeds :new Feeds(data.feeds)}
            },
            defaults :{
                feeds : Feeds
            }
        });

        var LeftNavView = Backbone.View.extend({
            model: LeftNavModel,
            template: _.template($("#sidenav-template").html()),
            render: function () {
                var view = this;
                view.fetch();
            },

            renderAfterFetch:function() {
                var view = this;
                this.$el.html(view.template({feeds: view.model.get('feeds').models}));
            },
            fetch: function () {
                var view = this;
                view.model = new LeftNavModel();
                view.model.fetch({
                    data :{},
                    type:'GET',
                    success: function (collection,model,options) {
                        view.renderAfterFetch();
                    },
                    failure: function (collection,model,options) {

                    }
                });
            }
        });



        Conf.LeftNavView = LeftNavView;
    })(Config);
})
