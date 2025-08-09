/*jquery load function */
var input = document.querySelector('input[type="text"]');
var popupInput = document.querySelector('.popupInput');

input.addEventListener('click', function() {
  popupInput.classList.add('show-popup');
});

input.addEventListener('blur', function() {
  popupInput.classList.remove('show-popup');
});
let err;
;(function(){
    function id(v){ return document.getElementById(v); }
    function loadbar() {
      var ovrl = id("overlay"),
          prog = id("progress"),
          stat = id("progstat"),
          img = document.images,
          c = 0,
          tot = img.length;
      if(tot == 0) return doneLoading();
  
      function imgLoaded(){
        c += 1;
        var perc = ((100/tot*c) << 0) +"%";
        prog.style.width = perc;
        stat.innerHTML = "Loading, please wait..."+perc;
        if(c===tot) return doneLoading();
      }
      function doneLoading(){
        ovrl.style.opacity = 0;
        setTimeout(function(){
          ovrl.style.display = "none";
        }, 1200);
      }
      for(var i=0; i<tot; i++) {
        var tImg     = new Image();
        tImg.onload  = imgLoaded;
        tImg.onerror = imgLoaded;
        tImg.src     = img[i].src;
      }    
    }
    document.addEventListener('DOMContentLoaded', loadbar, false);
  }());
  
/* magic values */

let effect = document.getElementById("effect");
let currentFrame = 1;
let spriteSizeX = 192;
let spriteSizeY = 192;
let effectInterval;

/* custom function */
const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;


/* texts, graphics and buttons */
let dragonHealthText = document.querySelector("h4");
let playerHealthText = document.getElementById("hp");
let alertText = document.getElementById("alert");
let alertHealText = document.getElementById("healalert");
let playerEnergyText = document.getElementById("ene");
let damageText = document.getElementById("welcomemessage");
let turnText = document.getElementById("turn");
let messagebox;
let enragedicon = document.getElementById("enragedicon");
let playerHealth = document.getElementById("playerHealth");
let dragonHealth = document.getElementById("dragonHealth");
let popup = document.getElementById("popup");
let playerAtkText = document.getElementById("atk");
let skillActivated = document.getElementById("skillactive");
let healBuffIcon = document.getElementById("healbufficon");
let holyshieldbar = document.getElementById("holyshieldbar");
let holyshieldText = document.getElementById("holyshieldText");
let holyshieldicon = document.getElementById("holyshieldicon");
let dmgReceiveIcon = document.getElementById("dmgreceiveicon");
let poisonIcon = document.getElementById("poisonicon");
let doubledmgIcon = document.getElementById("doubledmgicon");
let playerClass = 'mage';
let switchButtonDefault = document.getElementById("mageclass");
let bleedIcon = document.getElementById("bleedicon");
let hunterIcon = document.getElementById("huntericon");
let hunterAtkIcon = document.getElementById("hunteratkicon");
let playerDefText = document.getElementById("def");

let atkBuffIcon = document.getElementById("atkbufficon");
let defBuffIcon = document.getElementById("defbufficon");

let playerCritText = document.getElementById("crit");
let playerCritDMGText = document.getElementById("critdmg");
let lightmarkicon = document.getElementById("lighticon");
let lightatkdebufficon = document.getElementById("lightatkdebufficon");
let lightdefbufficon = document.getElementById("lightdefbufficon");
let soulsiphonicon = document.getElementById("soulsiphonicon");
let mindgleaningicon = document.getElementById("mindgleaningicon");
let moonbufficon = document.getElementById("moonicon");
let bloodsigilicon = document.getElementById("bloodsigilicon");
let crimsonicon = document.getElementById("crimsonicon");
let playerMaxHPText = document.getElementById("maxhp");
let logcontainer = document.getElementById("logcontainer");
let pnode = "";
let d1icon = document.getElementById("d1icon");
let d2icon = document.getElementById("d2icon");
let d3icon = document.getElementById("d3icon");
let reflecticon = document.getElementById("reflecticon");
let stunicon = document.getElementById("stunicon");
let frosticon = document.getElementById("frosticon");
let frozenicon = document.getElementById("frozenicon");
/* character and skill stats */
let skill;
let playerLevel = 1;
let skillcd = [0,0,0,0,0]
let energy = 0;
let energyCon = 0;
let dragonLevel = 1;
let dragonMaxHP = 5000;
let playerMaxHP = 10000;
let dragonHP = dragonMaxHP;
let playerHP = playerMaxHP;
let playerMaxHPDefault = playerMaxHP;
let dragonATK = 500;
let playerdefaultatk = 28000;
let playerATK = playerdefaultatk;
let damageDragon;
let damagePlayer;
let state = false;
let turn = 0;
let eleDMG = 0;
let phyDMG = 0;
let cooldown = 0;
let shieldState = false;
let healAmount = playerMaxHP * 0.25 + random(100, 500);
let healBuff = false;
let totalReceiveHeal = healAmount + healAmount*0.5;
let holyshieldamount = 0;
let holyshieldstate = false;
let holyshieldcooldown = 0;
let dmgreceive = false;
let poisonDot = 0;
let poisonState = false;
let poisonTurn = 0;
let poisonTurnText = document.getElementById("poisonText");
let doubledmgState = false;
let doublemodifier = 0;
let huntermark = false;
let bleedState = false;
let bleedTurn = 0;
let bleedDot = 0;
let bleedTurnText = document.getElementById("bleedText");
let hunteratkbuff = false;
let hunteratkcooldown = 0;
let hunteratkmodifier = 0;
let attackBuff = false;
let defenseBuff = false;
let playerdefaultdef = 250;
let playerDEF = playerdefaultdef;

let dragonDEF = 50;
let critRate = 10;
let critHit = false;
let critDmg = 0.5;
let critRoll = 0;
let defaultCrit = 10;
let defaultCritDMG = 0.5;
let lightmark = 0;
let lightatkdebuff = false;
let lightatkdebuffturn = 0;
let lightdefbuff = false;
let lightdefbuffturn = 0;
let soulsiphon = false;
let mindgleaning = false;
let moonbuff = false;
let moonbuffturn = 0;
let moonbuffamount = 0;
let moonstate = false;
let bloodsigil = 0;
let crimsonbuff = false;
let crimsonturn = 0;
let hploss = playerMaxHP - playerHP;
let dragonATKTemp = 0;
let critDmgTemp = 0;
let critTemp = 0;
let bloodsigilmodifier = 0;
let dragonDEFTemp = 0;
let dragonDEFmodifier = 0;
let dragondefaultdef = dragonDEF;
let dragondefaultatk = dragonATK;
let playerDEFTemp = 0;
let playerATKTemp = 0;
let logmessage = "";
let hd = [0,0,0];
let dstate = [false,false,false];
let debuffatkstate = false;
let debuffAmount = 0;
let reflectstate = false;
let reflectturn = 0;
let reflectmodifier = 0;
let totaldebuffmodifier = 0;
let stun = false;
let stunmodifier = 1;
let stunturn = 0;
let coin = 0;
let atklvlText = document.getElementById("atkup");
let deflvlText = document.getElementById("defup");
let hplvlText = document.getElementById("hpup");
let critlvlText = document.getElementById("critup");
let lvlupPanel = document.getElementById("levelup");
let statslvl = [1,1,1,1];
let statstype;
let frost = 0;
let frozen = false;
let frozenturn = 0;
let frozenmodifier = 0;
let frostmodifier = 0;
let glacialdmgupmod = 0;
let glacialdmgdownmod = 0;
playerCritText.innerHTML = critRate + "%";
playerCritDMGText.innerHTML = parseInt(critDmg*100) + "%";
playerEnergyText.innerHTML = energy;
playerAtkText.innerHTML = playerATK;
playerHealthText.innerHTML = parseInt(playerHP);
playerMaxHPText.innerHTML = parseInt(playerMaxHP);
playerDefText.innerHTML = playerDEF;


