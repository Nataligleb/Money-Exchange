module.exports = function makeExchange(currency) {
	if(currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
	if(currency === 0) return {}; 
	const result = {};
	const arrcoin = [{name:'H', coin:50}, {name:'Q', coin:25}, {name:'D', coin:10}, {name:'N', coin:5}, {name:'P', coin:1}];

	for(let i = 0; currency>0; i++){
		let thiscoin = arrcoin[i].coin;
		let thiscoiname = arrcoin[i].name;
		if(currency >= thiscoin){
			result[thiscoiname] = Math.floor(currency/thiscoin);
			currency = currency % thiscoin;
		}
	}
	return result;
}