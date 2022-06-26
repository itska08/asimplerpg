/* magic values */
let magicArray = ["icebolt", "firerain", "thunderstorm", "bane", "arrowoflight", "bloodshed", "piercingshot", "huntersinstinct","righteousness","rectitude","judgment","honor","soulsiphon","mindgleaning","painlessdeath","songofmoonlight","bloodembrace","rosemarysgift","ichorretaliation","crimsonvitality","sacredanthems","reveredpresence","solarchant","transcendenthymn"];
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
let playerClass = "mage";
let switchButtonDefault = document.getElementById("mageclass");
let bleedIcon = document.getElementById("bleedicon");
let hunterIcon = document.getElementById("huntericon");
let hunterAtkIcon = document.getElementById("hunteratkicon");
let playerDefText = document.getElementById("def");

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
/* character and skill stats */
let skill;
let energy = 0;
let energyCon = 0;
let dragonMaxHP = 20000;
let playerMaxHP = 10000;
let dragonHP = dragonMaxHP;
let playerHP = playerMaxHP;
let playerMaxHPDefault = playerMaxHP;
let dragonATK = 1500;
let playerATK = 300;
let playerdefaultatk = 300;
let damageDragon;
let damagePlayer;
let state = false;
let turn = 0;
let skillATK = 0;
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
let playerDEF = 300;
let dragonDEF = 400;
let critRate = 10;
let critHit = false;
let critDmg = 0.5;
let critRoll = 0;
let defaultCrit = 0;
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

playerCritText.innerHTML = critRate + "%";
playerCritDMGText.innerHTML = parseInt(critDmg*100) + "%";
playerEnergyText.innerHTML = energy;
    playerAtkText.innerHTML = playerATK;
    playerHealthText.innerHTML = parseInt(playerHP);
    playerMaxHPText.innerHTML = parseInt(playerMaxHP);
    playerDefText.innerHTML = playerDEF;

let switchClass = (playerClass) => {
    closeSettings();
    closeTutorial();
    switch (playerClass) {
        case "archer":
            document.getElementById("char1").setAttribute("src","images/archer.gif");
            document.getElementById("char1").style.top = "199px";
            switchButtonDefault.setAttribute("id","archerclass");
            switchButtonDefault.innerHTML = "Forest Archer";
            document.getElementById("playerHealth").setAttribute("max","8000");
            document.getElementById("playerHealth").setAttribute("value","8000");
            playerClass = "archer";
            playerMaxHP = 8000;
            playerHP = playerMaxHP;
            playerMaxHPDefault = playerMaxHP;
            playerATK = 380;
            playerdefaultatk = 380;
            playerDEF = 200;
            critRate = 20;
            defaultCrit = critRate;
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
        break;
        case "mage":
            document.getElementById("char1").setAttribute("src","images/mage.gif");
            document.getElementById("char1").style.top = "199px";
            switchButtonDefault.setAttribute("id","mageclass");
            switchButtonDefault.innerHTML = "Elemental Mage";
            document.getElementById("playerHealth").setAttribute("max","10000");
            document.getElementById("playerHealth").setAttribute("value","10000");
            playerClass = "mage";
            playerMaxHP = 10000;
            playerHP = playerMaxHP;
            playerMaxHPDefault = playerMaxHP;
            playerATK = 280;
            playerdefaultatk = 280;
            playerDEF = 250;
            critRate = 10;
            defaultCrit = critRate;
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
            break;
        case "paladin":
            document.getElementById("char1").setAttribute("src","images/paladin.gif");
            document.getElementById("char1").style.top = "199px";
            switchButtonDefault.setAttribute("id","paladinclass");
            switchButtonDefault.innerHTML = "Paladin of Light";
            document.getElementById("playerHealth").setAttribute("max","12000");
            document.getElementById("playerHealth").setAttribute("value","12000");
            playerClass = "paladin";
            playerMaxHP = 12000;
            playerHP = playerMaxHP;
            playerMaxHPDefault = playerMaxHP;
            playerATK = 210;
            playerdefaultatk = 110;
            playerDEF = 360;
            critRate = 15;
            defaultCrit = critRate;
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
            break;
        case "necromancer":
            document.getElementById("char1").setAttribute("src","images/necromancer.gif");
            document.getElementById("char1").style.top = "116px";
            switchButtonDefault.setAttribute("id","necromancerclass");
            switchButtonDefault.innerHTML = "Necromancer";
            document.getElementById("playerHealth").setAttribute("max","9000");
            document.getElementById("playerHealth").setAttribute("value","9000");
            playerClass = "necromancer";
            playerMaxHP = 9000;
            playerHP = playerMaxHP;
            playerMaxHPDefault = playerMaxHP;
            playerATK = 290;
            playerdefaultatk = 290;
            playerDEF = 300;
            critRate = 13;
            defaultCrit = critRate;
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
            break;
        case "knight":
            document.getElementById("char1").setAttribute("src","images/knight.gif");
            document.getElementById("char1").style.top = "199px";
            switchButtonDefault.setAttribute("id","knightclass");
            switchButtonDefault.innerHTML = "Blood Knight";
            document.getElementById("playerHealth").setAttribute("max","15000");
            document.getElementById("playerHealth").setAttribute("value","15000");
            playerClass = "knight";
            playerMaxHP = 15000;
            playerHP = playerMaxHP;
            playerMaxHPDefault = playerMaxHP;
            playerATK = 230;
            playerdefaultatk = 230;
            playerDEF = 300;
            critRate = 10;
            defaultCrit = critRate;
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
            break;
         case "songtress":
            document.getElementById("char1").setAttribute("src","images/songtress.gif");
            document.getElementById("char1").style.top = "199px";
            switchButtonDefault.setAttribute("id","songtressclass");
            switchButtonDefault.innerHTML = "Solar Songtress";
            document.getElementById("playerHealth").setAttribute("max","15000");
            document.getElementById("playerHealth").setAttribute("value","15000");
            playerClass = "songtress";
            playerMaxHP = 11000;
            playerHP = playerMaxHP;
            playerMaxHPDefault = playerMaxHP;
            playerATK = 220;
            playerdefaultatk = 190;
            playerDEF = 330;
            critRate = 10;
            defaultCrit = critRate;
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
            
            break;
    }
    resetGame();
}

