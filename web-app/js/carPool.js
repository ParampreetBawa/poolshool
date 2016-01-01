jQuery(document).ready(function () {
    (function (Conf) {
        var topNavView = new  Conf.TopNavView({
            el :'.navbar'
        });
        topNavView.render();

        var Location = Backbone.Model.extend({
            url : Conf.serverUrl + '/carpool/addPool',
            defaults :{
                from:'',
                to:''
            }
        });
        var LocationPickerView = Backbone.View.extend({
            model:{},
            events : {
                'click .done-pick-location' : 'locationPicked'
            },
            locationPicked: function (e) {
                e.preventDefault();
                var view = this;
                var loc = view.$el.find("#pac-input").val();
                var sel = view.$el.find("input[name='target']:checked").val()
                console.log(loc + " " +view.$el.find("."+sel+"-location").text(loc));
                if(loc)
                    view.$el.find("."+sel+"-location").text(loc);
            }
        });
        Conf.LocationPickerView = LocationPickerView;

        var x = new Conf.LocationPickerView({
            el: '.add-car-pool-box'
        });
    })(Config);
});