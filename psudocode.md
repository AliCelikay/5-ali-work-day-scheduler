1) Add todays date in the jumbotron

2) add a div where rows and columns go
    * add a div with row(do this 8 more times)
        * create a div for time display with a column that takes up 1 of the containers
            connect to css class
        * add a text area for input that takes up 10 columns
            * connect to css class
            * store current hour with moment.js into a variable
            * use quesrySelectorall to grab all the time-block classes
                * loop over each timeblock and grab the id of each time block
                    * do this by: var blockHour = parseInt($this).attr('id').split('-')[1]
                    *compare the blockHour with the current time
                        * if the blockHour is > than current time then display background color green
                        *else if blockHour is < than current time then display background color grey
                        * else display red for current time = blockHour
                        
                
        * add a button for saving and unsaving that takes up 1 column
            * connect to css class
            * add an eventListener from js to save and unsave the input user has stored in the text and into local storage

