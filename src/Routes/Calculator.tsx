import { evaluate } from "mathjs";
import { useState } from "react";

function Calculator() {
  const [calc, setCalc] = useState("");

  // State to handle errors
  const [oprCheck, setOprCheck] = useState(true); // Avoid duplicated operators
  const [decCheck, setDecCheck] = useState(true); // Avoid duplicated decimals
  const [doneCheck, setDoneCheck] = useState(false); // Reset to 0 once calculation is completed

  // Clear calc value when pressing AC button
  const getClear = () => {
    setOprCheck(true);
    setDecCheck(true);
    setCalc("");
  };

  // Delete last input value when pressing DEL button
  const getDel = () => {
    if (doneCheck) {
      setDoneCheck(false);
    }
    setOprCheck(true);
    setDecCheck(true);
    let str = String(calc).slice(0, -1);
    setCalc(str);
  };

  // Add a number to the operation when pressing a number button
  const getNum = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (doneCheck) {
      setCalc("");
      setDoneCheck(false);
    }
    setCalc((prev) => prev + (e.target as HTMLButtonElement).value);
    setOprCheck(true);
  };

  // Add a operator to the operation when pressing an operator button
  const getOpr = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (doneCheck) {
      setCalc("");
      setDoneCheck(false);
    }
    if (calc === "") {
      return;
    }
    if (oprCheck) {
      setCalc((prev) => prev + (e.target as HTMLButtonElement).value);
      setOprCheck(false);
      setDecCheck(true);
    }
  };

  // Add a decimal to the operation when pressing a decimal button
  const getDec = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (doneCheck) {
      setCalc("");
      setDoneCheck(false);
    }
    if (calc === "") {
      return;
    }
    if (decCheck) {
      setCalc((prev) => prev + (e.target as HTMLButtonElement).value);
      setDecCheck(false);
    }
  };

  // Calculating the accumulated operation
  const getResult = () => {
    if (oprCheck) {
      let replace_str = calc.replace(/x/gi, "*");

      const result = evaluate(replace_str);

      if (isNaN(result)) {
        setCalc("");
      } else if (result === Infinity) {
        alert("ERROR: Cannot divide into 0");
        setCalc("");
      } else {
        setCalc(result);
      }
      setDoneCheck(true);
    }
  };

  return (
    <div className="container">
      <div className="wrapper">
        <section>
          <div className="inputBox">{calc === "" ? "0" : calc}</div>
        </section>
        <section>
          <div className="buttonContainer">
            <button onClick={getClear} value="AC" className="actionButton">
              AC
            </button>
            <button onClick={getDel} value="DEL" className="actionButton">
              DEL
            </button>
            <button onClick={getOpr} value="%" className="actionButton">
              %
            </button>
            <button onClick={getOpr} value="/" className="operatorButton">
              /
            </button>
            <button onClick={getNum} value="7" className="numberButton">
              7
            </button>
            <button onClick={getNum} value="8" className="numberButton">
              8
            </button>
            <button onClick={getNum} value="9" className="numberButton">
              9
            </button>
            <button onClick={getOpr} value="x" className="operatorButton">
              x
            </button>
            <button onClick={getNum} value="4" className="numberButton">
              4
            </button>
            <button onClick={getNum} value="5" className="numberButton">
              5
            </button>
            <button onClick={getNum} value="6" className="numberButton">
              6
            </button>
            <button onClick={getOpr} value="-" className="operatorButton">
              -
            </button>
            <button onClick={getNum} value="1" className="numberButton">
              1
            </button>
            <button onClick={getNum} value="2" className="numberButton">
              2
            </button>
            <button onClick={getNum} value="3" className="numberButton">
              3
            </button>
            <button onClick={getOpr} value="+" className="operatorButton">
              +
            </button>
            <button onClick={getNum} value="0" className="numberButton">
              0
            </button>
            <button onClick={getDec} value="." className="numberButton">
              .
            </button>
            <button onClick={getResult} value="=" className="equalButton">
              =
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Calculator;