let switchClass = (playerClassName) => {
    closeTutorial();
    closeSettings();
   
    switch (playerClassName) {
        case "archer":
            document.getElementById("icyglass").style.display = "none";
            document.getElementById("char1").setAttribute("src","images/archer.gif");
            document.getElementById("char1").style.width = "645px";
            document.getElementById("char1").style.top = "172px";
            document.getElementById("char1").style.right = "15px";
            switchButtonDefault.setAttribute("id","archerclass");
            switchButtonDefault.innerHTML = "Mech Archer";
            document.getElementById("playerHealth").setAttribute("max","8000");
            document.getElementById("playerHealth").setAttribute("value","8000");
            playerClass = 'archer';
            playerMaxHP = 8000;
            playerHP = playerMaxHP;
            playerMaxHPDefault = playerMaxHP;
            playerdefaultatk = 380;
            playerATK = playerdefaultatk;
            playerdefaultdef = 200;
            playerDEF = playerdefaultdef;
            defaultCrit = 20;
            critRate = defaultCrit;
            critHit = false;
            critDmg = 0.7;
            defaultCritDMG = critDmg;
            critRoll = 0;
            document.getElementById("skillactive").style.display = "none";
            document.getElementById("skillactive2").style.display = "block";
            document.getElementById("skillactive3").style.display = "none";
            document.getElementById("skillactive4").style.display = "none";
            document.getElementById("skillactive5").style.display = "none";
            document.getElementById("skillactive6").style.display = "none";
            document.getElementById("skillactive7").style.display = "none";
        break;
        case "mage":
            document.getElementById("icyglass").style.display = "none";
            document.getElementById("char1").setAttribute("src","images/mage.gif");
            document.getElementById("char1").style.width = "346px";
            document.getElementById("char1").style.top = "201px";
            document.getElementById("char1").style.right = "166px";
            switchButtonDefault.setAttribute("id","mageclass");
            switchButtonDefault.innerHTML = "Elemental Mage";
            document.getElementById("playerHealth").setAttribute("max","10000");
            document.getElementById("playerHealth").setAttribute("value","10000");
            playerClass = "mage";
            playerMaxHP = 10000;
            playerHP = playerMaxHP;
            playerMaxHPDefault = playerMaxHP;
            playerdefaultatk = 280;
            playerATK = playerdefaultatk;
            playerdefaultdef = 250;
            playerDEF = playerdefaultdef;
            defaultCrit = 10;
            critRate = defaultCrit;
            critHit = false;
            critDmg = 0.5;
            defaultCritDMG = critDmg;
            critRoll = 0;
            document.getElementById("skillactive").style.display = "block";
            document.getElementById("skillactive2").style.display = "none";
            document.getElementById("skillactive3").style.display = "none";
            document.getElementById("skillactive4").style.display = "none";
            document.getElementById("skillactive5").style.display = "none";
            document.getElementById("skillactive6").style.display = "none";
            document.getElementById("skillactive7").style.display = "none";
            break;
        case "paladin":
            document.getElementById("icyglass").style.display = "none";
            document.getElementById("char1").setAttribute("src","images/paladin.gif");
            document.getElementById("char1").style.width = "468px";
            document.getElementById("char1").style.top = "143px";
            document.getElementById("char1").style.right = "11px";
            switchButtonDefault.setAttribute("id","paladinclass");
            switchButtonDefault.innerHTML = "Paladin of Light";
            document.getElementById("playerHealth").setAttribute("max","12000");
            document.getElementById("playerHealth").setAttribute("value","12000");
            playerClass = "paladin";
            playerMaxHP = 12000;
            playerHP = playerMaxHP;
            playerMaxHPDefault = playerMaxHP;
            playerdefaultatk = 210;
            playerATK = playerdefaultatk;
            playerdefaultdef = 360;
            playerDEF = playerdefaultdef;
            defaultCrit = 15;
            critRate = defaultCrit;
            critHit = false;
            critDmg = 0.4;
            defaultCritDMG = critDmg;
            critRoll = 0;
            document.getElementById("skillactive").style.display = "none";
            document.getElementById("skillactive2").style.display = "none";
            document.getElementById("skillactive3").style.display = "block";
            document.getElementById("skillactive4").style.display = "none";
            document.getElementById("skillactive5").style.display = "none";
            document.getElementById("skillactive6").style.display = "none";
            document.getElementById("skillactive7").style.display = "none";
            break;
        case "necromancer":
            document.getElementById("icyglass").style.display = "none";
            document.getElementById("char1").setAttribute("src","images/necromancer.gif");
            document.getElementById("char1").style.width = "393px";
            document.getElementById("char1").style.top = "227px";
            document.getElementById("char1").style.right = "166px";
            switchButtonDefault.setAttribute("id","necromancerclass");
            switchButtonDefault.innerHTML = "Necromancer";
            document.getElementById("playerHealth").setAttribute("max","9000");
            document.getElementById("playerHealth").setAttribute("value","9000");
            playerClass = "necromancer";
            playerMaxHP = 9000;
            playerHP = playerMaxHP;
            playerMaxHPDefault = playerMaxHP;
            playerdefaultatk = 290;
            playerATK = playerdefaultatk;
            playerdefaultdef = 300;
            playerDEF = playerdefaultdef;
            defaultCrit = 13;
            critRate = defaultCrit;
            critHit = false;
            critDmg = 0.6;
            defaultCritDMG = critDmg;
            critRoll = 0;
            document.getElementById("skillactive").style.display = "none";
            document.getElementById("skillactive2").style.display = "none";
            document.getElementById("skillactive3").style.display = "none";
            document.getElementById("skillactive4").style.display = "block";
            document.getElementById("skillactive5").style.display = "none";
            document.getElementById("skillactive6").style.display = "none";
            document.getElementById("skillactive7").style.display = "none";
            break;
        case "knight":
            document.getElementById("icyglass").style.display = "none";
            document.getElementById("char1").setAttribute("src","images/knight.gif");
            document.getElementById("char1").style.width = "377px";
            document.getElementById("char1").style.top = "164px";
            document.getElementById("char1").style.right = "115px";
            switchButtonDefault.setAttribute("id","knightclass");
            switchButtonDefault.innerHTML = "Blood Knight";
            document.getElementById("playerHealth").setAttribute("max","15000");
            document.getElementById("playerHealth").setAttribute("value","15000");
            playerClass = "knight";
            playerMaxHP = 15000;
            playerHP = playerMaxHP;
            playerMaxHPDefault = playerMaxHP;
            playerdefaultatk = 230;
            playerATK = playerdefaultatk;
            playerdefaultdef = 300;
            playerDEF = playerdefaultdef;
            defaultCrit = 10;
            critRate = defaultCrit;
            critHit = false;
            critDmg = 0.5;
            defaultCritDMG = critDmg;
            critRoll = 0;
            document.getElementById("skillactive").style.display = "none";
            document.getElementById("skillactive2").style.display = "none";
            document.getElementById("skillactive3").style.display = "none";
            document.getElementById("skillactive4").style.display = "none";
            document.getElementById("skillactive5").style.display = "block";
            document.getElementById("skillactive6").style.display = "none";
            document.getElementById("skillactive7").style.display = "none";
            break;
         case "swordsinger":
            document.getElementById("icyglass").style.display = "none";
            document.getElementById("char1").setAttribute("src","images/swordsinger.gif");
            document.getElementById("char1").style.width = "563px";
            document.getElementById("char1").style.top = "133px";
            document.getElementById("char1").style.right = "32px";
            switchButtonDefault.setAttribute("id","swordsingerclass");
            switchButtonDefault.innerHTML = "Divine Swordsinger";
            document.getElementById("playerHealth").setAttribute("max","11000");
            document.getElementById("playerHealth").setAttribute("value","11000");
            playerClass = "swordsinger";
            playerMaxHP = 11000;
            playerHP = playerMaxHP;
            playerMaxHPDefault = playerMaxHP;
            playerdefaultatk = 220;
            playerATK = playerdefaultatk;
            playerdefaultdef = 330;
            playerDEF = playerdefaultdef;
            defaultCrit = 10;
            critRate = defaultCrit;
            critHit = false;
            critDmg = 0.5;
            defaultCritDMG = critDmg;
            critRoll = 0;
            document.getElementById("skillactive").style.display = "none";
            document.getElementById("skillactive2").style.display = "none";
            document.getElementById("skillactive3").style.display = "none";
            document.getElementById("skillactive4").style.display = "none";
            document.getElementById("skillactive5").style.display = "none";
            document.getElementById("skillactive6").style.display = "block";
            document.getElementById("skillactive7").style.display = "none";
            break;
            case "cryomancer":
                document.getElementById("icyglass").style.display = "block";
            document.getElementById("char1").setAttribute("src","images/cryomancer.gif");
            document.getElementById("char1").style.width = "548px";
            document.getElementById("char1").style.top = "122px";
            document.getElementById("char1").style.right = "13px";
            switchButtonDefault.setAttribute("id","cryomancerclass");
            switchButtonDefault.innerHTML = "Cryomancy Empress";
            document.getElementById("playerHealth").setAttribute("max","12000");
            document.getElementById("playerHealth").setAttribute("value","12000");
            playerClass = "cryomancer";
            playerMaxHP = 12000;
            playerHP = playerMaxHP;
            playerMaxHPDefault = playerMaxHP;
            playerdefaultatk = 230;
            playerATK = playerdefaultatk;
            playerdefaultdef = 310;
            playerDEF = playerdefaultdef;
            defaultCrit = 20;
            critRate = defaultCrit;
            critHit = false;
            critDmg = 0.7;
            defaultCritDMG = critDmg;
            critRoll = 0;
            document.getElementById("skillactive").style.display = "none";
            document.getElementById("skillactive2").style.display = "none";
            document.getElementById("skillactive3").style.display = "none";
            document.getElementById("skillactive4").style.display = "none";
            document.getElementById("skillactive5").style.display = "none";
            document.getElementById("skillactive6").style.display = "none";
            document.getElementById("skillactive7").style.display = "block";
            break;
           
    }
    console.log("error");
    resetGame();
}

function resetGame() {
    playerLevel = 1;
    document.getElementById("playerLvl").innerHTML = "Level 1";
    atklvlText.innerHTML = "Lvl. 1";
deflvlText.innerHTML = "Lvl. 1";
hplvlText.innerHTML = "Lvl. 1";
lvlupPanel.classList.remove('show');
statslvl = [1,1,1,1];
    skillcd = [0,0,0,0,0];
    document.getElementById("a1").style.opacity = 0;
    document.getElementById("a2").style.opacity = 0;
    document.getElementById("a3").style.opacity = 0;
    energy = 0;
    energyCon = 0;
    turn = 0;
    cooldown = 0;
    eleDMG = 0;
    phyDMG = 0;
    energyCon = 0;
    holyshieldcooldown = 0;
    dragonMaxHP = 5000;
    dragonHP = dragonMaxHP;
    holyshieldamount = 0;
    dragonATK = 500;
    dragonDEF = 50;
    state = false;
    healBuff = false;
    shieldState = false;
    holyshieldstate = false;
    
    doubledmgState = false;
    doublemodifier = 0;
    lightdefbuff = false;
    lightdefbuffturn = 0;
    moonbuff = false;
    moonbuffturn = 0;
    moonbuffamount = 0;
    moonstate = false;
    crimsonbuff = false;
    critDmgTemp = 0;
    critTemp = 0;
    bloodsigilmodifier = 0;
    dragonATKTemp = 0;
    dragonDEFTemp = 0;
    coin = 0;
    
    poisonDot = 0;
    poisonState = false;
    poisonTurn = 0;
    dmgreceive = false;
    hunteratkmodifier = 0;
    hunteratkbuff = false;
    hunteratkcooldown = 0;
    bleedState = false;
    bleedTurn = 0;
    bleedDot = 0;
    huntermark = false;
    lightmark = 0;
    lightatkdebuff = false;
    lightatkdebuffturn = 0;
    stun = false;
    stunmodifier = 1;
    stunturn = 0;
    soulsiphon = false;
    mindgleaning = false;
    bloodsigil = 0;
    frozen = false;
                frozenmodifier = 0;
                frostmodifier = 0;
                frozenturn = 0;
                frost = 0;
                glacialdmgdownmod = 0;
                glacialdmgupmod = 0;
                frosticon.style.display = "none";
                document.getElementById("frostnumber").innerHTML = "0";
                document.getElementById("frozennumber").innerHTML = "0";
                frozenicon.style.display = "none";
    dragonDEFmodifier = 0;
    playerDEFTemp = 0;
    playerATKTemp = 0;
    debuffAmount = 0;
    hd = [0,0,0];
    reflectstate = false;
    reflectturn = 0;
    reflectmodifier = 0;
    totaldebuffmodifier = 0;
    dragonLevel = 1;
    logmessage = "";
    pnode.innerHTML = "";
    logcontainer.innerHTML = "";
    turnText.innerHTML = "<p id='turn'>Turn: " + turn + "</p>";
    document.getElementById("cointext").innerHTML = "Available coins: "+ coin;
    document.getElementById("coin").innerHTML = coin;
    document.getElementById("glow").style.display = "none";
   
    healBuffIcon.style.display = "none";
    atkBuffIcon.style.display = "none";
    defBuffIcon.style.display = "none";
    attackBuff = false;
    defenseBuff = false;
    hunterIcon.style.display = "none";
    hunterAtkIcon.style.display = "none";
    holyshieldicon.style.display = "none";
    shieldicon.style.display = "none";
    doubledmgIcon.style.display = "none";
    lightdefbufficon.style.display = "none";
    moonbufficon.style.display = "none";
    crimsonicon.style.display = "none";
    reflecticon.style.display ="none";

    document.getElementById("dragonname").innerHTML = "Rosemary the Dark Queen Lvl. "+dragonLevel;
    poisonIcon.style.display = "none";
    bleedIcon.style.display = "none";
    dmgReceiveIcon.style.display = "none";
    lightmarkicon.style.display = "none";
    lightatkdebufficon.style.display = "none";
    soulsiphonicon.style.display = "none";
    mindgleaningicon.style.display = "none";
    bloodsigilicon.style.display = "none";
    d1icon.style.display ="none";
    d2icon.style.display ="none";
    d3icon.style.display ="none";
    
    document.getElementById("stun").style.display = "none";
    document.getElementById('holyshield').style.pointerevents = 'auto';
    document.getElementById('holyshield').style.cursor = 'pointer';
    document.getElementById('holyshield').style.opacity = '1';
    document.getElementById('holyshield').setAttribute("onclick", "holyShield()");

    document.getElementById('shield').style.pointerevents = 'auto';
    document.getElementById('shield').style.cursor = 'pointer';
    document.getElementById('shield').style.opacity = '1';
    document.getElementById('shield').setAttribute("onclick", "shield()");

    document.getElementById('heal').style.pointerevents = 'auto';
    document.getElementById('heal').style.cursor = 'pointer';
    document.getElementById('heal').style.opacity = '1';
    document.getElementById('heal').setAttribute("onclick", "heal()");

    document.getElementById('doubledmg').style.pointerevents = 'auto';
    document.getElementById('doubledmg').style.cursor = 'pointer';
    document.getElementById('doubledmg').style.opacity = '1';
    document.getElementById('doubledmg').setAttribute("onclick", "doubledmg()");
    damageText.innerHTML = "You have entered the lair of the big bad <span class='damage'>Rosemary.</span>";
    dragonHealth.value = dragonHP;
    dragonHealth.max = dragonMaxHP;
    playerEnergyText.innerHTML = energy;
    playerAtkText.innerHTML = playerATK;
    playerDefText.innerHTML = playerDEF;
    playerHealthText.innerHTML = parseInt(playerHP);
    playerHealth.value = playerHP;
    playerMaxHPText.innerHTML = parseInt(playerMaxHP);
    playerHealth.max = playerMaxHP;
    holyshieldText.innerHTML = parseInt(holyshieldamount);
    holyshieldbar.value = parseInt(holyshieldamount);
    playerCritText.innerHTML = critRate + "%";
    playerCritDMGText.innerHTML = parseInt(critDmg*100) + "%";
    effect.style.backgroundImage = "";
}

