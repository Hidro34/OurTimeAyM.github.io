// Obtener elementos del DOM
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");
var lastLyricIndex = -1; // Para evitar repetir letras

// Iniciar reproducción con clic en cualquier parte de la página
document.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
  }
});
// Datos de la letra con tiempos corregidos (alternando lados)
var lyricsData = [
  { "inicio": 3.4, "fin": 7.0, "texto": "Cause when our eyes look, it's like my heart stops", "lado": "izquierda" },
  { "inicio": 7.0, "fin": 14.8, "texto": "It only took me a moment and now I'm imprisoned to your touch (woah)", "lado": "derecha" },
  { "inicio": 14.8, "fin": 20.2, "texto": "I don't know where it's going now but I know I need your love", "lado": "izquierda"},
  { "inicio": 20.2, "fin": 23.9, "texto": "Now I'll always be here I won't ever run", "lado": "derecha" },
  { "inicio": 23.9, "fin": 29.0, "texto": "Cause you took the air right out of my lungs", "lado": "izquierda" },
  { "inicio": 29.0, "fin": 32.7, "texto": "Ah, I lose my breath, when you're walking in", "lado": "derecha"},
  { "inicio": 32.7, "fin": 36.1, "texto": "Cause when our eyes look, it's like my heart stops", "lado": "izquierda" },
  { "inicio": 36.1, "fin": 39.8, "texto": "Ah, I lose my breath, when you're walking in", "lado": "derecha" },
  { "inicio": 39.8, "fin": 43.3, "texto": "You make my knees drop, it's like I'm in shock", "lado": "izquierda" },
  { "inicio": 43.3, "fin": 50.9, "texto": "Now all I think about is how. My world turned upside down", "lado": "derecha" },
  { "inicio": 50.9, "fin": 54.1, "texto": "Ah, I lose my breath, when you're walking in", "lado": "izquierda" },
  { "inicio": 54.1, "fin": 57.9, "texto": "Cause when our eyes look, it's like my heart stops", "lado": "derecha" },
  { "inicio": 57.9, "fin": 59.9, "texto": "Right now, I feel like dying and I'm lying", "lado": "izquierda" },
  { "inicio": 59.9, "fin": 61.8, "texto": "On the tilings when you walk in the room", "lado": "derecha" },
  { "inicio": 61.8, "fin": 63.0, "texto": "Freezing but you're steaming", "lado": "izquierda" },
  { "inicio": 63.0, "fin": 65.5, "texto": "Yeah, you catch my breath every time you make a move", "lado": "derecha" },
  { "inicio": 65.5, "fin": 67.0, "texto": "Can you be a part of my life?", "lado": "izquierda" },
  { "inicio": 67.0, "fin": 69.0, "texto": "Girl, I need you right by my side" , "lado": "derecha"},
  { "inicio": 69.0, "fin": 70.0, "texto": "When I look at your eyes", "lado": "izquierda" },
  { "inicio": 70.0, "fin": 71.1, "texto": "I'm out of breath (I'm out of breath)", "lado": "derecha" },
  { "inicio": 71.1, "fin": 74.5, "texto": "Now I'll always be here. I won't ever run", "lado": "izquierda" },
  { "inicio": 74.5, "fin": 79.8, "texto": "Cause you took the air right out of my lungs", "lado": "derecha" },
  { "inicio": 79.8, "fin": 83.0, "texto": "Ah, I lose my breath, when you're walking in", "lado": "izquierda" },
  { "inicio": 83.0, "fin": 86.8, "texto": "Cause when our eyes look, it's like my heart stops", "lado": "derecha" },
  { "inicio": 86.8, "fin": 90.0, "texto": "Ah, I lose my breath, when you're walking in", "lado": "izquierda" },
  { "inicio": 90.0, "fin": 94.0, "texto": "You make my knees drop, it's like I'm in shock" , "lado": "derecha"},
  { "inicio": 94.0, "fin": 97.8, "texto": "Now all I think about is how", "lado": "izquierda" },
  { "inicio": 97.8, "fin": 101.0, "texto": "My world turned upside down", "lado": "derecha" },
  { "inicio": 101.0, "fin": 104.9, "texto":"Ah, I lose my breath when you're walking in" , "lado": "izquierda"},
  { "inicio": 104.9, "fin": 108.0, "texto":"Cause when our eyes lock, it's like my heart stops", "lado": "derecha"},
  { "inicio": 108.0, "fin": 111.9, "texto": "Oh, I feel like there's something coming over me", "lado": "izquierda" },
  { "inicio": 111.9, "fin": 115.7, "texto": "I feel like there's something coming over me", "lado": "derecha" },
  { "inicio": 115.7, "fin": 99.0, "texto": "Now all I think about is how", "lado": "izquierda" },
  { "inicio": 99.0, "fin": 102.0, "texto": "My world turned upside down", "lado": "derecha" },
  { "inicio": 102.0, "fin": 105.0, "texto": "Ah, I lose my breath when you're walking in", "lado": "izquierda" },
  { "inicio": 105.0, "fin": 108.0, "texto": "'Cause when our eyes lock, it's like my heart stops" , "lado": "derecha"},
  { "inicio": 108.0, "fin": 112.0, "texto": "Oh, I feel like there's something coming over me", "lado": "izquierda" },
  { "inicio": 112.0, "fin": 115.0, "texto": "I feel like there's something coming over me", "lado": "derecha" },
  { "inicio": 115.0, "fin": 119.9, "texto": "Oh, I feel like there's something coming over me", "lado": "izquierda" },
  { "inicio": 119.9, "fin": 122.8, "texto": "Over me, over me", "lado": "derecha" },
  { "inicio": 122.8, "fin": 126.0, "texto": "Your lips on my lips make me lose my ah, ah", "lado": "izquierda" },
  { "inicio": 126.0, "fin": 130.0, "texto": "Bab, y keep 'em there 'til there's no air in my chest", "lado": "derecha" },
  { "inicio": 130.0, "fin": 133.7, "texto": "Ah, I lose my breath when you're walking in", "lado": "izquierda" },
  { "inicio": 133.7, "fin": 137.0, "texto": "Cause when our eyes lock, it's like my heart stops" , "lado": "derecha"},
  { "inicio": 137.0, "fin": 140.9, "texto": "Ah, I lose my breath when you're walking in", "lado": "izquierda" },
  { "inicio": 140.9, "fin": 144.5, "texto": "You make my knees drop, it's like I'm in shock", "lado": "derecha" },
  { "inicio": 144.5, "fin": 148.0, "texto": "Now all I think about is how", "lado": "izquierda" },
  { "inicio": 148.0, "fin": 152.0, "texto": "My world turned upside down", "lado": "derecha" },
  { "inicio": 152.0, "fin": 155.0, "texto": "Ah, I lose my breath when you're walking in", "lado": "izquierda" },
  { "inicio": 155.0, "fin": 159.0, "texto": "Cause when our eyes lock, it's like my heart stops" , "lado": "derecha"},
  { "inicio": 159.0, "fin": 162.0, "texto": "Ooh", "lado": "izquierda" },
  { "inicio": 162.0, "fin": 166.0, "texto": "Baby, I lose my, lose my breath, yeah" , "lado": "derecha"},
];

