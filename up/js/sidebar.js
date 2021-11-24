const sidebar = document.createElement("template");

sidebar.innerHTML = `
<style>
*{
  margin: 0;
  padding: 0;
}
span{
  color: #ccc;
}
 .header__signout {
    font-size: 1.5rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    margin-top: 5rem;
  }

    .header__signout  p {
      margin-left: 1rem;
    }
</style>
 <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <div class="sidebar">
      <nav class="header__nav">
        <ul class="header__links">
        <slot name="link"/>
        </ul>
      </nav>
      <div class="header__signout">
        <i class="fas fa-sign-out-alt"></i>
        <p>Sign out</p>
      </div> 
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

const linkData = [
  {
    title: "Home",
    icon: '  <i slot="icon" class="fas fa-home"></i>',
  },
  {
    title: "Deals",
    icon: '<i slot="icon" class="fab fa-adn"></i>',
  },
  {
    title: "Mail",
    icon: '<i slot="icon" class="fas fa-envelope"></i>',
  },
  {
    title: "Activities",
    icon: ' <i slot="icon" class="fas fa-chart-line"></i>',
  },
  {
    title: "Contact",
    icon: '<i slot="icon" class="fas fa-user-friends"></i>',
  },
  {
    title: "Setting",
    icon: ' <i slot="icon" class="fas fa-cogs"></i>',
  },
];
const sideBar = document.querySelector("#sidebar");

linkData.forEach((e) => {
  let link = document.createElement("side-link");
  link.setAttribute("title", e.title);
  link.setAttribute("slot", "link");
  sideBar.appendChild(link);
  link.insertAdjacentHTML("afterBegin", e.icon);
});

window.customElements.define("side-bar", Sidebar);