let LevelUp = (statstype) => {
    playerLevel++;
    
    switch (statstype) {
        case "atk":
            statslvl[0]++;
            playerdefaultatk = playerdefaultatk + playerdefaultatk*0.02*statslvl[0];
            playerATK = playerdefaultatk;
            playerAtkText.innerHTML = parseInt(playerATK);
            atklvlText.innerHTML = "Lvl. "+statslvl[0];
            break;
        case "def":
            statslvl[1]++;
            playerdefaultdef = playerdefaultdef + playerdefaultdef*0.02*statslvl[1];
            playerDEF = playerdefaultdef;
            playerDefText.innerHTML = parseInt(playerDEF);
            deflvlText.innerHTML = "Lvl. "+statslvl[1];
            
            break;
        case "hp":
            statslvl[2]++;
            playerMaxHPDefault = playerMaxHPDefault + playerMaxHPDefault*0.025*statslvl[2];
            playerMaxHPText.innerHTML = parseInt(playerMaxHP);
            playerMaxHP = playerMaxHPDefault;
            playerMaxHPText.innerHTML = playerMaxHP;
            playerHealth.value = playerHP;
            playerHealthText.innerHTML = parseInt(playerHP);
            playerHealth.max = playerMaxHPDefault;
            playerHP = playerMaxHP;
    
   
            hplvlText.innerHTML = "Lvl. "+statslvl[2];
            break;
        case "crit":
            statslvl[3]++;
            defaultCrit = defaultCrit + 3.5 + defaultCrit*0.008*statslvl[3];
            if (defaultCrit >= 100) {
                defaultCrit = 100;
                document.getElementById('critupbutton').style.pointerevents = 'none';
                document.getElementById('critupbutton').style.cursor = 'not-allowed';
                document.getElementById('critupbutton').style.opacity = '0.6';
                document.getElementById('critupbutton').setAttribute("onclick", "");
            }
            critRate = defaultCrit;
            playerCritText.innerHTML = parseInt(critRate) + "%";
            critlvlText.innerHTML = "Lvl. "+statslvl[3];
            break;
    }
    lightdefbuffturn=0;
    lightdefbuff=false;
    playerDEF = playerdefaultdef;
    lightdefbufficon.style.display="none";
    playerDefText.innerHTML = playerDEF.toFixed(0);
    document.getElementById("playerLvl").innerHTML = "Level "+playerLevel;
    document.getElementById("message").style.pointerEvents = "auto";
    lvlupPanel.classList.remove('show');
}



let helpText = (a) => {
   popup.classList.add('show');
    switch (a) {
        
        case "3":
            popup.innerHTML = "<h2>Blessing of Earth<hr>/support healing</h2><img src='images/healicon.png' class='icon'><br><p>Heal yourself by 25% (+100 ~ 500) of your HP. Cooldown: 3 turns.</p><button onclick='closePopup()'>close</button>";
            break;
        case "4":
            popup.innerHTML = "<h2>Blessing of Light<hr>/support shield</h2><img src='images/shield.png' class='icon'><br><p>Nullify 1 instance of attack from the dragon.</p><button onclick='closePopup()'>close</button>";
            break;
        case "5":
            popup.innerHTML = "<h2>Heaven's Will<hr>/support holyshield</h2><img src='images/holyshield.png' class='icon'><br><p>Grants you a shield of 50% of Max HP. Cooldown: 5 turns.</p><button onclick='closePopup()'>close</button>";
            break;
        case "6":
            popup.innerHTML = "<h2>Edge of Eternity<hr>/support doubledmg</h2><img src='images/doubledmg.png' class='icon'><br><p>Doubles the next instance of direct attack.</p><button onclick='closePopup()'>close</button>";
            break;
        case "s1":
            popup.innerHTML = "<h2>Icebolt</h2><img src='images/s1.png' class='icon'><br><p>Deals 110% DMG (+250) to the target and restore 20~25 energy.<br>Energy consumption: 0</p><button onclick='closePopup()'>close</button>";
            break;
        case "s2":
            popup.innerHTML = "<h2>Rain of Fire</h2><img src='images/s2.png' class='icon'><br><p>Deals 150% DMG (+450) to the target and makes it receive 30% more DMG for any subsequent direct attack.<br>Energy consumption: 30</p><button onclick='closePopup()'>close</button>";
            break;
        case "s3":
            popup.innerHTML = "<h2>Thunderstorm</h2><img src='images/s3.png' class='icon'><br><p>Deals 360% DMG (+1150) to the target. With Bane of Death, this skill's DMG is increased by 50%. Also, increases the amount of healing by 50% for the next heal skill. <br>Energy consumption: 60</p><button onclick='closePopup()'>close</button>";
            break;  
        case "s4":
            popup.innerHTML = "<h2>Bane of Death</h2><img src='images/s4.png' class='icon'><br><p>Deals 150% DMG (+150) and another 120% DMG to the target every turn for 3 turns. <br>Energy consumption: 25</p><button onclick='closePopup()'>close</button>";
            break;
        case "s5":
            popup.innerHTML = "<h2>Arrow of Light</h2><img src='images/s5.png' class='icon'><br><p>Deals 100% DMG (+200) to the target. Marks it with a Hunter's Mark for 1 turn. Restores 10~20 energy.<br>Energy consumption: 0</p><button onclick='closePopup()'>close</button>";
            break;
        case "s6":
            popup.innerHTML = "<h2>Bloodshed</h2><img src='images/s6.png' class='icon'><br><p>Deals 200% DMG (+470) to the target and another 125% DMG to the target every turn for 3 turns.<br>Energy consumption: 35</p><button onclick='closePopup()'>close</button>";
            break;
        case "s7":
            popup.innerHTML = "<h2>Piecing Shot</h2><img src='images/s7.png' class='icon'><br><p>Deals 380% DMG (+1050) to the target. If the target is under Hunter's Mark, removes the mark and deals an additional amount of 150% DMG. Also, if the target is under Bleed, this skill's DMG is increased by 30%.<br>Energy consumption: 60</p><button onclick='closePopup()'>close</button>";
            break;     
        case "s8":
            popup.innerHTML = "<h2>Hunter's Instinct</h2><img src='images/s8.png' class='icon'><br><p>Increases Critical DMG by 120% for 3 turns and Critical Rate until the next Crit Hit by 30% and mark the enemy with Hunter's Mark.<br>Energy consumption: 40</p><button onclick='closePopup()'>close</button>";
            break;
        case "s9":
            popup.innerHTML = "<h2>Righteousness</h2><img src='images/s9.png' class='icon'><br><p>Deals 120% DMG (+240) to the target and decreases its ATK by 20% for 2 turns and mark it with a Light mark. Restores 10~20 energy.<br>Energy consumption: 0</p><button onclick='closePopup()'>close</button>";
            break;
        case "s10":
            popup.innerHTML = "<h2>Rectitude</h2><img src='images/s10.png' class='icon'><br><p>Deals 140% DMG (+300) to the target and marks it with a Light mark. Also, increases self DEF by 30% for 2 turns.<br>Energy consumption: 30</p><button onclick='closePopup()'>close</button>";
            break;
        case "s11":
            popup.innerHTML = "<h2>Judgment</h2><img src='images/s11.png' class='icon'><br><p>Deals 330% DMG (+1315) to the target. For each Light mark on the target, deals an additional 25% of DEF as DMG and removes all Light marks.<br>Energy consumption: 60</p><button onclick='closePopup()'>close</button>";
            break;     
        case "s12":
            popup.innerHTML = "<h2>Honor</h2><img src='images/s12.png' class='icon'><br><p>Deals 160% DMG (+500) and another 12% of Max HP as DMG if more than 5 Light Marks are present. After use, removes 2 Light Marks. After that, grants a shield of 50% of his Max HP.<br>Energy consumption: 40</p><button onclick='closePopup()'>close</button>";
            break;
        case "s13":
            popup.innerHTML = "<h2>Soul Siphon</h2><img src='images/s13.png' class='icon'><br><p>Deals 110% DMG (+280) to the target and marks it with a Soul Siphon mark. Restores 20 energy if Moon buff is on, else restores 10 energy.<br>Energy consumption: 0</p><button onclick='closePopup()'>close</button>";
            break;
        case "s14":
            popup.innerHTML = "<h2>Mind Gleaning</h2><img src='images/s14.png' class='icon'><br><p>Deals 180% DMG (+700) to the target. If the target is under Soul Siphon mark, restores HP by 100% of DMG dealt. Places a Mind Gleaning mark on the enemy.<br>Energy consumption: 30</p><button onclick='closePopup()'>close</button>";
            break;     
        case "s15":
            popup.innerHTML = "<h2>Painless Death</h2><img src='images/s15.png' class='icon'><br><p>Deals 380% DMG (+1500) to the target. If: <br>-the target is under Soul Siphon, deals an additional 90% DMG and restores HP by 70% of DMG dealt. Then, removes the mark.<br><br>-the target is under Mind Gleaning, deals an additional 80% DMG and restores 50 energy. Then, removes the mark.<br><br>-the target is under both marks, deals an additional 200% DMG and restores both HP and energy to full. Then, removes all marks.<br><br>Energy consumption: 80</p><button onclick='closePopup()'>close</button>";
            break;
        case "s16":
            popup.innerHTML = "<h2>Song of Moonlight</h2><img src='images/s16.png' class='icon'><br><p>Deals 150% DMG (+600) to the target. If it has any mark, gains a Moon buff for 2 turns to increase ATK by 50%.<br>Energy consumption: 40</p><button onclick='closePopup()'>close</button>";
            break;
        case "s17":
            popup.innerHTML = "<h2>Blood Embrace</h2><img src='images/s17.png' class='icon'><br><p>Deals 120% DMG (+310) to the target. If his HP is less than 50%, gain 1 Blood Sigil. Restores 10~13 Energy.<br>Energy consumption: 0</p><button onclick='closePopup()'>close</button>";
            break;
        case "s18":
            popup.innerHTML = "<h2>Rosemary's Gift</h2><img src='images/s18.png' class='icon'><br><p>Deals 160% DMG (+670) to the target. Deals an additional amount of 10% of his loss HP as DMG. Gain 2 Blood Sigils.<br>Energy consumption: 30</p><button onclick='closePopup()'>close</button>";
            break;     
        case "s19":
            popup.innerHTML = "<h2>Painless Death</h2><img src='images/s19.png' class='icon'><br><p>Deals 410% DMG (+1800) to the target. For each Blood Sigil, deals an additional of 50% DMG and 3% of Max HP. Removes all Blood Sigils after that. For each removed Blood Sigil, grants a shield of 2% of his Max HP.<br>Energy consumption: 70</p><button onclick='closePopup()'>close</button>";
            break;
        case "s20":
            popup.innerHTML = "<h2>Crimson Vitality</h2><img src='images/s20.png' class='icon'><br><p>Increases his Max HP by 30% for 3 turns. Also, grants a shield of 30% of his loss HP.<br>Energy consumption: 60</p><button onclick='closePopup()'>close</button>";
            break;
        case "s21":
            popup.innerHTML = "<h2>Sacred Anthems</h2><img src='images/s21.png' class='icon'><br><p>Deals 100% DMG (+230) to the target. Applies 2 random Holy Debuffs from this list:<br>- Purity: decreases ATK by 4%.<br>- Justice: decreases DEF by 4%.<br>- Faith: increases incoming DMG by 2%.<br>Each debuff can stack up to 10 times. Also restores 15 Energy.</p><button onclick='closePopup()'>close</button>";
            break;
        case "s22":
            popup.innerHTML = "<h2>Revered Presence</h2><img src='images/s22.png' class='icon'><br><p>Heals for 3040% of ATK + 40% of lost HP. Over-healed amount will be converted into Holy Shield.<br>Energy consumption: 40</p><button onclick='closePopup()'>close</button>";
            break;
        case "s23":
            popup.innerHTML = "<h2>Divine Chant</h2><img src='images/s23.png' class='icon'><br><p>Deals 400% DMG (+1515) to the target and removes all debuffs. For each removed debuff, deals an additional of 100% DMG.<br>Energy consumption: 80</p><button onclick='closePopup()'>close</button>";
            break;     
        case "s24":
            popup.innerHTML = "<h2>Transcendent Hymn</h2><img src='images/s24.png' class='icon'><br><p>Provides a Reflect buff that reflects 50% of received DMG for 2 turns.<br>Energy consumption: 50</p><button onclick='closePopup()'>close</button>";
            break;
        case "p6":
            popup.innerHTML = "<h2>Divine Soprano - Passive</h2><img src='images/p6.png' class='icon'><br><p>When total debuffs reach more than 20, total DMG received by the target increases by 30%.</p><button onclick='closePopup()'>close</button>";
            break;
        case "p1":
            popup.innerHTML = "<h2>Arcane Erudition - Passive</h2><img src='images/p1.png' class='icon'><br><p>While Bane of Death effect is active, reduces the target's DEF by 35%.</p><button onclick='closePopup()'>close</button>";
            break;
        case "p2":
            popup.innerHTML = "<h2>Forest's Favor - Passive</h2><img src='images/p2.png' class='icon'><br><p>After Hunter's Mark is removed, heals self by 50% of Max HP.</p><button onclick='closePopup()'>close</button>";
            break;
        case "p3":
            popup.innerHTML = "<h2>Grace - Passive</h2><img src='images/p3.png' class='icon'><br><p>Each Lightmark removed restores 5~10 Energy.</p><button onclick='closePopup()'>close</button>";
            break;     
        case "p4":
            popup.innerHTML = "<h2>Forbidden Practice - Passive</h2><img src='images/p4.png' class='icon'><br><p>When both Marks are active, increases Critical Rate by 40% and Critical DMG by 100%.</p><button onclick='closePopup()'>close</button>";
            break;
        case "p5":
            popup.innerHTML = "<h2>Hardened Will - Passive</h2><img src='images/p5.png' class='icon'><br><p>Each Blood Sigil will decrease his incoming DMG by 2% (up to 20%) and increases his DMG by 3% (up to 30%).</p><button onclick='closePopup()'>close</button>";
            break;
        case "chest":
            popup.innerHTML = "<h2>Congrats!</h2><p>You've killed the dragon and received a bunch of gold!</p><button onclick='closePopup()'>close</button>";
            document.getElementById('cast').style.display = 'none';
            break;
        case "dragonstats":
            popup.innerHTML = "<h2>Rosemary The Dark Queen Lvl."+dragonLevel+" </h2><h3 class='flavortextminus'>Type: Big Bad Boss</h3><br><br><p>Rosemary's HP: "+dragonHP.toFixed(0)+"/"+dragonMaxHP.toFixed(0)+"</p><p>Dragon's ATK: "+dragonATK.toFixed(0)+"</p><p>Rosemary's DEF: "+dragonDEF.toFixed(0)+"</p><br><button onclick='closePopup()'>close</button>";
            break;
        case "enraged":
            popup.innerHTML = "<h2>The dragon has leveled up!</h2><p>Its ATK, DEF, and Max HP are higher and its HP is restored! Be careful!</p><button onclick='closePopup()'>close</button>";
            break;
        case "wrongcode":
            popup.innerHTML = "<h2>Warning</h2><p>Cannot cast the input spell.</p><button onclick='closePopup()'>close</button>";
            break;
    }
}
const magicField = document.getElementById('magicField');

