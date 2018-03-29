# Varta
* The project is deployed on [Netlify](https://www.netlify.com/)
* Live app: [Varta](https://focused-khorana-56497e.netlify.com/)

This project is developed using Reactjs. 

Here is the overview of the project:

  - `create-react-app` is used to create the basic backbone of the app
  - multiple components created to make code reusable, eg:-
    - ```sentenceAnswer component``` - For the sentence and the answer
    - ```option component``` - To select the words (randomized words from the sentence)
    - ```result component``` - To show correct/incorrect message
  - each component consists of its own .js, .jsx and .css files
  - The data flows from the parent ```App.js```