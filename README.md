Assignment 1 - Hello World: Basic Deployment w/ Git, GitHub, Render
===

*DUE: Friday, August29, 2025 by 11:59 PM*
Assignment details
---


This assignment requires that your website is both contained in a GitHub repository and hosted in Render. There are a few ways to do this:

[Render Website Link Here](https://a1-matthewpapesh-a25.onrender.com/)

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
Javascript (JS) was used to animate the student name `Matthew Papesh` to blink and flash between two different colors. This was done with the  `<script></script>` JS enclosing tag in HTML. This was done by implementing the following:
```js
<script>
    const title = document.getElementById("my_name");
    const colors = ["var(--primary-color)", "var(--text-color)"];
    let iterator = 0;
    setInterval(() => {
        let index = iterator % colors.length;
        title.style.color = colors[index];
        iterator++;
    }, 1000); // color is updated every second
</script>
```

### 2.1 Using CSS in JS:
The JS code needs to be able to interface the contents of the website. This is done by the JS interacting with the HTML/CSS. Each piece of content on the website can be labeled with not only a CSS class type, but also a id type. For example, an id of a div can be set as: `<div id=my_id></id>`. Variable in JS then can be set equal to the contents, also known as an element, on the website by giving an id. CSS variables can also be implemented in JS as it would be in CSS, with `var()`, but then must be wrapped in quotes. 

### 2.2 `setInterval(function_object, delay_ms)`:
This is a JS function that repeatedly calls and runs another function tat a specifically timed rate. The `setInterval()` function takes arguments in the order of the function to call repeatedly, followed by the amount of milliseconds to delay for. 

### 2.3 Blinking Student Name Code:
This is shown, in whole, in section *2.0 A Simple Javascript Animation*, above. To look closer: 
```js
const title = document.getElementById("my_name");
const colors = ["var(--primary-color)", "var(--text-color)"];
```

The constant objects of `title` and `colors` are created. `title` is the content element on the actual page that has a tag labeled with the `id="my_name"`. This is true in the HTML, where we see: 

```html
<div><h1 class="my_name" id="my_name">Matthew Papesh</h1></div>
```

Even though this is not the only div in the basic student info content on the website, this is one is isolated with header text content with the aforementioned id label. This allows the JS find this element and label it `title`. Next, `colors` is simply an array of the `--primary-color` and `--text-color` variables (accessed with `var()` in CSS, and wrapped in quotes for JS). These colors come from the Adobe color pallette. 

Finally a function is created while passed into `setInterval()` with a repeat delay call of every one second. This function, implemented within `setInterval()`, that is repeatedly called is seen wrapped below:

```js
let iterator = 0;
setInterval(() => {
    let index = iterator % colors.length;
    title.style.color = colors[index];
    iterator++;
}, 1000); // color is updated every second
```

A `iterator` variable is made and tracks how many times the internal function is repeatedly called. `index` is then the remainder left over from the division of the number of internal function calls (`iterator`) by the number of colors from `colors`. This division shows how many times the list of colors can be stepped through (iteratively) based on whatever the number of `iterator`. The whole number part of this quotient is not needed for modulus. So we can focus on the decimal of 0.X that has a remainder that is the index in the color list that corresponds to the `index`. 

For example, with two colors and iterator of 3, index is equal to the remainder of 3/2=1.5. This means iterator has gone through the color list once, and is 50% through it again. We only care about the 50%, or 0.5, which 1/2 has a remainder of 1. This would be the index of the second color in the list. Once the iterator repeats and becomes 4, index will be the remainder of 4/2=2, which would be 0. This modulus math corresponds the iterator to the correct index in the color list to alternate through the colors in the list everytime the function is called. 

Given the index of the current color is always updated, the style color of the title element from earlier is assigned to this new current color before increasing the `iterator` by one. Then the function delays for a second before repeating to create the animation. 

It is worth noting that this JS code has to be implemented below the HTML content for it to function properly in the index.html file.

## 3.0 Other HTML Tags:
Other tags used for `<img class="" src=""></img>`, `<link rel="" href="">`, `<a href=""></a>`, `<footer></footer>`, and `<button type="button"></button>`. 

- **1:** `<img></img>` => The source text ives the directory of where the image file content lives. Other arguments can be given, such as class, id, etc for CSS styling. 
- **2:** `<link></link>` => The rel text names the relationship between this doc and the one being linked. The href text provides the actual link to connect to this doc. 
- **3:** `<a></a>`=> Similar to a link tag, but this is tag is for when an element on the website should be associated or connected with that link as opposed to just including extra content onto this doc like how the link tag would. Anything wrapped in this tag will be hyperlinked to the link specified in the href text. Giving a target of "_blank" creates a new tab when opening the link. This was used to link the student GitHub to the website. 
- **4:** `<footer></footer>` => This puts footer content at the very bottom row of the website. 
- **5:** `<button></button>`=> This creates a button in visuals, but it does nothing on its own. It can be interacted with by specifying CSS for what should happen to styling when the cursor hovers over the button etc. The button can be wrapped in `<a></a>` to attach it to a hyperlink and make the button useful. 

## Design Achievements
### Color Pallette:
The color pallette used were for the following website characteristics of: **(1)** `--primary-color`, **(2)** `--secondary-color`, **(3)** `--accent-color`, **(4)** `--text-color`, and **(5)** `--background-color`. These colors are ordered in this same order, respectively, in the figure below:

<img style="width: 25%; height: 25%;" src="img/AdobeColor-DeepTealSea.jpeg">

These pallette colors were used in the CSS styling for formatting basic elements, such as main website body background color, to more complex elements, such as animating the student name on the page with JS with these colors. These pallette colors were created as style variables in CSS similar to how it is implemented below:

```css
:root {
    --primary-color: #012e40;
    --secondary-color: #024959;
    --accent-color: #026773;
    --text-color: #6cffff;
    --background-color: #f2e3d5;
}
```

### Google Font Type:
- **Used the Libertinus Keyboard Font from Google Fonts**: I used Libertinus Keyboard as the font for student name of the profile website.