magicField.addEventListener('keydown', function(event) {
  // Only handle the command if the Enter key is pressed
  if (event.key === 'Enter') {
    // Extract the command and argument from the input
    const input = magicField.value.trim().toLowerCase();
    const [command, ...args] = input.split(' ');

    // Combine the argument words into a single string and remove any spaces
    const arg = args.join('').trim();

    // Call the appropriate function based on the command
    switch (command) {
      case '/skill':
        castMagic(arg);
        break;
      case '/support':
        castSupport(arg);
        break;
      // Add more cases for other commands here
      default:
        popInput('command');
        console.log(`Invalid command: ${command}`);
    }

    // Clear the input field
    magicField.value = '';
  }
});



let castSupport = (supportSkill) => {
    switch (supportSkill) {
        case "healing":
            if (playerHP >= playerMaxHP) {
                playerHP = playerMaxHP;
                playerHealth.value = playerHP;
                playerHealthText.innerHTML = parseInt(playerHP);
               popup.classList.add('show');
                popup.innerHTML = "<p>Your HP is already at maximum!</p><button onclick='closePopup()'>close</button>";
            } else if (playerHP == 0) {
                playerHP = 0;
                playerHealth.value = playerHP;
                playerHealthText.innerHTML = parseInt(playerHP);
               popup.classList.add('show');
                popup.innerHTML = "<p>You are already dead.</p><button onclick='closePopup()'>close</button>";
            } else {
                if (healBuff == true) {
                    healAmount = healAmount + healAmount*0.5;
                    playerHP = playerHP + healAmount;
                    healBuff = false;
                    healBuffIcon.style.display = "none";
                    
                    playerHealthText.innerHTML = parseInt(playerHP);
                    healAmount = playerMaxHP * 0.25 + random(100, 500);
                } else {
                    playerHP = playerHP + healAmount;
                    
                    playerHealthText.innerHTML = parseInt(playerHP);
                }
                if (playerHP >= playerMaxHP) {
                    playerHP = playerMaxHP;
                }
                playerHealth.value = playerHP;
                playerHealthText.innerHTML = parseInt(playerHP);
                document.getElementById('heal').style.pointerevents = 'none';
                document.getElementById('heal').style.cursor = 'not-allowed';
                document.getElementById('heal').style.opacity = '0.6';
                document.getElementById('heal').setAttribute("onclick", "");
                document.getElementById("playerhealtext").innerHTML = healAmount.toFixed(0);
                        document.getElementById("playerhealtext").style.display = "block";
                        document.getElementById("playerhealtext").style.left = "849px";
                        document.getElementById("playerhealtext").style.top = "203px";
                        document.getElementById("playerhealtext").style.color = "darkgreen";
                        setTimeout(()=>{document.getElementById("playerhealtext").style.opacity = 0}, 1000);
                        document.getElementById("playerhealtext").style.opacity = 1;
                energy = energy + 70;
                if (energy < 100) {
                    playerEnergyText.innerHTML = energy;
                } else if (energy >= 100) {
                    energy = 100;
                    playerEnergyText.innerHTML = energy;
                }
                 cooldown = 3;
            }
            break;
            case "holyshield":
                holyshieldamount = parseInt(holyshieldamount) + playerMaxHP*0.5;
                if (holyshieldamount >= playerMaxHP) {
                    holyshieldamount = playerMaxHP;
                }
                holyshieldbar.value = parseInt(holyshieldamount);
                holyshieldText.innerHTML = parseInt(holyshieldamount);
                document.getElementById('holyshield').style.pointerevents = 'none';
                document.getElementById('holyshield').style.cursor = 'not-allowed';
                document.getElementById('holyshield').style.opacity = '0.6';
                document.getElementById('holyshield').setAttribute("onclick", "");
                holyshieldicon.style.display = "block";
                document.getElementById("glow").style.display = "block";
                holyshieldstate = true;
                holyshieldcooldown = 5;
            break;
            case "doubledmg":
                doubledmgState = true;
    doublemodifier = 1;
    document.getElementById('doubledmg').style.pointerevents = 'none';
    document.getElementById('doubledmg').style.cursor = 'not-allowed';
    document.getElementById('doubledmg').style.opacity = '0.6';
    document.getElementById('doubledmg').setAttribute("onclick", "");
    doubledmgIcon.style.display = "block";
                break;
            case "shield":
                shieldState = true;
    document.getElementById('shield').style.pointerevents = 'none';
    document.getElementById('shield').style.cursor = 'not-allowed';
    document.getElementById('shield').style.opacity = '0.6';
    document.getElementById('shield').setAttribute("onclick", "");
    shieldicon.style.display = "block";
                break;
            default:
                popInput('command');
                console.log("error");
        }
        
}

let healSkill = (healing) => {
    if (healBuff == true) {
        healing = healing + healing*0.5;
        playerHP = playerHP + healing;
        healBuff = false;
        healBuffIcon.style.display = "none";
        
        } else {
        playerHP = playerHP + healing;
    }
    if (playerHP >= playerMaxHP) {
        playerHP = playerMaxHP;
    }
    playerHealthText.innerHTML = parseInt(playerHP);
    document.getElementById("playerhealtext").innerHTML = healing.toFixed(0);
                document.getElementById("playerhealtext").style.display = "block";
                document.getElementById("playerhealtext").style.left = "849px";
                document.getElementById("playerhealtext").style.top = "203px";
                document.getElementById("playerhealtext").style.color = "darkgreen";
                setTimeout(()=>{document.getElementById("playerhealtext").style.opacity = 0}, 1000);
                document.getElementById("playerhealtext").style.opacity = 1;
    
}

let holyHealSkill = (holyhealing) => {
    if (healBuff == true) {
        holyhealing = holyhealing + holyhealing*0.5;
        playerHP = playerHP + holyhealing;
        healBuff = false;
        healBuffIcon.style.display = "none";
        } else {
        playerHP = playerHP + holyhealing;
    }
    if (playerHP > playerMaxHP) {
        
        holyshieldamount = playerHP - playerMaxHP;
        if (holyshieldamount >= playerMaxHP) {
            holyshieldamount = playerMaxHP;
        }
        playerHP = playerMaxHP;
        holyshieldbar.value = parseInt(holyshieldamount);
        holyshieldText.innerHTML = parseInt(holyshieldamount);
        holyshieldicon.style.display = "block";
        holyshieldstate = true;
        document.getElementById("glow").style.display = "block";
        
    }
    
    playerHealthText.innerHTML = parseInt(playerHP);
    document.getElementById("playerhealtext").innerHTML = holyhealing.toFixed(0);
                document.getElementById("playerhealtext").style.display = "block";
                document.getElementById("playerhealtext").style.left = "849px";
                document.getElementById("playerhealtext").style.top = "203px";
                document.getElementById("playerhealtext").style.color = "darkgreen";
                setTimeout(()=>{document.getElementById("playerhealtext").style.opacity = 0}, 1000);
                document.getElementById("playerhealtext").style.opacity = 1;

}

document.getElementById("dragonname").innerHTML = "Rosemary the Dark Queen Lvl. "+dragonLevel;


