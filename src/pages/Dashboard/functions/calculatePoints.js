function calculateTimeDifference(dayOne, dayTwo) {
  const secondsOfADay = 24 * 60 * 60 * 1000;

  const timeDiferenceInSeconds = dayOne - dayTwo;

  let differenceInDays = timeDiferenceInSeconds / secondsOfADay;
  differenceInDays = Math.abs(differenceInDays);
  differenceInDays = Math.round(differenceInDays);

  return differenceInDays;
}

function isLessThanAWeek(date, lineValue) {
  const dayOne = new Date('2020-03-01').getTime();
  const dayTwo = new Date(date).getTime();

  const timeDifference = calculateTimeDifference(dayOne, dayTwo);
  const pointsOfAWeek = lineValue * 7;

  return timeDifference < pointsOfAWeek;
}

function removeNulls(array) {
  const filteredArray = array.map(item => item !== null);
  return filteredArray;
}

function calculatePoints(data, lineValue) {
  let currentPoints = data.map(({ date, long, lat }) => {
    if (isLessThanAWeek(date, lineValue)) {
      return { date, long, lat };
    }
    return null;
  });
  currentPoints = removeNulls(currentPoints);
  return currentPoints;
}

export default calculatePoints;
