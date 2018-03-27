# Varta
* The project is deployed on [Netlify](https://www.netlify.com/)
* Live app: [Varta](https://focused-khorana-56497e.netlify.com/)

This project is developed using Reactjs. 

Here is the overview of the project:

  - `create-react-app` is used to create the basic backbone of the app
  - multiple components created to make code reusable and independent, eg:-
    - ```sentence component``` - Our sentence (for ex: Winter is coming)
    - ```option component``` - To select the words (randomized words from sentence) 
    - ```answer component``` - To display answer after selecting from option component
    - ```correct component``` - To show correct message 
    - ```incorrect component``` - To show incorrect message
  - each component consists of its own .js, .jsx and .css files
  - The data flows from the parent ```App.js```