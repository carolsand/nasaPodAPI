const url = 'https://api.nasa.gov/index.html';

export function getAllNasaPicts() {
  return(
    fetch(url, { mode: 'cors'})
    .then(res => res.json())
  )};

export async function getPilots(urls) {
  const promises = urls.map(url => fetch(url).then(res => res.json()));
  const nasaObjects = await Promise.all(promises);
  return nasaObjects;
}