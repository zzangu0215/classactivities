# Lazy Loading Images

In this activity you are going to work with the Intersection Observer API to implement lazy loading functionality for our Gallery App.

## Instructions

### Overview

- In this activity you are going to take the Gallery App and implement Lazy Loading functionality.

- This will allow for us to load images only as they are needed, saving loading times.

- You will primarily be working within `loadImages.js`, specifically in the initLazyImages() function, and lower where the image tags are dynamically created(hint hint)

### Installation/Setup

- With your working directory in `05-Stu_Gallery-Lazy-Load/Unsolved` Run `npm install` to download the required packages into `node_modules`.

- Review the package.json and take note of the "scripts" section, specifically the "seeds" script. Review how to run package.json scripts from the command line at (https://docs.npmjs.com/cli/run-script)

### Research Lazy Loading Images (5 minutes)

- Start the app. Open your browser to the home page and run a Light House Audit. While the audit is running, continue to the next step.

- **Quickly skim** through the MDN Docs provided below. Use the example code provided and adapt it to work with the `Gallery App`.

- [MDN Progressive Loading](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Loading)

- Pay careful attention to the section on the [Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Loading#intersection_observer). How can this snippet be used to implement lazy loading in the gallery app?

- You may find the code in [04.5-Lazy-Images](../05.5-Lazy-Images/lazy-images.js) to be a helpful reference.

### Implement Lazy Loading Images (15 minutes)

- **Note**: You will need to make some changes to the code in `public/assets/js/loadImages.js` to get it working in your application.

- After you have completed implementing lazy loading, open your Dev Tools and run another Lighthouse Audit.

## Hint

The following will produce a solid gray image that is 100 x 100 pixels.

```html
<img
  style="width: 100px; height: 100px;"
  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOMrgcAATsA3BT31OAAAAAASUVORK5CYII="
/>
```
