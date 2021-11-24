const link = document.createElement("template");

link.innerHTML = `
<style>
.header__link{
     list-style-type: none;
}

a {
     display: flex;
     flex-direction: row-reverse;
      color: #fff;
      text-decoration: none;
      font-size: 1.3rem;
      padding: .5rem 1.5rem;
      border-radius: 1rem;
      align-items: center;
      justify-content: flex-end;
      transition: .5s ease ;
      margin-top: .5rem;
}
p{
    margin-left: 1rem;
}

a:hover{
    background-color: rgba(255, 255, 255, 0.2);
}

</style>
<li class="header__link">
    <a href="#">
    <p></p>
    <slot name="icon"/>
    </a>
</li>

`;

class Link extends HTMLElement {
  constructor() {
    super();
    this.showInfo = true;
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(link.content.cloneNode(true));
    this.shadowRoot.querySelector("p").innerText = this.getAttribute("title");
  }
  static get observedAttributes() {
    return ["title"];
  }
  attributeChangedCallback(title, oldValue, newValue) {
    if (title === "title") {
      this.shadowRoot.querySelector("p").innerText = newValue;
    }
  }
}

window.customElements.define("side-link", Link);
