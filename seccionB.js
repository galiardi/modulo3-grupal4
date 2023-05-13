const ingresoOrg = prompt('Ingrese Fecha de Ingreso a la Organización: (Ej: 19-04-2023)');
ingresoOrganizacion(ingresoOrg);

function ingresoOrganizacion(ingreso, actual){

  const [dia, mes, ano] = ingreso.split('-');

  const dateObj = new Date(parseInt(ano), parseInt(mes) - 1, parseInt(dia));
  console.log(dateObj);

  const { edadAno: years, edadMes: months, edadDias: days} = getAge(dateObj);
  
  document.write(`<br/> <br/> Su permanencia en la organización es de: ${totalDays(dateObj)} días. <br/>
  Su permanencia en la organización es de: ${getAbsMonths(dateObj)} meses.<br/>
  Su permanencia en la organización es de: ${years} años y ${months} meses y ${days} días.<br/>
  Para completar el año de permanencia faltan: ${getRemainingDaysForBirthday(dateObj)}`);
}
