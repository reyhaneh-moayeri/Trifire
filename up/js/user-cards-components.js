fetch("./dev-data/data-card-1.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data[0]["name"]);
    for (let i = 0; i < 3; i++) {
      document.querySelectorAll("card-container")[0].insertAdjacentHTML(
        "beforeend",
        `<user-card
            name=${data[i].name}
            price=${data[i].price}
            avatar=${data[i].avatar}
            slot="card"
            bg=${data[i].bg}
            tag=${data[i].tag}
            status=${data[i].status}
            tagbg="rgba(92, 147, 203, 0.5)"></user-card>`
      );
    }
  });

fetch("./dev-data/data-card-2.json")
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < 5; i++) {
      document.querySelectorAll("card-container")[1].insertAdjacentHTML(
        "beforeend",
        `<user-card
            name=${data[i].name}
            price=${data[i].price}
            avatar=${data[i].avatar}
            slot="card"
            bg=${data[i].bg}
            tag=${data[i].tag}
            status=${data[i].status}
            tagbg="rgba(92, 147, 203, 0.5)"></user-card>`
      );
    }
  });

fetch("./dev-data/data-card-3.json")
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < 2; i++) {
      document.querySelectorAll("card-container")[2].insertAdjacentHTML(
        "beforeend",
        `<user-card
            name=${data[i].name}
            price=${data[i].price}
            avatar=${data[i].avatar}
            slot="card"
            bg=${data[i].bg}
            tag=${data[i].tag}
            status=${data[i].status}
            tagbg="rgba(92, 147, 203, 0.5)"></user-card>`
      );
    }
  });
fetch("./dev-data/data-card-4.json")
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < 5; i++) {
      document.querySelectorAll("card-container")[3].insertAdjacentHTML(
        "beforeend",
        `<user-card
            name=${data[i].name}
            price=${data[i].price}
            avatar=${data[i].avatar}
            slot="card"
            bg=${data[i].bg}
            tag=${data[i].tag}
            status=${data[i].status}
            tagbg="rgba(92, 147, 203, 0.5)"></user-card>`
      );
    }
  });
