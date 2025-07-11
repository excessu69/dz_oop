import Magician from "../class/Magician.js";

describe("Magician class", () => {
  test("should create instance with correct props", () => {
    const hero = new Magician("Magician");
    expect(hero.name).toBe("Magician");
    expect(hero.type).toBe("Magician");
    expect(hero.health).toBe(100);
    expect(hero.level).toBe(1);
    expect(hero.attack).toBe(10);
    expect(hero.defence).toBe(40);
  });
});
