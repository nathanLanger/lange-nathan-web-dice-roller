/*
Author: Nathan Lange
Class:  Software Engineering
Description: Web Dice Roller
*/

//dice save states
var oneSaved=false;
var twoSaved=false;
var threeSaved=false;
var fourSaved=false;
var fiveSaved=false;

function rollUnsavedDice() {
    if(oneSaved!=true) rollOne();
    if(twoSaved!=true) rollTwo();
    if(threeSaved!=true) rollThree();
    if(fourSaved!=true) rollFour();
    if(fiveSaved!=true) rollFive();
    return;
}

function rollOne() {
    var roll = Math.floor(Math.random()*6+1);
    document.getElementById("dieOne").src="images/"+roll+".png";
    document.getElementById("dieOne").alt=roll;
    document.getElementById("val1").innerHTML=roll;
    return;
}

function rollTwo() {
    var roll = Math.floor(Math.random()*6+1);
    document.getElementById("dieTwo").src="images/"+roll+".png";
    document.getElementById("dieTwo").alt=roll;
    document.getElementById("val2").innerHTML=roll;
    return;
}

function rollThree() {
    var roll = Math.floor(Math.random()*6+1);
    document.getElementById("dieThree").src="images/"+roll+".png";
    document.getElementById("dieThree").alt=roll;
    document.getElementById("val3").innerHTML=roll;
    return;
}

function rollFour() {
    var roll = Math.floor(Math.random()*6+1);
    document.getElementById("dieFour").src="images/"+roll+".png";
    document.getElementById("dieFour").alt=roll;
    document.getElementById("val4").innerHTML=roll;
    return;
}

function rollFive() {
    var roll = Math.floor(Math.random()*6+1);
    document.getElementById("dieFive").src="images/"+roll+".png";
    document.getElementById("dieFive").alt=roll;
    document.getElementById("val5").innerHTML=roll;
    return;
}

function toggleOne() {
    if(oneSaved==false) {
        oneSaved=true;
        document.getElementById("saveOne").innerHTML="unsave";
    } else {
        oneSaved=false;
        document.getElementById("saveOne").innerHTML="save";
    }
    return;
}

function toggleTwo() {
    if(twoSaved==false) {
        twoSaved=true;
        document.getElementById("saveTwo").innerHTML="unsave";
    } else {
        twoSaved=false;
        document.getElementById("saveTwo").innerHTML="save";
    }
    return;
}

function toggleThree() {
    if(threeSaved==false) {
        threeSaved=true;
        document.getElementById("saveThree").innerHTML="unsave";
    } else {
        threeSaved=false;
        document.getElementById("saveThree").innerHTML="save";
    }
    return;
}

function toggleFour() {
    if(fourSaved==false) {
        fourSaved=true;
        document.getElementById("saveFour").innerHTML="unsave";
    } else {
        fourSaved=false;
        document.getElementById("saveFour").innerHTML="save";
    }
    return;
}

function toggleFive() {
    if(fiveSaved==false) {
        fiveSaved=true;
        document.getElementById("saveFive").innerHTML="unsave";
    } else {
        fiveSaved=false;
        document.getElementById("saveFive").innerHTML="save";
    }
    return;
}