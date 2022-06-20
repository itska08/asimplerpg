/* magic values */
let magicArray = ["icebolt", "firerain", "thunderstorm", "thornvines", "arrowoflight", "bloodshed", "piercingshot", "huntersinstinct"];
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
/* character and skill stats */
let skill;
let energy = 0;
let energyCon = 0;
let dragonMaxHP = 15000;
let playerMaxHP = 10000;
let dragonHP = dragonMaxHP;
let playerHP = playerMaxHP;
let dragonATK = 2100;
let playerATK = 300;
let damageDragon;
let damagePlayer;
let state = false;
let turn = 0;
let magicATK = 0;
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

playerEnergyText.innerHTML = energy;
    playerAtkText.innerHTML = playerATK;
    playerHealthText.innerHTML = playerHP;
    playerDefText.innerHTML = playerDEF;

let switchClass = (playerClass) => {
    closeSettings();
    closeTutorial();
    switch (playerClass) {
        case "archer":
            switchButtonDefault.setAttribute("id","archerclass");
            switchButtonDefault.innerHTML = "Archer";
            document.getElementById("playerHealth").setAttribute("max","8000");
            document.getElementById("playerHealth").setAttribute("value","8000");
            playerClass = 1;
            playerMaxHP = 8000;
            playerHP = playerMaxHP;
            playerATK = 400;
            playerDEF = 200;
            document.getElementById("skillactive").style.display = "none";
            document.getElementById("skillactive2").style.display = "block";
        break;
        case "mage":
            switchButtonDefault.setAttribute("id","mageclass");
            switchButtonDefault.innerHTML = "Elemental Mage";
            document.getElementById("playerHealth").setAttribute("max","10000");
            document.getElementById("playerHealth").setAttribute("value","10000");
            playerClass = 0;
            playerMaxHP = 10000;
            playerHP = playerMaxHP;
            playerATK = 300;
            playerDEF = 300;
            document.getElementById("skillactive").style.display = "block";
            document.getElementById("skillactive2").style.display = "none";
            break;
    }
    resetGame();
}