let skillName;
let castMagic = (skill) =>  {
    console.log(playerClass);
    //playerTurn
 
    try {
        switch (playerClass) {

            case 'mage':
                mageSkill(skill);
                break;
            case 'archer':
                archerSkill(skill);
                break;
            case 'paladin':
                paladinSkill(skill);
                break;
            case 'knight':
                knightSkill(skill);
                break;
            case 'necromancer':
                necroSkill(skill);
                break;
            case 'swordsinger':
                swordsingerSkill(skill);
                break;
            case 'cryomancer':
                cryomancerSkill(skill);
                break;
            default:
               
                return;

        }
    } catch (err) {
            switch (err.id) {
            case 'invalid-skill':
                console.log(err.id);
                popInput(err.id);
                break;
            case 'cooldown':
                console.log(err.id);
                popInput(err.id);
            default:
                break;
            }
            
        
        return;
    }
    
   
        
    

        if (energy < energyCon) {
            popInput('energy');
            energy = energy;
            playerEnergyText.innerHTML = energy;
            skillName = "";
            return;
        } else {

            document.getElementById('message').style.pointerEvents = "none";
            magicField.disabled = true;
            currentFrame = 1;
            
           
            switch (skill) {
                
                case "icebolt":
                    
                    
                    eleDMG = playerATK*1.1 + 250;
                    phyDMG = 0;
                    effect.style.backgroundImage = "url('images/skill1.png')";

                    break;
                case "rainoffire":
                    
                    eleDMG = playerATK*1.5 + 450;
                    phyDMG = 0;
                    skillcd[1] = 3;
                    effect.style.backgroundImage = "url('images/skill2.png')";
                    break;
                case "thunderstorm":
                    
                    if (poisonState == true) {
                        eleDMG = playerATK*5.1+1950;
                        eleDMG = eleDMG + eleDMG*0.6;
                    } else {
                        eleDMG = playerATK*5.1 + 1950;
                    }
                    phyDMG = 0;
                    skillcd[2] = 4;
                    healBuff = true;
                    healBuffIcon.style.display = "block";
                    effect.style.backgroundImage = "url('images/skill3.png')";
                    break;
                case "baneofdeath":
                    
                    eleDMG = playerATK*1.5 + 150;
                    phyDMG = 0;
                    skillcd[3] = 3;
                    effect.style.backgroundImage = "url('images/skill4.png')";
                    break;
                case "arrowoflight":
                    
                    phyDMG = playerATK + 200;
                    eleDMG = 0;
                    huntermark = true;
                    hunterIcon.style.display = "block";
                    effect.style.backgroundImage = "url('images/skill5.png')";
                    break;
                case "bloodshed":
                    phyDMG = playerATK*2 + 470;
                    eleDMG = 0;
                    skillcd[1] = 3;
                    document.getElementById("a6").style.opacity="0.6";
                    document.getElementById("a6").style.pointerEvents="none";
                    effect.style.backgroundImage = "url('images/skill6.png')";
                    break;
                case "piercingshot":
                    if (huntermark == false || bleedState == false) {
                        phyDMG = playerATK*4.8 + 1750;
                    } else if (huntermark == true || bleedState == false) {
                        phyDMG = playerATK*7.3 + 1750;
                        healSkill(playerMaxHP*0.5);
                        huntermark = false;
                        hunterIcon.style.display = "none";
                    } else if (huntermark == false || bleedState == true) {
                        phyDMG = playerATK*4.8 + 1750;
                        phyDMG = phyDMG + phyDMG*0.5;
                    } else if (huntermark == true || bleedState == true) {
                        phyDMG = playerATK*7.3 + 1050;
                        phyDMG = phyDMG + phyDMG*0.5;
                        healSkill(playerMaxHP*0.5);
                        huntermark = false;
                        hunterIcon.style.display = "none";
                    }
                    skillcd[2] = 3;
                    eleDMG = 0;
                    effect.style.backgroundImage = "url('images/skill7.png')";
                    break;
                case "huntersinstinct":
                     phyDMG = 0;
                     eleDMG = 0;
                     skillcd[3] = 3;
                    hunteratkbuff = true;
                    hunteratkcooldown = 2;
                    hunteratkmodifier = 0.2;
                    hunterAtkIcon.style.display = "block";
                    huntermark = true;
                    critRate = defaultCrit+30;
                    critDmg = defaultCritDMG+1.2;
                    playerCritText.innerHTML = critRate + "%";
                    playerCritDMGText.innerHTML = parseInt(critDmg*100) + "%";
                    hunterIcon.style.display = "block";
                    effect.style.backgroundImage = "url('images/skill8.png')";
                    break;
                case "righteousness":
                    phyDMG = playerATK*1.2 + 240;
                    eleDMG = 0;
                    if (lightmark < 10) {
                        lightmark = lightmark+1;
                        lightmarkicon.style.display = "block";
                        document.getElementById("lightText").innerHTML = lightmark + " stacks.";
                    } else {
                        lightmark = 10;
                        lightmarkicon.style.display = "block";
                        document.getElementById("lightText").innerHTML = lightmark + " stacks.";
                    }
                    effect.style.backgroundImage = "url('images/skill9.png')";
                    break;
                case "rectitude":
                    phyDMG = playerATK*1.4 + 300;
                    eleDMG = 0;
                    skillcd[1] = 2;
                    if (lightmark < 10) {
                        lightmark++;
                        lightmarkicon.style.display = "block";
                        document.getElementById("lightText").innerHTML = lightmark + " stacks.";
                    } else {
                        lightmark = 10;
                        lightmarkicon.style.display = "block";
                        document.getElementById("lightText").innerHTML = lightmark + " stacks.";
                    }
                    effect.style.backgroundImage = "url('images/skill10.png')";
                    break;
                case "judgment":
                   phyDMG = playerATK*3.3 + 1315 + playerDEF*lightmark;
                   eleDMG = 0;
                   skillcd[2] = 4;
                    effect.style.backgroundImage = "url('images/skill11.png')";
                    break;
                case "honor":
                     if (lightmark >= 5) {
                        phyDMG = playerATK*1.6 + 500 + playerDEF*2.5;
                        lightmark = lightmark-2;
                        document.getElementById("lightText").innerHTML = lightmark + " stacks.";
                    } else {
                        phyDMG = playerATK*1.6 + 500;
                    }
                    eleDMG = 0;
                    skillcd[3] = 3;
                    effect.style.backgroundImage = "url('images/skill12.png')";
                    break;
                case "soulsiphon":
                    eleDMG = playerATK*1.1 + 280;
                    phyDMG = 0;
                    soulsiphon = true;
                    soulsiphonicon.style.display = "block";
                    effect.style.backgroundImage = "url('images/skill13.png')";
                    break;
                case "mindgleaning":
                    eleDMG = playerATK*1.8 + 470;
                    phyDMG = 0;
                    skillcd[1] = 2;
                    mindgleaning = true;
                    mindgleaningicon.style.display = "block";
                    effect.style.backgroundImage = "url('images/skill14.png')";
                    break;
                case "painlessdeath":
                    if (soulsiphon == true && mindgleaning == true) {
                        eleDMG = playerATK*5.8 + 1500;
                    } else if (soulsiphon == true && mindgleaning == false) {
                        eleDMG = playerATK*4.7 + 1500;
                    } else if (soulsiphon == false && mindgleaning == true) {
                        eleDMG = playerATK*4.6 + 1500;
                    } else {
                        eleDMG = playerATK*3.8 + 1500;
                    }
                    phyDMG = 0;
                    skillcd[2] = 5;
                    effect.style.backgroundImage = "url('images/skill15.png')";
                    break;
                case "songofmoonlight":
                    eleDMG = playerATK*1.5 + 600;
                    phyDMG = 0;
                    skillcd[3] = 2;
                    if (soulsiphon==true || mindgleaning==true) {
                        if (moonstate==false) {     
                            playerATKTemp = playerATK;          
                            moonbuff = true;
                            moonbufficon.style.display = "block";
                            moonbuffturn = 2;
                            moonbuffamount = playerATK*0.5;
                            playerATK = playerATK + moonbuffamount;
                            playerAtkText.innerHTML = playerATK.toFixed(0);
                            moonstate = true;
                        } else {
                            moonbuff = true;
                            moonbufficon.style.display = "block";
                            moonbuffturn = 2;
                            moonstate = true;
                        }
                    }
                    effect.style.backgroundImage = "url('images/skill16.png')"; 
                    break;
                case "bloodembrace":
                    phyDMG = playerATK*1.2 + 310;
                    eleDMG = 0;
                    effect.style.backgroundImage = "url('images/skill17.png')";
                    break;
                case "rosemarysgift":
                    skillcd[1] = 2;
                    hploss=playerMaxHP-playerHP;
                    phyDMG = playerATK*1.6 + 670 + hploss*0.1;
                    eleDMG = 0;
                    effect.style.backgroundImage = "url('images/skill18.png')";
                    break;
                case "ichorretaliation":
                    phyDMG = playerATK*3.5 + 1200 + playerATK*0.25*bloodsigil + playerMaxHP*0.02*bloodsigil;
                    eleDMG = 0;
                    skillcd[2] = 4;
                    effect.style.backgroundImage = "url('images/skill19.png')";
                    break;
                case "crimsonvitality":
                    phyDMG = 0;
                    eleDMG = 0;
                    skillcd[3] = 4;
                    effect.style.backgroundImage = "url('images/skill20.png')";
                    break;          
               case "sacredanthems":
                    eleDMG = playerATK + 230;
                    phyDMG = 0;
                    
                    hd[random(0,3)]++;
                    hd[random(0,3)]++;
                    //d1
                        

                    if (hd[0] > 0) {
         
                        d1icon.style.display = "block";
                        if (hd[0] >= 10) {
                            hd[0] = 10;
                        } else if (hd[0] < 10) {
                            dragonATK = dragonATK - dragondefaultatk*0.04;
                        }
                        
                        document.getElementById("d1number").innerHTML = hd[0];
                    }
                    //
                     //d2
                     

                     if (hd[1] > 0) {
             
                         d2icon.style.display = "block";
                         if (hd[1] >= 10) {
                             hd[1] = 10;
                         } else if (hd[1] < 10) {
                             dragonDEF = dragonDEF - dragondefaultdef*0.04;
                         }
                         
                         document.getElementById("d2number").innerHTML = hd[1];
                     }
                     //d3
                    

                     if (hd[2] > 0) {
             
                         d3icon.style.display = "block";
                         if (hd[2] >= 10) {
                             hd[2] = 10;
                         } 
                         
                         document.getElementById("d3number").innerHTML = hd[2];
                     }
                    
                    effect.style.backgroundImage = "url('images/skill21.png')";
                    break;
                case "reveredpresence":
                    
                    eleDMG = 0;
                    phyDMG = 0;
                    skillcd[1] = 3;
                    hploss = playerMaxHP - playerHP;
                    holyHealSkill(playerATK*30.4+hploss*0.3);
                    effect.style.backgroundImage = "url('images/skill22.png')";
                    break;
                case "divinechant":
                   debuffAmount = hd[0]+hd[1]+hd[2];
                    eleDMG = playerATK*4 + 1515 + playerATK*debuffAmount;
                    phyDMG = 0;
                    hd = [0,0,0];
                    skillcd[2] = 4;
                    dragonATK = dragondefaultatk;
                    dragonDEF = dragondefaultdef;
                    d1icon.style.display = "none";
                    d2icon.style.display = "none";
                    d3icon.style.display = "none";
                    effect.style.backgroundImage = "url('images/skill23.png')";
                    break;
                case "transcendenthymn":
                   eleDMG = 0;
                   phyDMG = 0;
                   skillcd[3] = 4;
                    stun = true;
                    stunmodifier = 0;
                    stunturn = 2;
                    stunicon.style.display = "block";
         
                    effect.style.backgroundImage = "url('images/skill24.png')";
                    break;
                case "frostycrown":
                    phyDMG = 0;
                    eleDMG = playerATK*1.2 + 310;
                    if (frost < 3) {
                        frost++;
                    } else {
                        frost = 3;
                        
                    }
                    frostmodifier = frost/10;
                    document.getElementById("frostnumber").innerHTML = frost;
                    frosticon.style.display = "block";
                    //effect.style.backgroundImage = "url('images/skill29.png')";
                    break;
                case "frigidmind":
                    skillcd[1] = 3;
                    phyDMG = 0;
                    eleDMG = playerATK*2.2 + 570;
                    if (frost > 0) {
                        console.log(frost);
                        frozen = true;
                        frozenturn = frost;
                        frozenmodifier = 0.4;
                        document.getElementById("frozenicon").style.display = "block";
                        document.getElementById("frozennumber").innerHTML = frozenturn+1;
                    }
                    //effect.style.backgroundImage = "url('images/skill30.png')";
                    break;
                case "icyheart":
                    phyDMG = 0;
                    if (frozen == true) {
                        eleDMG = (playerATK*2.3 + 1800)*1.4*frost;
                        frost = 0;
                        frozen = false;
                        frozenturn = 0;
                        frozenmodifier = 0;
                        frosticon.style.display = "none";
                        document.getElementById("frostnumber").innerHTML = "0";
                        document.getElementById("frozenicon").style.display = "none";
                        document.getElementById("frozennumber").innerHTML = "0";
                    } else {
                        eleDMG = playerATK*5 + 1800;
                    }
                
                    skillcd[2] = 5;
                    //effect.style.backgroundImage = "url('images/skill19.png')";
                    break;
                case "glacialaura":
                    phyDMG = 0;
                    eleDMG = 0;
                    healSkill(playerMaxHP*0.3);
                    holyHealSkill(playerMaxHP*0.4);
                    glacialdmgdownmod = 0.3;
                    glacialdmgupmod = 0.2;
                    skillcd[3] = 3;
                    //effect.style.backgroundImage = "url('images/skill32.png')";
                    break; 
                                          
            }
            if (skillcd[1] > 0) {
                document.getElementById("a1").style.opacity = 1;
            }
            if (skillcd[2] > 0) {
                document.getElementById("a2").style.opacity = 1;
            }
            if (skillcd[3] > 0) {
                document.getElementById("a3").style.opacity = 1;
            }
            
           
               
            //raw damage calculation
            if (debuffAmount >= 20) {
                totaldebuffmodifier = 0.3;
            } else {
                totaldebuffmodifier = 0;
            }
            
            if (skill == "huntersinstinct" || skill == "crimsonvitality" || skill == "reveredpresence" || skill == "transcendenthymn" || skill == "glacialaura") {
                damagePlayer = 0;
                dragonDEFmodifier = 0;
            } else {
                dragonDEFmodifier = 1;
                critRoll = random(1,100);
                if (critRoll >= 100-critRate) {
                    critHit=true;
                    damagePlayer = random(50, 100) + phyDMG + eleDMG;
                    damagePlayer = damagePlayer+damagePlayer*critDmg;
                } else {
                    critHit=false;
                    damagePlayer = random(50, 100) + phyDMG + eleDMG;
                }
                playerCritText.innerHTML = critRate + "%";
                playerCritDMGText.innerHTML = parseInt(critDmg*100) + "%";
            }
           
            

            if (dmgreceive == true) {
                damagePlayer = damagePlayer + damagePlayer*0.3 + damagePlayer*doublemodifier + damagePlayer*hunteratkmodifier + damagePlayer*0.03*bloodsigil - dragonDEF*dragonDEFmodifier + damagePlayer*0.02*hd[2] + damagePlayer*totaldebuffmodifier + damagePlayer*frozenmodifier + damagePlayer*frostmodifier + damagePlayer*glacialdmgupmod;
                dragonHP -= damagePlayer.toFixed(0);
                 dmgreceive = false;
                dmgReceiveIcon.style.display = "none";
            } else {
                damagePlayer = damagePlayer + damagePlayer*doublemodifier + damagePlayer*hunteratkmodifier + damagePlayer*0.03*bloodsigil - dragonDEF*dragonDEFmodifier + damagePlayer*0.02*hd[2] + damagePlayer*totaldebuffmodifier+damagePlayer*frozenmodifier + damagePlayer*frostmodifier + damagePlayer*glacialdmgupmod;
                dragonHP -= damagePlayer.toFixed(0);
               
            }
 
             
            //check debuff states and calculate debuff dmg
            if (hunteratkcooldown == 0) {
                        hunteratkbuff = false;
                        hunteratkmodifier = 0;
                        hunterAtkIcon.style.display = "none";
                        critDmg = defaultCritDMG;
                        critRate = defaultCrit;
            } else {
                    hunteratkcooldown--;
            }

            playerCritText.innerHTML = critRate + "%";


            if (doubledmgState = true) {
                doubledmgState = false;
                doubledmgIcon.style.display = "none";
                doublemodifier = 0;
            }
            
            if (holyshieldamount==0 && holyshieldicon.style.display=="block") {
                holyshieldicon.style.display = "none";
                document.getElementById("glow").style.display = "none";
            }
             playerHealthText.innerHTML = parseInt(playerHP);
             if (poisonState == true) {
                poisonDot = playerATK*1.2;
                dragonHP = dragonHP - poisonDot;
                if (poisonTurn > 0) {
                    poisonTurn--;
                    poisonTurnText.innerHTML = poisonTurn + " turns left.<br>Passive: Decreases DEF by 35%.";
                } else if (poisonTurn == 0) {
                    poisonTurn = 0;
                    poisonDot = 0;
                    poisonState = false;
                    poisonIcon.style.display = "none";
                    dragonDEF = dragonDEFTemp;
                } 
            }
            if (reflectstate == true) {
                if (reflectturn > 0) {
                    reflectturn--;
                } else if (reflectturn == 0) {
                    reflectturn = 0;
                    reflectstate = false;
                    reflectmodifier = 0;
                    reflecticon.style.display = "none";
                }
            }
            if (bleedState == true) {
                bleedDot = playerATK*1.25;
                dragonHP = dragonHP - bleedDot;
                if (bleedTurn > 0) {
                    bleedTurn--;
                    bleedTurnText.innerHTML = bleedTurn + " turns left.";
                } else if (bleedTurn == 0) {
                    bleedTurn = 0;
                    bleedDot = 0;
                    bleedState = false;
                    bleedIcon.style.display = "none";
                }
            }
            if (lightatkdebuff == true) {
                if (lightatkdebuffturn > 0) {
                    lightatkdebuffturn--;
                } else if (lightatkdebuffturn == 0) {
                    dragonATK = dragondefaultatk;
                    lightatkdebuffturn=0;
                    lightatkdebuff=false;
                    lightatkdebufficon.style.display="none";
                }
            }
            if (lightdefbuff == true) {
                if (lightdefbuffturn > 0) {
                    lightdefbuffturn--;
                    playerDefText.innerHTML = playerDEF.toFixed(0);
                } else if (lightdefbuffturn == 0) {
                    lightdefbuffturn=0;
                    lightdefbuff=false;
                    playerDEF = playerdefaultdef;
                    lightdefbufficon.style.display="none";
                    playerDefText.innerHTML = playerDEF.toFixed(0);
                }
            }
            if (moonbuff == true) {
                if (moonbuffturn > 0) {
                    moonbuffturn--;
                } else if (moonbuffturn == 0) {
                    moonbuffturn=0;
                    playerATK = playerATKTemp;
                    playerAtkText.innerHTML = playerATK;
                    moonbuff = false;
                    moonstate = false;
                    moonbufficon.style.display="none";
                }
            }
            if (crimsonbuff == true) {
                if (crimsonturn > 0) {
                    crimsonturn--;
                    playerMaxHP = playerMaxHPDefault + playerMaxHPDefault*0.3;
                } else if (crimsonturn == 0) {
                    crimsonturn = 0;
                    playerMaxHP = playerMaxHPDefault;
                    crimsonbuff = false;
                    crimsonicon.style.display = "none";
                }
            }

            if (stun == true) {
                if (stunturn > 0) {
                    stunturn--;

                } else if (stunturn == 0) {
                    stunturn = 0;
                    stun = false;
                    
                    reflectstate = true;
                    reflecticon.style.display = "block";
                    reflectturn = 3;
                    reflectmodifier = 0.5;
                    stunicon.style.display = "none";
                }
            }
            if (frozen == true) {
                if (frozenturn > 0) {
                    frozenturn--;
                    document.getElementById("frozennumber").innerHTML = frozenturn+1;

                } else if (frozenturn == 0) {
                    frozenturn = 0;
                    frozen = false;
                    frozenmodifier = 0;
                    frozenicon.style.display = "none";
                    document.getElementById("frozennumber").innerHTML = "0";
                }
            }
            playerMaxHPText.innerHTML = parseInt(playerMaxHP);
            playerHealth.max = playerMaxHP;
            //energy calculation and effect application
            switch (skill) {
                case "icebolt":
                    energy = energy + random(20, 25);
                    if (energy >= 100) {
                        energy = 100;
                    }
                    
                    break;
                    case "frostycrown":
                        energy = energy + 15;
                        if (energy >= 100) {
                            energy = 100;
                        }
                        break;
                 case "sacredanthems":
                    energy = energy + 15;
                    if (energy >= 100) {
                        energy = 100;
                    }
                    break;
                case "arrowoflight":
                    energy = energy + random(10, 20);
                    if (energy >= 100) {
                        energy = 100;
                    }
                    break;
                case "soulsiphon":
                    if (moonbuff==true) {
                        energy = energy+20;
                    } else {
                        energy = energy+10;
                    }
                        if (energy >= 100) {
                            energy = 100;
                        }
                    break;
                case "rainoffire":
                    dmgreceive = true;
                    dmgReceiveIcon.style.display = "block";
                    energy = energy - energyCon;
                    break;
                case "baneofdeath":
                    if (poisonState==false) {
                        poisonState = true;
                        poisonTurn = 3;
                        dragonDEFTemp = dragonDEF;
                        dragonDEF = dragonDEF - dragonDEF*0.35;
                    } else {
                        poisonState = true;
                        poisonTurn = 3;
                    }
                    
                    poisonTurnText.innerHTML = poisonTurn + " turns left.<br><br>Passive: Decreases DEF by 35%.";
                    poisonIcon.style.display = "block";
                    energy = energy - energyCon;
                    break;
                case "bloodshed":
                    bleedState = true;
                    bleedTurn = 3;
                    bleedTurnText.innerHTML = bleedTurn + " turns left.";
                    bleedIcon.style.display = "block";
                    energy = energy - energyCon;
                    break;
                case "piercingshot":
                    energy = energy - energyCon;
                   
                    break;
                case "righteousness":
                    energy = energy + random(10, 20);
                    if (energy >= 100) {
                        energy = 100;
                    }
                    if (lightatkdebuff == false) {
                        lightatkdebuff = true;
                        lightatkdebuffturn = 2;
                        dragonATK = dragonATK - dragonATK*0.2;
                    } else {
                        lightatkdebuff = true;
                        lightatkdebuffturn = 2;
                    }
                    lightatkdebufficon.style.display = "block";
                    break;
                case "rectitude":
                    energy = energy - energyCon;
                    if (lightdefbuff == false) {
                  
                        lightdefbuff = true;
                        lightdefbuffturn = 2;
                        playerDEF = playerdefaultdef + playerdefaultdef*0.3;
                    } else {
                        lightdefbuff = true;
                        lightdefbuffturn = 2;
                    }
                    playerDefText.innerHTML = playerDEF.toFixed(0);
                    lightdefbufficon.style.display = "block";  
                    break;
                case "honor":
                    energy = energy - energyCon;
                    holyshieldstate = true;
                    document.getElementById("glow").style.display = "block";
                    holyshieldamount = parseInt(holyshieldamount) + playerMaxHP*0.5;
                    holyshieldText.innerHTML = parseInt(holyshieldamount);
                    holyshieldbar.value = parseInt(holyshieldamount);
                    break;
                case "judgment":
                    energy = energy - energyCon;
                    energy = energy + lightmark*random(5,10);
                    if (energy >=100) {
                        energy=100;
                    }
                    lightmark = 0;
                    lightmarkicon.style.display = "none";
                    break;
                case "mindgleaning":
                    if (soulsiphon == true) {
                        healSkill(damagePlayer.toFixed(0)*2.5);
                    }
                    energy = energy - energyCon;
                    break;
                case "painlessdeath":
                    energy = energy - energyCon;
                    if (soulsiphon == true && mindgleaning == true) {
                        healSkill(playerMaxHP);
                        energy = 100;
                    } else if (soulsiphon == true && mindgleaning == false) {
                        healSkill(damagePlayer.toFixed(0)*0.7);
                    } else if (soulsiphon == false && mindgleaning == true) {
                        energy = energy+50;
                        if (energy >=100) {
                            energy=100;
                        }
                    }
                    soulsiphon = false;
                    mindgleaning = false;
                    soulsiphonicon.style.display = "none";
                    mindgleaningicon.style.display = "none";
                    break;
                case "bloodembrace":
                        energy = energy + random(10, 13);
                        if (energy >= 100) {
                            energy = 100;
                        }
                        if (playerHP <= playerMaxHP*0.5) {
                            if (bloodsigil < 10) {
                            bloodsigil++;
                            } else {
                                bloodsigil=10;
                            }
                            bloodsigilicon.style.display = "block";
                            document.getElementById("bloodsigilText").innerHTML = bloodsigil + " stacks.";
                        }
                        break;
                case "rosemarysgift":
                        energy = energy - energyCon;
                        if (bloodsigil < 10) {
                            bloodsigil=bloodsigil+2;
                            } else {
                                bloodsigil=10;
                            }
                        bloodsigilicon.style.display = "block";
                        document.getElementById("bloodsigilText").innerHTML = bloodsigil + " stacks.";
                        break;
                case "ichorretaliation":
                    energy = energy - energyCon;
                    holyshieldstate = true;
                    document.getElementById("glow").style.display = "block";
                    holyshieldamount = parseInt(holyshieldamount) + playerMaxHP*0.02*bloodsigil;
                    holyshieldText.innerHTML = parseInt(holyshieldamount);
                    holyshieldbar.value = parseInt(holyshieldamount);
                    bloodsigil=0;
                    bloodsigilicon.style.display = "none";
                    break;
                case "crimsonvitality":
                    energy = energy - energyCon;
                    hploss = playerMaxHP - playerHP;
                    crimsonicon.style.display = "block";
                    if (crimsonbuff == false) {
                        crimsonbuff = true;
                        crimsonturn = 3;
                        playerMaxHP = playerMaxHPDefault + playerMaxHPDefault*0.3;
                    } else {
                        crimsonbuff = true;
                        crimsonturn = 3;
                    }
                    holyshieldstate = true;
                    document.getElementById("glow").style.display = "block";
                    holyshieldamount = parseInt(holyshieldamount) + hploss*0.3;
                    holyshieldText.innerHTML = parseInt(holyshieldamount);
                    holyshieldbar.value = parseInt(holyshieldamount);
                    playerMaxHPText.innerHTML = parseInt(playerMaxHP);
                    playerHealth.max = playerMaxHP;
                    break;
                default:
                    energy = energy - energyCon;
                    break;
                
            }
            critDmgTemp = critDmg;
            critTemp = critRate;
            if (soulsiphon == true && mindgleaning == true) {
                critDmg = critDmg + 1;
                critRate = critRate + 40;
            } else {
                critDmg = critDmgTemp;
                critRate = critTemp;
            }
            playerEnergyText.innerHTML = energy;
            
            
            playerCritText.innerHTML = parseInt(critRate) + "%";
            playerCritDMGText.innerHTML = parseInt(critDmg*100) + "%";
            
            if (cooldown == 0) {
                document.getElementById('heal').style.pointerevents = 'auto';
                document.getElementById('heal').style.cursor = 'pointer';
                document.getElementById('heal').style.opacity = '1';
                document.getElementById('heal').setAttribute("onclick", "heal()");
            }

            if (holyshieldcooldown == 0) {
                document.getElementById('holyshield').style.pointerevents = 'auto';
                document.getElementById('holyshield').style.cursor = 'pointer';
                document.getElementById('holyshield').style.opacity = '1';
                document.getElementById('holyshield').setAttribute("onclick", "holyShield()");
            }
            
           
           if (holyshieldamount >= playerMaxHP) {
                holyshieldamount = playerMaxHP;
            }
            holyshieldText.innerHTML = parseInt(holyshieldamount);
                    holyshieldbar.value = parseInt(holyshieldamount);
            playerHealth.value = playerHP;
            dragonHealth.value = dragonHP;
            dragonHealth.max = dragonMaxHP;
            playerHealthText.innerHTML = parseInt(playerHP);
            playerMaxHPText.innerHTML = parseInt(playerMaxHP);
            playerHealth.max = playerMaxHP;
            document.getElementById("sigilnumber").innerHTML = bloodsigil;
            document.getElementById("lightnumber").innerHTML = lightmark;
            let totalDot = bleedDot + poisonDot;
            
            if (critHit == false) {
                document.getElementById("playerdmgtext").innerHTML = damagePlayer.toFixed(0);
                document.getElementById("playerdmgtext").style.display = "block";
                document.getElementById("playerdmgtext").style.left = "311px";
                setTimeout(()=>{document.getElementById("playerdmgtext").style.opacity = 0}, 1000);
                document.getElementById("playerdmgtext").style.opacity = 1;
                logmessage = "You did <span class='damage'>" + damagePlayer.toFixed(0) + " (+" +totalDot.toFixed(0)+ " DoT DMG)</span> DMG on the dragon by using <span class='damage'>" + skillName + "</span>.";
                
                
            } else {
                document.getElementById("playerdmgtext").innerHTML = "CRIT<br>" + damagePlayer.toFixed(0);
                document.getElementById("playerdmgtext").style.display = "block";
                document.getElementById("playerdmgtext").style.left = "311px";
                setTimeout(()=>{document.getElementById("playerdmgtext").style.opacity = 0}, 1000);
                document.getElementById("playerdmgtext").style.opacity = 1;
                logmessage = "You did a <span class='damage'>Critical DMG</span> of <span class='damage'>" + damagePlayer.toFixed(0) + " (+" +totalDot.toFixed(0)+ " DoT DMG)</span> on the dragon by using <span class='damage'>" + skillName + "</span>.";
                
                critHit=false;

            }
            turn++;
            damageText.innerHTML = logmessage;
            pnode = document.createElement("p");
            pnode.innerHTML = "<span class='damage'>Turn "+ turn + "</span>: " + logmessage;
            logcontainer.prepend(pnode);

            if (poisonDot > 0) {
                document.getElementById("playerpoisontext").innerHTML = poisonDot.toFixed(0);
                document.getElementById("playerpoisontext").style.display = "block";
                setTimeout(()=>{document.getElementById("playerpoisontext").style.opacity = 0}, 1000);
                document.getElementById("playerpoisontext").style.opacity = 1;
            }
            if (bleedDot > 0) {
                document.getElementById("playerbleedtext").innerHTML = bleedDot.toFixed(0);
                document.getElementById("playerbleedtext").style.display = "block";
                setTimeout(()=>{document.getElementById("playerbleedtext").style.opacity = 0}, 1000);
                document.getElementById("playerbleedtext").style.opacity = 1;
            }
            clearInterval(effectInterval);
            effectInterval = setInterval(playNextFrame, 60);
           
    turnText.innerHTML = "The dragon is going to deal some damage...";
    
    setTimeout(()=>{
        

        
        //damage
        if (shieldState == false) {
            damageDragon = dragonATK + random(300, 500) - playerDEF;
            damageDragon = damageDragon - damageDragon*0.02*bloodsigil - damageDragon*glacialdmgdownmod;
        } else {
            damageDragon = 0;
            shieldState = false;
            shieldicon.style.display = "none";
        }
        if (stun == true || frozen == true) {
            damageDragon = 0;
        }
        if (holyshieldstate == true) {
            holyshieldamount -= damageDragon.toFixed(0);
            if (holyshieldamount <= 0) {
                playerHP = playerHP - -holyshieldamount;
                holyshieldamount = 0;
                holyshieldstate = false;
                document.getElementById("glow").style.display = "none";
                glacialdmgdownmod = 0;
                glacialdmgupmod = 0;
            }
            holyshieldbar.value = parseInt(holyshieldamount);
            holyshieldText.innerHTML = parseInt(holyshieldamount);
            
        } else {
            playerHP -= damageDragon.toFixed(0);
        }
        
     

        document.getElementById("playerdmgtext").innerHTML = damageDragon.toFixed(0);
                document.getElementById("playerdmgtext").style.display = "block";
                document.getElementById("playerdmgtext").style.left = "849px";
                setTimeout(()=>{document.getElementById("playerdmgtext").style.opacity = 0}, 1000);
                document.getElementById("playerdmgtext").style.opacity = 1;
        dragonHP = dragonHP - damageDragon*reflectmodifier;
        holyshieldText.innerHTML = parseInt(holyshieldamount);
        holyshieldbar.value = parseInt(holyshieldamount);
playerHealth.value = playerHP;
dragonHealth.value = dragonHP;
dragonHealth.max = dragonMaxHP;
playerHealthText.innerHTML = parseInt(playerHP);
playerMaxHPText.innerHTML = parseInt(playerMaxHP);
playerHealth.max = playerMaxHP;
        //reflect
        if (dragonHP <= 0) {
                dragonMaxHP = dragonMaxHP + dragonMaxHP*0.1 + random(50,95)*dragonLevel;
                dragonHP = dragonMaxHP;
                dragonDEF = dragonDEFTemp;
                dragondefaultatk= dragondefaultatk + dragondefaultatk*0.1 + random(15,25)*dragonLevel;
                dragondefaultdef = dragondefaultdef + dragondefaultdef*0.1 + random(13,21)*dragonLevel;
                dragonATK = dragondefaultatk;
                dragonDEF = dragondefaultdef;
                poisonDot = 0;
                poisonState = false;
                poisonTurn = 0;
                dmgreceive = false;
                dragonLevel++;
                bleedState = false;
                bleedTurn = 0;
                bleedDot = 0;
                
                lightmark = 0;
                lightatkdebuff = false;
                lightatkdebuffturn = 0;
                stun = false;
                stunmodifier = 1;
                stunturn = 0;
                frozen = false;
                frozenmodifier = 0;
                frozenturn = 0;
                frost = 0;
                frosticon.style.display = "none";
                document.getElementById("frostnumber").innerHTML = "0";
                document.getElementById("frozennumber").innerHTML = "0";
                soulsiphon = false;
                mindgleaning = false;
    
                hd = [0,0,0];
                poisonIcon.style.display = "none";
                bleedIcon.style.display = "none";
                dmgReceiveIcon.style.display = "none";
                lightmarkicon.style.display = "none";
                lightatkdebufficon.style.display = "none";
                soulsiphonicon.style.display = "none";
                mindgleaningicon.style.display = "none";
                
                d1icon.style.display = "none";
                d2icon.style.display = "none";
                d3icon.style.display = "none";
                
                dragonHealth.value = dragonHP;
                dragonHealth.max = dragonMaxHP;
                document.getElementById("dragonname").innerHTML = "Rosemary the Dark Queen Lvl. "+dragonLevel;
        setTimeout(()=>{
            document.getElementById("message").style.pointerEvents = "none";
            lvlupPanel.classList.add('show');
            
        }, 900);
                stunicon.style.display = "none";
                frozenicon.style.display = "none";
                
    
    }
    
         if (playerHP < 0) {
            playerHP = 0;
            document.getElementById("tutorial").style.display = "block";
            document.getElementById("tutorial").innerHTML = "<h5 id='welcome'>Oh No!</h5><p>You're dead. Better luck next time.</p><br><img src='images/dead.gif' style='width: 150px'><br><button onClick='window.location.reload();'>try again</button>";
     
            
        }
            turnText.innerHTML = "<p id='turn'>Turn: " + turn + "</p>";
            cooldown--;
            holyshieldcooldown--;
            logmessage = "The dragon did <span class='damage'>" + damageDragon.toFixed(0) + "</span> DMG on you.";
            damageText.innerHTML = logmessage;
            pnode = document.createElement("p");
            pnode.innerHTML = "<span class='damage'>Turn "+ turn + "</span>: " + logmessage;
            logcontainer.prepend(pnode);
            let cointemp = random(100,200)*dragonLevel*0.3;
            coin = coin + cointemp;
            document.getElementById("coin").innerHTML = coin.toFixed(0);
            document.getElementById("cointext").innerHTML = "Available coins: "+ coin.toFixed(0);
            logmessage = "You received <span class='damage'>"+cointemp.toFixed(0)+" coins.";
            pnode = document.createElement("p");
            pnode.innerHTML = "<span class='damage'>Turn "+ turn + "</span>: " + logmessage;
            logcontainer.prepend(pnode);
        }, 1000);
       setTimeout(()=>{
        document.getElementById('message').style.pointerEvents = "auto";
        magicField.disabled = false;
        if (skillcd[1] > 0) {
            skillcd[1]--;
        }
        if (skillcd[2] > 0) {
            skillcd[2]--;
        }
        if (skillcd[3] > 0) {
            skillcd[3]--;
        }
        
        

        
    },1500)}

    if (skillcd[1] == 1) {
        document.getElementById("a1").style.opacity = 0;
    }
    if (skillcd[2] == 1) {
        document.getElementById("a2").style.opacity = 0;
    }
    if (skillcd[3] == 1) {
        document.getElementById("a3").style.opacity = 0;
    }
    
}
    

