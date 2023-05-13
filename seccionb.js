const ingresoOrg = prompt('Ingrese Fecha de Ingreso a la Organización: (Ej: 19-04-2023)');
ingresoOrganizacion(ingresoOrg);

function ingresoOrganizacion(ingreso, actual){

  const [dia, mes, ano] = ingreso.split('-');
//   console.log(dia, mes, ano);
  const dateObj = new Date(parseInt(ano), parseInt(mes) - 1, parseInt(dia));
  console.log(dateObj);
  document.write(`<br/> Su permanencia en la organización es de: ${totalDays(dateObj)} días. <br/>
  Su permanencia en la organización es de: ${absMonth(dateObj)} meses.<br/>
  Su permanencia en la organización es de: ${getAge(dateObj).edadAno} años y ${getAge(dateObj).edadMes} meses y ${getAge(dateObj).edadDias} días.<br/>
  Para completar el año de permanencia faltan: ${getRemainingDaysForBirthday(dateObj)}`);
}
