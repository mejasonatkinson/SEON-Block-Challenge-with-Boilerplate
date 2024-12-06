# Backend (Code)

As I stated in my introduction, I created the block using the `@wordpress/create-block` package. This led to the first major issue: when I installed the package within the `wp-content/plugins` folder, it kept failing. After investigating, I pinpointed the issue to the `@wordpress/scripts` package not downloading. After extensive googling and even consulting AI with no success, I tried downloading the package to my desktop, which worked perfectly. I then moved the package into the wp-content/plugins folder, allowing me to continue. I believe the issue was due to the package not liking a directory with a space in its name, as the default folder used for Local (which I am using to locally host the WordPress site) is 'Local Sites' which as you can see contains a space.

The block/plugin is broken down into several files:

- [`sbc-w-boilerplate-block.php`](../sbc-w-boilerplate-block.php)

Is the entry file needed to create the plugin and register the block located in the build file.

- [`src/block.json`](../src/block.json)

Needed to create the block and additional metadata.

- [`src/index.js`](../src/index.js)

Sets the default styling (`src/style.scss`), metadata (`src/block.json`), and loads the Frontend (`src/save.js`) and Backend (`src/edit.js`) components.

- [`src/edit.js`](../src/edit.js)

Sets the backend component useing several WordPress packages (`@wordpress/block-editor`, `@wordpress/components`, and `@wordpress/element`) for the various elements of the overall component, including a `Fragment`, `MediaUpload`, `TextControl`, `TextareaControl`, and `ToggleControl`. 

Using BEM class names were used for styling.

For simplicity, I didn't use `src/editor.scss`, so for this challenge, I just commented it out. If this ever went into production, I would likely remove it completely.

- [`src/save.js`](../src/save.js)

The frontend component uses basic React syntax, including a conditional statement to control the layout and BEM class names for styling in [`src/style.scss`](../src/style.scss).

- [`src/view.js`](../src/view.js)

For this instance, I didn't need to use this file, but similar to `src/editor.scss`, I would likely remove it completely if it is not needed in production.

**Navigation:**
- [Previous Page](backend-wp.md)
- [Next Page](conclusion.md)