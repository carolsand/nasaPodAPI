import { fetch } from 'cross-fetch';
import { sequelize } from "./database";

const planetaryUrl = new URL(process.env.URL || 'https://api.nasa.gov/planetary/apod');
const api_key = process.env.API_KEY;


async function getImage(url) {
  const response = await fetch(url);

  if (response.status !== 200) {
      console.error(`Error while fetching image: ${response.statusText}`);
      // TODO: Manage errors
      return null;
  }

  return await response.json();
};


/* sample result *
{
  copyright: 'Marco Lorenzi',
  date: '2022-01-29',
  explanation: 'Named for the southern constellation ...',
  hdurl: 'https://apod.nasa.gov/apod/image/2201/FornaxC1_FB.jpg',
  media_type: 'image',
  service_version: 'v1',
  title: 'The Fornax Cluster of Galaxies',
  url: 'https://apod.nasa.gov/apod/image/2201/FornaxC1_FB1024.jpg'
}
* */

export default async function getPod(date) {
  const db_pod = await sequelize.models.pod.findByPk(date);
  if (db_pod) {
    return db_pod;
  }

  var url = new URL(planetaryUrl);
  if (date) {
    url.searchParams.append('date', date);
  }
  url.searchParams.append('api_key', api_key);
  const result = await getImage(url);
  if (!result) {
    return null;
  }

  await sequelize.models.pod.create(result);
  return result
};
