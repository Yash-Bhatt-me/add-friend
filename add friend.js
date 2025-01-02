var head = document.querySelector("h5");
var btn = document.querySelector("button");
var check = 0 ;

btn.addEventListener('click',function(){
    if(check == 0) {
        head.innerHTML = "Friend"
        head.style.color = 'green'
        btn.innerHTML = "Remove Friend"
        btn.style.color = 'green'
        check = 1
        btn.style.transition = 'linear 0.5s';
    } else {
        head.innerHTML = "Stranger"
        head.style.color = 'crimson'
        btn.innerHTML = "Add Friend"
        btn.style.color = 'crimson'
        check = 0
    }
});