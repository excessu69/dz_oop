import Swordsman from "../class/Swordsman.js";

describe("Swordsman class", () => {
  test("should create instance with correct props", () => {
    const hero = new Swordsman("Swordsman");
    expect(hero.name).toBe("Swordsman");
    expect(hero.type).toBe("Swordsman");
    expect(hero.health).toBe(100);
    expect(hero.level).toBe(1);
    expect(hero.attack).toBe(40);
    expect(hero.defence).toBe(10);
  });
});
