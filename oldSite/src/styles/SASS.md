# Sass Notes

I've updated the package.json and Gruntfile in this branch to download and compile Sass for us. Sass makes CSS much easier. A few things first:

1. I included my personal default Sass files. I am not married to anything in these files. Play with fonts, colors, whatever you want. They're just my defaults, not actual suggestions for this project.
1. I had a few classes in the styles file from master. I pasted those in to the bottom of the _04defaults.scss file so that work hasn't been lost.

## Sass is awesome.

It stands for "Syntactically Awesome Style Sheets".

This is the full documentation:

[Sass Documentation](https://sass-lang.com/)

If you just want to know enough to be dangerous, I wrote down everything you need to know if you want to start tinkering.

## Partials

Check the "Styles" directory in "src". You'll see files with names that begin with an "_". Those are called "partials" and they're similar to our JS modules. It's just a way to break up the code so you are looking only at what you need.


## **IMPORTANT NOTE**: Make all of your CSS changes inside the partials. _**DO NOT*_ write CSS in the styles.css file. They will be overwritten when the scss compiles.

This is how I've divided my partials:

* **_01base.scss**: This is a very long bunch of boilerplate that is basically just a CSS reset or a normalize. You likely won't ever need to change it.
* **_02mixins.scss**: This is where I defined some useful Sass functions that can be called in the other files. I've added comments that describe what the functions do and explain how to call them in the other files.
* **_03variables.scss**: This is where I defined the variables I use in most of my projects. If you want to make major changes to the styles, this is a great place to start.
  * base-background is the default body color
  * base-text-color is the default text color
  * test-color is bright red because it'll be easy to spot if you want to change an element red to figure out where it is on the page.
  * the contrast and accent colors are used...as contrasts and accents. They're different from the base, that's what's important.
  * By all means, **add more variables**! Colors are fun.
* **_04default.scss**: This contains most of the styles for the project. If you want to add more styles, it's probably best to add them to the bottom of this file.
* **_05navbar.scss**: Sets up a horizontal navbar that changes color on mouse hover. I usually leave it commented out unless I need it.
* **_06grid-layout.scss**: Sets up a css grid. I usually leave it commented out unless I need it.
* **_07media-queries**: This is usually commented out as well, but if we decide we need media queries they're set up here.

## How to Add More Partials

If you want to add another partial, you have to do two things:

1. Start the filename with an underscore
2. Add an @import line to the styles.SCSS file.

When Grunt runs, it compiles everything that's imported on the styles.SCSS file into a single styles.css file. Then the Grunt copy task copies the compiled file up to dist.

I think that's everything. Have fun, go nuts.