import React, { useState } from "react";
import "./styles.css";
import useLongPress from "./LongPress";

export default function App() {
  const [longPressCount, setlongPressCount] = useState(0);
  const [clickCount, setClickCount] = useState(0);

  const onLongPress = () => {
    console.log("longpress is triggered");
    setlongPressCount(longPressCount + 1);
  };

  const onClick = () => {
    console.log("click is triggered");
    setClickCount(clickCount + 1);
  };

  const defaultOptions = {
    shouldPreventDefault: true,
    delay: 3000
  };
  const longPressEvent = useLongPress(onLongPress, onClick, defaultOptions);

  return (
    <div className="App">
      <button {...longPressEvent}>Just keep pressing!!</button>
      <span>Long press count: {longPressCount}</span>
      <span>Click count: {clickCount}</span>
    </div>
  );
}
