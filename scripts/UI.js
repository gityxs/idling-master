function loadScreen(){
    loadPlayerScreen();
    if(options.menu=="Bosses"){
        printBoss();
    }
    else if(options.menu=="Training"){
        printTraining();
    }
    else if(options.menu=="Dojo"){
        printDojo();
    }
    else if(options.menu=="Shop"){
        printShop();
    }
    else if(options.menu=="Stats"){
        printStats();
    }
    else if(options.menu=="Mine"){
        printMine();
    }
    else if(options.menu=="Crafting"){
        printCrafting();
    }
    else if(options.menu=="Farm"){
        printFarm();
    }
    else if(options.menu=="Regroup"){
        printRegroup();
    }
    else if(options.menu=="RegroupShop"){
        printRegroupShop();
    }
    else if(options.menu=="Warehouse"){
        printWarehouse();
    }
    else if(options.menu=="Arena"){
        printArena();
    }
}

function printNumber(number){
    if(number<10) return String(number).substr(0,4)
    if(number<100) return String(number).substr(0,5)
    if(number<1000) return String(number).substr(0,6);
    return number.toPrecision(4);
}

function printStats(){
    var string = '<h1 style="text-align: center">Statistics</h1><hr/>';
    string += '<p><b>Total Bosses Defeated:</b>'+stats.totalBossesKilles+'</p>';
    string += '<p><b>Total Dojo Enemies Defeated:</b>'+stats.totalDojoEnemies+'</p>';
    string += '<p><b>Total Time:</b>'+printTime(stats.totalSeconds)+'</p>';
    string += '<p><b>Total Ores Mined:</b>'+printNumber(stats.totalOresMined)+'</p>';
    string += '<p><b>Total Crops Grown:</b>'+printNumber(stats.totalCropsGrown)+'</p>';
    string += '<p><b>Total Arena Bosses Killed:</b>'+printTime(stats.totalArenaBosses)+'</p>';
    string += '<p><b>Total Contracts Finished:</b>'+printNumber(stats.totalContractsDone)+'</p>';
    string += '<p><b>Total Warehouse Rank Ups:</b>'+printNumber(stats.totalRankUpsWarehouse)+'</p>';
    string+='<button style="width: 100%" class="w3-button w3-dark-gray" onclick="newGame()">Reset Save</button>';
    document.getElementById('Screen').innerHTML=string;
}

function loadTutorial(){
    var string = '<h1 style="text-align: center">Welcome to Idling Master</h1><hr/>';
    string += "<p> Welcome to Idling Master, on this game you have the power to multiply yourself, with that power you decide to fight the local Bosses League. Do you have what it takes to overtake the challenge?</p>"
    string+= "<p>You hsould start by heading out to the Training Area and get stronger to defeat the bosses on the Bosses Area.</p>"
    string+="<p>There are some locked areas too that you unlock by beating bosses. These new Menus unlock new ways to get stronger using your clones.</p>"
    string+="<p>I hope you have fun with the game.</p><p>Have any questions or want to suggest stuff? Go to Discord and tell me. There is also a TODO list there so if you wanna checkout stuff that will be added to the game hop on and have fun!</p>"
    string+="<p>Thanks for trying this game out!</p><hr/><h1>Changelog:</h1><ul><li>1.0</li><ul><li>Game Released</li></ul></ul>"
    document.getElementById('Screen').innerHTML=string;
}


//MENU SWITCHING
function goToTraining(){
    options.menu="Training";
    loadScreen();
}

function goToMine(){
    options.menu="Mine";
    loadScreen();
}

function goToCrafting(){
    options.menu="Crafting";
    loadScreen();
}

function goToBosses(){
    options.menu="Bosses";
    loadScreen();
}

function goToDojo(){
    options.menu="Dojo";
    loadScreen();
}

function goToShop(){
    options.menu="Shop";
    loadScreen();
}

function goToStats(){
    options.menu="Stats";
    loadScreen();
}

