function checkServerStatus() {
    var serverIP = 'GthServer2023.aternos.me'; // Reemplaza con la IP de tu servidor Minecraft
  
    fetch('https://api.mcsrvstat.us/2/' + serverIP)
      .then(response => response.json())
      .then(data => {
        var serverStatusElement = document.getElementById('server-status');
        var serverImageElement = document.getElementById('server-image');
        var ServerImageseñalElement = document.getElementById('server-onlineimg');
  
        if (data.version=="● Offline") {
          serverStatusElement.textContent = 'El servidor está fuera de línea.';
          serverImageElement.src = 'assets/img/ofline.png'; // Ruta a la imagen para el estado fuera de línea
          serverImageElement.alt = 'Servidor fuera de línea';
          ServerImageseñalElement.src = 'assets/img/señal2.png';
          ServerImageseñalElement.alt = 'Contador jugadores'
          document.getElementById('player-count').textContent = '';
        } else {
          serverStatusElement.textContent = 'El servidor está en línea.';
          serverImageElement.src = 'assets/img/online.png'; // Ruta a la imagen para el estado en línea
          serverImageElement.alt = 'Servidor en línea';
          ServerImageseñalElement.src = 'assets/img/senal.png'
          ServerImageseñalElement.alt = 'Contador jugadores'
          document.getElementById('player-count').textContent = 'Jugadores en línea: ' + data.players.online + '/' + data.players.max;
        }
      })
      .catch(error => {
        console.error('Error al obtener el estado del servidor:', error);
        var serverStatusElement = document.getElementById('server-status');
        serverStatusElement.textContent = 'Error al obtener el estado del servidor.';
        serverImageElement.src = 'assets/img/ofline.png'; // Ruta a la imagen para el estado fuera de línea
        serverImageElement.alt = 'Servidor fuera de línea';
        ServerImageseñalElement.src = 'assets/img/señal2.png';
        document.getElementById('player-count').textContent = '';
      });
  }
  
  // Actualiza el estado del servidor cada 5 segundos
  setInterval(checkServerStatus, 5000);