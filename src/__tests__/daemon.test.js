import Daemon from "../class/Daemon.js";

describe("Daemon class", () => {
  test("should create instance with correct props", () => {
    const hero = new Daemon("Daemon");
    expect(hero.name).toBe("Daemon");
    expect(hero.type).toBe("Daemon");
    expect(hero.health).toBe(100);
    expect(hero.level).toBe(1);
    expect(hero.attack).toBe(10);
    expect(hero.defence).toBe(40);
  });
});
