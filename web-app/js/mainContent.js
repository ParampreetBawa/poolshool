jQuery(document).ready(function () {
    (function(Conf){
        var MainContentModel = Backbone.Model.extend({
            url:''
        });

        var MainContentView = Backbone.View.extend({
            model: MainContentModel,
            template: _.template($("#main-content-template").html()),
            render: function () {
                var view = this;
                this.$el.html(view.template());
            }
        });

        Conf.MainContentView = MainContentView;
    })(Config);
})
