var calculationScreen = document.createElement('p');
calculationScreen.setAttribute('id', 'ques-screen');
var time = 10;

var boxDiv = document.getElementById('flex');
// console.log(boxDiv);
var empty = [];
// create answer box 
var ansArray = ['15', '18', '11', '2', '16', '19', '3', '4', '13', '5', '12', '7', '17', '1', '10', '6', '8', '20', '14', '9'];
// console.log(ansArray);

for (index = 0; index < ansArray.length; index++) {
    var boxCreation = document.createElement('button');
    boxCreation.setAttribute('class', 'boxes');
    boxCreation.setAttribute('value', ansArray[index]);
    boxCreation.addEventListener('click', valueGet);
    boxCreation.innerHTML = ansArray[index];
    boxCreation.disabled = 'true'
    boxDiv.appendChild(boxCreation);
    empty.push(boxCreation);
}

// show the sum function
var show = document.getElementById('ans');
// console.log(show);


// start the game
var strBtn = document.getElementById('start');
// console.log(strBtn);


// start button function
strBtn.addEventListener('click', function () {
    random();
    show.innerHTML = quesDisplay;
    for (i = 0; i < empty.length; i++) {
        // boxCreation = document.createElement('button');
        empty[i].disabled = '';
        empty[i].style.background = '';
        // console.log(empty[i]);
    }
    watch();
    strBtn.disabled = 'true';
})

// random number check
var FirstRandom;
var secondRandom;
var total;
var quesDisplay;
var totalSumEmpty = [];
function random() {

    while (totalSumEmpty.length < ansArray.length) {
        var RandomNum_1 = Math.random();
        FirstRandom = Math.floor(RandomNum_1 * 11);

        var RandomNum_2 = Math.random();
        secondRandom = Math.floor(RandomNum_2 * 11);

        if (FirstRandom == 0 && secondRandom == 0) {
            continue;
        }
        // find total   
        total = FirstRandom + secondRandom;
        // console.log(total);

        if (!(totalSumEmpty.includes(total))) {
            quesDisplay = FirstRandom + ' + ' + secondRandom;
            totalSumEmpty.push(total);
            // console.log(quesDisplay);
            break;
        }
    }
    // console.log(totalSumEmpty.length);
}

// game win function
// possibility answers
// var winAns;
// function ans(){
//      winAns = [
//         [0,1,2,3,4],[
//             5,6,7,8,9],[10,11,12,13,14],[15,16,17,18,19],[0,5,10,15],[1,6,11,16],[2,7,12,17],[3,8,13,18],[4,9,17,19]
//     ];
//     // console.log(winAns); 
//     if(winAns.includes(boxCheck)){
//         winAns.forEach(index => {
//             empty[index].style.background = 'yellow';
//         });
//     }
//     };


// click answer button function
var ansBtn = document.querySelector('.boxes');
var index;
var hide;
var boxCheck = [];
// console.log(ansBtn);
function valueGet() {
    var x = this.value;
    time = 11;
    // console.log(x)
    if (total == x) {
        var y = ansArray.indexOf(x);
        empty[y].style.background = 'green';
        // if(boxCheck.length < 5){
        // boxCheck.push(y);
        // }
        // ans();
        // console.log(boxCheck);

    }
    else {
        restart();
        y = ansArray.indexOf(x);
        empty[y].style.background = 'red';
        index = document.querySelector('.over');
        index.style.zIndex = 1;
        // console.log(index);
        hide = document.querySelector('.overlay');
        // console.log(hide);
        hide.classList.remove('hidden');
    }
    random();
    show.innerHTML = quesDisplay;
}

// close button
var closeIcon = document.getElementById('icon');
closeIcon.addEventListener('click', function () {
    index.style.zIndex = -1;
    hide.classList.add('hidden');
})


// timer function
var timeDisplay = document.getElementById('timer');
// console.log(timeDisplay);
var timerData;
// setInterval function
function watch() {
    timerData = setInterval(timeset, 1000);
}

function timeset() {
    time--;
    timeDisplay.innerHTML = time;
    if (time == 0) {
        restart();
        clearInterval(timerData);
    }
}

// reset btn function
var reset = document.getElementById('stop');
// console.log(reset);
reset.addEventListener('click', restart);
function restart() {
    clearInterval(timerData);
    time = 10;
    timeDisplay.innerHTML = 0;
    show.innerHTML = 'Lets Start';
    strBtn.disabled = '';
    for (var loop = 0; loop < empty.length; loop++) {
        empty[loop].style.background = '';
    }
};


