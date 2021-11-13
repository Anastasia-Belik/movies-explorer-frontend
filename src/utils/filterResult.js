export default function filterResult(data, keyword) {
  return data.filter(item => item.nameRU.toLowerCase().includes(keyword.toLowerCase()));
}
