import React, { useState } from "react";


export default function TectForm(props) {
    const [text, setText] = useState('');


    const handleOnChange = (event)=> {
        setText(event.target.value)

    }

    const handleUpClick = ()=> {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to upper case", "success");

    }
    const handleLowClick = ()=> {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("converted to lower case", "success");
    }

  return (
    <>
      <div className={`container my-3 text-${props.mode=== 'light'?'dark': 'light'}`}>
        <div className="mb-3" >
          <h1>Enter Your Text </h1>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="7"
            value={text}
            onChange={handleOnChange}
            placeholder="Enter Text Here"
            style={{backgroundColor : props.mode === 'light'?'white':'black', color : props.mode === 'light'?'black':'white' }}

          ></textarea>
        </div>
        <div className="container ">
        <button type="button" className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>
          ConvertToUpperCase
        </button>
        <button type="button" className="btn btn-primary my-2 mx-2"onClick={handleLowClick}>
          ConvertToLowerCase
        </button>
        </div>

        <h5 className="my-3"> your text summary</h5>
        <p> {text.split(" ").length} words and {text.length} chars </p>
        <p> {0.008* text.split(" ").length} Minutes to read text  </p> 
        <h2>Preview</h2>
        <p> {text} </p>

      </div>
    </>
  );
}
