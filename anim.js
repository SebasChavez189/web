// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Cuando tú estás conmigo es cuando yo digo", time: 3 },
  { text: "Que valió la pena todo... todo lo que yo he sufrido", time: 8 },
  { text: "No sé si es un sueño aún o es una realidad", time: 18 },
  { text: "Pero cuando estoy contigo es cuando digo", time: 22 },
  { text: "Que este amor que siento es porque tú lo has merecido", time: 24 },
  { text: "Con decirte amor que otra vez he amanecido", time: 35 },
  { text: "Llorando de felicidad", time: 40 },
  { text: "A tú lado yo siento que estoy viviendo", time: 42 },
  { text: "Nada es como ayer", time: 48 },
  { text: "Abrázame que el tiempo pasa y él nunca perdona", time: 53 },
  { text: "Ha hecho estragos en mi gente como en mi persona", time: 61 },
  { text: "Abrázame que el tiempo es malo y muy cruel amigo", time: 68 },
  { text: "Abrázame que el tiempo es oro si tú estas conmigo", time: 74 },
  { text: "Abrázame fuerte, muy fuerte y más fuerte que nunca", time: 83 },
  { text: "Siempre abrázame", time: 88 },
  { text: "Hoy que tú estás conmigo", time: 91 },
  { text: "Yo no sé si está pasando el tiempo o tú lo has detenido", time: 96 },
  { text: "Así quiero estar por siempre aprovecho que estas tú conmigo", time: 104 },
  { text: "Te doy gracias por cada momento de mi vivir", time: 110 },
  { text: "Tú cuando mires para el cielo", time: 114 },
  { text: "Por cada estrella que aparezca, amor, es un te quiero...", time: 122 },
  { text: "TE AMO...", time: 126 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 7
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);