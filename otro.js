function getRemainingDaysForBirthday(dateObj) {
  const now = new Date();

  const today = {
    month: now.getMonth(),
    date: now.getDate(),
    year: now.getFullYear(),
  };

  const birthday = {
    month: dateObj.getMonth(),
    date: dateObj.getDate(),
    year: undefined,
  };

  const remaining = {
    month: birthday.month - today.month,
    date: birthday.date - today.date,
  };

  const monthIsOver = remaining.month < 0;

  const dateIsOver = remaining.date < 0;

  // const birthdayIsOver = monthIsOver || (remaining.month === 0 && dateIsOver)
  const monthsLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (monthIsOver) {
    remaining.month = 11 + remaining.month;
  }

  if (dateIsOver) {
    remaining.month -= 1;
    remaining.date = monthsLength[today.month] + remaining.date;
  }

  const birthdayIsToday = remaining.month === 0 && remaining.date === 0;

  if (birthdayIsToday) {
    return;
  }

  return birthday;
}
