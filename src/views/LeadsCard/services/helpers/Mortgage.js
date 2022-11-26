class Mortgage { //FIXME: muss alle daten in config verschiben
  selected() {
    return Number(document.querySelector('div[data-id="685555"] .icon-radio-checked input')?.value) === 319719;
  }
  addEventListener({ callback }) {
    document.querySelector('div[data-id="685555"]').addEventListener("click", callback);
  }
  removeEventListener({ callback }) {
    document.querySelector('div[data-id="685555"]').removeEventListener("click", callback);
  }
}

export default new Mortgage();