const videojuegos = [
  { nombre: "Elden Ring", compania: "FromSoftware", plataforma: "PC", valoracion: 9.5, precio: "39.99€" },
  { nombre: "Street Fighter 6", compania: "Capcom", plataforma: "PC", valoracion: 9.0, precio: "49.99€" },
  { nombre: "Hollow Knight", compania: "Team Cherry", plataforma: "PC", valoracion: 9.8, precio: "14.99€" },
  { nombre: "God of War Ragnarök", compania: "Santa Monica Studio", plataforma: "PS5", valoracion: 9.6, precio: "59.99€" },
  { nombre: "Monster Hunter Wilds", compania: "Capcom", plataforma: "PC", valoracion: 9.2, precio: "69.99€" }
];

const cuerpoTabla = document.getElementById("cuerpoTabla");

videojuegos.forEach(juego => {
  const fila = document.createElement("tr");

  fila.innerHTML = `
    <td>${juego.nombre}</td>
    <td>${juego.compania}</td>
    <td>${juego.plataforma}</td>
    <td>${juego.valoracion}</td>
    <td>${juego.precio}</td>
  `;

  cuerpoTabla.appendChild(fila);
});