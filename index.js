const apiKey = 'lrVhoFZacyq8A8SseTV0n5u4TUB4PufIHlovdnZ0';
const searchURL = 'https://developer.nps.gov/api/v1/parks?';




function getResults(stateCode, maxResults){
  //define the paramater object that we will format correctly
  const params = {
    stateCode: stateCode,
    limit: maxResults,
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
    .then(responseJson => {
      console.log(responseJson);
      displayResults(responseJson);})
    .catch(error => {console.log('error occurerrerred');});


}

function displayResults(responseJson) {
  console.log('displayResults is firing');
  //Need Full name, description, website url, and park's irl address
  $('.results').empty();
  
  for (let i = 0; responseJson.data.length; i++) {
    console.log(`${responseJson.data[i].fullName}`);
    $('ul').append(`<li>Park Name: <a href='${responseJson.data[i].url}'>${responseJson.data[i].fullName}</a>
    <p>Description: ${responseJson.data[i].description}</p>
    
    
    
    </li>
    `);

  }


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