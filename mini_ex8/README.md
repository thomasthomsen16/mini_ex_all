![alt text](Scr_Mini_ex8.png)

https://rawgit.com/thomasthomsen16/mini_ex_all/master/mini_ex8/empty-example/index.html

### Make it rain

By Thomas Thomsen & Nanna Størup

#### Despriction of program

This program is about visualizing weather data, as one often sees in weather apps. This program specifically visualizes how much it rains in the city of Quibdó from Columbia. We have chosen this city, since rains about 300 days a year, which made it easier to actually visualize rain, since there would almost always be rain to visualize. 
   To do the above we have used the Openweather API. We have chosen this API because of a number reason: First of all, Daniel Shiffman have made some videos, where he uses the API. This made it easier for us to code something, since none of us had any experience working with APIs. Secondly, the documentation for API was quite easy to understand along with how to make the API call. We hoped, and was proven right, that this would make it easier to code something, that would work.
ualizes 

#### The proces of making the program

At first, we had a very hard time understanding how to build our program. Working with APIs was very new to us, so the whole process was very frustrating at times. Because of our inexperience we relied a lot on the video from Daniel Shiffman, where he uses the Openweather API, and Winnies code. The fact that the handling of data was asynchronous was at times very hard times to wrap my head around, since I have been used to the data input happen at the same time as all the other processes.
   One thing I found very frustrating with working this API, and APIs in general, was the fact how hard it can be to debug and find flaws/breakdown in the code when working with API. Console.log() only provides a very tiny part of the breakdown in code and we ended up playing detective quite a lot. This off course made the process very slow at times and we often fund us starring at the screen.
    One example of this was how we specified, what the program was supposed to load from the json file –  i.e. the rain data. In the documentation, they specify, that the path should read rain.3h. This was not true, since we had to acces via bracket notation [‘rain][‘3h]. This took us quite a long to time to figure out and severely halted our progress.
    Another frustrating thing about working with this API is the fact, that as of the moment of writing, the API doesn’t send any weather data and have therefor removed the path, [‘rain][‘3h], from the json file. This means, that the program doesn’t work, when there isn’t any rain or when the API doesn’t send data for rain. The developers themselves writes:

*”If you do not see some of the parameters in your API respond it means that these weather phenomena are just not happened for the time of measurement for the city or location chosen. Only really measured or calculated data is displayed in API respond.”*

One thing I would have preferred was, that the API just sent a value of zero instead, so that the API call still included the path for the rain data.


#### Question for further investigation

One thing I would like to investigate further, is how you can work around some of the limitation by the developers when using their API. They often restrict your access to specific things and these limitations is the manifestation of their view on the use data –  one might call it their ideology. This limit the possibilities in terms of what data to use and how to use – narrowing the scope of creativity. 
