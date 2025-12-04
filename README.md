1. What is React ? 
===================

     => React is a JavaScript library used to build user interfaces (UI), 
     =>  mainly for websites and web applications.
     => It helps developers create:
            
            Fast websites
            Interactive pages
            Reusable components
      
      => Key Features:

            Components        → small pieces of UI
            JSX               → write HTML inside JavaScript
            State             → data that changes
            Virtual DOM       → faster page updates
            Hooks             → useState, useEffect, useCallback, etc.



2. Why is React popular?
==========================

      ✔ Fast
      ✔ Easy to use
      ✔ Reusable components
      ✔ Huge community
      ✔ Used by companies like Facebook, Instagram, Netflix, etc.


3. Virtual DOM ?
================

      React uses a virtual copy of the browser DOM to update UI faster.

            ✔ Only changes what is needed
            ✔ Improves performance


4. What is Babel ?
==================

      => Babel is a JavaScript compiler that converts modern JavaScript code into older JavaScript 
         so it works on all browsers.
      
      => Modern JavaScript (ES6+) has new features like:

            let/const
            arrow functions
            classes
            async/await
            imports/exports

            BUT…

             Older browsers (like Internet Explorer or old Chrome versions) don’t understand these features.

      In simple Term:

            👉 Babel converts new JS → old JS that all browsers can run.

5. What is Webpack?
====================

     => Webpack is a module bundler. 
     => It takes all your files (JavaScript, CSS, images, HTML, etc.) and bundles them into one or more optimized files for the browser.

     => In simple terms:

            A modern web app has many files:

                  JavaScript files
                  CSS files
                  Images
                  Components
                  External libraries
                  Browsers can’t handle so many separate files efficiently.

            Webpack helps by:

                  ✔ Combining files
                  ✔ Reducing file size
                  ✔ Converting code (Babel + loaders)
                  ✔ Managing dependencies
                  ✔ Improving performance

      