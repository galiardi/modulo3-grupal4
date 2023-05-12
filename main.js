const birthdate = prompt('Ingrese Fecha de nacimiento (Ej: 19-04-2023)');

global(birthdate);

function global(date) {
  console.log(date.split('-'));
  const [dia, mes, ano] = date.split('-');
  const dateObj = new Date(parseInt(ano), parseInt(mes) - 1, parseInt(dia));
  console.log(dateObj);

  const dayOfBirthdate = getDayOfBirthdate(dateObj);

  getAge(dateObj);

  totalDays(dateObj);


  const remainingDaysForBirthday = getRemainingDaysForBirthday(dateObj);
  console.log(remainingDaysForBirthday ? `Faltan ${remainingDaysForBirthday} días para su cumpleaños.` : 'Felicidades está de cumpleaños')
}

//parte a - primera seccion
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

// parte a - segunda seccion
function getAge(obj) {
  const year = obj.getFullYear();
  const month = obj.getMonth();
  const date = obj.getDate();

  const today = new Date();

  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth();
  const todayDate = today.getDate();

  let edadAno = todayYear - year;
  let edadMes = todayMonth - month;
  let edadDias = todayDate - date;

  if (edadMes < 0) {
    edadAno -= 1;
    edadMes = todayMonth + 1;
    edadDias = date;
  }
  return {edadAno, edadMes, edadDias}
}

//parte a - seccion 3
function absMonth(obj){
  const month = obj.getMonth();
  const today = new Date();
  const todayMonth = today.getMonth();
  let mesAbs=0;
   if(edadAno>=0 && month>=todayMonth){
      mesAbs= edadAno(12)-(month-todayMonth);
      return(mesAbs)
    }
    if(edadAno>0 && month<todayMonth){
      mesAbs= edadAno(12)+(todayMonth-month);
      return(mesAbs)
    }
}

// parte a - seccion 4
function totalDays(obj) {
  const fechaNacim = obj.getTime();
  const fechaHoy = new Date().getTime();

  let valor = fechaHoy - fechaNacim;
  console.log(valor / (1000 * 60 * 60 * 24));
  return valor / (1000 * 60 * 60 * 24);
}

// parte a - seccion 5
function getRemainingDaysForBirthday(dateObj) {
  const now = new Date();

  const today = {
    month: now.getMonth(),
    date: now.getDate(),
    year: now.getFullYear(),
    miliseconds: Date.parse(now),
  };

  const birthday = {
    month: dateObj.getMonth(),
    date: dateObj.getDate(),
    year: undefined,
    miliseconds: undefined,
  };

  const remaining = {
    month: birthday.month - today.month,
    date: birthday.date - today.date,
    miliseconds: undefined,
  };

  const birthdayIsToday = birthday.month === today.month && birthday.date === today.date;
  if (birthdayIsToday) return 0;

  const birthdayIsOver =
    remaining.month < 0 || (remaining.month === 0 && remaining.date < 0);

  if (birthdayIsOver) {
    birthday.year = today.year + 1;
  } else {
    birthday.year = today.year;
  }

  const formattedBirthday = `${birthday.year}-${birthday.month + 1}-${birthday.date
    }`;

  console.log(formattedBirthday);

  birthday.miliseconds = Date.parse(formattedBirthday);

  console.log(birthday);

  remaining.miliseconds = birthday.miliseconds - today.miliseconds;

  const remainigDaysForBirthday = Math.ceil(
    remaining.miliseconds / (24 * 60 * 60 * 1000)
  );

  return remainigDaysForBirthday;
}

// parta a - seccion 6
function timeNow(){
  const now = new Date();
  const horas = now.getHours();
  const minutos = now.getMinutes();
  const segundos = now.getSeconds();
  return {horas, minutos, segundos}
}