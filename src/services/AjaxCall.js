import axios from 'axios';

export function getAjaxCall(api, inputParamJSON, callbackFn) {
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

export function getAjaxDataCall(api, inputParamJSON, callbackFn) {
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