function playNextFrame() {
    currentFrame++;
    if (currentFrame >= 12) {
        currentFrame = 12;
        effect.style.display = "none";
        clearInterval(effectInterval);
    } else {
        effect.style.display = "block";
        effect.style.backgroundPositionX = ((currentFrame % 2) * spriteSizeX * -1) + "px";
        effect.style.backgroundPositionY = (Math.floor(currentFrame / 2) * spriteSizeY * -1) + "px";
    }
}

function closePopup() {
    popup.classList.remove('show');
}
function openMenu() {

    setTimeout(()=>{document.getElementById("menu").style.opacity = 1}, 100);
    document.getElementById("menu").style.pointerEvents = "auto";
    document.getElementById("learnmore").setAttribute("onclick","closeMenu()");
}

function closeMenu() {
    document.getElementById("menu").style.pointerEvents = "none";
    setTimeout(()=>{document.getElementById("menu").style.opacity = 0}, 100);
    document.getElementById("learnmore").setAttribute("onclick","openMenu()");
    
}

function closeTutorial() {
    document.getElementById("tutorial").style.display = "none";
}

function openShop() {
    document.getElementById("shop").style.display = "block";
    setTimeout(()=>{document.getElementById("shop").style.opacity = 1}, 200);
}

function closeShop() {
    document.getElementById("shop").style.display = "none";
    setTimeout(()=>{document.getElementById("shop").style.opacity = 0}, 200);

}

