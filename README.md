Assignment 1 - Hello World: Basic Deployment w/ Git, GitHub, Render
===

*DUE: Friday, August29, 2025 by 11:59 PM*
Assignment details
---

This assignment requires that your website is both contained in a GitHub repository and hosted in Render. There are a few ways to do this:

5. Modify the README file according to the specification below.
7. Deploy your project to Render. You can do this by [importing the repo from GitHub](https://render.com/docs/github).
    * Under "Publish Directory", you can just put "./" (without the quotation marks).
8. Ensure that your project has the proper naming scheme (guide follows) so we can find it.

Rubric
---
For the Technical and Design achievements, make sure you thoroughly describe in your README what you did why it was challenging. ALL ACHIEVEMENTS MUST BE DESCRIBED IN YOUR README IN ORDER TO GET CREDIT FOR THEM. Remember that the success of Achievements hinges on how well you describe them in your README. Well formatted text, images, and concise and clear descriptions are helpful. You must include a Technical Achievements and Design Achievements section, even if none are attempted.

*Technical Achievements*
1. (5 points) Style your page using CSS. Each style rule you apply will get you 1 point for a maximum of 5 points. Be sure to describe your style rules in your README.
2. (5 points) Add a simple JavaScript animation to the page.
3. (5 points) Experiment with other *semantic* HTML tags (links, images, tables, header, footer, etc.). Each extra tag you use will get you 1 point for a maximum of 5 points. Be sure to describe the tags you use in your README.

*Design Achievements*
1. (10 points) Create a color palette using [color.adobe.com](https://color.adobe.com). Use all the colors in the palette in your webpage by implementing the appropriate CSS. Add a small screenshot of the color wheel for your color palette to your repo.
2. (5 points) Use a font from [Google Fonts](https://fonts.google.com) in your website.

## Technical Achievements
### 1.0 Styling With CSS:
Several different tags were used to create a basic student profile website. `<img></img>` implemented the profile picture, `<ul></ul>` enclosed a table of bullet points that were formatted with a `<li></li>` for each. Then, all forms of `<h></h>` header and `<p></p>` paragraph tags were used to help format text by the type of text that it was. Finally a button link to a github profile was implemented with a `<a><button></button></a>` tag setup so that the button link was wrapped in a hyperlink that would open a new tab. Once these tags formatted their respective content in the body of the HTML, the head of the HTML implemented CSS that formatted the different text tags along with other stylistic changes. This was helpful to get the text to be color coded to a pallette based on the type of tag used when wrapping that text. This was then all organized into specific parts of the screen when viewed from a browser by grouping content by `<div></div>` tags that would connect content along the vertical or horizontal axis of the screen. 

### 1.1 Div Grouping & Page Formatting:
The direction of the grouping by divs could differ CSS styling so that the following could occur:
- The website simplifies to a horizontal div grouping of a left bar and right bar going down the screen with all contents in the middle. 
- The aforementioned contents above is its own nested contents, and breaks down to a vertical div grouping of the header and footer of the page
    -   The header contains the profile picture, name of the student, and basic info
    -   The footer describes programming experience and has an actual footer
- The header div grouping is then a horizontal div grouping itself of the profile picture and the content of the basic student info
- The footer div is not another div grouping, but a list of text content. 
    -   The header for "Programming Experience:"
    -   The table of mentioned coding languages and the student's background

### 1.2 Specific CSS Attributes:
Many different syntax and attributes were used. A `border-radius: 50%;` was specified for the profile picture so that the radius would be half of the length of the square image, resulting in the rounded curve on each corner of the square image meeting each other such that a circle profile picture is rendered. `rgb(R,G,B)` was used to format content to a specific RGB color. The display of the divs could be specified to a flexbox or inline-block to correctly group div content as mentioned in section *1.1 Div Grouping & Page Formatting* above. Implementing `display: inline-block;` was especially useful for when it was preferable to have a div shrink to the size of its enclosed content. This was helpful for the horizontal div grouping of the profile picture div and basic student info div. These divs initial were the same size and equally split across the screen. The profile picture div was made an inline-block so that it would shrink to the size of the profile photo. By doing this, the profile picture div only took of ~15% of the screen instead of 50%. This removed a bunch of empty space and allowed the basic student info div to move over further to the left side. This let us put the basic student info right beside the profile picture.

Other honorable mentions:
- `flex-grow` was used to allow div groupings of content to grow to fit the full content if needed. 
- `height: 100dvh;` was used to make the height of a div, and its content, the dynamic length of the website. This was good for getting the peripheral vertical blue bars on the side of the screen reach all the way down the screen. 
- `class=...` was used to give specific class types to different content within HTML tags. These classes were specified in the CSS wrapped in the `<style></style>` of the HTML head. 
- `... > div` and other syntax was used to indicate the formatting of this CSS content should apply for the tag on the right of the `>` if it is nested within the class `...`.
- `github_button` and `github_button:hover` classes were created. The initial class defined the styles for the GitHub button, but the hover class indicated how the cursor and button should behave if the cursor hovers over the button. 

## 2.0 A Simple Javascript Animation:


## Design Achievements
- **Used the Roboto Font from Google Fonts**: I used Roboto as the font for the primary copy text in my site.
