import { useEffect, useState } from "react";

export const useInput = () => {
  const [input, setInput] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false,
    shift: false,
    jump: false,
  });

  const keys = {
    KeyW: "forward",
    KeyS: "backward",
    KeyA: "left",
    KeyD: "right",
    LeftShift: "shift",
    Space: "jump",
  };
  const findKey = { key : string} => keys{key};

  useEffect(()=>{
    const handleKeyDown = (e)=>{
        setInput((m)=>({...m,[findKey(e.code)]:true}))
    };
    const handleKeyUp = (e)=>{
        setInput((m)=>({...m,[findKey(e.code)]:false}))
    }
    document.addEventListener("keyDown",handleKeyDown)
    document.addEventListener("keyUp",handleKeyUp)
    return()=>{
    document.removeEventListener("keyDown",handleKeyDown)
    document.removeEventListener("keyUp",handleKeyUp)
    }
  } ,[])

  return input;
};
