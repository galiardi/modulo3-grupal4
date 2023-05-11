const birthdate = prompt('Ingrese Fecha de nacimiento (Ej: 19-04-2023)');

global(birthdate);

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
