const obj = new Date(1990, 4, 20);

console.log(getAge(obj));

// parte a - segunda seccion
function getAge(obj) {
  const year = obj.getFullYear();
  const month = obj.getMonth();
  const date = obj.getDate();

  const today = new Date();

  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth();
  const todayDate = today.getDate();
  const isLeapYear = todayYear % 4 === 0;

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
