import CDStack from "./CDStack";
import CDDeck from "./CDDeck";

export default function CDPlayer() {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-6xl w-full flex gap-16 items-center">
        <CDStack />
        <CDDeck />
      </div>
    </div>
  );
}
