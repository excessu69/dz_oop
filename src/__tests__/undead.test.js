import Undead from "../class/Undead.js";

describe("Undead class", () => {
  test("should create instance with correct props", () => {
    const hero = new Undead("Undead");
    expect(hero.name).toBe("Undead");
    expect(hero.type).toBe("Undead");
    expect(hero.health).toBe(100);
    expect(hero.level).toBe(1);
    expect(hero.attack).toBe(25);
    expect(hero.defence).toBe(25);
  });
});
