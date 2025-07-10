import Character from "./Character.js";

export default class Orge extends Character {
  constructor(name) {
    super(name, "Orge");
    this.attack = 40;
    this.defence = 10;
  }
}
