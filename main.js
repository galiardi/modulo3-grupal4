const birthdate = prompt('Ingrese Fecha de nacimiento (Ej: 19-04-2023)');

global(birthdate);

function global(date) {
  const [dia, mes, ano] = date.split('-');
  const dateObj = new Date(parseInt(ano), parseInt(mes) - 1, parseInt(dia));

  // console.log ("seccion 1:", getDayOfBirthdate(dateObj));
  // console.log ("seccion 2:", getAge(dateObj));
  // console.log ("seccion 3:", absMonth(dateObj));
  // console.log ("seccion 4:", totalDays(dateObj));
  // console.log ("seccion 5:", getRemainingDaysForBirthday(dateObj));
  // console.log ("seccion 6:", timeNow());
  const remainingDaysForBirthday = getRemainingDaysForBirthday(dateObj);
  document.write(`El día en que nació fue ${getDayOfBirthdate(dateObj)}. <br/>
  Su edad es: ${getAge(dateObj).edadAno} años y ${
    getAge(dateObj).edadMes
  } meses y ${getAge(dateObj).edadDias} días.<br/>
  La cantidad de meses que tiene son: ${absMonth(dateObj)} meses. <br/>
  La cantidad de días que tiene son: ${totalDays(dateObj)} días. <br/>
  ${
    remainingDaysForBirthday
      ? `Faltan ${remainingDaysForBirthday} días para su cumpleaños.`
      : 'Felicidades está de cumpleaños.'
  } <br/>
  La hora en que ha realizado su consulta es: ${timeNow().horas} : ${
    timeNow().minutos
  } : ${timeNow().segundos}.`);
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

function getAge(obj) {
  const year = obj.getFullYear();
  const month = obj.getMonth();
  const date = obj.getDate();

  const today = new Date();

  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth();
  const todayDate = today.getDate();
  const isLeapYear = todayYear % 4 === 0; // anos bisiestos son multiplos de 4

  let edadAno = todayYear - year;
  let edadMes = todayMonth - month;
  let edadDias = todayDate - date;

  if (edadDias < 0) {
    const daysByMonths = [
      31,
      isLeapYear ? 29 : 28,
      31,
      30,
      31,
      30,
      31,
      31,
      30,
      31,
      30,
      31,
    ];
    edadMes -= 1;
    edadDias = daysByMonths[todayMonth] + edadDias; // edadDias es negativo
  }

  if (edadMes < 0) {
    edadAno -= 1;
    edadMes = 12 + edadMes; // edadMes es negativo
  }

  return { edadAno, edadMes, edadDias };
}

//parte a - seccion 3
function absMonth(obj) {
  const { edadAno } = getAge(obj);
  const month = obj.getMonth();
  const today = new Date();
  const todayMonth = today.getMonth();
  let mesAbs = 0;
  if (edadAno >= 0 && month >= todayMonth) {
    mesAbs = edadAno * 12 - (month - todayMonth);
    return mesAbs;
  }
  if (edadAno > 0 && month < todayMonth) {
    mesAbs = edadAno * 12 + (todayMonth - month);
    return mesAbs;
  }
  // if si es algo que no se
}

// parte a - seccion 4
function totalDays(obj) {
  const fechaNacim = obj.getTime();
  // console.log("Fecha de nacimiento:", fechaNacim);
  const fechaHoy = new Date().getTime();
  // console.log("Fecha de hoy:", fechaHoy);
  let valor = fechaHoy - fechaNacim;
  valor = parseInt(valor / (1000 * 60 * 60 * 24));
  // console.log("Días desde el naciemiento:", valor);
  return valor;
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

  const birthdayIsToday =
    birthday.month === today.month && birthday.date === today.date;
  if (birthdayIsToday) return 0;

  const birthdayIsOver =
    remaining.month < 0 || (remaining.month === 0 && remaining.date < 0);

  if (birthdayIsOver) {
    birthday.year = today.year + 1;
  } else {
    birthday.year = today.year;
  }

  const formattedBirthday = `${birthday.year}-${birthday.month + 1}-${
    birthday.date
  }`;

  // console.log(formattedBirthday);

  birthday.miliseconds = Date.parse(formattedBirthday);

  // console.log(birthday);

  remaining.miliseconds = birthday.miliseconds - today.miliseconds;

  const remainigDaysForBirthday = Math.ceil(
    remaining.miliseconds / (24 * 60 * 60 * 1000)
  );

  return remainigDaysForBirthday;
}

// parta a - seccion 6
function timeNow() {
  const now = new Date();
  const horas = now.getHours();
  const minutos = now.getMinutes();
  const segundos = now.getSeconds();
  return { horas, minutos, segundos };
}
