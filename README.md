Ceci Herriman
https://a1-ceciherriman.onrender.com/

This project is a simple custom HTML/CSS page displaying information about myself. It features information about my educational, technical, and professional background. It is custom-styled by me, and reflects a custom color palette that was inspired by a public palette found on color.adobe.com. All content and styling is done within index.html. It also features a JavaScript animation that plays when you press Enter and a hidden feature when you press the space bar.

I used chatgpt.com once in this project to help me understand why my footer was not sticking to the bottom of my page. I referenced w3schools.com for all other technical needs.

## Technical Achievements
- **Styled page with CSS**: I added rules for the document body, table, th, td, title (h1), subtitle (h2), footer, text, and text backgrounds. 

The body styling added a background to the entire page. I also added left padding so that all of my text, images, etc. were not touching the side of the window. My table sizing was difficult as I wanted it to have a specific layout, size, and padding. Border-spacing was used to move the table farther away from the left and bottom border of the green text background. I made separate styling for the th element because I wanted to have the table headers be slightly larger. I added left padding to both elements to move the table inwards, and bottom padding to each to space things out nicely. 

I also had a challenging time styling both the title and subtitle, especially when creating the borders. I used border-style to add a dotted and solid line design, but it originally extended across the screen. To fix this, I set the width as fix-content with a padding to add a gap between the text and border. I also played with the border width field to make the horizontal lines thicker than the vertical ones. 

I used a class rule for the Roboto Mono font because I wanted to add a drop shadow to the text with one of my secondary colors from my color palette. To do this, I used text-shadow where I specified how I wanted my shadow to look and what color it would have. I also took this opportunity to give it a large font weight to make the design pop more. 

I added the text-background class rule to create an additional colored background to highlight the different text sections. I used this class for divs wrapping each text section. 

Styling the footer and making it stick also took some time to figure out. I used the position, left, bottom, and width fields to ensure that the footer stayed fixed at the bottom of the screen and stretched the entire way across. Additionally, when adding two lines of text to the footer, they stacked on top of each other. I used the display flex feature to have each text element be placed next to each other. I needed to use justify-content and align-items and set them to center to ensure that both text elements were centered along both axis. Finally, I used gap to add spacing between the text elements. 

- **Added a JavaScript Animation**: I added a custom JavaScript animation that spins my picture when the user presses Enter. In my script tag, there is an event listener that listens for when a key is pressed. If the Enter key is pressed, then the script will change my image's style transform field to a new rotation value in increasing steps, giving the spinning animation. Once it has rotated, the process stops. I also added another feature where the background color changes every time the user presses Space. It loops through a list of colors from my color palette and picks the next one for each key press. 

- **Used Other Semantic HTML Tags**: I added an image, link, table, footer, and figure caption. 

Adding an image with **img** was harder than expected as I realized that I needed to add the image to the server.js file in order for it to load. I also had to take some time experimenting with the width and height values to get the image size I wanted. I used **figure** and **figcaption** to add a caption below the image. 

As I described above, I added a **footer**, whose styling was very tricky at first as I wanted it to stick to the bottom of the page. In this footer I added my name and also a **link** to my linkedIn. I used the "a" element to add a href link to my LinkedIn that would be navigated to if the text "Connect on LinkedIn" was clicked.

I used a **table** to display my technology experience, organizing the data by "A lot of experience" versus "Some experience." I individually styled both the td and th elements so that the heading values stood out more and it was clear that they were headings. As I described above, doing this styling was initially challenging as the table didn't initially have good spacing or sizing.

## Design Achievements
- **Created a Color Palette Using color.adobe.com**: To find inspiration, I used the explore page of color.adobe.com to find a starter color palette. From there, I modified the shades to be better suited for my website, including making them darker and adding an additional shade that was a bit darker than the background color. The final color palette is in this repo named "ColorPalette.png." The hardest part of this process was thinking about the colors from the perspective of a website and what each color would be used for specifically. I found many color combinations on the explore page that I liked, but realized wouldn't translate well for styling a webpage because the colors were all too bright or the palette didn't include a color that would help make the page pop. 

- **Used the Roboto Font from Google Fonts**: I used Roboto Mono as the font for the text used in the two main information sections. I chose this font because it wasn't too flashy or unreadable and had an open feel that went well with the green text background it would lay over. I had an easy time implementing the font as Google Fonts provided the code needed to import it.

