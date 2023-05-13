/*Crear una función que obtenga con un ciclo la cantidad de horas que han permanecido los 8
trabajadores de la empresa y entregue la suma total de horas trabajadas.
 Una persona debe trabajar desde 4 horas y cero minutos en adelante (validarlo)
 Una persona no puede trabajar sobre 12 horas y cero minutos (validarlo)
La respuesta de esta función es un mensaje en pantalla que indique las horas y minutos totales
trabajados por los 8 colaboradores.*/
calcularHorasTrabajadas();

function calcularHorasTrabajadas() {
    let totalHoras = 0;
  
    for (let i = 1; i <= 8; i++) {
      let horas = parseInt(prompt(`Ingrese las horas trabajadas por el colaborador ${i}:`));
      let minutos = parseInt(prompt(`Ingrese los minutos trabajados por el colaborador ${i}:`));
  
      // Validar que las horas estén entre 4 y 12
      if (horas < 4 || horas > 12) {
        alert("Las horas trabajadas deben estar entre 4 y 12.");
        i--; // Retroceder una iteración para volver a pedir las horas
        continue;
      }
  
      // Validar que los minutos estén entre 0 y 59
      if (minutos < 0 || minutos > 59) {
        alert("Los minutos trabajados deben estar entre 0 y 59.");
        i--; // Retroceder una iteración para volver a pedir los minutos
        continue;
      }
  
      let horasTrabajadas = horas + (minutos / 60); // Convertir los minutos a fracción de hora
      totalHoras += horasTrabajadas;
    }
  
    let horasTotales = Math.floor(totalHoras); // Obtener las horas totales trabajadas
    let minutosTotales = Math.round((totalHoras - horasTotales) * 60); // Obtener los minutos totales trabajados
  
    alert(`El total de horas trabajadas por los 8 colaboradores es de ${horasTotales} horas y ${minutosTotales} minutos.`);
  }
  