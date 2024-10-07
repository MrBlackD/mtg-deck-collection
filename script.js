window.onload = function() {
    const content = document.querySelector('.content')
    content.textContent = 'Hello World'
    document.getElementById('myButton').onclick = function() {
        document.getElementById('modal').classList.toggle('hidden')
    }
}