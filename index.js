function superbowlWin(array1){
    let winningYear = array1.find((array1) => array1.result === 'W');  
    if (!!winningYear) {
    return winningYear.year;
    } 
}