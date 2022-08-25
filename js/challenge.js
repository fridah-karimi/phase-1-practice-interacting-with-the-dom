const counter = document.getElementById("counter");
const add = document.getElementById("plus");
const subtract = document.getElementById("minus");
const emoji = document.getElementById("heart");
const pauseBtn = document.getElementById("pause");
const listOfLikes = document.querySelector("ul.likes");
const commentSection = document.getElementById('comment-form');
const listOfComments = document.getElementById('list')
const totalLikes = {};
const submitBtn = document.getElementById('submit');

// adding event listeners
document.addEventListener('DOMContentLoaded', ()=> {

    automaticallyIncrementCounter();

    add.addEventListener('click', incrementCounter);
    subtract.addEventListener('click', decrementCounter);
    emoji.addEventListener('click', emojiClicked);
	pauseBtn.addEventListener('click', pauseClicked);
	commentSection.addEventListener('submit', postComment);

    
});

//automatically run counter
function automaticallyIncrementCounter() {
    return setInterval(incrementCounter, 1000)
}

// functions and operations
function isActive() {
    return (pauseBtn.innerText === "pause") ? true : false
}

function incrementCounter() {
    if (isActive()) { counter.innerText = parseInt(counter.innerText) + 1 } 
    
}
function decrementCounter() {
    if (isActive()) { counter.innerText = parseInt(counter.innerText) - 1 }
}
function pauseClicked() {
    pauseBtn.innerText = (pauseBtn.innerText === "pause") ? "resume" : "pause";
    

    //change the state of buttons when pause is clicked
    const buttons = [add, subtract, emoji, submitBtn];

	buttons.forEach( (button) => { button.disabled = !button.disabled });
}
function emojiClicked() {
    let count = parseInt(counter.innerText);
    totalLikes[count] ? totalLikes[count] += 1 : totalLikes[count] = 1
	if (document.getElementById(`like-${count}`)){
		document.getElementById(`like-${count}`).innerText = `${count} was liked ${totalLikes[count]} times`
	} 
	else {
		const li = document.createElement("li")
		li.id = `like-${count}`
		li.innerText = `${count} was liked 1 time`
		listOfLikes.appendChild(li)
	}
    
}



// comments
function postComment(e) {
    e.preventDefault();
	let comment = document.getElementById('comment-input').value;
	listOfComments.innerHTML += `<p>${comment}</p>`;
	commentForm.reset();
}