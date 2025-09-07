export function formatDate(dateString, isLong) {
  return new Date(dateString).toLocaleDateString(
    "en-US",
    isLong
      ? { month: "long", day: "numeric", year: "numeric" } // July  10, 2024
      : { month: "short", day: "numeric" } // Jul 10
  );
}
