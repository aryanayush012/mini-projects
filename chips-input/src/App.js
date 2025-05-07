import { useState } from 'react';
import Chips from './components/Chips';
const styles ={
  container:{
    justifyItems:"center",
    position: "relative",
    top: "calc(100vh / 3)",
  },
  button:{
    border: "none",
    position: "absolute",
    top: "-7px",
    borderRadius: "50%",
    backgroundColor: "#087b7bcc",
  }
}

function App() {
  const [inputText,setInputText] = useState('');
  const [chips,setChips] = useState([]);

  const handleKeyDown = (e)=>{
    if(e.key === 'Enter'){
      setChips([...chips, inputText]);
      setInputText('');
    }
  }
  return (
    <div style={styles.container}>
      <h1>Chips Input</h1>
      <input 
        type="text" 
        name="chip" 
        id="chip" 
        onChange={e=>setInputText(e.target.value)}
        onKeyDown={e=>handleKeyDown(e)}
        value={inputText}
      />
      <div style={{width:"100%", display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
      {chips.map((chip, index) => (
        <Chips key={index} style={styles.container}>
          {chip}
          <button style={styles.button} onClick={() => setChips(chips.filter((_, i) => i !== index))}>x</button>
        </Chips>
      ))}
      </div>
    </div>
  );
}

export default App;
