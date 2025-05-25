import { useRef, useState } from "react";
import Context from "./classes/context/Context";
import { operations, type AvailableOptions } from "./common/OperationOptions";

function App() {
  const [operatedNumber, setOperatedNumber] = useState<string>("");
  const [operatorNumber, setOperatorNumber] = useState<string>("");
  const [operation, setOperation] = useState<string>("");

  const context = useRef(new Context());

  function handleCommonButtonClick(value: string) {
    if (operatorNumber.match(/[a-zA-Z\s]/g)) {
      setOperatorNumber(state => state.replace(/[a-zA-Z\s%]/g, ""))
    }
    
    if (value === "," ) {
      if (!operatorNumber.includes(".")) setOperatorNumber((state) => state += ".");

      return;
    }

    if (value === "%") {
      if (!operatorNumber.includes("%")) setOperatorNumber((state) => state += " %");

      return;
    }
    
    setOperatorNumber((state) => state += value);
  }
  
  function setStrategy(key: AvailableOptions) {
    if (!operatorNumber && !operatedNumber) {
      return;
    } if (key === "restDivision" && (operatorNumber && operatedNumber)) {
      handleCommonButtonClick("%");
      return;
    } else if (operatorNumber && operatedNumber) {
      calculate(true);
    }

    const newStrategy = operations[key];
    
    if (!newStrategy) return;
    
    context.current.setStrategy = operations[key];
    
    setOperation(context.current.curretOperation);
    
    if (operatorNumber && !operatedNumber) {
      handleChangeStrategy();
    }
  }
  
  function handleChangeStrategy() {
    setOperatedNumber(operatorNumber);
    setOperatorNumber("");
  }
  
  function calculate(calculateSettingOperation: boolean) {
    if (operatedNumber === '' || operatorNumber === "") {
      return;
    }
    
    const result = context.current.execute(formatNumbers(operatedNumber), formatNumbers(operatorNumber));

    context.current.setStrategy = null;

    if (typeof result !== "number") {
      alert("Dados inválidos, verifique os valores para calcular novamente");
    }

    if (!calculateSettingOperation){
      setOperatedNumber("");
      setOperatorNumber(result.toString());
      setOperation("");
    } else {
      setOperatedNumber(result.toString());
      setOperatorNumber("");
    }
  }

  function formatNumbers(value: string): number {
    return value.includes("%") ? +value.replace(/[\s%]/g, "") / 100 : +value
  }

  function clearEnd() {
    setOperatorNumber(state => state.substring(0, state.length - 1));
  }
  
  function clearAll() {
    context.current.setStrategy = null;
    setOperation(context.current.curretOperation);
    setOperatedNumber("");
    setOperatorNumber("");
  }
  
  return (
    <div className="bg-zinc-900 h-dvh grid place-items-center">
      <div className="w-full max-w-96">
        <div className="bg-gray-500 py-2 px-4">
          <div className="flex">
            <input type="text" 
                   className="w-11/12 text-end text-black outline-0"
                   readOnly 
                   value={ operatedNumber }/>
            <p className="w-1/12 text-end"> { operation } </p>
          </div>

          <input type="text" 
                 className="w-full text-end text-black outline-0" 
                 readOnly 
                 value={ operatorNumber }/>
        </div>
        
        <div className="flex w-full flex-col gap-3">
          <div className="flex gap-3 mt-3">
            <button className="w-6/12 bg-red-500 h-10 rounded-sm cursor-pointer" onClick={() => clearAll()}>C</button>
            <button className="w-6/12 bg-red-400 h-10 rounded-sm cursor-pointer" onClick={() => clearEnd()}>CE</button>
          </div>
          <div className="flex gap-3">
            <button className="w-3/12 bg-blue-400 h-10 rounded-sm cursor-pointer" onClick={() => setStrategy("restDivision")}>%</button>
            <button className="w-3/12 bg-blue-400 h-10 rounded-sm cursor-pointer" onClick={() => setStrategy("pow")}>^</button>
            <button className="w-3/12 bg-blue-400 h-10 rounded-sm cursor-pointer" onClick={() => setStrategy("squareRoot")}>√</button>
            <button className="w-3/12 bg-blue-400 h-10 rounded-sm cursor-pointer" onClick={() => setStrategy("division")}>/</button>
          </div>
          <div className="flex gap-3">
            <button className="w-3/12 bg-green-500 h-10 rounded-sm cursor-pointer" onClick={() => handleCommonButtonClick("7")}>7</button>
            <button className="w-3/12 bg-green-500 h-10 rounded-sm cursor-pointer" onClick={() => handleCommonButtonClick("8")}>8</button>
            <button className="w-3/12 bg-green-500 h-10 rounded-sm cursor-pointer" onClick={() => handleCommonButtonClick("9")}>9</button>
            <button className="w-3/12 bg-blue-400 h-10 rounded-sm cursor-pointer" onClick={() => setStrategy("sum")}>+</button>
          </div>
          <div className="flex gap-3">
            <button className="w-3/12 bg-green-500 h-10 rounded-sm cursor-pointer" onClick={() => handleCommonButtonClick("4")}>4</button>
            <button className="w-3/12 bg-green-500 h-10 rounded-sm cursor-pointer" onClick={() => handleCommonButtonClick("5")}>5</button>
            <button className="w-3/12 bg-green-500 h-10 rounded-sm cursor-pointer" onClick={() => handleCommonButtonClick("6")}>6</button>
            <button className="w-3/12 bg-blue-400 h-10 rounded-sm cursor-pointer" onClick={() => setStrategy("sub")}>-</button>
          </div>
          <div className="flex gap-3">
            <button className="w-3/12 bg-green-500 h-10 rounded-sm cursor-pointer" onClick={() => handleCommonButtonClick("1")}>1</button>
            <button className="w-3/12 bg-green-500 h-10 rounded-sm cursor-pointer" onClick={() => handleCommonButtonClick("2")}>2</button>
            <button className="w-3/12 bg-green-500 h-10 rounded-sm cursor-pointer" onClick={() => handleCommonButtonClick("3")}>3</button>
            <button className="w-3/12 bg-blue-400 h-10 rounded-sm cursor-pointer" onClick={() => setStrategy("multiplication")}>*</button>
          </div>
          <div className="flex gap-3">
            <button className="w-3/12 bg-green-500 h-10 rounded-sm cursor-pointer" onClick={() => handleCommonButtonClick("0")}>0</button>
            <button className="w-3/12 bg-green-500 h-10 rounded-sm cursor-pointer" onClick={() => handleCommonButtonClick(",")}>,</button>
            <button className="w-6/12 bg-gray-300 h-10 rounded-sm cursor-pointer" onClick={() => calculate(false)}>=</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
