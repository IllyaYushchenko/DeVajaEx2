function openForm() {
  document.getElementById("popup").style.display = "block";
  document.getElementById("question").style.background = "white";
}
function closeForm() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("question").value = "";
}

readLocalStorage("all");

function saveToLocalStorage() {
  let chats = localStorage.getItem("chats");
  if (chats) {
    chats = JSON.parse(chats);

    let newQuestion = document.getElementById("question").value;
    let newSelected = document.getElementById("select").value;
    let newDate = new Date().toLocaleString();
    if (newQuestion) {
      let newChat = {
        question: newQuestion,
        type: newSelected,
        date: newDate
      };
      chats.push(newChat);
      let savechats = JSON.stringify(chats);
      localStorage.setItem("chats", savechats);
      document.getElementById("question").value = "";
      document.getElementById("popup").style.display = "none";
      readLocalStorage("all");
      document.getElementById("choose").value = "all";
    } else {
      document.getElementById("question").style.background = "red";

    }
  } else {
    let question = document.getElementById("question").value;
    let selected = document.getElementById("select").value;
    if (question) {
      let chats = [
        {
          question: question,
          type: selected,
          date: new Date().toLocaleString()
        }
      ];
      let savechats = JSON.stringify(chats);
      localStorage.setItem("chats", savechats);
      document.getElementById("popup").style.display = "none";
      document.getElementById("question").value = "";
      readLocalStorage("all");
      document.getElementById("choose").value = "all";

    } else {
      document.getElementById("question").style.background = "red";

    }
  }

}

function readLocalStorage(filter) {

  let chats = localStorage.getItem("chats");
  if (chats) {
    chats = JSON.parse(chats).reverse();
    if (filter != "all") {
      let grid = chats 
        .map((chat, key) => {
        if (filter == chat.type) return `<div class="grid-item"> ${chat.question} </div> <div class="grid-item"> ${chat.type} </div> <div class="grid-item"> ${chat.date} </div>`
      })
        .join("");
        document.querySelector(".three-col-grid").innerHTML = grid;
    } else {
      let grid = chats
        .map((chat, key) => {
        return `<div class="grid-item"> ${chat.question} </div> <div class="grid-item"> ${chat.type} </div> <div class="grid-item"> ${chat.date} </div>`
      })
        .join("");
        document.querySelector(".three-col-grid").innerHTML = grid; 
    }
    
  }

  else {
    console.log("nothing there");
  }
}
