function getStatistics (data, ubs ){
  const statistics = []

  const [ name, number, city ] = ubs.split(' ')

  console.log(data[city])

  data.forEach(item => {
      for (const [ , value] of Object.entries(item)){
        Object.values(value).map(({casos, obitos, cura, comorb}) => {
          statistics.push({casos, obitos, cura, comorb})
        })
      }
  })
  return statistics
}

export default getStatistics;
