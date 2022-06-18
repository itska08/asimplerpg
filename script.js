/* magic values */
let magicArray = ["icebolt", "firerain", "thunderstorm", "thornvines"];
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

/* character and skill stats */
let skill;
let energy = 0;
let energyCon = 0;
let dragonMaxHP = 10000;
let playerMaxHP = 10000;
let dragonHP = dragonMaxHP;
let playerHP = dragonMaxHP;
let dragonATK = 0;
let playerATK = random(200, 400);
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
let holyshieldstate = true;
let holyshieldcooldown = 0;
let dmgreceive = false;
let poisonDot = 0;
let poisonState = true;
let poisonTurn = 0;
let poisonTurnText = document.getElementById("poisonText");
let doubledmgState = false;
let doublemodifier = 0;

playerEnergyText.innerHTML = energy;
playerAtkText.innerHTML = playerATK;
playerHealthText.innerHTML = playerHP;

function buffAtk() {
    let buffAmount = playerATK * 0.3;
    playerATK = playerATK + buffAmount;
    document.getElementById('buff').style.pointerevents = 'none';
    document.getElementById('buff').style.cursor = 'not-allowed';
    document.getElementById('buff').style.opacity = '0.6';
    document.getElementById('buff').setAttribute("onclick", "");
    atkbufficon.style.display = "block";
    playerAtkText.innerHTML = playerATK;
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
            popup.innerHTML = "<h2>Blessing of Fire</h2><img src='images/atkbuff.png' class='icon'><br><p>Increase your ATK by 30%.</p><button onclick='closePopup()'>close</button>";
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
            popup.innerHTML = "<h2>Icebolt</h2><img src='images/skill1icon.png' class='icon'><br><p>Deals 110% of ATK (+250) to the target and restore 10~20 energy.<br>Energy consumption: 0</p><button onclick='closePopup()'>close</button>";
            break;
        case "s2":
            popup.innerHTML = "<h2>Firerain</h2><img src='images/skill2icon.png' class='icon'><br><p>Deals 150% of ATK (+450) to the target and makes it receive 30% more DMG for any subsequent direct attack.<br>Energy consumption: 30</p><button onclick='closePopup()'>close</button>";
            break;
        case "s3":
            popup.innerHTML = "<h2>Thunderstorm</h2><img src='images/skill3icon.png' class='icon'><br><p>Deals 300% of ATK (+1150) to the target. Also, increases the amount of healing by 50% for the next heal skill. <br>Energy consumption: 60</p><button onclick='closePopup()'>close</button>";
            break;  
        case "s4":
            popup.innerHTML = "<h2>Thornvines</h2><img src='images/skill4icon.png' class='icon'><br><p>Deals 150% of ATK (+150) and another 120% of ATK to the target every turn for 3 turns. <br>Energy consumption: 25</p><button onclick='closePopup()'>close</button>";
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
        case "bothdead":
            popup.innerHTML = "<h2>Uh-oh</h2><p>You both died. Someday, someone will find your corpse and your treasure.</p>";
            break;
        case "playerdead":
            popup.innerHTML = "<h2>Take that</h2><p>You died.</p>";
            break;
        case "wrongcode":
            popup.innerHTML = "<h2>Warning</h2><p>Cannot cast the input spell.</p><button onclick='closePopup()'>close</button>";
            break;
    }
}


