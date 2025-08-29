Assignment 1 - Hello World: Basic Deployment w/ Git, GitHub, Render
===

Here’s my project hosted on Render. I’m on the free plan, so the server may be asleep when you first visit. The initial load can take 1–2 minutes to wake up. If it doesn’t load right away (or you see an error), please wait a moment and refresh-once it’s awake, it should respond normally. [my site](https://a1-tiennguyen.onrender.com). 

What I have on my page?
---

1. You can experience little fun function when you hove the mouse over my profile picture.

2. A little information about myself and also contact information.

3. Pellet colors I will use for the future design, current I prefer my design with basic black and white. I actually used a bit to color my name "Tien" in the title.

Tien Nguyen
https://a1-tiennguyen.onrender.com

## Technical Achievements
- **Styled page with CSS**:
    * Used flexbox to align content within `.avatar-container`, `.color-pallet` and `.color-desc`
    * Set margins and aligned text for `header`, `main`, `footer`, and `h1`
    * Changed the color of a <span> inside `h1` for my name "Tien"
    * Added a smooth transform transition to images inside `.avatar-container`
    * Created a `.spin-effect` class to rotate an image
    * Defined visual styles for color boxes with `.color-box` class

## Design Achievements
- **Used the Roboto Font from Google Fonts**: I used *Open Sans* as the font for the most primary copy text in my site. And I also used *Edu NSW ACT Cursive* for <h2> tags. 
- **Add a profile picture**: I add a profile picture with doodle style for my page.

## Error I got
1. Content-type: in the original code, there is no content-type specification. It made my page not be able to load my profile image (image/jpeg type).

2. writeHead(500): Before having this to resolve *error* in sendFile function, it always return 200 even when the file is missing. 