function buyBuff(type) {
    const cost = 100;
    if (coin < cost) {
        alert('Not enough coins!');
        return;
    }
    switch (type) {
        case 'atk':
            if (attackBuff) {
                alert('Attack buff already active!');
                return;
            }
            coin -= cost;
            playerATK += playerATK * 0.3;
            playerAtkText.innerHTML = parseInt(playerATK);
            atkBuffIcon.style.display = 'block';
            attackBuff = true;
            break;
        case 'def':
            if (defenseBuff) {
                alert('Defense buff already active!');
                return;
            }
            coin -= cost;
            playerDEF += playerDEF * 0.3;
            playerDefText.innerHTML = parseInt(playerDEF);
            defBuffIcon.style.display = 'block';
            defenseBuff = true;
            break;
    }
    document.getElementById('coin').innerHTML = coin.toFixed(0);
    document.getElementById('cointext').innerHTML = 'Available coins: ' + coin.toFixed(0);
}


function openSettings() {
    document.getElementById("settings").style.display = "block";
    setTimeout(()=>{document.getElementById("settings").style.opacity = 1}, 200);
}

function closeSettings() {
    document.getElementById("settings").style.display = "none";
    setTimeout(()=>{document.getElementById("settings").style.opacity = 0}, 200);
    
}

