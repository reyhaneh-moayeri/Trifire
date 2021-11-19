const cardsContainer = document.createElement("template");

cardsContainer.innerHTML = `
<style>
.card{
    box-shadow: rgba(100, 100, 111, 0.1) 0px 3px 10px 0px;
    border-radius: 2rem;
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
    min-height: 90%;
    position: relative;
}

.card__header{
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 1.5rem;

}
.card-header-title{
    margin-left: 1.5rem;
    font-size: 1.5rem;
}
::slotted(i:last-child){
text-align: right;
cursor: pointer;
}

::slotted(i){
    font-size: 1.5rem;
    
}

.menu-dropdown{
    width: 20%;
    position: absolute;
    background: #f5f6fa;
    z-index: 5;
    top: 7rem;
    right: 0;
    opacity: 0;
    justify-content: center;
    align-items: center;
    display: grid;
        grid-template-rows: repeat(5,5rem);
    grid-template-columns: 1fr;
    border-radius: .5rem;
    box-shadow:  rgba(255,255,255,.2) 1px 1px 5px;
}

.menu-dropdown > div{
    height: 100%;
    border-bottom: 1px solid rgba(0,0,0,.15);
    cursor: pointer;
    transition: .5s ease;
}

.menu-dropdown > div:hover{
    background: #10ac84;
}

.menu-dropdown > div:hover i {
    color: #fff;
}

.menu-dropdown > div:last-child{
    border-bottom:0;
}

.menu-dropdown > div i{
 display: flex;
 justify-content: center;
 align-items: center;
 height: 100%;
 color: #10ac84;
 font-size: 1.5rem;
 transition: .5s ease;

}

.menu-dropdown--toggle{
    opacity: 1;
}
.card__heading{
    display: flex;
    align-items: center;
}

i.fa-ellipsis-h{
    font-size: 1.5rem;
    cursor: pointer;
}
</style>
<link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
<div class="card">
 <div class="card__header">
   <div class="card__heading">
   <div class="card-header-icon"><slot name="icon"/></div>
   <h3 class="card-header-title"></h3>
   </div>
<i class="fas fa-ellipsis-h"></i>
</div>
<div class="menu-dropdown">
<div><i class="fas fa-lock"></i></div>
<div><i class="fas fa-address-card"></i></div>
<div><i class="fas fa-user"></i></div>
<div><i class="fas fa-envelope-open"></i></div>
<div><i class="fas fa-paper-plane"></i></div>
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

  connectedCallback() {
    this.shadowRoot
      .querySelector(".fa-ellipsis-h")
      .addEventListener("click", () => {
        this.shadowRoot
          .querySelector(".menu-dropdown")
          .classList.toggle("menu-dropdown--toggle");
      });

    this.shadowRoot.addEventListener("click", (e) => {
      if (
        !e.target.closest(".menu-dropdown") &&
        !e.target.closest(".fa-ellipsis-h")
      ) {
        this.shadowRoot
          .querySelector(".menu-dropdown")
          .classList.remove("menu-dropdown--toggle");
      }
    });
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector(".dots").removeEventListener("click", () => {
      this.shadowRoot
        .querySelector(".menu-dropdown")
        .classList.toggle("menu-dropdown--toggle");
    });

    this.shadowRoot.removeEventListener("click", (e) => {
      if (
        !e.target.closest(".menu-dropdown") &&
        !e.target.closest(".fa-ellipsis-h")
      ) {
        this.shadowRoot
          .querySelector(".menu-dropdown")
          .classList.remove("menu-dropdown--toggle");
      }
    });
  }
}

window.customElements.define("card-container", CardsContainer);
