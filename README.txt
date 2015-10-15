Link to Repo: https://github.com/MarthMarthMarth/Lab4

Part 1
========================
For part one I used a heirarchical indentation structure to create a readable, functional, and verifiable json file.



Part 2
========================
For part two I used the same HTML and CSS from lab 2, with the small addition of the image of a disk and stylization for that image. Thus, if you care about the semanitc integrity of my HTML and CSS, see the README.txt from Lab 2. 

I bind my javascript to run when the page is 'ready', to ensure that the DOM has loaded and is referencable. I then hide the headers part of my HTML until the user has clicked the image of the disk. I could inject these headers using javascript like I inject the rest of the playlist, but because the headers will always be the same I figured it was better to just leave them in the HTML and hide them. When the user clicks the image of the disk, the image is hidden, the headers are revealed, and an AJAX request is made to the JSON file. The data from the JSON is then parsed and injected into the HTML along with the appropriate elements for formatting. The result is a working playlist page, identical to part 3 of lab 2.