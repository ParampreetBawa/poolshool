_.templateSettings = {
    interpolate : /\{\{(.+?)\}\}/g,
    evaluate : /\{!(.+?)!\}/g
};
var Config = {};
Config.serverUrl = getBaseUrl();