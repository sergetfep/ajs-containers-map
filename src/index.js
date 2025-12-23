import Magician from "./Magician";
import Daemon from "./Daemon";

const mage = new Magician(100);
mage.distance = 2;

const daemon = new Daemon(100);
daemon.distance = 3;

console.log(mage.attack, daemon.attack);
