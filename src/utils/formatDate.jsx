export function formatDate(dateString, type = "short") {
  const date = new Date(dateString);

  if (type === "short") {
    // Sep 10
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  }

  if (type === "long") {
    // Sep 10, 2024
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  return dateString; // fallback
}
