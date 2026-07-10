export const adjustBookingDates = (
  startDateStr?: string,
  endDateStr?: string
): { startDate?: string; endDate?: string } => {
  if (!startDateStr || !endDateStr) {
    return { startDate: startDateStr, endDate: endDateStr };
  }

  const start = new Date(startDateStr);
  const end = new Date(endDateStr);

  start.setHours(0, 0, 0, 0);
  end.setHours(0, 0, 0, 0);

  if (start >= end) {
    const nextDay = new Date(start);
    nextDay.setDate(start.getDate() + 1);

    const formatDate = (date: Date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    };

    return {
      startDate: startDateStr,
      endDate: formatDate(nextDay)
    };
  }

  return { startDate: startDateStr, endDate: endDateStr };
};
