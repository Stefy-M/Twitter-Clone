//This file is used to capture user data from the form


console.log("Hello World");

const form = document.querySelector('form'); //querySelector is more useful when you want to use more complex selectors.
const loadingElement = document.querySelector('.loading')
const API_URL = 'http://localhost:5000/tweets';

loadingElement.style.display ='none'

form.addEventListener('submit', (event) =>{
    //If this method is called, the default action of the event will not be triggered.
    //For example, clicked anchors will not take the browser to a new URL.
    event.preventDefault();

    //(FormData) Built into web browser
    //1. Can grab user input from page
    const formData = new FormData(form)
    const name = formData.get('name')
    const content = formData.get('content')

    //2. Put put data in a object
    const tweet = {
        name,
        content
    }

    console.log(tweet)
    form.style.display = 'none'
    loadingElement.style.display = ''
    
    /* The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, 
    such as requests and responses. It also provides a global fetch() method that provides an easy, logical way 
    to fetch resources asynchronously across the network.
    https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch*/

    //3. Send data off to backend server
    fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(tweet),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
    .then(createdTweet =>{
        console.log(createdTweet)
        loadingElement.style.display = 'none'
        form.reset()
        form.style.display = ''
    })
    
    
    
})

