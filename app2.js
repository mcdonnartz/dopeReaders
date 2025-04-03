document.getElementById('signup').addEventListener('submit', function(event){
    event.preventDefault()
    let name = document.getElementById('username').value.trim()
    window.location.href = 'index.html'
    alert('hello '+ name)
    
})