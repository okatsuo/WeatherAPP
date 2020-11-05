const key = 'B3GyxnOLCBAoRYIAjllg4tAmoskirQiw';

//pegar a informação da temperatura
const getWeather = async (id) => {
    const base = "http://dataservice.accuweather.com/currentconditions/v1/"
    const query = `${id}?apikey=${key}`;
    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
};


//pegar a informação da cidade 
const getCity = async (city) => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;
    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];   /*a api pega várias cidades que tem o nome 
                        parecido, isso força pegar a primeira cidade da lista*/

};