// Estilos iniciales de la letra
document.addEventListener("DOMContentLoaded", function () {
  lyrics.style.position = "absolute";
  lyrics.style.top = "50px"; // Comienza en una posición intermedia
  lyrics.style.color = "#B266FF"; 
  lyrics.style.textShadow = "0 0 10px #B266FF, 0 0 20px #B266FF"; 
  lyrics.style.fontSize = "20px";
  lyrics.style.fontWeight = "bold";
  lyrics.style.width = "400px";
  lyrics.style.wordWrap = "break-word";
  lyrics.style.lineHeight = "1.2";
  lyrics.style.transition = "opacity 0.8s ease-in-out, transform 0.8s ease-in-out";
  lyrics.style.fontFamily = "'Dancing Script', cursive";
  lyrics.style.opacity = "0"; // Inicialmente invisible
});

// Estilos iniciales de la letra
document.addEventListener("DOMContentLoaded", function () {
  lyrics.style.position = "absolute";
  lyrics.style.top = "12px"; // Espacio reducido
  lyrics.style.color = "#B266FF"; 
  lyrics.style.textShadow = "0 0 10px #B266FF, 0 0 20px #B266FF"; 
  lyrics.style.fontSize = "22px";
  lyrics.style.fontWeight = "bold";
  lyrics.style.width = "400px";
  lyrics.style.wordWrap = "break-word";
  lyrics.style.lineHeight = "1.2";
  lyrics.style.transition = "opacity 0.3s ease-in-out, transform 0.3s ease-in-out";
  lyrics.style.fontFamily = "'Dancing Script', cursive";
  lyrics.style.opacity = 0;
});

