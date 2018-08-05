# Personal Website

A single page website to serve as a resume & portfolio for my projects.

## Concept:

There will be a light bulb graphic as the background of the page. When the page loads, the bulb will be off. As the user scrolls down through my resume, the background will change, the lightbulb first turning on, then getting brighter. At the end of the page, there will be lightning inside the bulb, symbolizing some cool ideas or whatever.

## Requirements:

* Mobile design (applies to phone and small tablets):
  * Elements should be stacked vertically, with the following features:
    * These divs do not move:
      * Hamburger menu overlaying bulb image div
      * Bulb image div (should fade update on scroll as before)
        * For smaller viewports, there should be a small set of images to load
        * Including the bio image
    * These divs scroll, disappearing under the image div
      * Content div
      * Footer
* Large tablet/desktop design:
  * Elements are aligned horizontally, with the image on the right
    * These divs do not move:
      * Navbar across the top
      * Bulb image div on the righthand side (possibly having two different sizes in this configuration, not sure)
        * Larger viewports should load larger images
      * Footer div
    * These divs scroll, disappearing under the navbar. The text should never overlay the image div.
      * Content div
* Keep the background of the page consistent with the background color of the image div so it looks like it's one large image.
* Make sure the navbar or hamburger menu is a slightly lighter gray color so it's clear that it's there, but it's not distracting. Perhaps pull the purple or orange from the lightning image.
* Add google analytics tracker before uploading
* Responsiveness check
  * Site should look good on small screens in vertical AND horizontal orientation

## Currently Working On:

### Content:

[] Bio
[] Resume
[] Skills
[] Contact Info
[] Footer



## Remaining Features:

* Try to figure out how to change the mechanism from scrolling to depending on the last heading that was visible in the viewport. For example, if I have a navbar and someone goes straight to the projects heading, I'd like the bulb to go ahead and light up to that level.
  * [Example fiddle](https://jsfiddle.net/n4pdx/636/)

## Completed Features:

###Mobile Design:

[x] Get two divs to stack
[x] Don't let the bulb div overlay the content div
[x] Start the content at the bottom of the bulb div
[x] Build responsive menu



## HTML Page Structure:

```html
<header></header>
<body>
    <main>
        <article>
            <section> (four of these)
            <h2></h2>
            </section>
        </article>
    </main>
    <aside>
        [bulb images]
    </aside>
    <footer></footer>
</body>
```

## To Run

1. Clone the repo.
2. From the command line, cd into the /src directory.
3. Type ```grunt``` into the command line.
4. Grunt will open a new browser window/tab with the page running