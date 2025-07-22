class UsersApp extends HTMLElement {
    static get observedAttributes() {
        return ["usersData"];
    }
    constructor() {
        super();
        const shadowDOM = this.attachShadow({mode: 'open'});
        const divEl = document.createElement('div');
        divEl.innerHTML = `
        <p>Hello, this is from Web component!<p>
        <span id="msg"></span>
        <button id="sendBtn">Confirm</button>
        `;
        shadowDOM.appendChild(divEl);
    }
    connectedCallback() {
        let data = this.getAttribute('usersData');
        console.log('Web-component:::',data);
        this.shadowRoot.getElementById('msg').innerHTML = data;
        this.shadowRoot.getElementById('sendBtn').addEventListener('click', (e) => {
            this.dispatchEvent(new CustomEvent("wcUsersAppEvent", {
                detail: "Ok, received, launch to moon!!",
                bubbles: true, composed: true
            }));
        });
    }
}
if(!customElements.get('users-app')) {
    customElements.define('users-app', UsersApp);
}