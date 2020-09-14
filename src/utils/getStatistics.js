function getStatistics(data, actualUBS) {
  const city = actualUBS.slice(-3);
  const [currentCity] = data.filter(item => Object.keys(item) == city);
  const [currentUBS] = Object.values(currentCity);

  console.log(actualUBS);
  console.log(currentUBS);

  // if (ubs.length > 15) {
  //   bool = true;
  //   ubs = 'UBS 05 REC';
  // }
  // if (currentUBS[ubs]) {
  //   const { casos, comorb, obito } = currentUBS[ubs];
  // } else {
  //   const { casos, comorb, obito } = 0;
  // }

  // if (bool === true) {
  //   casos += currentUBS['UBS 06 REC'].casos + currentUBS['UBS 09 REC'].casos;
  //   comorb += currentUBS['UBS 06 REC'].comorb + currentUBS['UBS 09 REC'].comorb;
  //   obito += currentUBS['UBS 06 REC'].obito + currentUBS['UBS 09 REC'].obito;
  //   ubs = 'UBS 05, 06, 09 REC';
  // }

  if (actualUBS === 'UBS 05, UBS 06 e UBS 09 REC') {
    const dataFromUBS = currentUBS['UBS 05 REC'];

    dataFromUBS.casos +=
      currentUBS['UBS 06 REC'].casos + currentUBS['UBS 09 REC'].casos;
    dataFromUBS.comorb +=
      currentUBS['UBS 06 REC'].comorb + currentUBS['UBS 09 REC'].comorb;
    dataFromUBS.obito +=
      currentUBS['UBS 06 REC'].obito + currentUBS['UBS 09 REC'].obito;

    const ubs = 'UBS 05, UBS 06 e UBS 09 REC';

    const { casos, comorb, obito } = dataFromUBS;
    return { ubs, casos, comorb, obito };
  }

  const { ubs, casos, comorb, obito } = currentUBS[actualUBS];
  return { ubs, casos, comorb, obito };
}

export default getStatistics;
