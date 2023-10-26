# homeassistant-fe-tesla

This is an alpha / preview release.

This Home Assistant configuration allows you to control the functionality of your Telsa with a GUI that is similar to the mobile phone application.  It is a front end / tile for the brilliant intereface from <https://github.com/alandtse/tesla>

![Screenshot 2023-06-22 at 21 26 00](https://github.com/ds2000/homeassistant-fe-tesla/assets/10222737/adff06dd-176e-4c23-af94-f30e405cb222)

![Screenshot 2023-06-22 at 21 26 29](https://github.com/ds2000/homeassistant-fe-tesla/assets/10222737/af036517-a545-41d6-8263-9ddc2d58c8ec)

This is an early release, time is short so I will work on adding features and funtions when and as I can.  People are welcome to fork the code and tweak it too.

If you use this and like it then please: [<img src="/images/bmac.jpeg">](https://www.buymeacoffee.com/daveshaw301)

## Things to know

At present I only have the screen shots for a Red Model 3 (Left-hand drive).  I don't have any access to other Teslas so the user will need to screenshot and format the images as needed.  The images are stored under models/{3/y/x/s}/{colour} - feel free to copy the red model 3 folder and add new images in the appropriate place.

## To do list

1. Climate screen - Heated seat controls - there was an issue with state images that was proving a little tricky
2. Climate screen - changing the off button to on and illuminating when pressed
3. Climate screen - adding higher and lower icons to adjust temperature
4. Climate screen - Highlighting Vent icon when pressed and windows opened
5. Controls screen - Vented Window icon needs to light up when pressed and windows open
6. Controls screen - Adding padlock unlock button
7. Controls screen - Adding Frunk and Trunk open labels
8. Controls screen - Adding charging flap icon and changing the background state when opened
9. Controls screen - Adding PSI to toggle
10. Controls screen - Higher and Lower buttons to set the charge ampage.
11. Visuals - Rogue charging icon needs work
12. Visuals - some of the car images bounce around slightly when clicked, screenshots need redoing.
13. Review conditional yaml state code.  At the time of writing the state icons weren't working.  If this has been fixed I can rewrite a few things.

## Installation

To install you'll need a few pre-requistites.  These are:

1. Working Home Assistant
2. Working Telsa Add-on, this can be found here <https://github.com/alandtse/tesla>
3. Create 3 helpers.  Go to Settings/Devices & Services and click the Helper tab at the top.
    - Name: Tesla Charger Menu  | Type: Toggle | EntityID: input_boolean.tesla_charger_menu
    - Name: Tesla Climate Menu  | Type: Toggle | EntityID: input_boolean.tesla_climate_menu
    - Name: Tesla Controls Menu | Type: Toggle | EntityID: input_boolean.tesla_controls_menu
4. Install these card add-ons
    - stack-in-card <https://github.com/custom-cards/stack-in-card> | HACS search string: `Stack In Card`
    - slider-entity-row <https://github.com/thomasloven/lovelace-slider-entity-row> | HACS search string: `slider-entity-row`
5. Upload images to your Home Assistant Installation. I suggest putting the `Tesla` folder inside `/config/www/` (keep in mind that yaml configuration is case sensitive). I just use the <https://community.home-assistant.io/t/home-assistant-community-add-on-visual-studio-code/107863>
7. Add the Gotham font to the Dashboard Resources: <https://fonts.cdnfonts.com/css/gotham>. Go to Settings/Dashboards and click on the 3-dot menu at the top right.

Once you have the above all configured, fine-tune the yaml:
1. My car is called terrance, you can see this from in the entity names (eg: "button.**terrance**_force_data_update").  You need to find and replace these value with your car's name.
2. I have all the images in `/config/www/Tesla` which is at `/local/Tesla` for Home Assistant.  If you put them somewhere else then you'll need to change these values.

Now, you can add the yaml file to your dashboard.  I found it best to create a hidden dashboard and add any card to it.
From there you can edit the card, click the show code editor button in the bottom corner and paste it all in.

I'll try and make an installer for this at somepoint once enough images are collected, then the user can choose the car model and colour but I have a home renovation, 2 small children and a business to run, time is short.

I'll try and answer any questions too.
