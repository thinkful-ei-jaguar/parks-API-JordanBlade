const apiKey = 'lrVhoFZacyq8A8SseTV0n5u4TUB4PufIHlovdnZ0';
const searchURL = 'https://developer.nps.gov/api/v1/parks?';




function getResults(stateCode, maxResults){
  //define the paramater object that we will format correctly
  const params = {
    stateCode: stateCode,
    //max: maxResults,
    api_key: apiKey
  };

  //call the format function so we can turn key/values to a string
  const paramString= formatQueryParam(params);
  //append the paramString to the given url 
  const url = searchURL + paramString;

  fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(responseJson => console.log(responseJson))
    .catch(error => console.log('error occurerrerred'));

}

function formatQueryParam(params){
  const queryItems = Object.keys(params)
    .map(key => `${key}=${params[key]}`);
  return queryItems.join('&');
}

function makePage(){
  $('form').submit (event => {
    event.preventDefault();
    console.log('event handler working');
    const stateCode = $('#state').val();
    const maxResults = $('#max-num').val();

    //call the function to create param and url
    getResults(stateCode, maxResults);
  });
}

$(makePage);