function cargarUsuarios() {
fetch('http://localhost:3000/usuarios')
.then(res => res.json())
.then(data => {
const lista = document.getElementById('lista');
lista.innerHTML = '';
data.forEach(u => {
const li = document.createElement('li');
li.textContent = u.nombre + ' - ' + u.email;
lista.appendChild(li);
});
});
}