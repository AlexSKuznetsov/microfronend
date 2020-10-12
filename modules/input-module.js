class InputModule extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = `<style> 
        input 
            { 
              display: block;
              padding: 10px;
              margin: 5px 10px;
              font-size: 2em;
              border: 2px dashed black
            }
     </style>`;
    const inputElement = document.createElement("input");
    inputElement.setAttribute("type", "text");
    inputElement.setAttribute("placeholder", "type here");
    shadow.appendChild(inputElement);
  }
}

window.customElements.define("input-module", InputModule);
