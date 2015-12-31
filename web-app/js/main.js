jQuery(document).ready(function () {
    (function (Conf) {
        var topNavView = new  Conf.TopNavView({
            el :'.navbar'
        });
        topNavView.render();


        var leftNavView = new  Conf.LeftNavView({
            el :'.left-nav'
        });
        leftNavView.render();

        var mainContentView = new Conf.MainContentView({
            el:'.main-content'
        });
        mainContentView.render();

    })(Config);
});

