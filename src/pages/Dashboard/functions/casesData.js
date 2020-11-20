import getPointsFiltered from '../../../utils/getPointsFiltered';

export default function getFilteredData(casesData) {
  let dataFiltered = getPointsFiltered(casesData);
  dataFiltered = dataFiltered.map(({ lat, long, data: date }) => ({
    lat,
    long,
    date,
  }));

  return dataFiltered;
}
