![alt text](Scr_mini_ex5.png)

https://rawgit.com/thomasthomsen16/mini_ex_all/master/mini_ex5/empty-example/index.html

Describe how does your game/game object works?

For this mini ex I wanted to create something that resembled a very simple game. I settled on space game taking inspiration from old arcade games – this included the overall aesthetic such as the font for the title, the music and the moving lines for the ‘space’ effect. 
   The goal of the games is to control a spaceship and avoid the incoming meteors. I originally wanted to include a collision detector, when you hit a meteor, but I didn’t have the time to familiarize myself with the collision library.
   The spaceship moves around by following the mouse. The only to parameters are color and the size, which I also use to construct an engine for the spaceship. The meteors move by constantly adding a speed variable to the y-position for the meteors. 

Describe how you program the objects and their related attributes and methods in your game.

I decided that the spaceship should be ‘static’ in the sense, that the flying effect is achieved by having a series of lines flying by the spaceship instead. I was easy then to program the class for the spaceship since I only needed to move it around the screen. The class consists of constructor with two parameters: Color and size. The size is the length of the sides for spaceship. The spaceship is displayed in a display () function, where the first x- and y-coordinate follows the mouse x and y – essentially making it possible to move the spaceship around. The other coordinators are just the mouse x- and y-position plus the size variable. I use the same method for the engine, where the coordinates for the rect () is a combination of the mouse x- and y-position and the size variable.
    For the meteors I played around quite a bit for the shape. I settled on a simple ellipse, since it was the easiest in the end. The constructor for meteors, as the spaceship, has color and size variable. The size variable sets the diameter of the ellipse. The constructor includes two variables for the x and y position, that decides the position for the meteor object. The constructor also has a speed variable, which sets the speed of the meteors. This is used in a function called move (). The moving effect is achieved by adding the speed variable to the y position.

Based on Shiftman's videos, Lee's text and in-class lecture, what are the characteristics of object-oriented programming?

   The starting point for object-oriented programming is the class concept. This can be conceptualized as the blueprint or template for the object itself. In the class you describe all the characteristics of the object and possible behavior – in my case color, size and so on. This make it possible to manipulate the objects in several different ways. Another essential concept of object-oriented programmed is the use of encapsulation. Encapsulation is the process of hiding information and only presenting the essential information. How the object itself functions is hidden and only the parameters, that can be manipulated are presented, which reduces complexity, since the programmer doesn’t have to think about the overall architecture of the object. 
Extend/connect your game project to wider digital culture context, can you think of a digital example and describe how complex details and operations are being abstracted and encapsulated?

The best example I can think comes from Facebook and how it perceives users. We as use input incredible amounts of data all the time, when using Facebook. Facebook uses this data make a profile of us, that fits with predetermined models from Facebook itself. This is a process of abstracting the user data and encapsulating it in profiles, that can be sold and used in several different ways – such as marketing. 
