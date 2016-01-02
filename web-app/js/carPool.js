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
                'click .done-pick-location' : 'locationPicked',
                'click .post-pool-seek' : 'postPoolSeek'
            },
            postPoolSeek: function (e) {
                e.preventDefault();
                var view = this;
                var to = view.$el.find(".to-location").text();
                var from = view.$el.find(".start-location").text();
                $.ajax({
                    url:Conf.serverUrl + '/carpool/postCarPool',
                    data:{to:to,from:from,isCarOwner:false},
                    type:'POST',
                    success: function () {
                        view.showSuccessDialog(":) Hello your request has been posted. taking you back to home!!!");
                        Conf.mainModel.set("service",'default')
                        setTimeout(function () {
                            view.hideSuccessDialog();
                            view.refreshAllViews();
                        },1500);
                    },
                    error: function () {

                    }
                })
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