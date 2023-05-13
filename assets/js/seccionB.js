const hireDate = prompt(
  'Ingrese Fecha de Ingreso a la Organización: (Ej: 19-04-2023)'
);
ingresoOrganizacion(hireDate, new Date());

function ingresoOrganizacion(hireDate, today) {
  const [hireDay, hireMonth, hireYear] = hireDate.split('-');

  const hireDateObj = new Date(
    parseInt(hireYear),
    parseInt(hireMonth) - 1,
    parseInt(hireDay)
  );

  const {
    edadAno: yearsInCompany,
    edadMes: monthsInCompany,
    edadDias: daysInCompany,
  } = getAge(hireDateObj);

  let remainingDays = getRemainingDaysForBirthday(hireDateObj);

  // si la persona ingresa hoy, le faltan 365 dias para completar un nuevo ano en la organizacion
  // esta correccion es necesaria porque remainingDaysForBirthDay retorna 0 si el argumento tiene dia y mes de hoy
  if (remainingDays === 0 && hireDateObj.getFullYear() === today.getFullYear())
    remainingDays = 365;

  document.write(`<br/> <br/> Su permanencia en la organización es de: ${totalDays(
    hireDateObj
  )} días. <br/>
  Su permanencia en la organización es de: ${getAbsMonths(
    hireDateObj
  )} meses.<br/>
  Su permanencia en la organización es de: ${yearsInCompany} años y ${monthsInCompany} meses y ${daysInCompany} días.<br/>
  Para completar un nuevo año de permanencia faltan: ${remainingDays}`);
}
