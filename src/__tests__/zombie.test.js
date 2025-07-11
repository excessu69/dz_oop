import Zombie from "../class/Zombie";

describe("Zombie class", () => {
  test("should create instance with correct props", () => {
    const hero = new Zombie("Zombie");
    expect(hero.name).toBe("Zombie");
    expect(hero.type).toBe("Zombie");
    expect(hero.health).toBe(100);
    expect(hero.level).toBe(1);
    expect(hero.attack).toBe(40);
    expect(hero.defence).toBe(10);
  });
});
