import "./styles.css";
import React, { useState } from 'react';
import { Switch, useDarkreader } from 'react-darkreader';

export default function App() {
  if (localStorage.getItem('dark')){
  var opa = (localStorage.getItem('dark') === 'true')
}else opa = true
  const [isDark, { toggle }] = useDarkreader(opa);
  return (
    <div className="App">
      <Switch checked={isDark} onChange={state=>{
        toggle(state)
        localStorage.setItem('dark',state)
      
    }}        
        />
     

      <h1>Dota 12v12 Chatwheel</h1>
    </div>
  );
}
