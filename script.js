/* magic values */
let magicArray = ["icebolt", "firerain", "thunderstorm", "bane", "arrowoflight", "bloodshed", "piercingshot", "huntersinstinct","righteousness","rectitude","judgment","honor","soulsiphon","mindgleaning","painlessdeath","moonlightqueen"];
let effect = document.getElementById("effect");
let currentFrame = 1;
let spriteSize = 192;
let effectInterval;

/* custom function */
const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

/* texts, graphics and buttons */
let dragonHealthText = document.querySelector("h4");
let playerHealthText = document.getElementById("hp");
let alertText = document.getElementById("alert");
let alertHealText = document.getElementById("healalert");
let playerEnergyText = document.getElementById("ene");
let damageText = document.querySelector("h2");
let turnText = document.getElementById("turn");
let atkbufficon = document.getElementById("atkbufficon");
let atkdebufficon = document.getElementById("atkdebufficon");
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
let playerClass;
let switchButtonDefault = document.getElementById("mageclass");
let bleedIcon = document.getElementById("bleedicon");
let hunterIcon = document.getElementById("huntericon");
let hunterAtkIcon = document.getElementById("hunteratkicon");
let playerDefText = document.getElementById("def");
let defbufficon = document.getElementById("defbufficon");
let playerCritText = document.getElementById("crit");
let playerCritDMGText = document.getElementById("critdmg");
let lightmarkicon = document.getElementById("lighticon");
let lightatkdebufficon = document.getElementById("lightatkdebufficon");
let lightdefbufficon = document.getElementById("lightdefbufficon");
let soulsiphonicon = document.getElementById("soulsiphonicon");
let mindgleaningicon = document.getElementById("mindgleaningicon");
let moonbufficon = document.getElementById("moonicon");

/* character and skill stats */
let skill;
let energy = 0;
let energyCon = 0;
let dragonMaxHP = 20000;
let playerMaxHP = 10000;
let dragonHP = dragonMaxHP;
let playerHP = playerMaxHP;
let dragonATK = 2400;
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

playerCritText.innerHTML = critRate + "%";
playerCritDMGText.innerHTML = critDmg*100 + "%";
playerEnergyText.innerHTML = energy;
    playerAtkText.innerHTML = playerATK;
    playerHealthText.innerHTML = parseInt(playerHP);
    playerDefText.innerHTML = playerDEF;

