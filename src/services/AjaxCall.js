import axios from 'axios';

export function getAjaxCall(api, inputParamJSON, callbackFn) {

const options = {
    method: 'GET',
    url: 'https://fixer-fixer-currency-v1.p.rapidapi.com/convert',
    params: {from: 'USD', to: 'ILS', amount: '12'},
    headers: {
        "x-rapidapi-key": "56bb86f2a2msh86183c17fc28025p1a3601jsnf33e46f129cb",
	"x-rapidapi-host": "fixer-fixer-currency-v1.p.rapidapi.com",
	"useQueryString": true
    }
  };

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
   
}