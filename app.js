

document.querySelector('div').addEventListener('click', function(e) {
    e.preventDefault()
    let div = document.querySelector('div')
    let newNewh4 = document.createElement('h4')
    newNewh4.innerText = "go"

    div.appendChild(newNewh4)

})