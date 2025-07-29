class UsersApp extends HTMLElement {
    static get observedAttributes() {
        return ['usersData'];
    }
    constructor() {
        super();
        const shadowDOM = this.attachShadow({ mode: 'open' });
        const divEl = document.createElement('div');
        divEl.innerHTML = `
        <h4>JS Web Component<h4>
        <p id="msg"></p>
        <button id="btn">Send to Host</button>
        `;
        shadowDOM.appendChild(divEl);
    }
    connectedCallback() {
        const data = this.getAttribute('usersData');
        console.log(`WC:::${data}`);
        this.shadowRoot.getElementById('msg').innerHTML += `<div>${data}</div>`;
        this.shadowRoot.getElementById('btn').addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent(
                'onWcReceviedData', {
                detail: 'Ok! Data received at WC'
            }
            ));
        })
    }
}
if (!customElements.get('users-app')) {
    customElements.define('users-app', UsersApp);
}