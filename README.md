# Personal Website

A single page website to serve as a resume & portfolio for my projects.

## Concept:

There will be a light bulb graphic as the background of the page. When the page loads, the bulb will be off. As the user scrolls down through my resume, the background will change, the lightbulb first turning on, then getting brighter. At the end of the page, there will be lightning inside the bulb, symbolizing some cool ideas or whatever.

## Requirements:

* Responsive
* Accessibility first

## Currently Working On:



## Remaining Features:

* Try to figure out how to change the mechanism from scrolling to depending on the last heading that was visible in the viewport. For example, if I have a navbar and someone goes straight to the projects heading, I'd like the bulb to go ahead and light up to that level.

## Completed Features:


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