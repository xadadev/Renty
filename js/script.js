/* ---------------------------------- */
/*              ACCORDION             */
/* ---------------------------------- */
// class Accordion {
//     constructor(selector, options = {}) {
//       this.selector = selector;
//       this.options = {
//         openClass: "is-open",
//         buttonClass: "js-header",
//         contentClass: "js-panel",
//         ...options
//       };
//       this.elements = {
//         buttons: document.querySelectorAll(
//           selector + ` .${this.options.buttonClass}`
//         ),
//         sections: document.querySelectorAll(selector)
//       };
  
//       this.init();
//     }
  
//     init() {
//       // Open first accordion by default
//       this.elements.sections[0].classList.add(this.options.openClass);
//       this.elements.sections[0].querySelector(`.${this.options.contentClass}`).style.maxHeight = this.elements.sections[0].querySelector(`.${this.options.contentClass}`).scrollHeight + "px";
//       this.elements.sections[0].querySelector(`.${this.options.buttonClass}`).setAttribute("aria-expanded", "true");
  
//       this.elements.buttons.forEach((button) => {
//         button.addEventListener("click", this.toggleAccordion.bind(this), false);
//         button.addEventListener("keydown", this.handleKeyboard.bind(this), false);
//       });
//     }
  
//     toggleAccordion(event) {
//       let section = event.target.closest(this.selector);
//       let content = section.querySelector(`.${this.options.contentClass}`);
//       let isOpen = section.classList.contains(this.options.openClass);
  
//       if (isOpen) {
//         section.classList.remove(this.options.openClass);
//         content.style.maxHeight = "0px";
//         event.target.setAttribute("aria-expanded", "false");
//       } else {
//         section.classList.add(this.options.openClass);
//         content.style.maxHeight = content.scrollHeight + "px";
//         event.target.setAttribute("aria-expanded", "true");
//       }
//     }
  
//     handleKeyboard(event) {
//       if (event.key === "Enter" || event.key === " ") {
//         event.preventDefault();
//         this.toggleAccordion(event);
//       }
//     }
//   }
  
//   const accordion = new Accordion(".js-accordion");
  /* --------------- END -------------- */

  class Accordion {
    constructor(selector, options = {}) {
      this.selector = selector;
      this.options = {
        openClass: "is-open",
        buttonClass: "js-header",
        contentClass: "js-panel",
        ...options
      };
      this.elements = {
        buttons: document.querySelectorAll(
          selector + ` .${this.options.buttonClass}`
        ),
        sections: document.querySelectorAll(selector)
      };
  
      this.init();
    }
  
    init() {
      // Open first accordion by default
      this.elements.sections[0].classList.add(this.options.openClass);
      this.elements.sections[0].querySelector(`.${this.options.contentClass}`).style.maxHeight = "100%";
      this.elements.sections[0].querySelector(`.${this.options.buttonClass}`).setAttribute("aria-expanded", "true");
  
      this.elements.buttons.forEach((button) => {
        button.addEventListener("click", this.toggleAccordion.bind(this), false);
        button.addEventListener("keydown", this.handleKeyboard.bind(this), false);
      });
    }
  
    toggleAccordion(event) {
      let section = event.target.closest(this.selector);
      let content = section.querySelector(`.${this.options.contentClass}`);
      let isOpen = section.classList.contains(this.options.openClass);
  
      if (isOpen) {
        section.classList.remove(this.options.openClass);
        content.style.maxHeight = "0px";
        event.target.setAttribute("aria-expanded", "false");
      } else {
        section.classList.add(this.options.openClass);
        content.style.maxHeight = "100%";
        event.target.setAttribute("aria-expanded", "true");
      }
    }
  
    handleKeyboard(event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        this.toggleAccordion(event);
      }
    }
  }
  
  const accordion = new Accordion(".js-accordion");
