class HostModule extends HTMLElement {
  getModulesList = async () => {
    console.log("Fetching modules list from API");
    const modules = await fetch("/config", {
      credentials: "same-origin",
    });
    const result = await modules.json();
    return result;
  };

  renderModule = async (target) => {
    console.log("Mounting modules to Host");
    const modules = await this.getModulesList();
    modules.forEach(async (element) => {
      const tag = document.createElement(element.tag);
      const script = document.createElement("script");
      script.setAttribute("src", `/modules/${element.file}`);
      script.setAttribute("type", "text/javascript");
      document.head.appendChild(script);
      target.appendChild(tag);
    });
  };

  constructor() {
    super();
  }

  connectedCallback() {
    console.log("Host was monunted");
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = `<style>
    :host {
      display: flex;
      flex-direction: column;
      margin: 20px auto;
      height: 600px;
      width: 800px;
      min-height: 100%;
      border: 2px dashed forestgreen;
    }
  
    :host > section {
      min-height: 100%;
      height: 100%;
    }
    </style>`;

    this.renderModule(shadow);
  }
}

console.log("Start mounting Host");
window.customElements.define("host-module", HostModule);
