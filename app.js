document.getElementById('signin').addEventListener('submit', function(event){
    event.preventDefault()
    let name = document.getElementById('Username').value.trim()
    window.location.href = 'index.html'
    alert('hello '+ name)
    
})

