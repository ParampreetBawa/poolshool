jQuery(document).ready(function () {
    (function (Conf) {
        var RightNavView = Conf.MainView.extend({
            model: Conf.MainModel,
            refresh: function () {
                var arr = Conf.mainModel.get("viewsRefreshStatus")
                arr.trigger('change');
            },
            events : {
                'click .car-pool' : 'addCarPool'
            },
            addCarPool: function (e) {
                e.preventDefault();
                var view = this;
                view.$el.modal('hide');
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