// Estilos iniciales de la letra
document.addEventListener("DOMContentLoaded", function () {
  lyrics.style.position = "absolute";
  lyrics.style.top = "20px"; // Ajuste para menor espacio arriba
  lyrics.style.color = "#B266FF";
  lyrics.style.textShadow = "0 0 10px #B266FF, 0 0 20px #B266FF";
  lyrics.style.fontSize = "20px";
  lyrics.style.fontWeight = "bold";
  lyrics.style.width = "400px";
  lyrics.style.wordWrap = "break-word";
  lyrics.style.lineHeight = "1.2";
  lyrics.style.transition = "opacity 0.3s ease-in-out, transform 0.3s ease-in-out";
  lyrics.style.fontFamily = "'Dancing Script', cursive";
  lyrics.style.opacity = "0";
});

// Estilos iniciales de la letra
document.addEventListener("DOMContentLoaded", function () {
  lyrics.style.position = "absolute";
  lyrics.style.top = "14px"; // Ajuste para menor espacio arriba
  lyrics.style.color = "#B266FF";
  lyrics.style.textShadow = "0 0 10px #B266FF, 0 0 20px #B266FF";
  lyrics.style.fontSize = "20px";
  lyrics.style.fontWeight = "bold";
  lyrics.style.width = "400px";
  lyrics.style.wordWrap = "break-word";
  lyrics.style.lineHeight = "1.2";
  lyrics.style.transition = "opacity 0.5s ease-in-out, transform 0.5s ease-in-out"; // Animaciones más suaves
  lyrics.style.fontFamily = "'Dancing Script', cursive";
  lyrics.style.opacity = "0";
});

// Estilos iniciales de la letra
document.addEventListener("DOMContentLoaded", function () {
  lyrics.style.position = "absolute";
  lyrics.style.top = "20px";
  lyrics.style.color = "#B266FF";
  lyrics.style.textShadow = "0 0 10px #B266FF, 0 0 20px #B266FF";
  lyrics.style.fontSize = "20px";
  lyrics.style.fontWeight = "bold";
  lyrics.style.width = "400px";
  lyrics.style.wordWrap = "break-word";
  lyrics.style.lineHeight = "1.2";
  lyrics.style.transition = "opacity 0.3s ease-in-out, transform 0.6s ease-in-out"; // Transiciones más suaves
  lyrics.style.fontFamily = "'Dancing Script', cursive";
  lyrics.style.opacity = "0";
});

// Función para actualizar la letra en pantalla con animaciones mejoradas
function updateLyrics() {
  var time = audio.currentTime;
  var currentIndex = lyricsData.findIndex(line => time >= line.inicio && time < line.fin);

  if (currentIndex !== -1 && currentIndex !== lastLyricIndex) {
    lastLyricIndex = currentIndex;
    lyrics.style.opacity = "0";
    lyrics.style.transform = "translateY(0px)";

    setTimeout(() => {
      if (lyricsData[currentIndex].lado === "izquierda") {
        lyrics.style.left = "20px";
      } else {
        lyrics.style.left = "calc(100% - 420px)";
      }
      
      lyrics.innerHTML = lyricsData[currentIndex].texto;
      lyrics.style.opacity = "1";
      lyrics.style.transform = "translateY(0px)";
    }, 200); // Ajuste de aparición

    // Ajustar el tiempo de desaparición para que sea proporcional
    let duracion = (lyricsData[currentIndex].fin - lyricsData[currentIndex].inicio) * 1000;
    let tiempoCaida = Math.max(300, duracion * 0.01); // Que la caída no sea menor a 500ms

    setTimeout(() => {
      lyrics.style.transform = "translateY(100px)"; // Asegurar caída visible
      lyrics.style.opacity = "0";
    }, duracion - tiempoCaida);
  }
  
  var ultimaLinea = lyricsData[lyricsData.length - 1];
  if (time >= ultimaLinea.fin) {
    lyrics.style.opacity = "0";
    setTimeout(() => {
      lyrics.innerHTML = "";
    }, 500);
  }
  requestAnimationFrame(updateLyrics);
}

requestAnimationFrame(updateLyrics);