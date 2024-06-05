let scoreA = 0;
let scoreB = 0;

function increaseScore(team) {
    if (team === 'teamA') {
        scoreA++;
        document.getElementById('scoreTeamA').textContent = scoreA;
    } else if (team === 'teamB') {
        scoreB++;
        document.getElementById('scoreTeamB').textContent = scoreB;
    }
}

function decreaseScore(team) {
    if (team === 'teamA' && scoreA > 0) {
        scoreA--;
        document.getElementById('scoreTeamA').textContent = scoreA;
    } else if (team === 'teamB' && scoreB > 0) {
        scoreB--;
        document.getElementById('scoreTeamB').textContent = scoreB;
    }
}