function resetGame() {

    energy = 0;
    energyCon = 0;
    turn = 0;
    cooldown = 0;
    skillATK = 0;
    energyCon = 0;
    holyshieldcooldown = 0;
    dragonMaxHP = 20000;
    dragonHP = dragonMaxHP;
    holyshieldamount = 0;
    dragonATK = 1500;
    dragonDEF = 400;
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
    
    dragonDEFmodifier = 0;
    playerDEFTemp = 0;
    playerATKTemp = 0;
    debuffAmount = 0;
    hd = [0,0,0];
    reflectstate = false;
    reflectturn = 0;
    reflectmodifier = 0;
    totaldebuffmodifier = 0;
    
    logmessage = "";
    pnode.innerHTML = "";
    logcontainer.innerHTML = "";
    turnText.innerHTML = "<p id='turn'>Turn: " + turn + "</p>";
   
    enragedicon.style.display = "none";
    healBuffIcon.style.display = "none";
    hunterIcon.style.display = "none";
    hunterAtkIcon.style.display = "none";
    holyshieldicon.style.display = "none";
    shieldicon.style.display = "none";
    doubledmgIcon.style.display = "none";
    lightdefbufficon.style.display = "none";
    moonbufficon.style.display = "none";
    crimsonicon.style.display = "none";
    reflecticon.style.display ="none";

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
    document.getElementById("dragon").setAttribute("src","images/dragon.gif");
    document.getElementById("dragon").setAttribute("style","width: 496px; margin-left: -173px;");
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
    damageText.innerHTML = "You have entered the lair of the big bad <span class='damage'>Fafnir</span>.<br>Defeat it and claim your <span class='damage'>treasure!</span>";
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
    popup.style.display = "block";
    popup.innerHTML = "<h2>Healed</h2><img src='images/healicon.png' class='icon'><br><p>You are healed by " + healing.toFixed(0) + "!</p><button onclick='closePopup()'>close</button>";
    
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
        
    }
    
    playerHealthText.innerHTML = parseInt(playerHP);
    popup.style.display = "block";
    popup.innerHTML = "<h2>Healed</h2><img src='images/healicon.png' class='icon'><br><p>You are healed by " + holyhealing.toFixed(0) + "!</p><button onclick='closePopup()'>close</button>";
    
}



function doubledmg() {
    doubledmgState = true;
    doublemodifier = 1;
    document.getElementById('doubledmg').style.pointerevents = 'none';
    document.getElementById('doubledmg').style.cursor = 'not-allowed';
    document.getElementById('doubledmg').style.opacity = '0.6';
    document.getElementById('doubledmg').setAttribute("onclick", "");
    doubledmgIcon.style.display = "block";
}



function holyShield() {
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
    holyshieldstate = true;
    holyshieldcooldown = 5;
}
function shield() {
    shieldState = true;
    document.getElementById('shield').style.pointerevents = 'none';
    document.getElementById('shield').style.cursor = 'not-allowed';
    document.getElementById('shield').style.opacity = '0.6';
    document.getElementById('shield').setAttribute("onclick", "");
    shieldicon.style.display = "block";
}

