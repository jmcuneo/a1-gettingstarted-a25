Christopher Yon
https://a1-christopheryon.onrender.com/

This project shows ...

## Technical Achievements
- **Styled page with CSS**:
  - Fonts:
    - I downloaded the fonts from Google Fonts and imported them locally from the base directory using the @font-face syntax. I applied the fonts to h1, h2, and all other text.
  - Image:
    - I gave the butterfly image a container with id "butterfly" so I could center it independently of the other elements using `display: flex` and `justify-content: center`. I gave the image a max width of 80% of the viewport width and max height of 600px, as this kept the image at an appropriate size and proportion compared to the rest of the page across a range of browser window sizes. Setting the opacity to 0 allows my script to fade it in when the page loads.
  - Rounded Corners:
    - The corners of the image, table, header, and footer are all rounded with a radius of 7px for a clean, modern appearance.
  - Table:
    - The table itself, table header elements and table data elements all have a 1px solid border, with a border spacing of 0 to create unified lines rather than a double border. I used the border spacing option rather than the border collapse option as border collapse turned out to be incompatible with the rounded corners I wanted.
    - The table element specifically has references to top left, top right, bottom left, and bottom right table cells to properly round the inner borders so they don't stick out of the rounded outer borders. I used the `:first-child` and `:last-child` CSS pseudo-classes to reference these dynamically to avoid having to add an ID or a class in the HTML, which also means cells can be added or removed freely without having to update anything to keep the proper inner border rounding. The table headers and data elements have some internal padding around the text for a less cramped look.
  - Header and Footer:
    - Both have the same background color to differentiate them from the rest of the page. They have a width of 82% of the viewport, which makes them slightly wider than the text. They are contained in a div with class "header-footer-container" so they could be centered.
    - The header has a negative top margin to eliminate the gap between it and the top of the page. The title text inside the header has some margin to position it in a visually appealing way.
    - The footer has a negative bottom margin to place it flush with the bottom of the page. The text inside the footer has some margin to properly position it.
  - Main Content:
    - The main content container has left and right margins of 10% of the viewport width and a bottom margin of 30px to space it comfortably on the page.
  - Links:
    - Links are the same light green color of the header and footer.
  - List Items:
    - List items have a bottom margin of 2px to space them more comfortably.
  - Root Element:
    - I used the `:root` CSS pseudo-class to target the entire document when applying the background color and base text color.
  - h2:
    - I made the font weight of the h2 tag bold to further differentiate it from the standard text.
  - Document Body:
    - I had to research CSS tricks to keep the footer at the bottom of the page, even when the content wasn't long enough to do so. I ended up defining the document body display as a grid where the first and third elements (the header and footer) would take up only the space they needed, while the second element (the main content container) would take up all the remaining space. Finally, setting the minimum height of the grid container to 100% of the viewport height meant the main content container stretched vertically to fill up space above the footer regardless of whether the content took up this much space, forcing the footer to always occupy the bottom of the page.
- **Added a simple JavaScript animation to the page**: I used JavaScript to make the image fade in when the page loads. To achieve this, I defined the base opacity of the image container to be 0, then embedded a script in the HTML that retrieves the image container by its ID, defines a function that uses an interval to repeatedly increase the opacity until it reaches 100%, then immediately runs that function so the image fades in when the page is loaded. This was challenging because it required me to research how JavaScript animations were typically done (intervals), and how to change attributes of HTML elements with JavaScript. While not necessarily an animation, the embedded script also randomly chooses from several greetings to put inside the footer each time the page is loaded, again requiring research on how to manipulate HTML with JavaScript.
- **Used other semantic HTML tags:**
  - Header
    - I put the title of the page inside a header.
  - Links
    - I made each course in the list of courses a link to official WPI course info for the respective course.
  - Image
    - I included an image to show off one of my hobbies.
  - Table
    - I organized my proficiency with each technology/technique into a table with one column for each level of proficiency. The levels of proficiency are table headers, and each technology/technique is in a table data tag.
  - Footer
    - I included a fun greeting inside a footer that is randomly selected on each reload;.

## Design Achievements
- **Used a Color Palette created with color.adobe.com**: I created a color palette with color.adobe.com and implemented it across all the colors on the website. The header background, footer background, and links are light green (#85C8C8), the header and footer text is dark brown (#331402), and the body text is off-white (#EBF2F2).
- **Used the Playfair Display and Ubuntu fonts from Google Fonts**: I used Ubuntu as the font for all text on my site except for the header, which uses Playfair Display.
