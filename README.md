Assignment 1 - Hello World: Basic Deployment w/ Git, GitHub, Render
===

This project shows ...

## Technical Achievements
**Styled page with CSS**: Added rules for the p, li, and a selectors...
Rules:
1. Implemented box shadows to create a shadow on my expereince boxes
    - used this link to learn about it:  https://www.w3schools.com/css/css3_shadows_box.asp
2. Added a button and a button:hover that changes color when hovered over and when you click the button, the javascript animation will play
    - used this link to learn about it:  https://www.w3schools.com/css/css3_buttons.asp 
3. Added emojis using the hexadecimal values (ex. &#x1F338) and also pasting the emojis themselves into the file
    - used this link to learn about it:  https://www.w3schools.com/html/html_emojis.asp
4. Added rounded corners to my boxes using .rcorners to have my lists be in these boxes with customized padding, border radius, and display
5. Added a layout container with custom background color, height, width, and overflow: hidden

**Added simple JavaScript animation**:
    - (html) used this link to learn about it:  https://www.w3schools.com/js/js_htmldom_animate.asp
- used a container <div id="container"> that acts like a stage, and an emoji element <div id="emoji" class="emoji">🍂</div> inside it. The button calls myMove() when clicked.
- (css) used overflow: hidden so emoji only shows up when button clicked
- used position: absolute; so changing its top and left actually moves it
- the animation itself works with myMove that makes the emoji visible (display: block) with setInterval(...)
- on each tick of the timer, the position variable increases and style.top and style.left which slides the emoji diagonally.
- the emoji then goes off the container view and the animation ends
- **this animation was taken from the w3schools page to move something diagonally across the screen

**Experiemnted with HTML tags**:
    - used this link to learn about different css/html tags:  https://www.w3schools.com/html/html_css.asp 
Tags:
1. Added link to my resume using the href tag
2. Added header with my name and defined it in my style section
3. Added footer to end of page and definited it in my style section (header, footer {})
4. Added an image of me from IQP
5. Used the exisitng list and added a button feature

## Design Achievements
**Used the Roboto Font from Google Fonts**: I used Montserrat as the font for the primary copy text in my site.
    - link to font:  https://fonts.google.com/specimen/Montserrat 


**AI Usage**
I used Chat GPT to explain concepts used in this assignment, but did not have it write any code for me.  AI specifically aided me in understanding how CSS / HTML tags work, the general format of the document, and helped me debug when my image was not showing up on my webpage.