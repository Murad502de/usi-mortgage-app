class Mortgage { //FIXME: muss alle daten in config verschiben
  selected() {
    return document.querySelector(`div[data-id="${process.env.VUE_APP_PAY_FORM_SWITCHER_ID}"] input[value="${process.env.VUE_APP_PAY_FORM_MORTGAGE_ID}"]`).checked;
  }
  addEventListener({ callback }) {
    if (document.querySelector(`div[data-id="${process.env.VUE_APP_PAY_FORM_SWITCHER_ID}"]`)) {
      document.querySelector(`div[data-id="${process.env.VUE_APP_PAY_FORM_SWITCHER_ID}"]`).addEventListener("click", callback);
    }
  }
  removeEventListener({ callback }) {
    if (document.querySelector(`div[data-id="${process.env.VUE_APP_PAY_FORM_SWITCHER_ID}"]`)) {
      document.querySelector(`div[data-id="${process.env.VUE_APP_PAY_FORM_SWITCHER_ID}"]`).removeEventListener("click", callback);
    }
  }
}

export default new Mortgage();