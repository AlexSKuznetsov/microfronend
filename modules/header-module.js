class HeaderModule extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = `<style> 
        nav 
            { 
                display: block;
                padding: 10px;
                margin: 5px 10px;
                font-size: 2em;
                border: 2px dashed royalblue
            }
     </style>`;
    const headerElement = document.createElement("nav");
    headerElement.textContent = "My Header Element";
    shadow.appendChild(headerElement);
  }
}

window.customElements.define("header-module", HeaderModule);
