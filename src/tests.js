import React, { useEffect, useState, useContext, useCallback, useMemo, useRef, useImperativeHandle } from 'react';
import { ThemeContext } from "./Lesson4/2_context_theme/theme";

export function Header(props) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => { // передаем в хук функцию, которая запустит эффект
    console.log('run effect here'); // сделаем в ней что-то
    return () => { // вернем функцию для отмены эффекта
      console.log('cancel effect here');
    };
  }, [ // передадим массив зависимостей
    isOpen,  // указываем, что эффект нужно запускать если изменилось значение isOpen
  ]);

  return (
   <header className="header">
     <div className="header__actions">
       <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? "Close" : "Open"}</button>
     </div>
     {isOpen && <div className="header__menu">menu</div>}
   </header>
  );
}

function Test(props) {
  const [factorialBorder, setFactorialBorder] = useState(1);
  const factorial = useMemo(() => {
    let result = 1;
    for (let i = 1; i <= factorialBorder; i++) {
      result *= i;
    }
    return factorial;
  }, [factorialBorder]);

  return (
    <button onClick={() => setFactorialBorder(factorialBorder + 1)}>
      Factorial of {factorialBorder} is {factorialBorder}
    </button>
  );
}

function Form() {
  let inputRef = useRef(null); // создадим реф

  useEffect(() => {
    console.log('->', inputRef.current); // читаем текущее значение рефа
  });

  return (
    <form>
      <input type="text" ref={inputRef}/> {/* Передадим реф для DOM-узла */}
    </form>
  );
}

function Countdown({ seconds = 10 }) {
  const timerIntervalRef = useRef(null); // создадим реф для таймера
  const [remain, setRemain] = useState(seconds);   // храним, сколько времени осталось

  useEffect(() => {
    timerIntervalRef.current = setInterval(() => { // назначение нового интервала и запись его в реф
      setRemain(remain - 1);
    }, 1000);

    return () => { // остановка интервала
      clearInterval(timerIntervalRef.current);
    };
  }, [seconds]); // перезапускаем логику таймера при изменении пропа seconds

  return (
    <span>Remain {remain} seconds of {seconds}</span>
  );
}

function TextInput({ label, ...rest }, ref) { // перенаправленный реф придет 2 аргументом
  const inputRef = useRef(null); // используем отдельный, внутренний реф для поля

  useImperativeHandle(ref, () => { // настроим, что будет внутри перенаправленного рефа
    return {
      node: inputRef.current,
      focus: () => inputRef.current.focus(),
      blur: () => inputRef.current.blur(),
    };
  });

  return (
    <div className="form__input">
      <label>{label}: <input {...rest} ref={inputRef}/></label>{/* Передадим внутренний реф */}
    </div>
  );
}
TextInput = React.forwardRef(TextInput); // используем перенарпавление рефа
