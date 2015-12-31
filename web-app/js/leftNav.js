jQuery(document).ready(function () {
    (function(Conf){
        var LeftNavModel = Backbone.Model.extend({
            url:''
        });

        var LeftNavView = Backbone.View.extend({
            model: LeftNavModel,
            template: _.template($("#sidenav-template").html()),
            render: function () {
                var view = this;
                this.$el.html(view.template());
            }
        });

        Conf.LeftNavView = LeftNavView;
    })(Config);
})
