jQuery(document).ready(function () {
    (function (Conf) {
        var Location = Conf.MainModel.extend({
            url : Conf.serverUrl + '/carpool/addPool',
            defaults :{
                from:'',
                to:''
            }
        });
        var CarPoolView = Conf.MainView.extend({
            model:Location,
            refresh: function () {
                this.render();
                var arr = Conf.mainModel.get("viewsRefreshStatus")
                arr.trigger('change');
            },
            template : _.template($("#carpool-template").html()),
            events : {
                'click .done-pick-location' : 'locationPicked'
            },
            render: function () {
                if(Conf.mainModel.get("service") === 'carpooloffer')
                    this.$el.html(this.template());
            },
            locationPicked: function (e) {
                e.preventDefault();
                var view = this;
                var loc = view.$el.find("#pac-input").val();
                var sel = view.$el.find("input[name='target']:checked").val()
                if(loc)
                    view.$el.find("."+sel+"-location").text(loc);
            }
        });
        Conf.CarPoolView = CarPoolView;
    })(Config);
});