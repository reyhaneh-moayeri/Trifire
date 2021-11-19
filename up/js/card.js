const template = document.createElement("template");
template.innerHTML = `
<style>
*{
  margin: 0;
}
.card{
    width: 75%;
    border-radius: 1.2rem;
    padding: 1.5rem 1rem;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 10px;
    background-color: #fff;
    margin: auto;
    transition: 1s ease;
    display:grid;
    grid-template-rows: repeat(3,min-content)

}
.card:hover{
    background-color: var(--bg);
    color: #fff;
}

h3{
    font-size: 1.3rem;
    font-weight: 500;
}
p{
  font-size: 1.3rem;
  font-weight: 900;
  margin: 1rem 0;
}
.profile{
    display: flex;
    align-items: center;
}
.profile-pic img{
    width: 3rem;
    height:3rem;
    border-radius: 50%;

}

.profile-tags{
    margin-left: 2rem;
    display: flex;
    flex-shrink: 0;
}

.tag{
    background-color: var(--tagbg);
    padding:.5rem 1rem;
    border-radius: .5rem;
    color: #fff;
      font-size: 1rem;
}
.tag2{
    background-color: var(--tagbg);
    padding:.5rem 1rem;
    border-radius: .5rem;
    margin-left: .3rem;
    color: #fff;
      font-size: 1rem;
}

.card__status{
  width:1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: red;
  transition: .5s ease;
}
.card__heading{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>

<div class="card">
<div class="card__heading">
<h3></h3>
<div class="card__status"></div>
</div>
<p></p>

<div class="profile">
<div class="profile-pic">
<img/>
</div>
<div class="profile-tags">
<p class="tag"></p>
<p class="tag2"></p>
</div>
</div>
</div>
`;
class UserCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector("h3").innerText = this.getAttribute("name");
    this.shadowRoot.querySelector("p").innerText = this.getAttribute("price");
    this.shadowRoot.querySelector("img").src = this.getAttribute("avatar");
    this.shadowRoot.querySelector(".tag").innerText = this.getAttribute("tag");
    this.shadowRoot.querySelector(".tag2").innerText =
      this.getAttribute("tag2");
    this.shadowRoot.querySelector(".card").style = `--bg:${this.getAttribute(
      "bg"
    )}`;
    this.shadowRoot.querySelector(".tag").style = `--tagbg:${this.getAttribute(
      "tagbg"
    )}`;

    if (this.shadowRoot.querySelector(".tag2").textContent) {
      this.shadowRoot.querySelector(
        ".tag2"
      ).style = `--tagbg:${this.getAttribute("tagbg")}`;
    }
  }

  mouseoverbg() {
    this.style.transform = "scale(1.12) translateX(1rem)";
  }
  connectedCallback() {
    this.shadowRoot.querySelector(".card").addEventListener("mouseover", () => {
      this.mouseoverbg();
      this.shadowRoot.querySelector(".card__status").style.transform =
        "scale(1.5)";
    });
    this.shadowRoot.querySelector(".card").addEventListener("mouseout", () => {
      this.style.transform = "scale(1) translateX(0)";
      this.shadowRoot.querySelector(".card__status").style.transform =
        "scale(1)";
    });
  }

  disconnectedCallback() {
    this.shadowRoot
      .querySelector(".card")
      .removeEventListener("mouseover", () => {
        this.mouseoverbg();
      });
    this.shadowRoot.query;
    Selector(".card").removentListener("mouseout", () => {
      this.style.transform = "scale(1) translateX(0)";
    });
  }
}

window.customElements.define("user-card", UserCard);
