import Bowman from "../class/Bowman.js";

describe("Bowman class", () => {
  test("should create instance with correct props", () => {
    const hero = new Bowman("Bowman");
    expect(hero.name).toBe("Bowman");
    expect(hero.type).toBe("Bowman");
    expect(hero.health).toBe(100);
    expect(hero.level).toBe(1);
    expect(hero.attack).toBe(25);
    expect(hero.defence).toBe(25);
  });
});
