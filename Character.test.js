import Character from "./src/characters/Character.js";
import Bowman from "./src/characters/Bowman.js";

describe("Character class", () => {
  test("levelUp should increase level, attack, defence, and set health to 100", () => {
    const hero = new Bowman("Legolas");
    hero.health = 50;
    hero.levelUp();

    expect(hero.level).toBe(2);
    expect(hero.attack).toBeCloseTo(25 * 1.2);
    expect(hero.defence).toBeCloseTo(25 * 1.2);
    expect(hero.health).toBe(100);
  });

  test("levelUp should throw error if character is dead", () => {
    const hero = new Bowman("DeadShot");
    hero.health = 0;

    expect(() => hero.levelUp()).toThrow(
      "Нельзя повысить уровень умершего персонажа"
    );
  });

  test("damage should reduce health correctly", () => {
    const hero = new Bowman("Archer");
    hero.damage(40);
    expect(hero.health).toBeCloseTo(70);
  });

  test("damage should not reduce health below 0", () => {
    const hero = new Bowman("Weakling");
    hero.damage(10000);
    expect(hero.health).toBe(0);
  });

  test("constructor should throw error for invalid name", () => {
    expect(() => new Bowman("A")).toThrow(
      "Имя должно быть строкой от 2 до 10 символов"
    );
  });

  test("constructor should throw error for invalid type", () => {
    class InvalidHero extends Character {
      constructor(name) {
        super(name, "InvalidType");
      }
    }
    expect(() => new InvalidHero("Bob")).toThrow("Тип должен быть одним из");
  });
});