function resetGame() {
    energy = 0;
    energyCon = 0;
    turn = 0;
    cooldown = 0;
    magicATK = 0;
    energyCon = 0;
    holyshieldcooldown = 0;
    dragonHP = dragonMaxHP;
    holyshieldamount = 0;
    dragonATK = 2100;
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
    playerHealthText.innerHTML = playerHP;
    playerHealth.value = playerHP;
    holyshieldText.innerHTML = holyshieldamount;
    holyshieldbar.value = holyshieldamount;
    
    effect.style.backgroundImage = "";
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
    if (playerHP >= 10000) {
        playerHP = playerMaxHP;
        playerHealth.value = playerHP;
        playerHealthText.innerHTML = playerHP;
        popup.style.display = "block";
        popup.innerHTML = "<p>Your HP is already at maximum!</p><button onclick='closePopup()'>close</button>";
    } else if (playerHP == 0) {
        playerHP = 0;
        playerHealth.value = playerHP;
        playerHealthText.innerHTML = playerHP;
        popup.style.display = "block";
        popup.innerHTML = "<p>You are already dead.</p><button onclick='closePopup()'>close</button>";
    } else {
        if (healBuff == true) {
            healAmount = healAmount + healAmount*0.5;
            playerHP = playerHP + healAmount;
            healBuff = false;
            healBuffIcon.style.display = "none";
            popup.innerHTML = "<h2>Blessing of Light</h2><img src='images/healicon.png' class='icon'><br><p>You are healed by " + healAmount + " (25% of Max HP + 50%) HP and your energy is restored!</p><button onclick='closePopup()'>close</button>";
            playerHealthText.innerHTML = playerHP;
            healAmount = playerMaxHP * 0.25 + random(100, 500);
        } else {
            playerHP = playerHP + healAmount;
            popup.innerHTML = "<h2>Blessing of Light</h2><img src='images/healicon.png' class='icon'><br><p>You are healed by " + healAmount + " (25%) HP and your energy is restored!</p><button onclick='closePopup()'>close</button>";
            playerHealthText.innerHTML = playerHP;
        }
        if (playerHP >= playerMaxHP) {
            playerHP = playerMaxHP;
        }
        playerHealth.value = playerHP;
        playerHealthText.innerHTML = playerHP;
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
            popup.innerHTML = "<h2>Blessing of Light</h2><img src='images/healicon.png' class='icon'><br><p>Heal yourself by 25% (+100 ~ 500) of your HP. Cooldown: 3 turns.</p><button onclick='closePopup()'>close</button>";
            break;
        case "4":
            popup.innerHTML = "<h2>Blessing of Earth</h2><img src='images/shield.png' class='icon'><br><p>Nullify 1 instance of attack from the dragon.</p><button onclick='closePopup()'>close</button>";
            break;
        case "5":
            popup.innerHTML = "<h2>Heaven's Will</h2><img src='images/holyshield.png' class='icon'><br><p>Grants you a shield of 30% of Max HP. Cooldown: 5 turns.</p><button onclick='closePopup()'>close</button>";
            break;
        case "6":
            popup.innerHTML = "<h2>Edge of Eternity</h2><img src='images/doubledmg.png' class='icon'><br><p>Doubles the next instance of direct attack.</p><button onclick='closePopup()'>close</button>";
            break;
        case "s1":
            popup.innerHTML = "<h2>Icebolt</h2><img src='images/s1.png' class='icon'><br><p>Deals 110% of ATK (+250) to the target and restore 10~20 energy.<br>Energy consumption: 0</p><button onclick='closePopup()'>close</button>";
            break;
        case "s2":
            popup.innerHTML = "<h2>Firerain</h2><img src='images/s2.png' class='icon'><br><p>Deals 150% of ATK (+450) to the target and makes it receive 30% more DMG for any subsequent direct attack.<br>Energy consumption: 30</p><button onclick='closePopup()'>close</button>";
            break;
        case "s3":
            popup.innerHTML = "<h2>Thunderstorm</h2><img src='images/s3.png' class='icon'><br><p>Deals 300% of ATK (+1150) to the target. Also, increases the amount of healing by 50% for the next heal skill. <br>Energy consumption: 60</p><button onclick='closePopup()'>close</button>";
            break;  
        case "s4":
            popup.innerHTML = "<h2>Thornvines</h2><img src='images/s4.png' class='icon'><br><p>Deals 150% of ATK (+150) and another 120% of ATK to the target every turn for 3 turns. <br>Energy consumption: 25</p><button onclick='closePopup()'>close</button>";
            break;
        case "s5":
            popup.innerHTML = "<h2>Arrow of Light</h2><img src='images/s5.png' class='icon'><br><p>Deals 100% of ATK (+200) to the target. Marks it with a Hunter's Mark for 1 turn. Restores 10~20 energy.<br>Energy consumption: 0</p><button onclick='closePopup()'>close</button>";
            break;
        case "s6":
            popup.innerHTML = "<h2>Bloodshed</h2><img src='images/s6.png' class='icon'><br><p>Deals 200% of ATK (+470) to the target and another 125% of ATK to the target every turn for 3 turns.<br>Energy consumption: 35</p><button onclick='closePopup()'>close</button>";
            break;
        case "s7":
            popup.innerHTML = "<h2>Piecing Shot</h2><img src='images/s7.png' class='icon'><br><p>Deals 380% of ATK (+1050) to the target. If the target is under Hunter's Mark, deals an additional amount of 150% of ATK.<br>Energy consumption: 60</p><button onclick='closePopup()'>close</button>";
            break;     
        case "s8":
            popup.innerHTML = "<h2>Hunter's Instinct</h2><img src='images/s8.png' class='icon'><br><p>Increases DMG by 50% for 2 turns and mark the enemy with Hunter's Mark.<br>Energy consumption: 40</p><button onclick='closePopup()'>close</button>";
            break;     
        case "chest":
            popup.innerHTML = "<h2>Congrats!</h2><p>You've killed the dragon and received a bunch of gold!</p><button onclick='closePopup()'>close</button>";
            document.getElementById('cast').style.visibility = 'hidden';
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
                skillName = "Firerain";
                energyCon = 30;
                break;
            case "thunderstorm":
                skillName = "Thunderstorm";
                energyCon = 60;
                break;
            case "thornvines":
                skillName = "Thornvines";
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
        }
        
        if (energy < energyCon) {
            popup.style.display = "block";
            popup.innerHTML = "<p>You don't have enough energy to use "+skillName+"!</p><button onclick='closePopup()'>close</button>";
            energy = energy;
            playerEnergyText.innerHTML = energy;
            magicATK = 0;
            skillName = "";
        } else {
            currentFrame = 1;
            switch (skill) {
                case "icebolt":
                    magicATK = playerATK*1.1 + 250;
                    effect.style.backgroundImage = "url('images/skill1.png')";
                    break;
                case "firerain":
                    magicATK = playerATK*1.5 + 450;
                    dmgreceive = true;
                    dmgReceiveIcon.style.display = "block";
                    effect.style.backgroundImage = "url('images/skill2.png')";
                    break;
                case "thunderstorm":
                    magicATK = playerATK*3 + 1150;
                    healBuff = true;
                    healBuffIcon.style.display = "block";
                    effect.style.backgroundImage = "url('images/skill3.png')";
                    break;
                case "thornvines":
                    magicATK = playerATK*1.5 + 150;
                    effect.style.backgroundImage = "url('images/skill4.png')";
                    break;
                case "arrowoflight":
                    magicATK = playerATK + 200;
                    huntermark = true;
                    hunterIcon.style.display = "block";
                    effect.style.backgroundImage = "url('images/skill5.png')";
                    break;
                case "bloodshed":
                    magicATK = playerATK*2 + 470;
                    effect.style.backgroundImage = "url('images/skill6.png')";
                    break;
                case "piercingshot":
                    if (huntermark == false) {
                        magicATK = playerATK*3.8 + 1050;
                    } else {
                        magicATK = playerATK*5.3 + 1050;
                        huntermark = false;
                        hunterIcon.style.display = "none";
                    }
                    effect.style.backgroundImage = "url('images/skill7.png')";
                    break;
                case "huntersinstinct":
                    magicATK = 0;
                    hunteratkbuff = true;
                    hunteratkcooldown = 2;
                    hunteratkmodifier = 0.5;
                    hunterAtkIcon.style.display = "block";
                    huntermark = true;
                    hunterIcon.style.display = "block";
                    effect.style.backgroundImage = "url('images/skill8.png')";
                    break;               
            }
            //damage calculation
            if (skill == "huntersinstinct") {
                damagePlayer = 0;
            } else {
                damagePlayer = random(50, 100) + magicATK;
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
            if (hunteratkcooldown == 0) {
                        hunteratkbuff = false;
                        hunteratkmodifier = 0;
                        hunterAtkIcon.style.display = "none";
            } else {
                        hunteratkcooldown--;
            }
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
             playerHealthText.innerHTML = playerHP;
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
                    bleedturn = 0;
                    bleedDot = 0;
                    bleedState = false;
                    bleedIcon.style.display = "none";
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
                case "thornvines":
                    poisonState = true;
                    poisonTurn = 3;
                    poisonTurnText.innerHTML = poisonTurn + " turns left.";
                    poisonIcon.style.display = "block";
                    energy = energy - energyCon;
                    break;
                case "bloodshed":
                    bleedState = true;
                    bleedTurn = 3;
                    bleedTurnText.innerHTML = poisonTurn + " turns left.";
                    bleedIcon.style.display = "block";
                    energy = energy - energyCon;
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
                document.getElementById('dragon').style.visibility = 'hidden';
                document.getElementById("tutorial").style.display = "block";
                document.getElementById("tutorial").innerHTML = "<h5 id='welcome'>Congrats!</h5><p>You've defeated the dragon and claimed a chest of gold!</p><br><img src='images/mage.gif'><br><button onClick='window.location.reload();'>Play again</button>";

            } else if (playerHP < 0 && dragonHP > 0) {
                playerHP = 0;
                document.getElementById("tutorial").style.display = "block";
                document.getElementById("tutorial").innerHTML = "<h5 id='welcome'>Oh No!</h5><p>You're dead. Better luck next time.</p><br><img src='images/dead.gif' style='width: 150px'><br><button onClick='window.location.reload();'>Try again</button>";
                
            } else if (playerHP < 0 && dragonHP < 0) {
                playerHP = 0;
                dragonHP = 0;
                document.getElementById('dragon').style.visibility = 'hidden';
                document.getElementById("tutorial").style.display = "block";
                document.getElementById("tutorial").innerHTML = "<h5 id='welcome'>Oh No!</h5><p>You're both dead. Better luck next time.</p><br><img src='images/dead.gif' style='width: 150px'><br><button onClick='window.location.reload();'>Try again</button>";
                
            }
            document.getElementById("playerdmgtext").innerHTML = damagePlayer.toFixed(0);
            document.getElementById("playerdmgtext").style.display = "block";
            setTimeout(()=>{document.getElementById("playerdmgtext").style.opacity = 0}, 1000);
            document.getElementById("playerdmgtext").style.opacity = 1;
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
            playerHealth.value = playerHP;
            dragonHealth.value = dragonHP;
            playerHealthText.innerHTML = playerHP;
            damageText.innerHTML = "The dragon did <span class='damage'>" + damageDragon.toFixed(0) + "</span> DMG on you. And you did <span class='damage'>" + damagePlayer.toFixed(0) + " (+" +poisonDot.toFixed(0)+ " DoT DMG)</span> DMG on the dragon by using <span class='damage'>" + skillName + "</span>.";
            
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