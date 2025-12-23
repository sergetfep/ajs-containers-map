import Magician from "../src/Magician";
import Character from "../src/Character";

describe("Magician tests", () => {
  test("attack without stoned at distance 2", () => {
    const mage = new Magician(100);
    mage.distance = 2;
    mage.stoned = false;
    expect(mage.attack).toBe(90);
  });

  test("attack with stoned at distance 2", () => {
    const mage = new Magician(100);
    mage.distance = 2;
    mage.stoned = true;
    expect(mage.attack).toBe(85);
  });

  test("attack with stoned at distance 5", () => {
    const mage = new Magician(100);
    mage.distance = 5;
    mage.stoned = true;
    const expected = Math.floor(100 * (1 - (5 - 1) * 0.1) - Math.log2(5) * 5);
    expect(mage.attack).toBe(expected);
  });

  test("attack is 0 if distance < 1", () => {
    const mage = new Magician(100);
    mage.distance = 0;
    expect(mage.attack).toBe(0);
  });

  test("attack is 0 if distance > 5", () => {
    const mage = new Magician(100);
    mage.distance = 6;
    expect(mage.attack).toBe(0);
  });

  test("attack without stoned flag", () => {
    const mage = new Magician(100);
    mage.distance = 3;
    mage.stoned = false;
    expect(mage.attack).toBe(80);
  });

  test("stoned getter returns correct value", () => {
    const mage = new Magician(100);
    mage.stoned = true;
    expect(mage.stoned).toBe(true);
  });
});

test("Character stoned getter executes", () => {
  const char = new Character(100);
  char.stoned = true;
  expect(char.stoned).toBe(true);
});
