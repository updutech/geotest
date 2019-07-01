cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-open-native-settings/www/settings.js",
        "id": "cordova-open-native-settings.Settings",
        "pluginId": "cordova-open-native-settings",
        "clobbers": [
            "cordova.plugins.settings"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-geolocation": "4.0.1",
    "cordova-plugin-whitelist": "1.3.3",
    "cordova.plugins.diagnostic": "5.0.0",
    "cordova-open-native-settings": "1.5.2"
}
// BOTTOM OF METADATA
});