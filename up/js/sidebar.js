const sidebar = document.createElement("template");

sidebar.innerHTML = `
<style>
*{
  margin: 0;
  padding: 0;
}

.sidebar{
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.header__logo{
    font-family: "Mochiy Pop P One", sans-serif;
    letter-spacing: 0.3rem;
    margin-top: 5rem;
}
.header__links{
    height: 100%;
    margin-top: 5rem;
}
span{
  color: #ccc;
}
</style>
    <div class="sidebar">
      <h1 class="header__logo">Tri<span>Fire</span></h1>
      <nav class="header__nav">
        <ul class="header__links">
        <slot name="link"/>
        </ul>
      </nav>
    </div>
`;

class Sidebar extends HTMLElement {
  constructor() {
    super();
    this.showInfo = true;
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(sidebar.content.cloneNode(true));
  }
}

window.customElements.define("side-bar", Sidebar);
