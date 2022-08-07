const div = document.getElementById("github-container");
const gitForm = document.getElementById("github-form");
const input = document.getElementById("search");
let button = document.createElement("button");
let ul = document.createElement("ul");
let li = document.createElement("li");
 

function findValues(event) {
  event.preventDefault();
  //console.log(event.target.children[0].value)
  //console.log("test")

  //console.log("input", input.value);

 const value = input.value;

  fetch(`https://api.github.com/search/users?q=${value}`, {
    headers: {
      Accept: "application/vnd.github.v3+json",
    },
  })
    .then((res) => res.json())
    .then((resp) => {
      console.log("response", resp);
      // resp.items.forEach (item => addResult(item))
      addResult(resp.items[0]);
    });
}
console.log(gitForm);
gitForm.addEventListener("submit", findValues);

function addResult(item) {
  
  div.appendChild(ul);
  
  li.id = "results";
  console.log("item", item);
  li.innerText = item.login;
  ul.appendChild(li);

  let img = document.createElement("img");
  li.appendChild(img);
  let imgURL = item.avatar_url;
  img.src = imgURL;

  let p = document.createElement("p");
  p.innerText = `User URL: ${item.url}`;
  li.appendChild(p);

  
  button.innerText = "View Repositories";
  li.appendChild(button);
  console.log("button", button);

  button.addEventListener("click", (event) => {
    console.log("results", event);
    fetchRepositories()
  });
}

function fetchRepositories() {
    const value2 = input.value;
  fetch(`https://api.github.com/users/${value2}/repos`)
    .then((resp) => resp.json())
    .then((resp) => {
      console.log("response2", resp);
      let div2 = document.createElement("div")
      button.appendChild(div2)
      resp.forEach(element =>{
      let p1 = document.createElement("p")
      p1.innerText = element.name;
      li.appendChild(p1)
    })
      
      

    });
    
}
