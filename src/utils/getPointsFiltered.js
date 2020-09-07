function getPointsFiltered (data){
  const allPoints = []
  data.forEach(item => {
      for (const [ , value] of Object.entries(item)){
        Object.values(value).map(({pontos}) => {
          allPoints.push(...pontos)
        })
      }
  })
  return allPoints
}

export default getPointsFiltered;
