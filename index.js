const apiKey = '';
const searchURL = 'https://developer.nps.gov/api/v1/parks';




function getResults(stateCode, maxResults){
  //define the paramater object that we will format correctly
  const params = {
    state: stateCode,
    max: maxResults,
    key: apiKey
  };

  //call the format function so we can turn key/values to a string
  const paramString= formatQueryParam(params);
  //append the paramString to the given url 
  const url = searchURL + '?' + paramString;

}

function formatQueryParam(){

}

function makePage(){
  $('form').on('submit', '#state', event => {
    event.preventDefault;
    const stateCode = $('#state').val();
    const maxResults = $('#max-num').val();

    //call the function to create param and url
    getResults(stateCode, maxResults);
  });
}