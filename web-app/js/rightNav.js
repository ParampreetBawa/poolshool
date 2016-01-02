jQuery(document).ready(function () {
    (function (Conf) {
        var RightNavView = Conf.MainView.extend({
            template: _.template($("#right-nav-template").html()),
            model: Conf.MainModel,
            refresh: function () {
                var arr = Conf.mainModel.get("viewsRefreshStatus")
                arr.trigger('change');
            },
            events : {
                'click .car-pool' : 'addCarPool'
            },
            render: function () {
                this.$el.find(".right-nav").html(this.template());
            },
            addCarPool: function (e) {
                e.preventDefault();
                var view = this;
                view.$el.find("#carpool-modal").modal('hide');
                view.showLoadingModal();
                if(view.isLoggedIn()) {
                    setTimeout(function () {
                        Conf.mainModel.set("service",getCarPoolOfferName());
                        Conf.views.carPoolView.render();
                        view.hideLoadingModal();
                    }, 500);
                }else {
                    setTimeout(function () {
                        view.showSignupModal();
                        view.hideLoadingModal();
                    }, 500);
                }
            }
        });
        Conf.RightNavView = RightNavView;
    })(Config);
});