function goToFarm(){
    options.menu="Farm";
    loadScreen();
}

function goToWarehouse(){
    options.menu="Warehouse";
    loadScreen();
}

function goToArena(){
    options.menu="Arena";
    loadScreen();
}

function goToRegroup(){
    options.menu="Regroup";
    loadScreen();
}
function goToRegroupShop(){
    options.menu="RegroupShop";
    loadScreen();
}

function printBoss(){
    var string = '<h1 style="text-align: center">Boss Menu</h1><hr/>';
    string += '<h1>Boss Number '+values.boss+'</h1>';
    string += '<h3>Boss Attack: '+printNumber(curBoss.attack)+'</h3><br/>';
    string += '<h3>Boss Health: '+printNumber(curBoss.curhp)+'/'+printNumber(curBoss.hp)+'</h2>';
    string += '<button class="w3-button w3-red" onclick="action.attacking=true;">Figth</button><hr/>';
    string += pastConsole;
    document.getElementById('Screen').innerHTML=string;
}

function printTime(seconds){
    if(seconds<10) return "00:0"+seconds
    if(seconds<60) return "00:"+seconds
    if(seconds<600) return "0"+Math.floor(seconds/60)+":"+seconds%60
    if(seconds<3600) {
        var minutes = Math.floor(seconds/60)
        seconds -= minutes*60;
        if(seconds<10) return minutes+":0"+seconds
        return minutes+":"+seconds%60
    }
    var hours = Math.floor(seconds/3600);
    seconds-=hours*3600
    return hours+":"+printTime(seconds)
}

//Player UI

function loadPlayerScreen(){
    var string = "<h1>Player Stats:</h1><hr/>";
    string+= '<h4>HP:'+printNumber(player.curhp)+'/'+printNumber(player.hp)+'</h4>';
    string+= '<h4>Strength:'+printNumber(getRawStrength())+'</h4>';
    string+= '<h4>Defense:'+printNumber(getRawDefense())+'</h4>';
    string+= '<h4>Clone Counter:'+printNumber(player.idleClones)+'/'+printNumber(player.maxClones)+'</h4>';
    string+= '<h4>Moneys:'+printNumber(player.money)+'</h4>'
    document.getElementById('Player').innerHTML=string;
}

function unlockButton(string){
    if(string=="Zone1"){
        document.getElementById(string).innerHTML="Dojo";
        document.getElementById(string).disabled=false;
    }
    if(string=="Zone2"){
        document.getElementById(string).innerHTML="Mine";
        document.getElementById(string).disabled=false;
    }
    if(string=="Zone3"){
        document.getElementById(string).innerHTML="Farm";
        document.getElementById(string).disabled=false;
    }
    if(string=="Zone4"){
        document.getElementById(string).innerHTML="Warehouse";
        document.getElementById(string).disabled=false;
    }
    if(string=="Zone5"){
        document.getElementById(string).innerHTML="Arena";
        document.getElementById(string).disabled=false;
    }
    if(string=="Rebirth"){
        document.getElementById(string).innerHTML="Regroup";
        document.getElementById(string).disabled=false;
        document.getElementById("RebirthShop").innerHTML="Regroup Shop";
        document.getElementById("RebirthShop").disabled=false;
    }
}

function lockButton(string){
    if(string=="Zone1"){
        document.getElementById(string).innerHTML="It's Locked Boys";
        document.getElementById(string).disabled=true;
    }
    if(string=="Zone2"){
        document.getElementById(string).innerHTML="No No No...";
        document.getElementById(string).disabled=true;
    }
    if(string=="Zone3"){
        document.getElementById(string).innerHTML="It's not for you today";
        document.getElementById(string).disabled=true;
    }
    if(string=="Zone4"){
        document.getElementById(string).innerHTML="Cmon, unlock me";
        document.getElementById(string).disabled=true;
    }
    if(string=="Zone5"){
        document.getElementById(string).innerHTML="Wow, I'm locked";
        document.getElementById(string).disabled=true;
    }
}