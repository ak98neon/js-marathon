class Character {
    constructor(name, hp, damageHp) {
        this.name = name;
        this.hp = hp;
        this.damageHp = damageHp;
    }

    //A little crutch just for practice method overriding
    initHp() {
        throw new Error('You have to implement the method initHp!');
    }

    hit(damage) {
        if (this.damageHp - damage < 0) {
            this.damageHp = 0;
            alert('You are lose ' + this.name);
        } else {
            this.damageHp -= damage;
        }

        this.initHp();
    }
}

class Player extends Character {
    isUsedPowerPush = false;
    elHP = document.getElementById('health-character');
    elProgressBar = document.getElementById('progressbar-character');

    constructor(hp, damageHp) {
        super('Player', hp, damageHp);
    }

    initHp() {
        this.elHP.innerText = this.damageHp + ' / ' + this.hp;
        this.elProgressBar.style.width = this.damageHp + '%';
    }

    powerPush() {
        if (!this.isUsedPowerPush) {
            this.isUsedPowerPush = true;
            return 50;
        } else {
            alert('You have used power push already!');
            return 0;
        }
    }
}

class Enemy extends Character {
    elHP = document.getElementById('health-enemy');
    elProgressBar = document.getElementById('progressbar-enemy');

    constructor(hp, damageHp) {
        super('Enemy', hp, damageHp);
    }


    initHp() {
        this.elHP.innerText = this.damageHp + ' / ' + this.hp;
        this.elProgressBar.style.width = this.damageHp + '%';
    }
}

let player = new Player(100, 100);
let enemy = new Enemy(100, 100);

function initGame() {
    console.log("Start Game!");

    player.initHp();
    enemy.initHp();
}

function changeHp(damage, character) {
    character.hit(damage);
}

function random(num) {
    return Math.ceil(Math.random() * num);
}

let $btn = document.getElementById('btn-kick');

$btn.addEventListener('click', function () {
    console.log('kick');
    changeHp(random(20), player);
    changeHp(random(20), enemy);
});

let $btnPowerPush = document.getElementById('btn-power-push');
$btnPowerPush.addEventListener('click', function () {
    console.log('power push to enemy');
    changeHp(player.powerPush(), enemy);
});

initGame();
