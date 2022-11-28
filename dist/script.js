define(
  // http://localhost:8080/dist/app.js | ./app.js
  ['http://localhost:8080/dist/app.js?cache=' + Date.now()],
  function (App) {
    const Widget = function () {
      const self = this;

      self.system = this.system();
      self.langs = this.langs;

      this.callbacks = {
        render() {
          console.debug('USI-Mortgage-App::render'); //DELETE
          // console.debug('App RENDER', App) //DELETE;

          App.default.render(self);

          return true;
        },
        init() {
          console.debug('USI-Mortgage-App::init'); //DELETE

          App.default.init(self);

          return true;
        },
        bind_actions() {
          console.debug('USI-Mortgage-App::bind_actions'); //DELETE

          App.default.bind_actions(self);

          return true;
        },
        settings() {
          console.debug('USI-Mortgage-App::settings'); //DELETE

          App.default.settings(self);

          return true;
        },
        advancedSettings() {
          console.debug('USI-Mortgage-App::advancedSettings'); //DELETE

          App.default.advancedSettings(self);

          return true;
        },
        onSave() {
          console.debug('USI-Mortgage-App::onSave'); //DELETE

          App.default.onSave(self);

          return true;
        },
        destroy() {
          console.debug('USI-Mortgage-App::destroy'); //DELETE

          App.default.destroy(self);
        },
        contacts: {
          selected() {
            App.default.contacts_selected(self);
          }
        },
        leads: {
          selected() {
            App.default.leads_selected(self);
          }
        },
        tasks: {
          selected() {
            App.default.tasks_selected(self);
          }
        }
      };

      return this;
    };

    return Widget;
  }
);