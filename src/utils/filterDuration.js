export default function filterDuration(data, duration) {
  return data.filter(item => item.duration < duration);
}
