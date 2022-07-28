class ItcAccordion {
  constructor(target, config) {
    this._el =
      typeof target === "string" ? document.querySelector(target) : target;
    const defaultConfig = {
      alwaysOpen: true,
    };
    this._config = Object.assign(defaultConfig, config);
    this.addEventListener();
  }
  addEventListener() {
    this._el.addEventListener("click", (e) => {
      const elHeader = e.target.closest(".accordion_header");
      if (!elHeader) {
        return;
      }
      if (!this._config.alwaysOpen) {
        const elOpenItem = this._el.querySelector(".accordion_item_show");
        if (elOpenItem) {
          elOpenItem !== elHeader.parentElement
            ? elOpenItem.classList.toggle("accordion_item_show")
            : null;
        }
      }
      elHeader.parentElement.classList.toggle("accordion_item_show");
    });
  }
}

new ItcAccordion("#accordion-1");
