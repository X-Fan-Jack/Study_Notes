This project is a course work for CASA03, which also calls Individual Visualisation project.
The project is based on HTML and JavaScript technologies, using third-party libraries such as Echart, JQuery, Bootstrap, Mapbox, etc. to do data visualization. 
This project(Population Monitor Dashboard of London Tube) shows the total daily population flow in London Tube System.
Users can navigate London's subway lines through a map window, while clicking through to see the headcount at each station. You can also use the toolbar in the top right corner to see the changes in the number of people on each line throughout the day, the top five stations in terms of footfall, the real-time station footfall ranking, and a heat map with a summary of the footfall. Users can also reset the map status by using the reset button.
Function Details:
1. The map that the user sees when opening the web page shows the London Tube lines and stations. The user can click on the station with the left mouse button to get the name of the station and the number of people. Zooming can also be controlled by the mouse wheel or the zoom control in the lower right corner of the webpage.
2. The toolbar in the upper right corner controls the opening or closing of the corresponding child window. 
	1. Line Chart button will open/close the Population changing line chart of each Line in one day. The user can control the number of line chart elements displayed by clicking on the legend. The user can also move the mouse to find out the number of people on the line at any point in the day.
	2. Population rank table button will open/close the Top5 Stations with the most population. The user can control the automatic zooming of the map to the station of interest by clicking on the corresponding row of the table.
	3. Real-time poopulation button will open/close the bar chart shows the population rank of each line in real time.
	4. Heat map button will open/close the layer which shows the population heat map based on the station.
	5. Info button will open/close the information subwindow. 
	6. Reset button will rest the map if user change the scale or location of the map.
The data source is London TFL(http://crowding.data.tfl.gov.uk/). 
The project has been uploaded to GitHub: 