let castMagic = (skill) =>  {
    if (magicArray.indexOf(skill.toLowerCase()) > -1) {
        
        //define the skill consumption
        switch (skill) {
            case "Icebolt":
                magicATK = playerATK*0.1 + 250;
                energyCon = 0;
                effect.style.backgroundImage = "url('images/skill1.png')";
                break;
            case "Firerain":
                magicATK = playerATK*0.5 + 450;
                energyCon = 30;
                effect.style.backgroundImage = "url('images/skill2.png')";
                break;
            case "Thunderstorm":
                magicATK = playerATK*2.0 + 1150;
                effect.style.backgroundImage = "url('images/skill3.png')";
                energyCon = 60;
                break;
            case "Thornvines":
                magicATK = playerATK*0.5 + 150;
                effect.style.backgroundImage = "url('images/skill4.png')";
                energyCon = 25;
                break;
        }
        
        if (energy < energyCon) {
            popup.style.display = "block";
            popup.innerHTML = "<p>You don't have enough energy to use that!</p><button onclick='closePopup()'>close</button>";
        } else {
            currentFrame = 1;
            //damage calculation
            damagePlayer = playerATK + random(50, 100) + magicATK;
            if (shieldState == false) {
                damageDragon = dragonATK + random(100, 300);
            } else {
                damageDragon = 0;
                shieldState = false;
                shieldicon.style.display = "none";
            }
            
            if (dmgreceive == true) {
                    damagePlayer = damagePlayer + damagePlayer*0.3 + damagePlayer*doublemodifier;
                    dragonHP -= damagePlayer;
                    dmgreceive = false;
                    dmgReceiveIcon.style.display = "none";
            } else {
                damagePlayer = damagePlayer + damagePlayer*doublemodifier;
                dragonHP -= damagePlayer.toFixed(0);
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

            //energy calculation and effect application
            switch (skill) {
                case "Icebolt":
                    energy = energy + random(10, 20);
                    if (energy >= 100) {
                        energy = 100;
                    }
                    break;
                case "Firerain":
                    energy = energy - energyCon;
                    dmgreceive = true;
                    dmgReceiveIcon.style.display = "block";
                    break;
                case "Thunderstorm":
                    energy = energy - energyCon;
                    healBuff = true;
                    healBuffIcon.style.display = "block";
                    break;
                case "Thornvines":
                    energy = energy - energyCon;
                    poisonState = true;
                    poisonTurn = 3;
                    poisonTurnText.innerHTML = poisonTurn + " turns left.";
                    poisonIcon.style.display = "block";
                    break;
            }
                    playerEnergyText.innerHTML = energy;
                    turn++;
                    turnText.innerHTML = "<p id='turn'>Turn: " + turn + "</p>";
                    cooldown--;
                    holyshieldcooldown--;
            if (dragonHP <= 5000) {
                state = true;
                if (state == true && enragedicon.style.display == "") {
                    dragonHP = dragonHP + 5000;
                    dragonATK = dragonATK + dragonATK * 0.8;
                    helpText('enraged');
                    document.getElementById("dragon").setAttribute("src","images/dragon-enraged.gif");
                    state = false;
                }
            } else {
                state = false;
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
                document.getElementById("tutorial").innerHTML = "<h5 id='welcome'>Congrats!</h5><p>You've defeated the dragon and claimed a chest of gold!</p><br><img src='images/mage.gif'>";

            } else if (playerHP < 0 && dragonHP > 0) {
                playerHP = 0;
                document.getElementById("tutorial").style.display = "block";
                document.getElementById("tutorial").innerHTML = "<h5 id='welcome'>Oh No!</h5><p>You're dead. Better luck next time.</p><br><img src='images/dead.gif' style='width: 150px'>";
                
            } else if (playerHP < 0 && dragonHP < 0) {
                playerHP = 0;
                dragonHP = 0;
                document.getElementById('dragon').style.visibility = 'hidden';
                document.getElementById("tutorial").style.display = "block";
                document.getElementById("tutorial").innerHTML = "<h5 id='welcome'>Oh No!</h5><p>You're both dead. Better luck next time.</p><br><img src='images/dead.gif' style='width: 150px'>";
                
            }
            playerHealth.value = playerHP;
            dragonHealth.value = dragonHP;
            playerHealthText.innerHTML = playerHP;
            damageText.innerHTML = "The dragon did <span class='damage'>" + damageDragon.toFixed(0) + "</span> damage on you. And you did <span class='damage'>" + damagePlayer.toFixed(0) + " (+" +poisonDot.toFixed(0)+ " DoT DMG)</span> damage on the dragon by using " + skill + ".";
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