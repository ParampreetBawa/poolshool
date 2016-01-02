jQuery(document).ready(function () {
    (function (Conf) {
        var topNavView = new  Conf.TopNavView({
            el :'.navbar'
        });
        topNavView.render();

        Conf.views.topNavView = topNavView;
        var leftNavView = new  Conf.LeftNavView({
            el :'.left-nav'
        });
        leftNavView.render();

        Conf.views.leftNavView = leftNavView;

        var mainContentView = new Conf.MainContentView({
            el:'.main-content'
        });
        mainContentView.render();

        Conf.views.mainContentView = mainContentView;


        var signUpView = new Conf.SignUpView({
            el:'#signup-modal'
        });

        Conf.views.signUpView = signUpView;

        var carPoolView = new Conf.CarPoolView({
            el:'.main-content'
        });
        Conf.views.carPoolView = carPoolView;


        var rightNavView = new Conf.RightNavView({
            el:'#carpool-modal'
        });

        Conf.views.rightNavView = rightNavView;






    })(Config);
});

