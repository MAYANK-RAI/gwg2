This application needs a browser to run the.You can see the output by double clicking on index.html.Index.html can be opened IN any browser on any device.To edit I used  sublime text, notepad++ etc.

Testing framework used is jasmine.

I loop through testing these feeds and check for url for these feeds and their names.

I used expect menu-hidden and event listener to not contain menu hidden when clicked on the menu tab.

I used expect menu contain function to be hidden without the click. 

I expect(numberEntries).toBeGreaterThan(0) in my feed query under class entry. This checks if I have atleast one feed entry. 

I used beforeEach since load feed is asynchronous and therefore I used  loadfeed(0 => load feed (1,()={done();}) function 