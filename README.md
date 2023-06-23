# homeassistant-fe-tesla
This is an alpha / preview release.

This Home Assistant configuration allows you to control the functionality of your Telsa with a GUI that is similar to the mobile phone application.

![Screenshot 2023-06-22 at 21 26 00](https://github.com/ds2000/homeassistant-fe-tesla/assets/10222737/adff06dd-176e-4c23-af94-f30e405cb222)

![Screenshot 2023-06-22 at 21 26 29](https://github.com/ds2000/homeassistant-fe-tesla/assets/10222737/af036517-a545-41d6-8263-9ddc2d58c8ec)


This is an early release, time is short so I will work on adding features and funtions when and as I can.  People are welcome to fork the code and tweak it too.

If you use this and like it then please: [<img src="/images/bmac.jpeg">](https://www.buymeacoffee.com/daveshaw301)

### Things to know
At present I only have the screen shots for a Red Model 3.  I don't have any access to other Teslas so the user will need to screenshot and format the images as needed.  The images are stored under models/{3/y/x/s}/{colour} - feel free to copy the red model 3 folder and add new images in the appropriate place.

### To do list
1) Climate screen - Heated seat controls - there was an issue with state images that was proving a little tricky 
2) Climate screen - changing the off button to on and illuminating when pressed
3) Climate screen - adding higher and lower icons to adjust temperature
4) Climate screen - Highlighting Vent icon when pressed and windows opened
5) Controls screen - Vented Window icon needs to light up when pressed and windows open
6) Controls screen - Adding padlock unlock button
7) Controls screen - Adding Frunk and Trunk open labels
8) Controls screen - Adding charging flap icon and changing the background state when opened
9) Controls screen - Adding PSI to toggle
10) Controls screen - Higher and Lower buttons to set the charge ampage.
11) Visuals - Rogue charging icon needs work
12) Visuals - some of the car images bounce around slightly when clicked, screenshots need redoing.
13) Review conditional yaml state code.  At the time of writing the state icons weren't working.  If this has been fixed I can rewrite a few things.

# Installation
To install you'll need a few pre-requistites.  These are:
1) Working home assistant
2) Working Telsa Add-on, this can be found here https://github.com/alandtse/tesla
3) These card add-ons
   a) stack-in-card https://github.com/custom-cards/stack-in-card
   b) slider-entity-row https://github.com/thomasloven/lovelace-slider-entity-row
4) A way to upload images to your Home Assistant Installation.  I just use the https://community.home-assistant.io/t/home-assistant-community-add-on-visual-studio-code/107863

Once you have the above all configured, you can add the yaml file to your dashboard.  I found it best to create a hidden dashboard and add any card to it.
From there you can edit the card, click the show code editor button in the bottom corner and paste it all in.

You can see from my yaml that I have all the images in /local/Tesla.  If you put them somewhere else then you'll need to change these values.
My car is called terrance, you can see this from the "button.terrance_force_data_update" entities.  You need to find and replace these values.

I'll try and make an installer for this at somepoint once enough images are collected, then the user can choose the car model and colour but I have a home renovation, 2 small children and a business to run, time is short.

I'll try and answer any questions too.

