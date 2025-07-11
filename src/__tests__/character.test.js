import Character from "../class/Character.js";

describe("Character class", () => {
  test("levelUp should increase level, attack, defence, and set health to 100", () => {
    const hero = new Character("Hero", "Bowman");
    hero.attack = 10;
    hero.defence = 10;
    hero.health = 50;
    hero.levelUp();

    expect(hero.level).toBe(2);
    expect(hero.attack).toBeCloseTo(10 * 1.2);
    expect(hero.defence).toBeCloseTo(10 * 1.2);
    expect(hero.health).toBe(100);
  });

  test("levelUp should throw error if character is dead", () => {
    const hero = new Character("Hero", "Bowman");
    hero.health = 0;

    expect(() => hero.levelUp()).toThrow(
      "Нельзя повысить уровень умершего персонажа"
    );
  });

  test("damage should reduce health correctly", () => {
    const hero = new Character("Hero", "Bowman");
    hero.defence = 25;
    hero.damage(40);
    expect(hero.health).toBeCloseTo(70);
  });

  test("damage should not reduce health below 0", () => {
    const hero = new Character("Hero", "Bowman");
    hero.defence = 0;
    hero.damage(10000);
    expect(hero.health).toBe(0);
  });

  test("constructor should throw error for invalid name", () => {
    expect(() => new Character("A", "Bowman")).toThrow(
      "Имя должно быть строкой от 2 до 10 символов"
    );
  });

  test("constructor should throw error for invalid type", () => {
    expect(() => new Character("Hero", "Alien")).toThrow(
      "Тип должен быть одним из"
    );
  });
});
