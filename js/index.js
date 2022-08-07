
const div = document.getElementById("github-container")
const gitForm =  document.getElementById("github-form")
const input = document.getElementById("search");

function findValues (event){
    
        event.preventDefault();
        //console.log(event.target.children[0].value)
        //console.log("test")

    
    console.log("input", input.value)

    const value = input.value;

    fetch(`https://api.github.com/search/users?q=${value}`, {
    
        headers: {
            "Accept": "application/vnd.github.v3+json"
        },
    
    })
    .then((res) => res.json())
    .then(resp => {console.log('response', resp)
        resp.items.forEach (item => addResult(item))
    })
    }
console.log(gitForm)
    gitForm.addEventListener("submit", findValues)

function addResult(item){
    console.log('item', item)
    let ul = document.createElement("ul")
    div.appendChild(ul)
    let li = document.createElement("li")
    li.innerText = item.login
    ul.appendChild(li)

    let img = document.createElement("img")
    li.appendChild(img)
    let imgURL = item.avatar_url
    img.src = imgURL
    
    let p = document.createElement("p")
    p.innerText = `User URL: ${item.url}`
    li.appendChild(p)

    // let p2 = document.createElement("p")
     
    // li.appendChild(p2)
    // p2.id = "repositiories"

    let button  = document.createElement("button")
    button.innerText = "View Repositories"
    li.appendChild(button)
    console.log('button', button)

    // button.addEventListener('click',(event) => {
    //     console.log("results", event)
    // } )
}


// function fetchRepositories (){
//     fetch("https://api.github.com/users/octocat/repos")
//     .then((resp) => resp.json())
//     .then((resp) => {
//         console.log("response", resp);
//     });
// }
