class Forecast{
    constructor(){
        this.key = '3dbw9FlJbqeFXs7MRkjtwHcPDzA0GEd7';
        this.WeatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/';
        this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    }
   async updateCity(city){
    const cityDetails = await this.getCity(city);
    const weather = await this.getWeather(cityDetails.Key);
    return { cityDetails, weather };
  }
    async getWeather(id){
        const query = `${id}?apikey=${this.key}`;
        const response = await fetch(this.WeatherURI + query);
        const data = await response.json();
        return data[0];
    }
    async getCity(city){
        const query = `?apikey=${this.key}&q=${city}`;
        const response = await fetch(this.cityURI+query);
        const data = await response.json();
        return data[0];
    }
}



