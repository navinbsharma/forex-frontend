import axios from 'axios';

export function getAjaxCall(api, inputParamJSON, callbackFn) {
  const options = {
    method: 'GET',
    url: api,
    params: { q: inputParamJSON.q, compact: 'ultra', apiKey: '33fc73cc6d46c586fb5a' },
  };

  axios.request(options).then(function (response) {
    if (callbackFn) {
      callbackFn(response, null)
    } else {
      return response.data
    }
  }).catch(function (error) {
    console.error(error);
  });

}

export function getAjaxDataCall(api, inputParamJSON, callbackFn) {
  console.log("HLO")
  console.log(inputParamJSON)

  const options = {
    method: 'GET',
    url: api,
    params: inputParamJSON,
  };

  axios.request(options).then(function (response) {
    if (callbackFn) {
      callbackFn(response, null)
    } else {
      return response.data
    }
  }).catch(function (error) {
    console.error(error);
  });

}

