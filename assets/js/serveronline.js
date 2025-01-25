function checkServerStatus() {
    var serverIP = '0.0..0.0.'; // Reemplaza con la IP de tu servidor Minecraft
  
    fetch('https://api.mcsrvstat.us/2/' + serverIP)
      .then(response => response.json())
      .then(data => {
        var serverStatusElement = document.getElementById('server-status2');
        var serverImageElement = document.getElementById('server-image2');
        var ServerImageseñalElement = document.getElementById('server-onlineimg2');
  
        if (data.online) {
          serverStatusElement.textContent = 'El servidor está en línea.';
          serverImageElement.src = 'assets/img/online.png'; // Ruta a la imagen para el estado en línea
          serverImageElement.alt = 'Servidor en línea';
          ServerImageseñalElement.src = 'assets/img/senal.png'
          ServerImageseñalElement.alt = 'Contador jugadores'
          document.getElementById('player-count2').textContent = 'Jugadores en línea: ' + data.players.online  + '/' + data.players.max;
        } else {
          serverStatusElement.textContent = 'El servidor está fuera de línea.';
          serverImageElement.src = 'assets/img/ofline.png'; // Ruta a la imagen para el estado fuera de línea
          serverImageElement.alt = 'Servidor fuera de línea';
          ServerImageseñalElement.src = 'assets/img/señal2.png';
          ServerImageseñalElement.alt = 'Contador jugadores'
          document.getElementById('player-count2').textContent = '';
        }
      })
      .catch(error => {
        console.error('Error al obtener el estado del servidor:', error);
        var serverStatusElement = document.getElementById('server-status');
        serverStatusElement.textContent = 'Error al obtener el estado del servidor.';
        ServerImageseñalElement.src = 'assets/img/señal2.png';
        document.getElementById('player-count').textContent = '';
      });
  }
  
  // Actualiza el estado del servidor cada 5 segundos
  setInterval(checkServerStatus, 5000);
  