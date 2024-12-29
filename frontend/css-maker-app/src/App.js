import React, {useState} from "react";
import CssStyler from "./CssStyler";
import './App.css'

const App = () => {
  const [selected, setSelected] = useState("")
  const [showElement, setShowElement] = useState(false)
  return (
    <div className="App" style={{ padding: '1rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>HTML & CSS Maker</h1>
      <div>
        {['div', 'button', 'input'].map((element)=>(
          <button style={{
              margin: '0 0.5rem',
              padding: '0.5rem',
              background: selected === element ? '#007BFF' : '#ddd',
              color: selected === element ? '#fff' : '#000',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }} key={element} onClick={() => setSelected(element)}>
            {element}
          </button>
        ))}
        <input type="checkbox" onClick={() => setShowElement(!showElement)}/>직접 입력
        {showElement&&(
          <input type="text" placeholder="만들 요소를 입력하세요" onChange={(e) => setSelected(e.target.value)}/>
          )}
      </div>

      <CssStyler/>
    </div>
  );
};

export default App
