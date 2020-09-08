function getStatistics (data, ubs){
	console.log(ubs)
	const city = ubs.slice(-3)
	const [currentCity, ] = data.filter(item => Object.keys(item) == city)
	console.log(currentCity)
	const [currentUBS, ] = Object.values(currentCity)
	const { casos, comorb, obito}  = currentUBS[ubs]
	return {casos, comorb, obito}
  }

export default getStatistics;
