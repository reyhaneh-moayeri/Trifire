const cardsContainer = document.createElement("template");

cardsContainer.innerHTML = `
<style>
.card{
    box-shadow: rgba(100, 100, 111, 0.1) 0px 3px 10px 0px;
    height: 100%;
    border-radius: 2rem;
    display: flex;
    flex-direction: column;
}

.card-header{
    display:flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 1.5rem;

}
.card-header-title{
    margin-left: 1.5rem;
    font-size: 1.5rem;
}
::slotted(i:last-child){
flex-grow: 1;
text-align: right;
cursor: pointer;
}

::slotted(i){
    font-size: 1.5rem;
}
</style>
<div class="card">
<div class="card-header">
<div class="card-header-icon"><slot name="icon"/></div>
<h3 class="card-header-title"></h3>
<slot name="dots"/>
</div>
<slot name="card"/>
</div>
`;

class CardsContainer extends HTMLElement {
  constructor() {
    super();
    this.showInfo = true;
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(cardsContainer.content.cloneNode(true));
    this.shadowRoot.querySelector(".card-header-title").innerText =
      this.getAttribute("title");
  }
}

window.customElements.define("card-container", CardsContainer);
