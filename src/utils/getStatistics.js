function getStatistics (data, ubs){ 
	const city = ubs.slice(-3)
	const [currentCity, ] = data.filter(item => Object.keys(item) == city)
	const [currentUBS, ] = Object.values(currentCity)
	var ubs = ubs
	var bool = false
	
	if(ubs.length > 15){
		bool = true
		ubs = 'UBS 05 REC'
	}

	console.log(ubs)
	if(currentUBS[ubs]){
		var {casos, comorb, obito} = currentUBS[ubs]
	} else {
		var {casos, comorb, obito} = 0
	}
	

	if(bool === true){
		casos += currentUBS['UBS 06 REC'].casos + currentUBS['UBS 09 REC'].casos
		comorb += currentUBS['UBS 06 REC'].comorb + currentUBS['UBS 09 REC'].comorb
		obito += currentUBS['UBS 06 REC'].obito + currentUBS['UBS 09 REC'].obito
		ubs = 'UBS 05, 06, 09 REC'
	} 
	
	return {ubs, casos, comorb, obito}
  }

export default getStatistics;
