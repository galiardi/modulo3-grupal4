window.entryExitForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const { entryTimeInput, entryDateInput, exitTimeInput, exitDateInput } =
    window;

  const [entryHours, entryMinutes] = entryTimeInput.value.trim().split(':');
  const [entryDay, entryMonth, entryYear] = entryDateInput.value
    .trim()
    .split('-');

  const [exitHours, exitMinutes] = exitTimeInput.value.trim().split(':');
  const [exitDay, exitMonth, exitYear] = exitDateInput.value.trim().split('-');

  const entry = new Date(
    entryYear,
    entryMonth - 1,
    entryDay,
    entryHours,
    entryMinutes,
    0
  );

  const exit = new Date(
    exitYear,
    exitMonth - 1,
    exitDay,
    exitHours,
    exitMinutes,
    0
  );

  getHoursWorked(entry, exit);
});

function getHoursWorked(entry, exit) {
  const timeWorkedMS = Date.parse(exit) - Date.parse(entry);
  const hoursWorked = timeWorkedMS / (1000 * 60 * 60);
  const minutesWorked = Math.round((hoursWorked % 1) * 60);
  const hoursWorkedTag = document.getElementById('hoursWorkedTag');

  if (hoursWorked > 24) {
    hoursWorkedTag.innerHTML = `Permanencia: error, un trabajador no puede permanecer en el trabajo más de 24 horas.`;
    return;
  }

  hoursWorkedTag.innerHTML = `Permanencia: ${Math.floor(hoursWorked)}:${
    minutesWorked > 9 ? minutesWorked : '0' + minutesWorked
  }:00`;
}
