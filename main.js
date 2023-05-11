const birthdate = prompt('Ingrese Fecha de nacimiento (Ej: 19-04-2023)');

global(birthdate);

function global(date) {
  console.log(date);
  const formattedDate = date.split('-').reverse().join('-');
  console.log(formattedDate);
  const dateObj = new Date(formattedDate);
  console.log(dateObj);
  const dayOfBirthdate = getDayOfBirthdate(dateObj);
  getAge(dateObj);
  totalDays(dateObj);
  const remainingDaysForBirthday = getRemainingDaysForBirthday(dateObj);
  console.log(remainingDaysForBirthday);
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

  let edadAno = todayYear - year;
  let edadMes = todayMonth - month;
  let edadDias = todayDate - date;

  if (edadMes < 0) {
    edadAno -= 1;
    edadMes = todayMonth + 1;
    edadDias = date;
  }
  document.write(edadAno, '\n', edadMes, '\n', edadDias, '   ');
}

function totalDays(obj) {
  const fechaNacim = obj.getTime();
  const fechaHoy = new Date().getTime();

  let valor = fechaHoy - fechaNacim;
  console.log(valor / (1000 * 60 * 60 * 24));
  return valor / (1000 * 60 * 60 * 24);
}

function getRemainingDaysForBirthday(dateObj) {
  const now = new Date();

  const today = {
    month: now.getMonth(),
    date: now.getDate(),
    year: now.getFullYear(),
    miliseconds: Date.now(),
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

  birthday.miliseconds = Date.parse(formattedBirthday);

  console.log(birthday);

  remaining.miliseconds = birthday.miliseconds - today.miliseconds;

  const remainigDaysForBirthday = Math.floor(
    remaining.miliseconds / (24 * 60 * 60 * 1000)
  );

  return remainigDaysForBirthday;
}
