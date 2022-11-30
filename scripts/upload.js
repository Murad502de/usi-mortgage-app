/**
 *  Установщик виджета
 */

const path = require('path');
const installer = require('@amopro/widget-installer');
const { WidgetInstaller } = installer;

(async () => {

    console.log('Widget uploading...');
    console.log(path.resolve('../dist/widget.zip'));
    const installerParams = {
        subDomain: process.env.npm_config_domain,
        login: process.env.npm_config_login,
        password: process.env.npm_config_password,
        widgetZipPath: path.resolve('./dist/widget.zip'),
        redirectUri: process.env.npm_config_redirect,
        revokeAccessHookUri: process.env.npm_config_revoke,
        amoMarket: true
    }

    const widget = new WidgetInstaller(installerParams);
    await widget.upload();
    
    console.log('Widget uploaded!');

})();

