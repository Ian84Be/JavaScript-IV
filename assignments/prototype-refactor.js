/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
class GameObject {
    constructor(att) {
      this.createdAt = att.createdAt;
      this.dimensions = att.dimensions;
    }
    destroy() {
      console.log(`*** ${this.name} was destroyed. ***`); 
    }
  }
  
  class CharacterStats extends GameObject {
    constructor(att) {
      super(att);
      this.totalHP = att.healthPoints;
      this.healthPoints = att.healthPoints;
      this.name = att.name;
    }
    takeDamage() {
        console.log(`${this.name} took damage.`);
      }
    hpMeter() {
    console.log(`/// ${this.name} ${this.healthPoints}/${this.totalHP}HP ///`);
    }
  }
  
  class Humanoid extends CharacterStats {
    constructor(att) {
      super(att);
      this.team = att.team;
      this.weapons = att.weapons;
      this.language = att.language;
    }
    greet() {
      console.log(`${this.name} offers a greeting in ${this.language}`);
    } 
  }
  
    // HERO CONSTRUCTOR
  class Hero extends Humanoid {
    constructor(att) {
      super(att);
    }
    attack(target) {
      console.log(`${this.name} attacks ${target.name}`);
      let roll = Math.floor(Math.random()*12+1);
      // console.log(`--- attack --- ${roll}`);
      if (roll > 9) {
        console.log(`!!! CRITICAL HIT !!!`);
        roll*=2;
      }
      if (roll == 1) {
        console.log(`${target.name} dodges the attack!`);
        roll = 0;
      }
      target.healthPoints -= roll;
      console.log(`${this.name} deals ${roll} damage!`);
      return (target.healthPoints > 0) ? target.hpMeter() : target.destroy();
    }
  }
  
  // THE LEGEND OF HYRULE
  const link = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 30,
    name: 'Link',
    team: 'Hyrule',
    weapons: [
      'Master Sword',
      'Boomerang',
    ],
    language: 'silence',
  });
  
  // VILLIAN CONSTRUCTOR
  class Villian extends Hero {
    constructor(att) {
      super(att);
    }
    taunt(target) {
      console.log(`${this.name} sneers and insults ${target.name}`);
    }
    magicAttack(target) {
      let dmg = Math.floor(target.healthPoints * .5);
      target.healthPoints -= dmg;
      console.log(`${this.name} uses Dark Magic to attack!`);
      console.log(`${target.name} loses ${dmg}HP`);
      return (target.healthPoints > 0) ? target.hpMeter() : target.destroy();
    }
  }
  
  // EVIL WIZARD
  const gannon = new Villian({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 4,
      height: 9,
    },
    healthPoints: 50,
    name: 'Gannondorf',
    team: 'Gerudo',
    weapons: [
      'Triforce of Power',
      'Dark Magic',
    ],
    language: 'English',
  });
  
  gannon.greet();
  link.greet();
  
  // BATTLE TO THE DEATH
  while (gannon.healthPoints > 0 && link.healthPoints > 0) {
    let roll = Math.floor(Math.random()*12+1);
    // console.log(`... time ... ${roll}`);
    if (roll == 12) gannon.magicAttack(link);
    else if (roll > 5 && roll < 12) link.attack(gannon);
    else if (roll < 5 && roll > 1) gannon.attack(link);
    else gannon.taunt(link);
  }

  // OTHER STUFF FROM LAST PROJECT


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
