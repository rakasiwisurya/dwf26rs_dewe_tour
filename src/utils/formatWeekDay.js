export default function formatWeekDay(date) {
  const newDate = date ? new Date(date) : new Date();
  return Intl.DateTimeFormat("id-ID", {
    weekday: "long",
  }).format(newDate);
}
