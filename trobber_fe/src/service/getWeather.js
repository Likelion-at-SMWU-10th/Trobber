import axios from "axios";

class GetWeather {
  constructor() {
    this.countries = ["Tokyo", "Paris", "New York", "Beijing", "London"];
    this.weather = ["", "", "", "", ""];
  }

  getCurrentWeather() {
    for (let i = 0; i < this.countries.length; i++) {
      // TODO: API KEY 필요
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.countries[i]}&appid={YOUR_API_KEY}`;
      axios
        .get(url)
        .then((response) => {
          this.weather[i] = response.data.weather[0].main;
        })
        .catch((error) => {
          console.log(`failed get weather: ${this.countries[i]}`);
        });
    }
  }
}

export default GetWeather;
