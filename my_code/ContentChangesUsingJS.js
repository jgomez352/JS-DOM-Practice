// JavaScript source code

/*
 The following code will make changes to the original Udacity page through JS
*/

function changeWebsite() {

    //Change cards by changing the text using difrent methods and adding one more card only using JS
    changeCards()

    //Tested adding an element at the end of the webpage
    newElement();

    //next we will append already existing text in the first h1 and h6 tag
    ChangeHeaders()

    //Will use JS to remove costs Text and replace it again with a new value
    removeCosts()
    
    return
};

function changeCards(){
    //Edited the first three card's content
    const card = document.querySelector('#ga-7096a2')
    card.innerText = "This card has been changed using innerText JS"

    const card2 = document.querySelector('#ga-a9c3f5')
    card2.textContent = "This card has been changed using textContent JS"

    const card3 = document.querySelector('#ga-3de40a')
    card3.innerHTML = "This card has been changed using <strong>innerHTML</strong> JS"

    //Added an extra divide/card
    const CardHolder = document.querySelector('.hero__module')
    const newDiv = document.createElement('div', { is: 'newDiv' })
    const newContent = document.createTextNode("This card was generated using JS by copying the other cards class");

    //Edit Card information here
    newDiv.className = 'card card--homepage'
    CardHolder.appendChild(newDiv)
    newDiv.appendChild(newContent)
};
function newElement() {
    // create a new div element 
    const newDiv = document.createElement("div");
    // and give it some content 
    const newContent = document.createTextNode("Hi there and greetings!");
    // add the text node to the newly created div

    newDiv.appendChild(newContent);

    // add the newly created element and its content into the DOM 
    const currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv); 
   
};
function ChangeHeaders() {
    //next we will append already existing text in the first h1 and h6 tag
    const newSpan = document.createElement('span')
    const mainHeading = document.querySelector('h1')
    newSpan.innerText = ' with Jose F. Gomez'
    mainHeading.appendChild(newSpan);

    const otherHeading = document.querySelector('h6')

    /* It should be noted that below a full html tag and content could have been used
     * example:  '<h6>It was complated </h6>'
     */

    const HTMLTextToAdd = 'It was completed '

    /* Here are the insertAdjacentHTML options 
     *  beforebegin
     *  afterbegin
     *  beforeend
     *  afterend
     */
    otherHeading.insertAdjacentHTML('afterbegin', HTMLTextToAdd)
};
function removeCosts() {
    const Cost = document.querySelector('h4')
    Cost.parentElement.id = 'myTarget'
    const CostParent = document.querySelector('#myTarget')

    CostParent.removeChild(Cost)
   // Now to add the new Cost
   // const NewCost = document.c
   // CostParent.appendChild()

};