function heal() {
    if (playerHP >= playerMaxHP) {
        playerHP = playerMaxHP;
        playerHealth.value = playerHP;
        playerHealthText.innerHTML = parseInt(playerHP);
        popup.style.display = "block";
        popup.innerHTML = "<p>Your HP is already at maximum!</p><button onclick='closePopup()'>close</button>";
    } else if (playerHP == 0) {
        playerHP = 0;
        playerHealth.value = playerHP;
        playerHealthText.innerHTML = parseInt(playerHP);
        popup.style.display = "block";
        popup.innerHTML = "<p>You are already dead.</p><button onclick='closePopup()'>close</button>";
    } else {
        if (healBuff == true) {
            healAmount = healAmount + healAmount*0.5;
            playerHP = playerHP + healAmount;
            healBuff = false;
            healBuffIcon.style.display = "none";
            popup.innerHTML = "<h2>Blessing of Light</h2><img src='images/healicon.png' class='icon'><br><p>You are healed by " + healAmount + " (25% of Max HP + 50%) HP and your energy is restored!</p><button onclick='closePopup()'>close</button>";
            playerHealthText.innerHTML = parseInt(playerHP);
            healAmount = playerMaxHP * 0.25 + random(100, 500);
        } else {
            playerHP = playerHP + healAmount;
            popup.innerHTML = "<h2>Blessing of Light</h2><img src='images/healicon.png' class='icon'><br><p>You are healed by " + healAmount + " (25%) HP and your energy is restored!</p><button onclick='closePopup()'>close</button>";
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
        popup.style.display = "block";
        energy = energy + 70;
        if (energy < 100) {
            playerEnergyText.innerHTML = energy;
        } else if (energy >= 100) {
            energy = 100;
            playerEnergyText.innerHTML = energy;
        }
         cooldown = 3;
    }
}

let helpText = (a) => {
    popup.style.display = "block";
    switch (a) {
        
        case "3":
            popup.innerHTML = "<h2>Blessing of Earth</h2><img src='images/healicon.png' class='icon'><br><p>Heal yourself by 25% (+100 ~ 500) of your HP. Cooldown: 3 turns.</p><button onclick='closePopup()'>close</button>";
            break;
        case "4":
            popup.innerHTML = "<h2>Blessing of Light</h2><img src='images/shield.png' class='icon'><br><p>Nullify 1 instance of attack from the dragon.</p><button onclick='closePopup()'>close</button>";
            break;
        case "5":
            popup.innerHTML = "<h2>Heaven's Will</h2><img src='images/holyshield.png' class='icon'><br><p>Grants you a shield of 50% of Max HP. Cooldown: 5 turns.</p><button onclick='closePopup()'>close</button>";
            break;
        case "6":
            popup.innerHTML = "<h2>Edge of Eternity</h2><img src='images/doubledmg.png' class='icon'><br><p>Doubles the next instance of direct attack.</p><button onclick='closePopup()'>close</button>";
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
            popup.innerHTML = "<h2>Solar Chant</h2><img src='images/s23.png' class='icon'><br><p>Deals 400% DMG (+1515) to the target and removes all debuffs. For each removed debuff, deals an additional of 100% DMG.<br>Energy consumption: 80</p><button onclick='closePopup()'>close</button>";
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
            popup.innerHTML = "<h2>Fafnir the First King</h2><h3 class='flavortextminus'>Type: Big Bad Boss</h3><br><br><p>Dragon's HP: "+dragonHP.toFixed(0)+"/"+dragonMaxHP.toFixed(0)+"</p><p>Dragon's ATK: "+dragonATK.toFixed(0)+"</p><p>Dragon's DEF: "+dragonDEF.toFixed(0)+"</p><br><button onclick='closePopup()'>close</button>";
            break;
        case "enraged":
            popup.innerHTML = "<h2>The dragon is enraged!</h2><p>Its ATK, DEF, and Max HP are significantly higher and its HP is restored! Be careful!</p><button onclick='closePopup()'>close</button>";
            enragedicon.style.display = "block";
            break;
        case "wrongcode":
            popup.innerHTML = "<h2>Warning</h2><p>Cannot cast the input spell.</p><button onclick='closePopup()'>close</button>";
            break;
    }
}

let castMagic = (skill) =>  {
    if (magicArray.indexOf(skill) > -1) {
        let skillName;
        //define the skill consumption
        switch (skill) {
            case "icebolt":
                skillName = "Icebolt";
                energyCon = 0;
                break;
            case "firerain":
                skillName = "Rain of Fire";
                energyCon = 30;
                break;
            case "thunderstorm":
                skillName = "Thunderstorm";
                energyCon = 60;
                break;
            case "bane":
                skillName = "Bane of Death";
                energyCon = 25;
                break;
            case "arrowoflight":
                skillName = "Arrow of Light";
                energyCon = 0;
                break;
            case "bloodshed":
                skillName = "Bloodshed";
                energyCon = 35;
                break;
            case "piercingshot":
                skillName = "Piercing Shot";
                energyCon = 60;
                break;
            case "huntersinstinct":
                skillName = "Hunter's Instinct";
                energyCon = 40;
                break;           
            case "righteousness":
                skillName = "Righteousness";
                energyCon = 0;
                break;
            case "rectitude":
                skillName = "Rectitude";
                energyCon = 30;
                break;
            case "judgment":
                skillName = "Judgment";
                energyCon = 60;
                break;
            case "honor":
                skillName = "Honor";
                energyCon = 40;
                break;
            case "soulsiphon":
                skillName = "Soul Siphon";
                energyCon = 0;
                break;
            case "mindgleaning":
                skillName = "Mind Gleaning";
                energyCon = 30;
                break;
            case "painlessdeath":
                skillName = "Painless Death";
                energyCon = 80;
                break;
            case "songofmoonlight":
                skillName = "Song of Moonlight";
                energyCon = 40;
                break;
            case "bloodembrace":
                skillName = "Blood Embrace";
                energyCon = 0;
                break;
            case "rosemarysgift":
                skillName = "Rosemary's Gift";
                energyCon = 30;
                break;
            case "ichorretaliation":
                skillName = "Ichor Retaliation";
                energyCon = 70;
                break;
            case "crimsonvitality":
                skillName = "Crimson Vitality";
                energyCon = 60;
                break;       
            case "sacredanthems":
                skillName = "Sacred Anthems";
                energyCon = 0;
                break;
            case "reveredpresence":
                skillName = "Revered Presence";
                energyCon = 40;
                break;
            case "solarchant":
                skillName = "Solar Chant";
                energyCon = 80;
                break;
            case "transcendenthymn":
                skillName = "Transcendent Hymn";
                energyCon = 50;
                break;                      
        }

        if (energy < energyCon) {
            popup.style.display = "block";
            popup.innerHTML = "<p>You don't have enough energy to use "+skillName+"!</p><button onclick='closePopup()'>close</button>";
            energy = energy;
            playerEnergyText.innerHTML = energy;
            skillATK = 0;
            skillName = "";
        } else {
           
            currentFrame = 1;
            switch (skill) {
                case "icebolt":
                    document.getElementById("char1").setAttribute("src","images/mage_atk.gif");
                    setTimeout(()=>{document.getElementById("char1").setAttribute("src","images/mage.gif")}, 1800);
                    skillATK = playerATK*1.1 + 250;
                    effect.style.backgroundImage = "url('images/skill1.png')";

                    break;
                case "firerain":
                    document.getElementById("char1").setAttribute("src","images/mage_atk.gif");
                    setTimeout(()=>{document.getElementById("char1").setAttribute("src","images/mage.gif")}, 1800);
                    skillATK = playerATK*1.5 + 450;
                    effect.style.backgroundImage = "url('images/skill2.png')";
                    break;
                case "thunderstorm":
                    document.getElementById("char1").setAttribute("src","images/mage_atk.gif");
                    setTimeout(()=>{document.getElementById("char1").setAttribute("src","images/mage.gif")}, 1800);
                    if (poisonState == true) {
                        skillATK = playerATK*5.1+1950;
                        skillATK = skillATK + skillATK*0.6;
                    } else {
                        skillATK = playerATK*5.1 + 1950;
                    }
                    healBuff = true;
                    healBuffIcon.style.display = "block";
                    effect.style.backgroundImage = "url('images/skill3.png')";
                    break;
                case "bane":
                    document.getElementById("char1").setAttribute("src","images/mage_atk.gif");
                    setTimeout(()=>{document.getElementById("char1").setAttribute("src","images/mage.gif")}, 1800);
                    skillATK = playerATK*1.5 + 150;
                    effect.style.backgroundImage = "url('images/skill4.png')";
                    break;
                case "arrowoflight":
                    document.getElementById("char1").setAttribute("src","images/archer_atk.gif");
                    setTimeout(()=>{document.getElementById("char1").setAttribute("src","images/archer.gif")}, 1200);
                    skillATK = playerATK + 200;
                    huntermark = true;
                    hunterIcon.style.display = "block";
                    effect.style.backgroundImage = "url('images/skill5.png')";
                    break;
                case "bloodshed":
                    document.getElementById("char1").setAttribute("src","images/archer_atk.gif");
                    setTimeout(()=>{document.getElementById("char1").setAttribute("src","images/archer.gif")}, 1200);
                    skillATK = playerATK*2 + 470;
                    effect.style.backgroundImage = "url('images/skill6.png')";
                    break;
                case "piercingshot":
                    document.getElementById("char1").setAttribute("src","images/archer_atk.gif");
                    setTimeout(()=>{document.getElementById("char1").setAttribute("src","images/archer.gif")}, 1200);
                    if (huntermark == false || bleedState == false) {
                        skillATK = playerATK*4.8 + 1750;
                    } else if (huntermark == true || bleedState == false) {
                        skillATK = playerATK*7.3 + 1750;
                        healSkill(playerMaxHP*0.5);
                        huntermark = false;
                        hunterIcon.style.display = "none";
                    } else if (huntermark == false || bleedState == true) {
                        skillATK = playerATK*4.8 + 1750;
                        skillATK = skillATK + skillATK*0.5;
                    } else if (huntermark == true || bleedState == true) {
                        skillATK = playerATK*7.3 + 1050;
                        skillATK = skillATK + skillATK*0.5;
                        healSkill(playerMaxHP*0.5);
                        huntermark = false;
                        hunterIcon.style.display = "none";
                    }
                    effect.style.backgroundImage = "url('images/skill7.png')";
                    break;
                case "huntersinstinct":
                    document.getElementById("char1").setAttribute("src","images/archer_atk.gif");
                    setTimeout(()=>{document.getElementById("char1").setAttribute("src","images/archer.gif")}, 1200);
                    skillATK = 0;
                    hunteratkbuff = true;
                    hunteratkcooldown = 2;
                    hunteratkmodifier = 0.2;
                    hunterAtkIcon.style.display = "block";
                    huntermark = true;
                    critRate = critRate+30;
                    critDmg = critDmg+1.2;
                    playerCritText.innerHTML = critRate + "%";
                    playerCritDMGText.innerHTML = parseInt(critDmg*100) + "%";
                    hunterIcon.style.display = "block";
                    effect.style.backgroundImage = "url('images/skill8.png')";
                    break;
                case "righteousness":
                    document.getElementById("char1").setAttribute("src","images/paladin_atk.gif");
                    setTimeout(()=>{document.getElementById("char1").setAttribute("src","images/paladin.gif")}, 1400);
                    skillATK = playerATK*1.2 + 240;
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
                    document.getElementById("char1").setAttribute("src","images/paladin_atk.gif");
                    setTimeout(()=>{document.getElementById("char1").setAttribute("src","images/paladin.gif")}, 1400);
                    skillATK = playerATK*1.4 + 300;
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
                    document.getElementById("char1").setAttribute("src","images/paladin_atk.gif");
                    setTimeout(()=>{document.getElementById("char1").setAttribute("src","images/paladin.gif")}, 1400);
                    skillATK = playerATK*3.3 + 1315 + playerDEF*lightmark;
                    effect.style.backgroundImage = "url('images/skill11.png')";
                    break;
                case "honor":
                    document.getElementById("char1").setAttribute("src","images/paladin_atk.gif");
                    setTimeout(()=>{document.getElementById("char1").setAttribute("src","images/paladin.gif")}, 1400);
                    if (lightmark >= 5) {
                        skillATK = playerATK*1.6 + 500 + playerDEF*2.5;
                        lightmark = lightmark-2;
                        document.getElementById("lightText").innerHTML = lightmark + " stacks.";
                    } else {
                        skillATK = playerATK*1.6 + 500;
                    }
                    effect.style.backgroundImage = "url('images/skill12.png')";
                    break;
                case "soulsiphon":
                    document.getElementById("char1").setAttribute("src","images/necromancer_atk.gif");
                    setTimeout(()=>{document.getElementById("char1").setAttribute("src","images/necromancer.gif")}, 1700);
                    skillATK = playerATK*1.1 + 280;
                    soulsiphon = true;
                    soulsiphonicon.style.display = "block";
                    effect.style.backgroundImage = "url('images/skill13.png')";
                    break;
                case "mindgleaning":
                    document.getElementById("char1").setAttribute("src","images/necromancer_atk.gif");
                    setTimeout(()=>{document.getElementById("char1").setAttribute("src","images/necromancer.gif")}, 1700);
                    skillATK = playerATK*1.8 + 470;
                    mindgleaning = true;
                    mindgleaningicon.style.display = "block";
                    effect.style.backgroundImage = "url('images/skill14.png')";
                    break;
                case "painlessdeath":
                    document.getElementById("char1").setAttribute("src","images/necromancer_atk.gif");
                    setTimeout(()=>{document.getElementById("char1").setAttribute("src","images/necromancer.gif")}, 1700);
                    if (soulsiphon == true && mindgleaning == true) {
                        skillATK = playerATK*5.8 + 1500;
                    } else if (soulsiphon == true && mindgleaning == false) {
                        skillATK = playerATK*4.7 + 1500;
                    } else if (soulsiphon == false && mindgleaning == true) {
                        skillATK = playerATK*4.6 + 1500;
                    } else {
                        skillATK = playerATK*3.8 + 1500;
                    }
                    effect.style.backgroundImage = "url('images/skill15.png')";
                    break;
                case "songofmoonlight":
                    document.getElementById("char1").setAttribute("src","images/necromancer_atk.gif");
                    setTimeout(()=>{document.getElementById("char1").setAttribute("src","images/necromancer.gif")}, 1200);
                    skillATK = playerATK*1.5 + 600;

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
                    document.getElementById("char1").setAttribute("src","images/knight_atk.gif");
                    setTimeout(()=>{document.getElementById("char1").setAttribute("src","images/knight.gif")}, 1500);
                    skillATK = playerATK*1.2 + 310;    
                    effect.style.backgroundImage = "url('images/skill17.png')";
                    break;
                case "rosemarysgift":
                    document.getElementById("char1").setAttribute("src","images/knight_atk.gif");
                    setTimeout(()=>{document.getElementById("char1").setAttribute("src","images/knight.gif")}, 1500);
                    hploss=playerMaxHP-playerHP;
                    skillATK = playerATK*1.6 + 670 + hploss*0.1;
                    effect.style.backgroundImage = "url('images/skill18.png')";
                    break;
                case "ichorretaliation":
                    document.getElementById("char1").setAttribute("src","images/knight_atk.gif");
                    setTimeout(()=>{document.getElementById("char1").setAttribute("src","images/knight.gif")}, 1500);
                    skillATK = playerATK*3.5 + 1200 + playerATK*0.25*bloodsigil + playerMaxHP*0.02*bloodsigil;
                    effect.style.backgroundImage = "url('images/skill19.png')";
                    break;
                case "crimsonvitality":
                    document.getElementById("char1").setAttribute("src","images/knight_atk.gif");
                    setTimeout(()=>{document.getElementById("char1").setAttribute("src","images/knight.gif")}, 1500);
                    skillATK = 0;
                    effect.style.backgroundImage = "url('images/skill20.png')";
                    break;          
               case "sacredanthems":
                    document.getElementById("char1").setAttribute("src","images/songtress_atk.gif");
                    setTimeout(()=>{document.getElementById("char1").setAttribute("src","images/songtress.gif")}, 1200);
                    skillATK = playerATK + 230;
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
                    effect.style.marginLeft = "160px";
                    effect.style.top = "160px";
                    
                    document.getElementById("char1").setAttribute("src","images/songtress_atk.gif");
                    setTimeout(()=>{
                        document.getElementById("char1").setAttribute("src","images/songtress.gif");
                        effect.style.marginLeft = "-310px";
                        effect.style.top = "330px";
                    }, 1200);
                    
                    skillATK = 0;
                    hploss = playerMaxHP - playerHP;
                    holyHealSkill(playerATK*30.4+hploss*0.3);
                    effect.style.backgroundImage = "url('images/skill22.png')";
                    break;
                case "solarchant":
                    document.getElementById("char1").setAttribute("src","images/songtress_atk.gif");
                    setTimeout(()=>{document.getElementById("char1").setAttribute("src","images/songtress.gif")}, 1200);
                    debuffAmount = hd[0]+hd[1]+hd[2];
                    skillATK = playerATK*4 + 1515 + playerATK*debuffAmount;
                    hd = [0,0,0]
                    dragonATK = dragondefaultatk;
                    dragonDEF = dragondefaultdef;
                    d1icon.style.display = "none";
                    d2icon.style.display = "none";
                    d3icon.style.display = "none";
                    effect.style.backgroundImage = "url('images/skill23.png')";
                    break;
                case "transcendenthymn":
                    document.getElementById("char1").setAttribute("src","images/songtress_atk.gif");
                    setTimeout(()=>{document.getElementById("char1").setAttribute("src","images/songtress.gif")}, 1200);
                    skillATK = 0;
                    stun = true;
                    stunmodifier = 0;
                    stunturn = 2;
                    document.getElementById("stunicon").style.display = "block";
                    document.getElementById("stun").style.display = "block";
                    reflectstate = true;
                    reflecticon.style.display = "block";
                    reflectturn = 2;
                    reflectmodifier = 0.5;
                    effect.style.backgroundImage = "url('images/skill24.png')";
                    break;                            
            }
            //raw damage calculation
            if (debuffAmount >= 20) {
                totaldebuffmodifier = 0.3;
            } else {
                totaldebuffmodifier = 0;
            }
            
            if (skill == "huntersinstinct" || skill == "crimsonvitality" || skill == "reveredpresence" || skill == "transcendenthymn") {
                damagePlayer = 0;
                dragonDEFmodifier = 0;
            } else {
                dragonDEFmodifier = 1;
                critRoll = random(1,100);
                if (critRoll >= 100-critRate) {
                    critHit=true;
                    damagePlayer = random(50, 100) + skillATK;
                    damagePlayer = damagePlayer+damagePlayer*critDmg;
                } else {
                    critHit=false;
                    damagePlayer = random(50, 100) + skillATK;
                }
                playerCritText.innerHTML = critRate + "%";
                playerCritDMGText.innerHTML = parseInt(critDmg*100) + "%";
            }
            if (shieldState == false) {
                damageDragon = dragonATK + random(300, 500) - playerDEF;
                damageDragon = damageDragon - damageDragon*0.02*bloodsigil;
            } else {
                damageDragon = 0;
                shieldState = false;
                shieldicon.style.display = "none";
            }
            if (stun == true) {
                damageDragon = 0;
            }
            if (enragedicon.style.display == "block") {
                document.getElementById("dragon").setAttribute("src","images/dragon-enraged_atk.gif");
                setTimeout(()=>{document.getElementById("dragon").setAttribute("src","images/dragon-enraged.gif")}, 1800);
            } else {
                document.getElementById("dragon").setAttribute("src","images/dragon_atk.gif");
                setTimeout(()=>{document.getElementById("dragon").setAttribute("src","images/dragon.gif")}, 1800);
            }

            if (dmgreceive == true) {
                damagePlayer = damagePlayer + damagePlayer*0.3 + damagePlayer*doublemodifier + damagePlayer*hunteratkmodifier + damagePlayer*0.03*bloodsigil - dragonDEF*dragonDEFmodifier + damagePlayer*0.02*hd[2] + damagePlayer*totaldebuffmodifier;
                dragonHP -= damagePlayer.toFixed(0);
                dragonHP = dragonHP - damageDragon*reflectmodifier;
                dmgreceive = false;
                dmgReceiveIcon.style.display = "none";
            } else {
                damagePlayer = damagePlayer + damagePlayer*doublemodifier + damagePlayer*hunteratkmodifier + damagePlayer*0.03*bloodsigil - dragonDEF*dragonDEFmodifier + damagePlayer*0.02*hd[2] + damagePlayer*totaldebuffmodifier;
                dragonHP -= damagePlayer.toFixed(0);
                dragonHP = dragonHP - damageDragon*reflectmodifier;
            }
            //check debuff states and calculate debuff dmg
            if (hunteratkcooldown == 0 && critHit == false) {
                        hunteratkbuff = false;
                        hunteratkmodifier = 0;
                        hunterAtkIcon.style.display = "none";
                        critDmg = defaultCritDMG;
                        critRate = critRate+5;
            } else if (hunteratkcooldown == 0 && critHit == true) {
                    hunteratkbuff = false;
                    hunteratkmodifier = 0;
                    hunterAtkIcon.style.display = "none";
                    critDmg = defaultCritDMG;
                    critRate = defaultCrit;
            } else if (hunteratkcooldown > 0 && critHit == true) {
                    hunteratkcooldown--;
                    critRate = defaultCrit;
            } else if (hunteratkcooldown > 0 && critHit == false) {
                    hunteratkcooldown--;
                    critRate = critRate+5;
            }

            playerCritText.innerHTML = critRate + "%";


            if (doubledmgState = true) {
                doubledmgState = false;
                doubledmgIcon.style.display = "none";
                doublemodifier = 0;
            }
            if (holyshieldstate == true) {
                holyshieldamount -= damageDragon.toFixed(0);
                if (holyshieldamount <= 0) {
                    playerHP = playerHP - -holyshieldamount;
                    holyshieldamount = 0;
                    holyshieldstate = false;
                }
                holyshieldbar.value = parseInt(holyshieldamount);
                holyshieldText.innerHTML = parseInt(holyshieldamount);
            } else {
                playerHP -= damageDragon.toFixed(0);
            }
            if (holyshieldamount==0 && holyshieldicon.style.display=="block") {
                holyshieldicon.style.display = "none";
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
                    dragonATK = 1500;
                    lightatkdebuffturn=0;
                    lightatkdebuff=false;
                    lightatkdebufficon.style.display="none";
                }
            }
            if (lightdefbuff == true) {
                if (lightdefbuffturn > 0) {
                    lightdefbuffturn--;
                    playerDefText.innerHTML = playerDEF;
                } else if (lightdefbuffturn == 0) {
                    lightdefbuffturn=0;
                    lightdefbuff=false;
                    playerDEF = playerDEFTemp;
                    lightdefbufficon.style.display="none";
                    playerDefText.innerHTML = playerDEF;
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
                    document.getElementById("stun").style.display = "none";
                    document.getElementById("stunicon").style.display = "none";
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
                case "firerain":
                    dmgreceive = true;
                    dmgReceiveIcon.style.display = "block";
                    energy = energy - energyCon;
                    break;
                case "bane":
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
                    if (huntermark == true) {
                        skillATK = playerATK*5.3 + 1050;
                        healSkill(playerMaxHP*0.5);
                        huntermark = false;
                        hunterIcon.style.display = "none";
                    }
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
                        playerDEFTemp = playerDEF;
                        lightdefbuff = true;
                        lightdefbuffturn = 2;
                        playerDEF = playerDEF + playerDEF*0.3;
                    } else {
                        lightdefbuff = true;
                        lightdefbuffturn = 2;
                    }
                    playerDefText.innerHTML = playerDEF;
                    lightdefbufficon.style.display = "block";  
                    break;
                case "honor":
                    energy = energy - energyCon;
                    holyshieldstate = true;
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
                        healSkill(damagePlayer.toFixed(0)*1);
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
                        playerMaxHP = playerMaxHP + playerMaxHP*0.3;
                    } else {
                        crimsonbuff = true;
                        crimsonturn = 3;
                    }
                    holyshieldstate = true;
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
            
            turn++;
            turnText.innerHTML = "<p id='turn'>Turn: " + turn + "</p>";
            cooldown--;
            holyshieldcooldown--;
            playerCritText.innerHTML = parseInt(critRate) + "%";
            playerCritDMGText.innerHTML = parseInt(critDmg*100) + "%";
            
            if (dragonHP <= 5000 && state==false) {
                dragonMaxHP = dragonMaxHP + dragonMaxHP*0.5;
                dragonHP = dragonMaxHP;
                
                dragonATK = dragondefaultatk + dragondefaultatk*0.8;
                dragonDEF = dragondefaultdef + dragondefaultdef*0.5;
                dragondefaultatk = 2700;
                dragondefaultdef = 600;
                poisonDot = 0;
                poisonState = false;
                poisonTurn = 0;
                dmgreceive = false;
    
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
                hd = [0,0,0];
                poisonIcon.style.display = "none";
                bleedIcon.style.display = "none";
                dmgReceiveIcon.style.display = "none";
                lightmarkicon.style.display = "none";
                lightatkdebufficon.style.display = "none";
                soulsiphonicon.style.display = "none";
                mindgleaningicon.style.display = "none";
                bloodsigilicon.style.display = "none";
    
                d1icon.style.display = "none";
                d2icon.style.display = "none";
                d3icon.style.display = "none";
                document.getElementById("stun").style.display = "none";
                document.getElementById("stunicon").style.display = "none";
                helpText('enraged');

                document.getElementById("dragon").setAttribute("src","images/dragon-enraged.gif");
                document.getElementById("dragon").setAttribute("style","width: 781px; margin-left: -387px; top: -91px;");
                document.getElementById("stun").style.left = "251px";
                document.getElementById("stun").style.top = "-201px";
                state=true;
            } else if (dragonHP <= 5000 && state==true) {
            state = true;
        }

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
            
            if (dragonHP < 0 && playerHP > 0) {
                dragonHP = 0;
                document.getElementById('dragon').style.display = 'block';
                document.getElementById("tutorial").style.display = "block";
                document.getElementById("tutorial").innerHTML = "<h5 id='welcome'>Congrats!</h5><p>You've defeated the dragon in "+turn+ " turns and claimed a chest of gold!</p><br><img src='images/treasure.gif' style='width: 250px;'><br><br><br><button onClick='window.location.reload();'>play again</button>";

            } else if (playerHP < 0 && dragonHP > 0) {
                playerHP = 0;
                document.getElementById("tutorial").style.display = "block";
                document.getElementById("tutorial").innerHTML = "<h5 id='welcome'>Oh No!</h5><p>You're dead. Better luck next time.</p><br><img src='images/dead.gif' style='width: 150px'><br><button onClick='window.location.reload();'>try again</button>";
         
            } else if (playerHP < 0 && dragonHP < 0) {
                playerHP = 0;
                dragonHP = 0;
                document.getElementById('dragon').style.display = 'block';
                document.getElementById("tutorial").style.display = "block";
                document.getElementById("tutorial").innerHTML = "<h5 id='welcome'>Oh No!</h5><p>You're both dead. Better luck next time.</p><br><img src='images/dead.gif' style='width: 150px'><br><button onClick='window.location.reload();'>try again</button>";
                
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
                setTimeout(()=>{document.getElementById("playerdmgtext").style.opacity = 0}, 1000);
                document.getElementById("playerdmgtext").style.opacity = 1;
                logmessage = "The dragon did <span class='damage'>" + damageDragon.toFixed(0) + "</span> DMG on you. And you did <span class='damage'>" + damagePlayer.toFixed(0) + " (+" +totalDot.toFixed(0)+ " DoT DMG)</span> DMG on the dragon by using <span class='damage'>" + skillName + "</span>.";
                
                
            } else {
                document.getElementById("playerdmgtext").innerHTML = "CRIT<br>" + damagePlayer.toFixed(0);
                document.getElementById("playerdmgtext").style.display = "block";
                setTimeout(()=>{document.getElementById("playerdmgtext").style.opacity = 0}, 1000);
                document.getElementById("playerdmgtext").style.opacity = 1;
                logmessage = "The dragon did <span class='damage'>" + damageDragon.toFixed(0) + "</span> DMG on you. And you did a <span class='damage'>Critical DMG</span> of <span class='damage'>" + damagePlayer.toFixed(0) + " (+" +totalDot.toFixed(0)+ " DoT DMG)</span> on the dragon by using <span class='damage'>" + skillName + "</span>.";
                
                critHit=false;

            }
            damageText.innerHTML = logmessage;
            pnode = document.createElement("p");
            pnode.innerHTML = "<span class='damage'>Turn "+ turn + " </span>:" + logmessage;
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
        }
    } else {
        helpText('wrongcode');
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
    popup.style.display = "none";
}
function closeTutorial() {
    document.getElementById("tutorial").style.display = "none";
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
/*
 * RESPONSIVE CODE
 */

let container = document.querySelector("#container");

window.onload = window.onresize = resizeGame;

function resizeGame() {
    let gameRatio = container.offsetWidth / container.offsetHeight;
    let windowRatio = window.innerWidth / window.innerHeight;

    container.style.position = "absolute";
    container.style.left = `${(window.innerWidth - container.offsetWidth) / 2}px`;
    container.style.top = `${(window.innerHeight - container.offsetHeight) / 2}px`;

    let newScale;
    if (gameRatio > windowRatio) {
        newScale = window.innerWidth / container.offsetWidth;
        if (newScale > 1) newScale = 1;
    } else {
        newScale = window.innerHeight / container.offsetHeight;
        if (newScale > 1) newScale = 1;
    }
    container.style.transform = `scale(${newScale})`;
}