jQuery(document).ready(function () {
    (function(Conf){
        var MainContentModel = Backbone.Model.extend({
            url:Conf.serverUrl + '/async/mainContent',
            parse:function(data){
                return {feeds: new Feeds(data.feeds)};
            }
        });

        var Feed = Backbone.Model.extend({
            defaults : {
                id:'',
                heading: '',
                content:'',
                userName:'',
                userBio:'',
                userCompany :'',
                views:0,
                likes:0,
                dislikes :0,
                hasMore:false
            }
        });

        var Feeds = Backbone.Collection.extend({
            model:Feed
        });

        var MainContentView = Backbone.View.extend({
            model: MainContentModel,
            template: _.template($("#main-content-template").html()),
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
                view.model = new MainContentModel();
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

        Conf.MainContentView = MainContentView;
    })(Config);
})