let switchClass = (playerClass) => {
    closeSettings();
    closeTutorial();
    switch (playerClass) {
        case "archer":
            switchButtonDefault.setAttribute("id","archerclass");
            switchButtonDefault.innerHTML = "Forest Archer";
            document.getElementById("playerHealth").setAttribute("max","8000");
            document.getElementById("playerHealth").setAttribute("value","8000");
            playerClass = "archer";
            playerMaxHP = 8000;
            playerHP = playerMaxHP;
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
            
        break;
        case "mage":
            switchButtonDefault.setAttribute("id","mageclass");
            switchButtonDefault.innerHTML = "Elemental Mage";
            document.getElementById("playerHealth").setAttribute("max","10000");
            document.getElementById("playerHealth").setAttribute("value","10000");
            playerClass = "mage";
            playerMaxHP = 10000;
            playerHP = playerMaxHP;
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
            break;
        case "paladin":
            switchButtonDefault.setAttribute("id","paladinclass");
            switchButtonDefault.innerHTML = "Paladin of Light";
            document.getElementById("playerHealth").setAttribute("max","15000");
            document.getElementById("playerHealth").setAttribute("value","15000");
            playerClass = "paladin";
            playerMaxHP = 15000;
            playerHP = playerMaxHP;
            playerATK = 110;
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
            break;
        case "necromancer":
            switchButtonDefault.setAttribute("id","necromancerclass");
            switchButtonDefault.innerHTML = "Necromancer";
            document.getElementById("playerHealth").setAttribute("max","9000");
            document.getElementById("playerHealth").setAttribute("value","9000");
            playerClass = "necromancer";
            playerMaxHP = 9000;
            playerHP = playerMaxHP;
            playerATK = 330;
            playerdefaultatk = 390;
            playerDEF = 290;
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
    dragonHP = dragonMaxHP;
    holyshieldamount = 0;
    dragonATK = 2400;
    state = false;
    healBuff = false;
    shieldState = false;
    holyshieldstate = false;
    dmgreceive = false;
    poisonDot = 0;
    poisonState = false;
    poisonTurn = 0;
    doubledmgState = false;
    doublemodifier = 0;
    huntermark = false;
    bleedState = false;
    hunteratkbuff = false;
    hunteratkcooldown = 0;
    bleedTurn = 0;
    bleedDot = 0;
    hunteratkmodifier = 0;
    lightmark = 0;
    lightatkdebuff = false;
    lightatkdebuffturn = 0;
    lightdefbuff = false;
    lightdefbuffturn = 0;
    soulsiphon = false;
    mindgleaning = false;
    moonbuff = false;
    moonbuffturn = 0;
    moonbuffamount = 0;
    moonstate = false;

    turnText.innerHTML = "<p id='turn'>Turn: " + turn + "</p>";
    atkbufficon.style.display = "none";
    atkdebufficon.style.display = "none";
    enragedicon.style.display = "none";
    poisonIcon.style.display = "none";
    dmgReceiveIcon.style.display = "none";
    healBuffIcon.style.display = "none";
    hunterIcon.style.display = "none";
    bleedIcon.style.display = "none";
    hunterAtkIcon.style.display = "none";
    holyshieldicon.style.display = "none";
    shieldicon.style.display = "none";
    doubledmgIcon.style.display = "none";
    defbufficon.style.display = "none";
    lightmarkicon.style.display = "none";
    lightatkdebufficon.style.display = "none";
    lightdefbufficon.style.display = "none";
    soulsiphonicon.style.display = "none";
    mindgleaningicon.style.display = "none";
    moonbufficon.style.display = "none";

    document.getElementById("dragon").setAttribute("src","images/dragon.gif");
    document.getElementById('buff').style.pointerevents = 'auto';
    document.getElementById('buff').style.cursor = 'pointer';
    document.getElementById('buff').style.opacity = '1';
    document.getElementById('buff').setAttribute("onclick", "buff()");

    document.getElementById('holyshield').style.pointerevents = 'auto';
    document.getElementById('holyshield').style.cursor = 'pointer';
    document.getElementById('holyshield').style.opacity = '1';
    document.getElementById('holyshield').setAttribute("onclick", "holyShield()");

    document.getElementById('debuff').style.pointerevents = 'auto';
    document.getElementById('debuff').style.cursor = 'pointer';
    document.getElementById('debuff').style.opacity = '1';
    document.getElementById('debuff').setAttribute("onclick", "debuffAtk()");

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
    document.getElementById('welcomemessage').innerHTML = "You have entered the lair of the big bad <span class='damage'>Fafnir</span>.<br>Defeat it and claim your <span class='damage'>treasure!</span>";
    dragonHealth.value = dragonHP;
    playerEnergyText.innerHTML = energy;
    playerAtkText.innerHTML = playerATK;
    playerDefText.innerHTML = playerDEF;
    playerHealthText.innerHTML = parseInt(playerHP);
    playerHealth.value = playerHP;
    holyshieldText.innerHTML = holyshieldamount;
    holyshieldbar.value = holyshieldamount;
    playerCritText.innerHTML = critRate + "%";
    playerCritDMGText.innerHTML = critDmg*100 + "%";
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

function buff() {
    let buffAmount = playerATK * 0.3;
    let defbuffAmount = playerDEF * 0.3;
    playerATK = playerATK + buffAmount;
    playerDEF = playerDEF + defbuffAmount;
    document.getElementById('buff').style.pointerevents = 'none';
    document.getElementById('buff').style.cursor = 'not-allowed';
    document.getElementById('buff').style.opacity = '0.6';
    document.getElementById('buff').setAttribute("onclick", "");
    atkbufficon.style.display = "block";
    defbufficon.style.display = "block";
    playerAtkText.innerHTML = playerATK;
    playerDefText.innerHTML = playerDEF;
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

function debuffAtk() {
    let debuffAmount = dragonATK * 0.3;
    dragonATK = dragonATK - debuffAmount;
    document.getElementById('debuff').style.pointerevents = 'none';
    document.getElementById('debuff').style.cursor = 'not-allowed';
    document.getElementById('debuff').style.opacity = '0.6';
    document.getElementById('debuff').setAttribute("onclick", "");
    atkdebufficon.style.display = "block";
}

function holyShield() {
    holyshieldamount = playerMaxHP*0.3 + random(600,1800);
    holyshieldbar.value = holyshieldamount;
    holyshieldText.innerHTML = holyshieldamount;
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
        case "1":
            popup.innerHTML = "<h2>Song of Fire and Ice</h2><ul id='ulsettings'><li><img src='images/atkbuff.png' class='icon'></li><li><img src='images/defbuff.png' class='icon'></li></ul><br><p>Increase your ATK and DEF by 30%.</p><button onclick='closePopup()'>close</button>";
            break;
        case "2":
            popup.innerHTML = "<h2>Curse of Power</h2><img src='images/atkdebuff.png' class='icon'><br><p>Decrease the Dragon's ATK by 30%</p><button onclick='closePopup()'>close</button>";
            break;
        case "3":
            popup.innerHTML = "<h2>Blessing of Earth</h2><img src='images/healicon.png' class='icon'><br><p>Heal yourself by 25% (+100 ~ 500) of your HP. Cooldown: 3 turns.</p><button onclick='closePopup()'>close</button>";
            break;
        case "4":
            popup.innerHTML = "<h2>Blessing of Light</h2><img src='images/shield.png' class='icon'><br><p>Nullify 1 instance of attack from the dragon.</p><button onclick='closePopup()'>close</button>";
            break;
        case "5":
            popup.innerHTML = "<h2>Heaven's Will</h2><img src='images/holyshield.png' class='icon'><br><p>Grants you a shield of 30% of Max HP. Cooldown: 5 turns.</p><button onclick='closePopup()'>close</button>";
            break;
        case "6":
            popup.innerHTML = "<h2>Edge of Eternity</h2><img src='images/doubledmg.png' class='icon'><br><p>Doubles the next instance of direct attack.</p><button onclick='closePopup()'>close</button>";
            break;
        case "s1":
            popup.innerHTML = "<h2>Icebolt</h2><img src='images/s1.png' class='icon'><br><p>Deals 110% DMG (+250) to the target and restore 10~20 energy.<br>Energy consumption: 0</p><button onclick='closePopup()'>close</button>";
            break;
        case "s2":
            popup.innerHTML = "<h2>Rain of Fire</h2><img src='images/s2.png' class='icon'><br><p>Deals 150% DMG (+450) to the target and makes it receive 30% more DMG for any subsequent direct attack.<br>Energy consumption: 30</p><button onclick='closePopup()'>close</button>";
            break;
        case "s3":
            popup.innerHTML = "<h2>Thunderstorm</h2><img src='images/s3.png' class='icon'><br><p>Deals 300% DMG (+1150) to the target. Also, increases the amount of healing by 50% for the next heal skill. <br>Energy consumption: 60</p><button onclick='closePopup()'>close</button>";
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
            popup.innerHTML = "<h2>Piecing Shot</h2><img src='images/s7.png' class='icon'><br><p>Deals 380% DMG (+1050) to the target. If the target is under Hunter's Mark, deals an additional amount of 150% DMG.<br>Energy consumption: 60</p><button onclick='closePopup()'>close</button>";
            break;     
        case "s8":
            popup.innerHTML = "<h2>Hunter's Instinct</h2><img src='images/s8.png' class='icon'><br><p>Increases Critical DMG by 60% and Critical Rate by 30% for 2 turns and mark the enemy with Hunter's Mark.<br>Energy consumption: 40</p><button onclick='closePopup()'>close</button>";
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
            popup.innerHTML = "<h2>Honor</h2><img src='images/s12.png' class='icon'><br><p>Deals 160% DMG (+500) and another 12% of Max HP as DMG if more than 5 Light Marks are present. After use, removes 2 Light Marks.<br>Energy consumption: 40</p><button onclick='closePopup()'>close</button>";
            break;
        case "s13":
            popup.innerHTML = "<h2>Soul Siphon</h2><img src='images/s13.png' class='icon'><br><p>Deals 110% DMG (+280) to the target and marks it with a Soul Siphon mark. Restores 10 energy.<br>Energy consumption: 0</p><button onclick='closePopup()'>close</button>";
            break;
        case "s14":
            popup.innerHTML = "<h2>Mind Gleaning</h2><img src='images/s14.png' class='icon'><br><p>Deals 180% DMG (+700) to the target. If the target is under Soul Siphon mark, restores HP by 50% of DMG dealt. Places a Mind Gleaning mark on the enemy.<br>Energy consumption: 30</p><button onclick='closePopup()'>close</button>";
            break;     
        case "s15":
            popup.innerHTML = "<h2>Painless Death</h2><img src='images/s15.png' class='icon'><br><p>Deals 380% DMG (+1500) to the target. If: <br>-the target is under Soul Siphon, deals an additional 90% DMG and restores HP by 70% of DMG dealt. Then, removes the mark.<br>-the target is under Mind Gleaning, deals an additional 80% DMG and restores 50 energy. Then, removes the mark.<br>-the target is under both marks, deals an additional 200% DMG and restores both HP and energy to full. Then, removes all marks.<br>Energy consumption: 80</p><button onclick='closePopup()'>close</button>";
            break;
        case "s16":
            popup.innerHTML = "<h2>Moonlight Queen</h2><img src='images/s16.png' class='icon'><br><p>Deals 150% DMG (+600) to the target. If it has any mark, gains a Moon buff for 2 turns to increase DMG by 30%.<br>Energy consumption: 40</p><button onclick='closePopup()'>close</button>";
            break;
        case "chest":
            popup.innerHTML = "<h2>Congrats!</h2><p>You've killed the dragon and received a bunch of gold!</p><button onclick='closePopup()'>close</button>";
            document.getElementById('cast').style.display = 'none';
            break;
        case "dragonstats":
            popup.innerHTML = "<h2>Fafnir the First King</h2><h3 class='flavortextminus'>Type: Big Bad Boss</h3><br><br><p>Dragon's HP: "+dragonHP.toFixed(0)+"</p><p>Dragon's ATK: "+dragonATK.toFixed(0)+"</p><br><button onclick='closePopup()'>close</button>";
            break;
        case "enraged":
            popup.innerHTML = "<h2>The dragon is enraged!</h2><p>Its ATK is significantly higher and its HP is restored! Be careful!</p><button onclick='closePopup()'>close</button>";
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
            case "moonlightqueen":
                skillName = "Moonlight Queen";
                energyCon = 40;
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
                    skillATK = playerATK*1.1 + 250;
                    effect.style.backgroundImage = "url('images/skill1.png')";
                    break;
                case "firerain":
                    skillATK = playerATK*1.5 + 450;
                    effect.style.backgroundImage = "url('images/skill2.png')";
                    break;
                case "thunderstorm":
                    skillATK = playerATK*3 + 1150;
                    healBuff = true;
                    healBuffIcon.style.display = "block";
                    effect.style.backgroundImage = "url('images/skill3.png')";
                    break;
                case "bane":
                    skillATK = playerATK*1.5 + 150;
                    effect.style.backgroundImage = "url('images/skill4.png')";
                    break;
                case "arrowoflight":
                    skillATK = playerATK + 200;
                    huntermark = true;
                    hunterIcon.style.display = "block";
                    effect.style.backgroundImage = "url('images/skill5.png')";
                    break;
                case "bloodshed":
                    skillATK = playerATK*2 + 470;
                    effect.style.backgroundImage = "url('images/skill6.png')";
                    break;
                case "piercingshot":
                    if (huntermark == false) {
                        skillATK = playerATK*3.8 + 1050;
                    } else {
                        skillATK = playerATK*5.3 + 1050;
                        huntermark = false;
                        hunterIcon.style.display = "none";
                    }
                    effect.style.backgroundImage = "url('images/skill7.png')";
                    break;
                case "huntersinstinct":
                    
                    skillATK = 0;
                    hunteratkbuff = true;
                    hunteratkcooldown = 2;
                    hunteratkmodifier = 0.2;
                    hunterAtkIcon.style.display = "block";
                    huntermark = true;
                    critRate = critRate+30;
                    critDmg = critDmg+0.5;
                    playerCritText.innerHTML = critRate + "%";
                    playerCritDMGText.innerHTML = critDmg*100 + "%";
                    hunterIcon.style.display = "block";
                    effect.style.backgroundImage = "url('images/skill8.png')";
                    break;
                case "righteousness":
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
                    skillATK = playerATK*3.3 + 1315 + playerDEF*0.25*lightmark;
                    lightmark = 0;
                    lightmarkicon.style.display = "none";
                    effect.style.backgroundImage = "url('images/skill11.png')";
                    break;
                case "honor":
                    if (lightmark >= 5) {
                        skillATK = playerATK*1.6 + 500 + playerMaxHP*0.12;
                        lightmark = lightmark-2;
                        document.getElementById("lightText").innerHTML = lightmark + " stacks.";
                    } else {
                        skillATK = playerATK*1.6 + 500;
                    }
                    effect.style.backgroundImage = "url('images/skill12.png')";
                    break;
                case "soulsiphon":
                    skillATK = playerATK*1.1 + 280;
                    soulsiphon = true;
                    soulsiphonicon.style.display = "block";
                    effect.style.backgroundImage = "url('images/skill13.png')";
                    break;
                case "mindgleaning":
                    
                    skillATK = playerATK*1.8 + 470;
                    mindgleaning = true;
                    mindgleaningicon.style.display = "block";
                    effect.style.backgroundImage = "url('images/skill14.png')";
                    break;
                case "painlessdeath":
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
                case "moonlightqueen":
                    skillATK = playerATK*1.5 + 600;
                    if (soulsiphon==true || mindgleaning==true) {
                        if (moonstate==false) {                     
                            moonbuff = true;
                            moonbufficon.style.display = "block";
                            moonbuffturn = 2;
                            moonbuffamount = playerATK*0.5;
                            playerATK = playerATK + moonbuffamount;
                            moonstate = true;
                        } else {
                            moonbuff = true;
                            moonbufficon.style.display = "block";
                            moonbuffturn = 2;
                            moonstate = true;
                        }
                    }
                    effect.style.backgroundImage = "url('images/skill6.png')"; 
                    break;               
            }
            //raw damage calculation
            if (skill == "huntersinstinct") {
                damagePlayer = 0;
            } else {
                
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
                playerCritDMGText.innerHTML = critDmg*100 + "%";
            }
            if (shieldState == false) {
                damageDragon = dragonATK + random(300, 500) - playerDEF;
            } else {
                damageDragon = 0;
                shieldState = false;
                shieldicon.style.display = "none";
            }
            if (dmgreceive == true) {
                damagePlayer = damagePlayer + damagePlayer*0.3 + damagePlayer*doublemodifier + damagePlayer*hunteratkmodifier;
                dragonHP -= damagePlayer;
                dmgreceive = false;
                dmgReceiveIcon.style.display = "none";
            } else {
                damagePlayer = damagePlayer + damagePlayer*doublemodifier + damagePlayer*hunteratkmodifier;
                dragonHP -= damagePlayer.toFixed(0);
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
                    critRate = defaultCrit;
                    CritDmg = defaultCritDMG;
            } else if (hunteratkcooldown > 0 && critHit == true) {
                    hunteratkcooldown--;
                    critRate = defaultCrit;
            } else if (hunteratkcooldown > 0 && critHit == false) {
                    hunteratkcooldown--;
                    critRate = critRate+5;
            }
                
            playerCritText.innerHTML = critRate + "%";
            playerCritDMGText.innerHTML = critDmg*100. + "%";
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
                holyshieldbar.value = holyshieldamount;
                holyshieldText.innerHTML = holyshieldamount;
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
                    poisonTurnText.innerHTML = poisonTurn + " turns left.";
                } else if (poisonTurn == 0) {
                    poisonTurn = 0;
                    poisonDot = 0;
                    poisonState = false;
                    poisonIcon.style.display = "none";
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
                    dragonATK = 2400;
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
                    lightdefbufficon.style.display="none";
                    playerDefText.innerHTML = playerDEF;
                }
            }
            if (moonbuff == true) {
                if (moonbuffturn > 0) {
                    moonbuffturn--;
                } else if (moonbuffturn == 0) {
                    moonbuffturn=0;
                    playerATK = playerdefaultatk;
                    moonbuff = false;
                    moonstate = false;
                    moonbufficon.style.display="none";
                }
            }
            //energy calculation and effect application
            switch (skill) {
                case "icebolt":
                    energy = energy + random(10, 20);
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
                        energy = energy + 10;
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
                    poisonState = true;
                    poisonTurn = 3;
                    poisonTurnText.innerHTML = poisonTurn + " turns left.";
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
                        playerDEF = playerDEF + playerDEF*0.3;
                    } else {
                        lightdefbuff = true;
                        lightdefbuffturn = 2;
                    }
                    playerDefText.innerHTML = playerDEF;
                    lightdefbufficon.style.display = "block";  
                    break;
                case "mindgleaning":
                    if (soulsiphon == true) {
                        healSkill(damagePlayer.toFixed(0)*0.5);
                    }
                    energy = energy - energyCon;
                    break;
                case "painlessdeath":
                    energy = energy - energyCon;
                    if (soulsiphon == true && mindgleaning == true) {
                        healSkill(999999);
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
                default:
                    energy = energy - energyCon;
                    break;
                
            }
            playerEnergyText.innerHTML = energy;
            
            turn++;
            turnText.innerHTML = "<p id='turn'>Turn: " + turn + "</p>";
            cooldown--;
            holyshieldcooldown--;
            if (dragonHP <= 5000 && state==false) {
                    dragonHP = dragonMaxHP;
                    dragonATK = dragonATK + dragonATK * 0.8;
                    helpText('enraged');
                    document.getElementById("dragon").setAttribute("src","images/dragon-enraged.gif");
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
            
            
            playerHealth.value = playerHP;
            dragonHealth.value = dragonHP;
            playerHealthText.innerHTML = parseInt(playerHP);
            let totalDot = bleedDot + poisonDot;
            if (critHit == false) {
                document.getElementById("playerdmgtext").innerHTML = damagePlayer.toFixed(0);
                document.getElementById("playerdmgtext").style.display = "block";
                setTimeout(()=>{document.getElementById("playerdmgtext").style.opacity = 0}, 1000);
                document.getElementById("playerdmgtext").style.opacity = 1;
                damageText.innerHTML = "The dragon did <span class='damage'>" + damageDragon.toFixed(0) + "</span> DMG on you. And you did <span class='damage'>" + damagePlayer.toFixed(0) + " (+" +totalDot.toFixed(0)+ " DoT DMG)</span> DMG on the dragon by using <span class='damage'>" + skillName + "</span>.";
            } else {
                document.getElementById("playerdmgtext").innerHTML = "CRIT<br>" + damagePlayer.toFixed(0);
                document.getElementById("playerdmgtext").style.display = "block";
                setTimeout(()=>{document.getElementById("playerdmgtext").style.opacity = 0}, 1000);
                document.getElementById("playerdmgtext").style.opacity = 1;
                damageText.innerHTML = "The dragon did <span class='damage'>" + damageDragon.toFixed(0) + "</span> DMG on you. And you did a <span class='damage'>Critical DMG</span> of <span class='damage'>" + damagePlayer.toFixed(0) + " (+" +totalDot.toFixed(0)+ " DoT DMG)</span> on the dragon by using <span class='damage'>" + skillName + "</span>.";
                critHit=false;
            }
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
            effectInterval = setInterval(playNextFrame, 70);
        }
    } else {
        helpText('wrongcode');
    }
}


function playNextFrame() {
    currentFrame++;
    if (currentFrame >= 14) {
        currentFrame = 14;
        effect.style.display = "none";
        clearInterval(effectInterval);
    } else {
        effect.style.display = "block";
        effect.style.backgroundPositionX = ((currentFrame % 2) * spriteSize * -1) + "px";
        effect.style.backgroundPositionY = (Math.floor(currentFrame / 2) * spriteSize * -1) + "px";
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