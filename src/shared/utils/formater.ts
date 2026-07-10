export const formatBookingRange = (
  startDateStr?: string | undefined,
  endDateStr?: string | undefined
): string => {
  if (!startDateStr || !endDateStr) return 'Заполните поля';

  const start = new Date(startDateStr);
  const end = new Date(endDateStr);

  const formatter = new Intl.DateTimeFormat('ru-RU', {
    day: 'numeric',
    month: 'long'
  });

  return `${formatter.format(start)} — ${formatter.format(end)}`;
};

export const formatFIO = (
  lastName: string | undefined,
  name: string | undefined,
  middleName: string | undefined
) => {
  if (!lastName || !name || !middleName) return 'Заполните поля';

  return `${lastName} ${name} ${middleName}`;
};

export const formatDate = (date: string | undefined) => {
  if (!date) return 'Заполните поле';

  const mass = date.split('-');

  return `${mass[2]}.${mass[1]}.${mass[0]}`;
};
