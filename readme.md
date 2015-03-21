#Sticky Nav
This is some simple JS code that will allow a navigation bar that is placed below the top of a webpage to "stick" to the top of the browser window once the navigation bar is reached when scrolling.

##Setup
Add the following two lines of code to the head section of your HTML file(s).

`<script src="//code.jquery.com/jquery-1.11.2.min.js"></script>`

`<script src="//code.jquery.com/ui/1.11.4/jquery-ui.min.js"></script>`

Then download the stickyNav.js file above and save it to a location within your website directory, for example in a folder called "scripts".

Finally add the following line of code to the head section of your HTML file(s), making sure to edit the src attribute to the location that you saved stickyNav.js to.

`<script src="link/to/stickyNav.js"></script>`

##Usage
In order for the scroll funciton to work correctly you need to give the `sticky-header` class to your navigation bar.

When it is time for your navagation bar to stick a class of "sticky" will be applied to the navigation bar. We will use css styles to actually controll the "sticking" of the element. Below is some starting CSS code that can be customised to work however you want it to.

```
.sticky {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
}
```