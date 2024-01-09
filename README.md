# React Weather App

## Description

This React Weather App is an interactive web application that provides real-time weather information. It allows users to select their country and city to view current weather conditions. The app automatically fetches the user's location using their IP address and displays the relevant weather data. It features a clean, user-friendly interface with dynamic weather updates.

## Technologies Used

* **React:** A JavaScript library for building user interfaces.
* **Axios:** A promise-based HTTP client for making HTTP requests.
* **react-toastify:** Used for displaying elegant notifications.
* **Font Awesome Icons:** For adding visually appealing icons.
* **CSS:** For styling the application.
* **OpenWeatherMap API:** To fetch real-time weather data.

## Setup and Installation

1. Clone the repository:
```bash
  $ git clone https://github.com/your-username/weather_react.git
```
2. Navigate to the project directory:
```bash
  $ cd your-repo-name
```
3. Install dependencies:
```bash
  $ npm install
```
4. Set up environment variables:

  * Create a `.env` file in the root directory.
  * Add your OpenWeatherMap API key (You may have to create one first (https://openweathermap.org/)):
```javascript
  REACT_APP_WEATHER_API_KEY=your_api_key
```
5. Run the app:
```bash
  $ npm start
```
This runs the app in development mode. Open http://localhost:3000 to view it in the browser.

## Images

![Image 09-01-2024 at 11 17](https://github.com/GoWebMe2020/weather_react/assets/63963827/cadc4e6c-3419-4137-9c83-a8c2c4429fdd)

## Usage

* On initial load, the app attempts to detect your location and display the weather for your city.
* You can change the location by selecting a country and a city from the dropdown lists.
* The app will display the current temperature, weather conditions, wind speed, and more.

## Contributing

* Contributions, issues, and feature requests are welcome. Feel free to check issues page for open issues or to open a new issue.

## License

* Distributed under the MIT License. See LICENSE for more information.
