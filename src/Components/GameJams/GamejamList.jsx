import styles from "./GameJamList.module.css";
import GameJam from "./GameJam";

function GameJamList() {
  return (
    <div className={styles.section} id="Jams">
      <h1 className={`section-header ${styles.header}`}>GameJams</h1>
      <div className={styles.gamejams}>
        <GameJam></GameJam>
        <GameJam></GameJam>
        <GameJam></GameJam>
        <GameJam></GameJam>
        <GameJam></GameJam>
      </div>
    </div>
  );
}

export default GameJamList;
