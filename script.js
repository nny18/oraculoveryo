// Crear las listas de imágenes, títulos y frases
const imagenes = [
  "https://www.semana.com/resizer/v2/ORS5B3BQV5BCRFGON7F5WBNWHY.jpg?auth=98c34d8d69dbe7eb31e6cb00d44d4d053df760f56382454e6dbb75c4404d4624&smart=true&quality=75&width=1280&height=720",
  "https://elcomercio.pe/resizer/v2/RX7SVF4USBHBJOKFCQH65VCO4U.jpg?auth=3842b184e72328724ba99497fdba9354d13a982bdb1b5934cd809c13b1d92309&width=980&height=528&quality=75&smart=true",
  "https://www.clarin.com/img/2021/06/07/Bspy0NbEL_720x0__1.jpg",
  "https://caracoltv.brightspotcdn.com/dims4/default/ab7883d/2147483647/strip/true/crop/907x510+32+0/resize/1280x720!/format/webp/quality/75/?url=https%3A%2F%2Fcaracol-brightspot.s3-us-west-2.amazonaws.com%2Fassets%2Fcaracoltv%2Fmajo1_2.jpg",
  "https://image.jimcdn.com/app/cms/image/transf/none/path/sf90d7618a6505ea0/image/ie8d9c2e6eef4951d/version/1559166885/image.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBsuIzE9q88DyWSfSKumNZDTnDFI2P2m5tXQ&s",
  "https://imagenes2.eltiempo.com/files/og_thumbnail/uploads/2018/08/31/5b89cb45cc731.jpeg",
  "https://www.prensalibre.com/wp-content/uploads/2019/03/cris5.jpg",
  "https://caracoltv.brightspotcdn.com/dims4/default/05e55f1/2147483647/strip/true/crop/853x480+0+46/resize/1280x720!/format/webp/quality/75/?url=https%3A%2F%2Fcaracol-brightspot.s3.us-west-2.amazonaws.com%2Fd9%2Fb4%2F66f1e9a54bad9f932c8c7c807df4%2Fjuan-palau.png",
  "https://pbs.twimg.com/media/E3q6wspWYAArLqS.jpg",
  "https://caracoltv.brightspotcdn.com/dims4/default/7cf6f59/2147483647/strip/true/crop/853x480+0+0/resize/1280x720!/format/webp/quality/75/?url=https%3A%2F%2Fcaracol-brightspot.s3.us-west-2.amazonaws.com%2F4f%2Fa1%2F9298df3a417890b7f3ec8b3d4dee%2Fadriana-arango.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTZem8gGUmPgT-8MhKQHZXc_5rcU6JlkNszQ&s",
  "https://caracoltv.brightspotcdn.com/dims4/default/4228b67/2147483647/strip/true/crop/853x480+0+50/resize/1280x720!/format/webp/quality/75/?url=https%3A%2F%2Fcaracol-brightspot.s3.us-west-2.amazonaws.com%2F79%2Fca%2F426fed104c07a35f2e7af2474ded%2Fcatalina-bedoya.jpg",
];

const titulos = [
  "Yeimy",
  "Charly",
  "Irma",
  "Yeimy",
  "Yeimy y charly",
  "Axel",
  "erick",
  "Cris",
  "Drama key",
  "Vanessa",
  "Ligia",
  "Charly",
  "Cata",
];

const frases = [
  "♪♪ Tiembla, porque llegó tu depredador, tú me robaste toda la ilusión, tu mente solo sabe de traición, eres la serpiente que me envenenó. ♪♪",
  "♫♫ Ya voy de camino porque yo sé que este no es mi destino, saldré a buscar a los que yo he herido, pido perdón por los que han sufrido ♫♫",
  "𝄞𝄞 Puertas hay que abrir y saber cerrar, solo hay que seguir y no dar marcha atrás, seguir el instinto 𝄞𝄞",
  "♩♩ De donde vengo, de donde soy ya no hay espacio para el temor, sales con toda y tu bendición, somos más tesos ante el dolor ♩♩",
  "♪♬ Sabes, aún recuerdo esa vez que te vi, yo no entiendo cuánto tiempo yo viví sin ti, eres ese reflejo que quiero mirar, tienes la vida que me hace falta para continuar ♬♪",
  "𝄡𝄡 Una condena que alimenta la furia, el alma en pena por recuerdos que la agobian, memorias imborrables de lo que pudimos ser, sueños de juventud que se van para no volver ¿Y dónde están los que se rieron de mí? 𝄡𝄡",
  "♪♪No quiero quedarme solo nunca más, no quiero perder a quienes amo más, no voy a dejarlos solos, yo voy a arriesgarlo todo, no importa lo malo, la familia es más♪♪",
  "♪♬Ya todos saben lo que voy a hacer, beligerante, me voy a poner, vamos a sacarnos las chispas♪♬",
  "𝄞𝄞Deja de decir tanta mentira, que tú me quieres todavía, en tu cara se nota que piensas en otro, ese no soy yo𝄞𝄞",
  "♫♫Cómo cayeron mis sueños, al ver que no eras quien creí, tantos momentos bonitos quedaron en nada, se fueron así♫♫",
  "♪♪Vengo buscando una oportunidad, y ya verás que no soy como antes, viejos recuerdos que voy a borrar, hicieron de mi vida todo un desastre♪♪",
  "♬♪Perdóname, si te digo la verdad, me equivoqué, si quieres volver a hablar, te buscaré, porque yo digo lo que siento, yo te lo juro, soy sincero♬♪",
  "𝄡𝄡Pero el tiempo ha de pasar, tarde o temprano llegará, me quitaron la inocencia, y destruyeron mucho más, acabaron con mi vida, sin siquiera parpadear, no dejaron a la suerte, y no dejaron por cobrar𝄡𝄡",
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