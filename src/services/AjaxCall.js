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
    return error;
  });

}

export function getAjaxDataCall(api, inputParamJSON, callbackFn) {

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
    return error;
  });

}

