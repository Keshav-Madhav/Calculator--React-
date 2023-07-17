import React from "react";
import { useState } from "react";

const calculate=(input)=>{
    try {
        return ""+eval(input);
    } catch (error) {
        return "error";
    }
}

const buttons=document.querySelectorAll(".button");

const Body=()=>{
    const [text,setText] =useState("");
    const [compute,setCompute] =useState(false);

    const buttonHandler=(e)=>{
        console.log(e.target.innerText);
        setText((prev)=>{return prev+e.target.innerText})
    }
    
    return(
        <>
            <div className="body">
                <input type="text" value={text} onChange={(e)=>{
                    setText(e.target.value)
                }}/>

                <div className="controls">
                    <button className="compute" onClick={()=>{
                        setText((prev)=>
                            calculate(prev)
                        )
                    }}>Enter</button>
                
                    <div className="button" onClick={()=>{setText((prev)=>{
                        return text.slice(0,-1);
                    })}}>Backspace</div>
                </div>

                <div className="buttonContainer">
                    <div className="button" onClick={(e)=>{buttonHandler(e)}}>1</div>
                    <div className="button" onClick={(e)=>{buttonHandler(e)}}>2</div>
                    <div className="button" onClick={(e)=>{buttonHandler(e)}}>3</div>
                    <div className="button" onClick={(e)=>{buttonHandler(e)}}>4</div>
                    <div className="button" onClick={(e)=>{buttonHandler(e)}}>5</div>
                    <div className="button" onClick={(e)=>{buttonHandler(e)}}>6</div>
                    <div className="button" onClick={(e)=>{buttonHandler(e)}}>7</div>
                    <div className="button" onClick={(e)=>{buttonHandler(e)}}>8</div>
                    <div className="button" onClick={(e)=>{buttonHandler(e)}}>9</div>
                    <div className="button" onClick={(e)=>{buttonHandler(e)}}>+</div>
                    <div className="button" onClick={(e)=>{buttonHandler(e)}}>0</div>
                    <div className="button" onClick={(e)=>{buttonHandler(e)}}>-</div>
                    <div className="button" onClick={(e)=>{buttonHandler(e)}}>/</div>
                    <div className="button" onClick={(e)=>{buttonHandler(e)}}>*</div>
                    <div className="button" onClick={(e)=>{buttonHandler(e)}}>)</div>
                    <div className="button" onClick={(e)=>{buttonHandler(e)}}>(</div>
                </div>
            </div>
        </>
    )
}

export default Body;