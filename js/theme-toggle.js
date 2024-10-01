class ThemeToggle extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.isDarkTheme = false;
    }

    connectedCallback() {
        this.render();
        this.applyTheme();
        
        this.shadowRoot.querySelector('#toggleBtn').addEventListener('click', () => {
            this.toggleTheme();
        });
    }

    toggleTheme() {
        this.isDarkTheme = !this.isDarkTheme;
        this.applyTheme();
    }

    applyTheme() {
        const theme = this.isDarkTheme ? 'dark' : 'light';
        document.body.setAttribute('data-theme', theme);

        this.shadowRoot.querySelector('#toggleBtn').textContent = `${this.isDarkTheme ? 'Light' : 'Dark'} Theme`;
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    padding: 10px;
                    text-align: center;
                    background-color: var(--background-color);
                    color: var(--text-color);
                    border-radius: 4px;
                    font-family: Arial, sans-serif;
                }
                button {
                    padding: 10px 20px;
                    font-size: 16px;
                    cursor: pointer;
                    background-color: var(--button-bg);
                    color: var(--button-text);
                    border: none;
                    border-radius: 4px;
                    transition: background-color 0.3s;
                    position: absolute;
                    top: 20px;
                    z-index: 1;
                    right: 20px;
                }
                button:hover {
                    background-color: var(--button-hover-bg);
                }
            </style>
            <button id="toggleBtn"></button>
        `;
    }
}

customElements.define('theme-toggle', ThemeToggle);
