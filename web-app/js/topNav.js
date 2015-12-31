jQuery(document).ready(function () {
    (function(Conf){
        var TopNavModel = Backbone.Model.extend({
            url:''
        });

        var TopNavView = Backbone.View.extend({
            model: TopNavModel,
            template: _.template($("#topnav-template").html()),
            render: function () {
                var view = this;
                this.$el.html(view.template());
            }
        });

        Conf.TopNavView = TopNavView;
    })(Config);
})
