export class ShowResult
{
    showErrors(response, element) 
    {
        element.children[0].textContent = response.message;
        element.children[1].innerHTML = "";
        response.errors.forEach(error=> {
            const errorItem = document.createElement('li');
            errorItem.classList.add('error');
            errorItem.textContent = error;
            element.children[1].appendChild(errorItem);
        });
    }

    showResponse(response, element)
    {
        element.textContent = response.result + '$';
    }
}