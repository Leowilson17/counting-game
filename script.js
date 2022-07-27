var calculationScreen = document.createElement('p');
calculationScreen.setAttribute('id', 'ques-screen');
var time = 5;

var boxDiv = document.getElementById('flex');
// console.log(boxDiv);

// create ques box
var quesArrayFirstNum = ['6', '4', '3', '9', '1', '2', '5', '7', '8'];
var quesArraySecNum = ['3', '8', '5', '2', '1', '9', '4', '7', '6'];
var empty = [];
// create answer box 
var ansArray = ['15', '18', '11', '2', '16', '19', '3', '4', '13', '5', '12', '7', '17', '1', '10', '6', '8', '20', '14', '9'];
for (index = 0; index < ansArray.length; index++) {
    var boxCreation = document.createElement('button');
    boxCreation.setAttribute('class', 'boxes');
    boxCreation.setAttribute('value', ansArray[index]);
    boxCreation.setAttribute('onclick', 'valueGet(this.value)');
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
strBtn.addEventListener('click', function start() {
    random();
    show.innerHTML = quesDisplay;
    for (i = 0; i < empty.length; i++) {
        // boxCreation = document.createElement('button');
        empty[i].disabled = '';
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
    //   console.log(quesArrayFirstNum.length); 
    var RandomNum_1 = Math.random();
    FirstRandom = Math.floor(RandomNum_1 * quesArrayFirstNum.length);
    // console.log(FirstRandom);

    var RandomNum_2 = Math.random();
    secondRandom = Math.floor(RandomNum_2 * quesArraySecNum.length);
    // console.log(secondRandom);
    if (!(totalSumEmpty.includes(quesDisplay))) {
        totalSumEmpty.push(quesDisplay);
        quesDisplay = quesArrayFirstNum[FirstRandom] + ' + ' + quesArraySecNum[secondRandom];
        console.log(quesDisplay);
    }

    // find total   
    total = ~~(quesArrayFirstNum[FirstRandom]) + ~~(quesArraySecNum[secondRandom]);
    // console.log(total);
}

// click answer button
var ansBtn = document.querySelector('.boxes');
// console.log(ansBtn);
function valueGet(val) {
    var x = (val);
    time = 5;
    // console.log(x)
    if (total == val) {
        var y = ansArray.indexOf(x);
        //   console.log(y);
        empty[y].style.background = 'green';
    }
    else {
        y = ansArray.indexOf(x);
        empty[y].style.background = 'red';
    }
    random();
    show.innerHTML = quesDisplay;
}



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
        clearInterval(timerData);
    }
}




