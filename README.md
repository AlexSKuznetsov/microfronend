# Microfronend

Basic realization of microfrontend and web components concepts.

# Usage

```    
- clone repo
- npm install
- npm run dev
- open browser on localhost:3000
```    

# Details

Backend (Node js + Express js) for host module configuration and resolve components (js files) as static.

Frontend (Vanilla js) - host module (host.js) self mounting in to DOM, after that in connectedCallback he downloading form API configuration and downloading from "/modules" route all the components and mount them into DOM.

# Todo

- Add Routing to Host module
- Add transport for intercomponent communication
- Add React (Vue, Svelte) component
- Make host module on top of the React
