
const div = document.getElementById("github-container")
const gitForm =  document.getElementById("github-form")
const input = document.getElementById("search");

function findValues (event){
    console.log("hi", "hi")
    //     event.preventDefault();
    //     //console.log(event.target.children[0].value)
    //     //console.log("test")

    
    // console.log("input", input[0].value)

    // const value = input[0].value;

    // fetch(`https://api.github.com/search/users?q=${value}`), {
    
    //     headers: {
    //         "Accept": "application/vnd.github.v3+json"
    //     },
    
    // }
    // .then((res) => res.json())
    // .then(resp => {console.log(resp)
    //     //resp.message.forEach (key => addResults)
    //})
    }
console.log(gitForm)
    gitForm.addEventListener("submit", findValues)

function addResult(results){
    
    let newParagraph = document.createElement("p")
    results = input[0].value
    Div.appendChild(results)

}


searchButton()