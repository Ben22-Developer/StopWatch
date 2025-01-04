let counts = document.querySelector('#counts');
let table = document.querySelector('table');
let allTimeMinutes = document.querySelector('#allTimeMinutes');
let allTimeSeconds = document.querySelector('#allTimeSeconds');
let allTimeTierce = document.querySelector('#allTimeTierce');
let currentLapMinutes = document.querySelector('#currentLapMinutes');
let currentLapSeconds = document.querySelector('#currentLapSeconds');
let currentLapTierce = document.querySelector('#currentLapTierce');
let allButtons = document.querySelectorAll('.button');
let position = document.querySelector('#position');
let usedTimeInTierce = document.querySelector('#usedTimeInTierce');
let usedTimeInSeconds = document.querySelector('#usedTimeInSeconds');
let usedTimeInMinutes = document.querySelector('#usedTimeInMinutes');
let differenceIn = document.querySelector('#differenceIn');
let differenceInMinutes = document.querySelector('#differenceInMinutes');
let differenceInSeconds = document.querySelector('#differenceInSeconds');
let differenceInTierce = document.querySelector('#differenceInTierce')
let lapTierce,lapSeconds,lapMinutes,iterateTierce,iterateSeconds,iterateMinutes,individualTierce,individualSeconds,individualMinutes,position_nbr;
let newRow,newPosition,newlapUsedTime,newTimeDifference,newusedTimeInTierce,newusedTimeInSeconds,newusedTimeInMinutes,newTimeDifferenceInMinutes,newTimeDifferenceInSeconds,newTimeDifferenceInTierce;
let createdElts = [];
iterateTierce = 0;
iterateSeconds = 0;
iterateMinutes = 0;
lapTierce = 0;
lapSeconds = 0;
lapMinutes = 0;
position_nbr = 0;
let loop;
let setIntervalFunction = () => {
    iterateTierce ++;
    if(iterateTierce < 10) {
        allTimeTierce.innerText = `0${iterateTierce}`;
    }
    else {
        allTimeTierce.innerText = iterateTierce;
    }
    if (iterateTierce === 99) {
        iterateTierce = 0;
        iterateSeconds+=1;
        if(iterateSeconds < 10) {
            allTimeSeconds.innerText = `0${iterateSeconds}`;
        }
        else {
            allTimeSeconds.innerText = iterateSeconds;
        }
    }
       if (iterateSeconds === 59) {
        iterateMinutes+=1;
        iterateSeconds = 0;
        if (iterateMinutes < 10) {
            allTimeMinutes.innerText = `0${iterateMinutes}`;
        }
        else {
            allTimeMinutes.innerText = iterateMinutes;
        }
    }
}
allButtons.forEach((button,index) => {
    button.addEventListener('click',() => {
        if (button.innerText === 'Stop') {
            clearInterval(function_1);
            clearInterval(function_2);
            button.innerText = 'Resume';
            for (loop = 0; loop<allButtons.length; loop ++) {
                if (allButtons[loop].innerText === 'Lap') {
                    allButtons[loop].innerText = 'Reset';
                    break;
                }
            }
        }
        else if (button.innerText === 'Resume') {
            function_1 = setInterval(setIntervalFunction,10);
            function_2 = setInterval(setIntervalFunction_2,10);
            button.innerText = 'Stop';
            for (loop = 0; loop<allButtons.length; loop ++) {
                if (allButtons[loop].innerText === 'Reset') {
                    allButtons[loop].innerText = 'Lap';
                    break;
                }
            }
        }
        else if (button.innerText === 'Lap') {
            individualTierce = lapTierce;
            individualSeconds = lapSeconds;
            individualMinutes = lapMinutes;
            position_nbr+=1;
            if (position_nbr === 1) {
                position.innerText = position_nbr;
                individuallap();
            }
            else {
                newRow = document.createElement('tr');
                newPosition  = document.createElement('td');
                newlapUsedTime = document.createElement('td');
                newTimeDifference = document.createElement('td');
                newusedTimeInTierce = document.createElement('span');
                newusedTimeInSeconds = document.createElement('span');
                newusedTimeInMinutes = document.createElement('span');
                newTimeDifferenceInMinutes = document.createElement('span');
                newTimeDifferenceInSeconds = document.createElement('span');
                newTimeDifferenceInTierce = document.createElement('span');
                table.append(newRow);
                newRow.setAttribute('id','OtherRows');
                newRow.append(newPosition);
                newRow.append(newlapUsedTime);
                newRow.append(newTimeDifference);
                newPosition.setAttribute('id','position');
                newlapUsedTime.setAttribute('id','usedTimeIn');
                newTimeDifference.setAttribute('id','differenceIn');
                newlapUsedTime.append(newusedTimeInMinutes);
                newlapUsedTime.append(newusedTimeInSeconds);
                newlapUsedTime.append(newusedTimeInTierce);
                newusedTimeInMinutes.setAttribute('id','usedTimeInMinutes');
                newusedTimeInSeconds.setAttribute('id','usedTimeInSeconds');
                newusedTimeInTierce.setAttribute('id','usedTimeInTierce');
                newTimeDifference.append(newTimeDifferenceInMinutes);
                newTimeDifference.append(newTimeDifferenceInSeconds);
                newTimeDifference.append(newTimeDifferenceInTierce);
                newTimeDifferenceInMinutes.setAttribute('id','differenceInMinutes');
                newTimeDifferenceInSeconds.setAttribute('id','differenceInSeconds');
                newTimeDifferenceInTierce.setAttribute('id','differenceInTierce');
                newPosition.innerText = position_nbr;
                individuallap();
                createdElts.push(newRow);
            }
            let lapRecord = {lapMinutesObject:lapMinutes,lapSecondsObject:lapSeconds,lapTierceObject:lapTierce};
            lapMinutes = 0;
            lapSeconds = 0;
            lapTierce = 0;
            currentLapTierce.innerText = lapTierce;
            currentLapSeconds.innerText = lapSeconds;
            currentLapMinutes.innerText = lapMinutes;
        }
        else if (button.innerText === 'Reset') {
            resetFunction();
        }
    })
});
let setIntervalFunction_2 = () => {
    currentLapTierce.innerText = lapTierce;
    lapTierce++;
    if (lapTierce<10) {
        currentLapTierce.innerText = `0${lapTierce}`;
    }
    else {
        currentLapTierce.innerText = `${lapTierce}`;
    }
    if (lapTierce === 99) {
        lapTierce = 0;
        lapSeconds ++;
        if (lapSeconds < 10) {
        currentLapSeconds.innerText = `0${lapSeconds}`;
        }
        else {
            currentLapSeconds.innerText = `${lapSeconds}`;   
        }
        if (lapSeconds === 59) {
            lapSeconds = 0;
            lapMinutes ++;
            if (lapMinutes < 10) {
                currentLapMinutes.innerText = `0${lapMinutes}`;
            }
            else {
                currentLapMinutes.innerText = `${lapMinutes}`;
            }
        }
    }
}
let function_1 = setInterval(setIntervalFunction,10);//for general time
let pause_function_1 = clearInterval(setIntervalFunction);
let function_2 = setInterval(setIntervalFunction_2,10);//for individual current laps
let individuallap = () => {
    if (position_nbr === 1) {
        if (individualTierce < 10) {
            usedTimeInTierce.innerText = `0${individualTierce}`;
        }
        else {
            usedTimeInTierce.innerText = individualTierce;
        }
        if (individualSeconds < 10) {
            usedTimeInSeconds.innerText = `0${individualSeconds}`
        }
        else {
            usedTimeInSeconds.innerText = individualSeconds;
        }
        if (individualMinutes < 10) {
            usedTimeInMinutes.innerText = `0${individualMinutes}`;
        }
        else {
            usedTimeInMinutes.innerText = individualMinutes;
        }
    }
    else {
        if (iterateTierce < 10) {
            newusedTimeInTierce.innerText = `0${iterateTierce}`;
        }
        else {
            newusedTimeInTierce.innerText = iterateTierce;
        }
        if (iterateSeconds < 10) {
            newusedTimeInSeconds.innerText = `0${iterateSeconds} :`;
        }
        else {
            newusedTimeInSeconds.innerText = `${iterateSeconds} :`;
        }
        if (iterateMinutes < 10) {
            newusedTimeInMinutes.innerText = `0${iterateMinutes} :`;
        }
        else {
            newusedTimeInMinutes.innerText = `${iterateMinutes} :`;
        } 
        if (individualTierce < 10) {
            
            newTimeDifferenceInTierce.innerText = `0${individualTierce}`;
        }
        else {
            newTimeDifferenceInTierce.innerText = `${individualTierce}`;
        }
        if (individualSeconds < 10) {
            newTimeDifferenceInSeconds.innerText = `0${individualSeconds} : `;
        }
        else {
            newTimeDifferenceInSeconds.innerText = `${individualSeconds} : `;
        }
        if (individualMinutes < 10) {
            newTimeDifferenceInMinutes.innerText = `0${individualMinutes} : `;    
        }
        else {
            newTimeDifferenceInMinutes.innerText = `0${individualMinutes} : `;
        }
    }
}
let resetFunction = () => {
    iterateMinutes = 0;
    iterateSeconds = 0;
    iterateTierce = 0;
    individualMinutes = 0;
    individualSeconds = 0;
    individualTierce = 0;
    lapMinutes = 0;
    lapSeconds = 0;
    lapTierce = 0;
    position_nbr = 0;
    position.innerText = '00';
    usedTimeInMinutes.innerText = '00';
    usedTimeInSeconds.innerText = '00';
    usedTimeInTierce.innerText = '00';
    differenceInMinutes.innerText = '00';
    differenceInSeconds.innerText = '00';
    differenceInTierce = '00';
    currentLapMinutes.innerText = lapMinutes;
    currentLapSeconds.innerText = lapSeconds;
    currentLapTierce.innerText = lapTierce;
    allTimeMinutes.innerText = iterateMinutes;
    allTimeSeconds.innerText = iterateSeconds;
    allTimeTierce.innerText = iterateTierce;
    if (createdElts.length >= 1) {
        for (loop = 0; loop<createdElts.length; loop++) {
        createdElts[loop].remove();
        }
    }
}
document.querySelector('#lightMode').addEventListener('click',() => {
    if (document.querySelector('body').classList.contains('darkVersion')) {
        document.querySelector('body').classList.remove('darkVersion');
        document.querySelector('#lightMode').innerText = 'Light Mode';
    }
    else {
        document.querySelector('body').classList.add('darkVersion');
        document.querySelector('#lightMode').style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
        document.querySelector('#lightMode').style.color = 'black';
        document.querySelector('#lightMode').innerText = 'Dark Mode';
    }
});
