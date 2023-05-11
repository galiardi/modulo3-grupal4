console.log('Hola Borbotones');

const birthdate = prompt('Ingrese Fecha de nacimiento (Ej: 19-04-2023)');

function global(date) {
  const formattedDate = date.split('-').reverse().join('-');
  const dateObj = new Date(formattedDate);
  const dayOfBirthdate = getDayOfBirthdate(dateObj);
  getAge(dateObj);
  totalDays(dateObj);
  getRemainingDaysForBirthday(dateObj);
}

//Jonathan
function getDayOfBirthdate(obj) {
  const daysOfWeek = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
  ];
  let valor = obj.getDay();
  return daysOfWeek[valor];
}

function getAge(obj) {
  const year = obj.getFullYear();
  const month = obj.getMonth();
  const date = obj.getDate();

  const today = new Date();

  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth();
  const todayDate = today.getDate();
  /*se supone que si pongo una fecha con un mes mayor
quita un año me falta arreglar los dias me parece*/
  // a esta hora ya no razono
  // si igual, ok
  let edadAno = todayYear - year;
  let edadMes = todayMonth - month;
  let edadDias = todayDate - date;
  //si lo dejamos para mañana? bueno, verdad, e puedo a las 5 buena,
  //si eso seria super util  jajaja si discord o cualquiera que sirva nose si wh
  //chao nos vemos
  if (edadMes < 0) {
    edadAno -= 1;
    edadMes = todayMonth + 1;
    edadDias = date;
  }
  document.write(edadAno, '\n', edadMes, '\n', edadDias, '   ');
}

//Jonathan
//Lo mismo por aquí, estoy craneando lo de los meses totales, pero ya mi cerebro esta fundido
//mañana nos podemos conectar antes, como el pablo tiene el master, que él diga hora.
// ok a las 5? o 6?
// demosle a las 5 igual en la ma;ana lo voy a subir al github y les mando el link

//okas, a las 17 entonces, veré si creo mejor un canal en otra app que nos permite estar en linea con camara y audio, slack vale yuyo
// seeee, discord
// ok
// vale, mañana les mando el enlace de descarga de discord para quien nno lo tenga y les mando el canal para unirse, yessss
// ya chao !
//
function totalDays(obj) {
  const fechaNacim = obj.getTime();
  const fechaHoy = new Date().getTime();

  let valor = fechaHoy - fechaNacim;
  console.log(valor / (1000 * 60 * 60 * 24));
  return valor / (1000 * 60 * 60 * 24);
}

function getRemainingDaysForBirthday(obj) {
  const now = Date.now();

  const birthday = {
    month: obj.getMonth(),
    date: obj.getDate(),
  };

  const today = {
    month: now.getMonth(),
    date: now.getDate(),
  };

  const remaining = {
    month: birthday.month - today.month,
    date: birthday.date - today.date,
  };

  console.log(remaining);
}

global(birthdate);
/*

console.log('formattedBirthdate:', formattedBirthdate);

const birthdateObj = new Date(formattedBirthdate);

console.log('birthdateObj:', birthdateObj);

const fullYear = birthdateObj.getFullYear();

console.log('fullYear:', fullYear);

function getDayOfBirthday(date) {
  return 
}
*/
