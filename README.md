# 5-day-weatther-forecast
The 5-day weather forecast

## Description

A weather app that requires the user to search for a city and returns the current weather for the city as well as the 5-day forecast.

## Table of Contents

- [Project-Links](#Project-Links)
- [Usage](#Usage)
- [Screenshots](#Screenshots)
- [Credits](#Credits)
- [License](#License)
- [Tests](#Tests)

## Project-Links

 - [5-day-weather-forecast](https://hvansalisbury.github.io/5-day-weather-forecast/)
 - [Github-Repository](https://github.com/hvansalisbury/5-day-weather-forecast)

## Usage

When you load the page, you will see a input box with a search button. Type in the name of the city and either press enter or click on the button.

If the city can be found on open weather, then the current weather for that city will appear at the top. You should see the date, name of city, an icon, weather description, high and low temperature, wind speed, and humidity.

Underneath, you will see the 5-day forecast with dates, weather icon, midday temperature, wind speed, and humidity.

After you complete a search, a new button will appear underneath the search button with the name of your search which will allow you to access the weather for that city. Additionally, if you search for a city already on the list, it will not create a new button. If you refresh the page, the 10 most recent searches should appear as buttons underneath the search button.

The page is also designed to be responsive, so try it out on different screen sizes and mobile phone. 

## Screenshots

![Presearch w-o history](./Assets/images/presearch-previous-1.png)
![Presearch w history](./Assets/images/presearch-previous-2.png)
![Search result](./Assets/images/search-result.png)
![Responsive Resize 1](./Assets/images/responsive-resize1.png)
![Responsive Resize 2](./Assets/images/responsive-resize2.png)
![Responsive Resize 3](./Assets/images/responsive-resize3.png)

## Credits

 - [Github](https://github.com/hvansalisbury/Coding-Quiz-Challenge)
 - [Stack Overflow](https://stackoverflow.com)
 - [W3 Schools](https://www.w3schools.com/)
 - [Mozilla Developer Network](https://developer.mozilla.org/en-US/)
 - [Geeks for Geeks](https://www.geeksforgeeks.org)
 - The terrific instructor and TAs at the Rutgers Coding Bootcamp.

## License

 - [MIT License](https://choosealicense.com/licenses/mit/)

## Tests

The search will only work if you type in a city it recognizes. If you type in gibberish or leave the text input box blank, you will receive an alert telling you to try again. Sometimes, the search will return a very similarly spelled city, i.e. banana. The page also should only populate with a successful search, otherwise the page will remain only an input box and button(s).