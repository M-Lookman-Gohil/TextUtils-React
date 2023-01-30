import React, {useState} from 'react'

export default function TextForm(props) {

    // Declare a new state variable, which we'll call "text"
    const [text, setText] = useState("");

    const handleOnChange = (event) => {
        //console.log("On change");
        setText(event.target.value);
    }
    const handleUpperClick = () => {
       // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
     }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to clipboard!","success");
    }
    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const handleClearClick = () => {
        let newText = "";
        setText(newText);
     }
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange}
            style={{backgroundColor:props.mode==='dark'?'#212529':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="10"></textarea>
        </div>  
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpperClick}>Convert to Uppercase</button>  
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowerClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Extra Space</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" id="clr-btn" onClick={handleClearClick}>Clear</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <br/>
        <h5>Total Words: {text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</h5>
        <h5>Total Characters: {text.length}</h5>
        <h6><sup>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read.</sup></h6>
        <br/>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Nothing to preview."}</p>
    </div>
    </>
  ); 
}
