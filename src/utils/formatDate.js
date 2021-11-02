export default function formatDate(date) {
  const newDate = date ? new Date(date) : new Date();
  return Intl.DateTimeFormat("id-ID", {
    dateStyle: "long",
  }).format(newDate);
}
