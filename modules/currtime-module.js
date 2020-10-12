class MyElement extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = `<style>
        p {
            display: flex;
            padding: 10px;
            margin: 5px 10px;
            font-size: 2em;
            border: 2px dashed orangered;
        }

    </style>`;
    const p = document.createElement("p");
    shadow.appendChild(p);

    const shoowTime = () => {
      const someNumber = new Date().toLocaleTimeString();
      p.innerText = `Current time: ${someNumber}`;
    };
    setInterval(() => shoowTime(), 1000);
  }
}

customElements.define("time-formatted", MyElement);