function openLog() {
    document.getElementById("log").style.display = "block";
    setTimeout(()=>{document.getElementById("log").style.opacity = 1}, 200);
}

function closeLog() {
    document.getElementById("log").style.display = "none";
    setTimeout(()=>{document.getElementById("log").style.opacity = 0}, 200);
    
}
function openCat(evt, catName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(catName).style.display = "block";
    evt.currentTarget.className += " active";
  }



function mageSkill(skill) {
    //define the skill consumption
    switch (skill) {
       case "icebolt":
               skillName = "Icebolt";
               energyCon = 0;
           break;
       case "rainoffire":
           if (skillcd[1] > 0) {
            err = new Error("Skill is in cooldown.");
            err.id = 'cooldown';
            throw err;
           } else {
           skillName = "Rain of Fire";
           energyCon = 30;
           }
           break;
       case "thunderstorm":
           if (skillcd[2] > 0) {
              err = new Error("Skill is in cooldown.");
            err.id = 'cooldown';
            throw err;
           } else {
           skillName = "Thunderstorm";
           energyCon = 60;
           }
           break;
       case "baneofdeath":
           if (skillcd[3] > 0) {
              err = new Error("Skill is in cooldown.");
            err.id = 'cooldown';
            throw err;
           } else {
           skillName = "Bane of Death";
           energyCon = 25;
           }
           break;
        default:
            err = new Error("Invalid skill for your class.");
            err.id = 'invalid-skill';
            throw err;
   }
}

function archerSkill (skill) {
    switch (skill) {
            case "arrowoflight":
                skillName = "Arrow of Light";
                energyCon = 0;
                break;
            case "bloodshed":
                if (skillcd[1] > 0) {
                  err = new Error("Skill is in cooldown.");
            err.id = 'cooldown';
            throw err;
                } else {
                skillName = "Bloodshed";
                energyCon = 35;
                }
                break;
            case "piercingshot":
                if (skillcd[2] > 0) {
                  err = new Error("Skill is in cooldown.");
            err.id = 'cooldown';
            throw err;
                } else {
                skillName = "Piercing Shot";
                energyCon = 60;
                }
                break;
            case "huntersinstinct":
                if (skillcd[3] > 0) {
                  err = new Error("Skill is in cooldown.");
            err.id = 'cooldown';
            throw err;
                } else {
                skillName = "Hunter's Instinct";
                energyCon = 40;
                }
                break;
                default:
                    throw new Error("Invalid skill for your class."); 
    }
}

function paladinSkill(skill) {
    switch (skill) {
    
    case "righteousness":
                
    skillName = "Righteousness";
    energyCon = 0;
    break;
case "rectitude":
    if (skillcd[1] > 0) {
        err = new Error("Skill is in cooldown.");
            err.id = 'cooldown';
            throw err;
    } else {
    skillName = "Rectitude";
    energyCon = 30;
    }
    break;
case "judgment":
    if (skillcd[2] > 0) {
        err = new Error("Skill is in cooldown.");
            err.id = 'cooldown';
            throw err;
    } else {
    skillName = "Judgment";
    energyCon = 60;
    }
    break;
case "honor":
    if (skillcd[3] > 0) {
        err = new Error("Skill is in cooldown.");
            err.id = 'cooldown';
            throw err;
    } else {
    skillName = "Honor";
    energyCon = 40;
    }
    break;
    default:
        throw new Error("Invalid skill for your class.");
}
}

function necroSkill(skill) {
    switch (skill) {
        case "soulsiphon":
                
        skillName = "Soul Siphon";
        energyCon = 0;
        
        break;
    case "mindgleaning":
        if (skillcd[1] > 0) {
           err = new Error("Skill is in cooldown.");
            err.id = 'cooldown';
            throw err;
        } else {
        skillName = "Mind Gleaning";
        energyCon = 30;
        }
        break;
    case "painlessdeath":
        if (skillcd[2] > 0) {
           err = new Error("Skill is in cooldown.");
            err.id = 'cooldown';
            throw err;
        } else {
        skillName = "Painless Death";
        energyCon = 80;
        }
        break;
    case "songofmoonlight":
        if (skillcd[3] > 0) {
           err = new Error("Skill is in cooldown.");
            err.id = 'cooldown';
            throw err;
        } else {
        skillName = "Song of Moonlight";
        energyCon = 40;
        }
        break;
        default:
            throw new Error("Invalid skill for your class."); 
    }
}

function knightSkill(skill) {
    switch (skill) {
        case "bloodembrace":
            skillName = "Blood Embrace";
            energyCon = 0;
            break;
        case "rosemarysgift":
            if (skillcd[1] > 0) {
               err = new Error("Skill is in cooldown.");
            err.id = 'cooldown';
            throw err;
            } else {
            skillName = "Rosemary's Gift";
            energyCon = 30;
            }
            break;
        case "ichorretaliation":
            if (skillcd[2] > 0) {
               err = new Error("Skill is in cooldown.");
            err.id = 'cooldown';
            throw err;
            } else {
            skillName = "Ichor Retaliation";
            energyCon = 70;
            }
            break;
        case "crimsonvitality":
            if (skillcd[3] > 0) {
               err = new Error("Skill is in cooldown.");
            err.id = 'cooldown';
            throw err;
            } else {
            skillName = "Crimson Vitality";
            energyCon = 60;
            }
            break;       
        default:
            throw new Error("Invalid skill for your class.");  
    }
}

function swordsingerSkill(skill) {
    switch (skill) {
        case "sacredanthems":
                skillName = "Sacred Anthems";
                energyCon = 0;
                break;
            case "reveredpresence":
                if (skillcd[1] > 0) {
                  err = new Error("Skill is in cooldown.");
            err.id = 'cooldown';
            throw err;
                } else {
                skillName = "Revered Presence";
                energyCon = 40;
                }
                break;
            case "divinechant":
                if (skillcd[2] > 0) {
                  err = new Error("Skill is in cooldown.");
            err.id = 'cooldown';
            throw err;
                } else {
                skillName = "Divine Chant";
                energyCon = 80;
                }
                break;
            case "transcendenthymn":
                if (skillcd[3] > 0) {
                  err = new Error("Skill is in cooldown.");
            err.id = 'cooldown';
            throw err;
                } else {
                skillName = "Transcendent Hymn";
                energyCon = 50;
                }
                break;       
        default:
            err = new Error("Invalid skill for your class.");
            err.id = 'invalid-skill';
            throw err;
    }
}
function cryomancerSkill(skill) {
    switch (skill) {
            case "frostycrown":
                skillName = "Frosty Crown";
                energyCon = 0;
                break;
            case "frigidmind":
                if (skillcd[1] > 0) {
                  err = new Error("Skill is in cooldown.");
            err.id = 'cooldown';
            throw err;
                } else {
                skillName = "Frigid Mind";
                energyCon = 40;
                }
                break;
            case "icyheart":
                if (skillcd[2] > 0) {
                  err = new Error("Skill is in cooldown.");
            err.id = 'cooldown';
            throw err;
                } else {
                skillName = "Icy Heart";
                energyCon = 80;
                }
                break;
            case "glacialaura":
                if (skillcd[3] > 0) {
                  err = new Error("Skill is in cooldown.");
            err.id = 'cooldown';
            throw err;
                } else {
                skillName = "Glacial Aura";
                energyCon = 40;
                }
                break;       
        default:
            err = new Error("Invalid skill for your class.");
            err.id = 'invalid-skill';
            throw err;
    }
}
function popInput(err) {
    switch (err) {
      
        case 'invalid-skill':
            popupInput.innerHTML = 'Invalid skill for your class.';

            break;
        case 'energy':
            popupInput.innerHTML = 'Not enough energy.';
            break;
        case 'cooldown':
            popupInput.innerHTML = 'Skill is in cooldown.';
        break;
        default:
            popupInput.innerHTML = 'Invalid command.';
            break;
        
    };
    popupInput.classList.add('show-popup');
    popupInput.style.backgroundColor = "#6e0a0ae8";
    setTimeout(function() {
        popupInput.classList.remove('show-popup');
        popupInput.style.backgroundColor = "#000000e8";
        popupInput.innerHTML = 'Try using /skill or /support followed by a skill id.';
    }, 1500);
    input.addEventListener('blur', function() { 
        popupInput.style.backgroundColor = "#000000e8";
        popupInput.classList.remove('show-popup');
        popupInput.innerHTML = 'Try using /skill or /support followed by a skill id.';
        
    })
}

/*
 * RESPONSIVE CODE
 */

const container = document.querySelector("#container");
let gameRatio, windowRatio;

function resizeGame() {
  // Cache queries and calculations
  const containerWidth = container.offsetWidth;
  const containerHeight = container.offsetHeight;
  const innerWidth = window.innerWidth;
  const innerHeight = window.innerHeight;

  gameRatio = containerWidth / containerHeight;
  windowRatio = innerWidth / innerHeight;

  // Use position fixed instead of absolute
  container.style.position = "fixed";
  container.style.left = "50%";
  container.style.top = "50%";
  container.style.transform = "translate(-50%, -50%)";

  let newScale;
  if (gameRatio > windowRatio) {
    newScale = innerWidth / containerWidth;
  } else {
    newScale = innerHeight / containerHeight;
  }
  // Clamp the scale to a maximum of 1
  newScale = Math.min(newScale, 1);
  container.style.transform += ` scale(${newScale})`;
}

// Use requestAnimationFrame for smoother resizing
window.addEventListener('resize', () => {
  requestAnimationFrame(resizeGame);
});

// Initial call
resizeGame();

