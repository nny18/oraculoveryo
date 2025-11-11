// Crear las listas de imágenes, títulos y frases
const imagenes = [
  "../oraculoveryo/assets/img/Yeimy1.jpg",
  "../oraculoveryo/assets/img/charly1.jpg",
  "../oraculoveryo/assets/img/irma1.jpg",
  "../oraculoveryo/assets/img/yeimy2.webp",
  "../oraculoveryo/assets/img/charlyyeimy1.jpg",
  "../oraculoveryo/assets/img/axel1.jpeg",
];

const titulos = [
  "Yeimy vengativa",
  "Charly arrepentido",
  "Irma reinventada",
  "Yeimy soñadora",
  "Yeimy y charly",
  "Axel",
];

const frases = [
  "♪♪ Tiembla, porque llegó tu depredador, tú me robaste toda la ilusión, tu mente solo sabe de traición, eres la serpiente que me envenenó. ♪♪",
  "♫♫ Ya voy de camino porque yo sé que este no es mi destino, saldré a buscar a los que yo he herido, pido perdón por los que han sufrido ♫♫",
  "𝄞𝄞 Puertas hay que abrir y saber cerrar, solo hay que seguir y no dar marcha atrás, seguir el instinto 𝄞𝄞",
  "♩♩ De donde vengo, de donde soy ya no hay espacio para el temor, sales con toda y tu bendición, somos más tesos ante el dolor ♩♩",
  "♪♬ Sabes, aún recuerdo esa vez que te vi, yo no entiendo cuánto tiempo yo viví sin ti, eres ese reflejo que quiero mirar, tienes la vida que me hace falta para continuar ♬♪",
  "𝄡𝄡 Una condena que alimenta la furia, el alma en pena por recuerdos que la agobian, memorias imborrables de lo que pudimos ser, sueños de juventud que se van para no volver ¿Y dónde están los que se rieron de mí? 𝄡𝄡",
];

// Trae los elementos del HTML que tienen ese id
const imagen = document.getElementById("foto");
const titulo = document.getElementById("titulo1");
const prediccion = document.getElementById("prediccion1");
const boton = document.getElementById("boton");

// Función para generar un número aleatorio entre un valor mínimo y un máximo
function numeroRandom(min, max) {
  return Math.ceil(Math.random() * (max - min) + min - 1);
}

function generarPrediccion() {
  // Para elegir la misma posición en todas las listas, generar un solo número aleatorio
  const indice = numeroRandom(0, frases.length); // 0, 1, 2, 3

  // Reemplaza el texto del elemento 'titulo' por un título de la lista de títulos elegido aleatoriamente
  titulo.innerText = titulos[indice]; // Entre los [] se pasa el número aleatorio generado arriba

  // Reemplaza la imagen del elemento 'imagen' por una elegida aleatoriamente
  imagen.src = imagenes[indice];

  // Reemplaza el texto del elemento 'predicción' por las frases elegidas aleatoriamente
  prediccion.innerHTML = `<p>${frases[indice]}</p>`;
}

// Ejecuta la función generarPoema() cada vez que hago click en el botón
boton.addEventListener("click", function () {
  generarPrediccion();
});

generarPrediccion();