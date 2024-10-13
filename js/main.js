import { ShowResult } from "./showResults.js";

const errorList = document.getElementById('error_container')
const show = new ShowResult;
const form = document.getElementById('form');
const result = document.getElementById('result');
const url = "http://localhost:8000/php/script.php";

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const dataComplete = Object.fromEntries(data.entries());
    dataComplete.price = parseFloat(dataComplete.price);
    dataComplete.quantity = parseInt(dataComplete.quantity);
    result.innerText = "";
    
    fetch(url, {
        method: "POST",
        body: JSON.stringify(dataComplete),
        headers:{
            "Content-Type": "application/json",
        },
    })

    .then(response => response.json())
    .then(data => {
        if(data.errors) {
            show.showErrors(data, errorList);
        } else {
            errorList.children[0].textContent = "";
            errorList.children[1].innerHTML = "";
            show.showResponse(data, result);
            form.reset();
        }
    })
    .catch(error => {
        console.error("Hubo un error" + error);
        alert("Oops Ocurrio un error intenta en otro momento");
    })
})