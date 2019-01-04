import React, { Component } from "react";
class Weather extends Component {
  render() {
    const { weather, error } = this.props;

    return (

      <div className="weather_details_section">
      <div className="error">
      {error && <p className="weather_error">{error}</p>}
      </div>
        {weather.length !== 0 && (
          <div className="weather_details">
            <div className="weather_basic_deatils">
              <ul className="weather_basic_deatils_list">
                <li className="weather_basic_deatils_list_item">
                  <span>City: </span> {weather.city.name}
                </li>
                <li className="weather_basic_deatils_list_item">
                  <span>Country: </span> {weather.city.country}
                </li>
                <li className="weather_basic_deatils_list_item">
                  <span>Population: </span>
                  {weather.city.population}
                </li>
                <li className="weather_basic_deatils_list_item">
                  <span>Latitude: </span> {weather.city.coord.lat}
                </li>
                <li className="weather_basic_deatils_list_item">
                  <span>Longitude: </span>
                  {weather.city.coord.lon}
                </li>
              </ul>
            </div>
            {/*
            <div className="weather_details_buttons">
              <button className="weather_details_button" onClick = {this.checkState}>
                {weather.list[0].dt_txt.substr(5, 2)}/
                {weather.list[0].dt_txt.substr(8, 2)}
              </button>
              <button className="weather_details_button">
                {weather.list[7].dt_txt.substr(5, 2)}/
                {weather.list[7].dt_txt.substr(8, 2)}
              </button>
              <button className="weather_details_button">
                {weather.list[15].dt_txt.substr(5, 2)}/
                {weather.list[15].dt_txt.substr(8, 2)}
              </button>
              <button className="weather_details_button">
                {weather.list[23].dt_txt.substr(5, 2)}/
                {weather.list[23].dt_txt.substr(8, 2)}
              </button>
              <button className="weather_details_button">
                {weather.list[37].dt_txt.substr(5, 2)}/
                {weather.list[37].dt_txt.substr(8, 2)}
              </button>
            </div>
            */}
            <div className="weather_state_details" />
            {weather.list.map(current => {
              return (
                <div className="weather_details_now">
                  <h2 className="weather_date">
                    <span>Date: </span>
                    {current.dt_txt.substr(0, 10)}
                  </h2>
                  <h3 className="weather_time">
                    <span>Time: </span>
                    {current.dt_txt.substr(10, 9)}
                  </h3>
                  <ul className="weather_details_now_list">
                    <li className="weather_details_now_list_item">
                      <span>Temperature:</span>
                      {current.main.temp}
                    </li>
                    <li className="weather_details_now_list_item">
                      <span>Minimum Temperature: </span>
                      {current.main.temp_min}
                    </li>
                    <li className="weather_details_now_list_item">
                      <span>Maximum Temperature: </span>
                      {current.main.temp_max}
                    </li>
                    <li className="weather_details_now_list_item">
                      <span>Pressure: </span>
                      {current.main.pressure}
                    </li>
                    <li className="weather_details_now_list_item">
                      <span>Humidity: </span>
                      {current.main.humidity}
                    </li>

                    <li className="weather_details_now_list_item">
                      <span>Wind Speed: </span>
                      {current.wind.speed}
                    </li>
                    <li className="weather_details_now_list_item">
                      <span>Wind Deg: </span>
                      {current.wind.deg}
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default Weather;
