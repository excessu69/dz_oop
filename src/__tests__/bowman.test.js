import Bowman from "../class/Bowman";

test("Правильно создаётся объект", () => {
  const bowerman = new Bowman("Bowman");
  const correct = {
    name: "Bowman",
    type: "Bowman",
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(bowerman).toEqual(correct);
});
