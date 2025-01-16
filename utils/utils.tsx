export function dateSort(a: { date: string }, b: { date: string }) {
  var dateA = new Date(a.date).getTime();
  var dateB = new Date(b.date).getTime();
  return dateB - dateA;
}

export function prioritySort(a: { priority: number }, b: { priority: number }) {
  return b.priority - a.priority;
}
