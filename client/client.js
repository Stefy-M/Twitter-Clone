//This file is used to capture user data from the form


console.log("Hello World");

const form = document.querySelector('form'); //querySelector is more useful when you want to use more complex selectors.
const loadingElement = document.querySelector('.loading')


form.addEventListener('submit', (event) =>{
    //If this method is called, the default action of the event will not be triggered.
    //For example, clicked anchors will not take the browser to a new URL.
    event.preventDefault();

    //(FormData) Built into web browser
    //Can grab user input from page
    const formData = new FormData(form)
    const name = formData.get('name')
    const content = formData.get('content')

    const tweet = {
        name,
        content
    }

    console.log(tweet)
    form.style.display = 'none'
    loadingElement.style.display = ''
    


    
    
    
})

