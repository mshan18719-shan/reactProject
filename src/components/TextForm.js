import React, {useState} from "react";

export default function TextForm(props) {
  const [text, setText] = useState('');
    const handlerOnChange = (event)=>{
        // console.log('on change')
        setText(event.target.value)
    }

    const clearAll = ()=>{
        // console.log('on change')
        let newText = '';
        setText(newText)
        props.showAlert('Text is Cleared', 'danger')
    }
    const handleUpClick = ()=>{
        // console.log('button is clicked');
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Upper case is Enabled', 'primary')
    }
    const handleLoClick = ()=>{
        // console.log('button is clicked');
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Lower case is Enabled', 'primary')
    }
    const capitalizeCase = () => {
    // Split the text into words, capitalize each, and join back
    let newText = text
      .split(" ") // split into words
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // capitalize
      .join(" "); // join words back into a string

    setText(newText);
    props.showAlert('Text is Capitalized', 'success')
  };
    const sentanceCase = () => {
      if (!text) return;
    let newText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    setText(newText);
    props.showAlert('Sentence Case is Enabled', 'success')
  };
    const alternateCase = () => {
      let newText = text
     .split("") // break into individual characters
     .map(char => {
      // if uppercase → make lowercase, else uppercase
      return char === char.toUpperCase()
        ? char.toLowerCase()
        : char.toUpperCase();
   })
    .join(""); // join them back into a string

  setText(newText);
  props.showAlert('Alternate Case is Enabled', 'warning')
};
  const titleCase = ()=>{
    const smallWords = ["a", "an", "the", "and", "but", "or", "for", "nor", "on", "in", "at", "to", "from", "by", "is", "of"];
    let word = text.toLowerCase().split(" ")
    let newText = word.map((word,index)=>{
      // Always capitalize first or last word
      if (index === 0 || index === word.length-1){
        return word.charAt(0).toUpperCase() + word.slice(1); 
      }

      // If the word is in the smallWords list → keep lowercase
      if (smallWords.includes(word)){
        return word;
      }

      // Otherwise, capitalize
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
    setText(newText)
    props.showAlert('Title case is Enabled', 'success')
  };
  const removeExtraSpaces = () => {
  let newText = text.split(/[ ] +/)
  setText(newText.join(" "));
  props.showAlert('Extra spaces is removed', 'warning')
};
  const handleCopy = () => {
  navigator.clipboard.writeText(text);
  // alert("Text copied to clipboard!");
  props.showAlert('Text is copy to Clipboard', 'success')
};
    
  return (
    <>
    <div className={`container my-2 text-${props.mode === 'light'?'dark':'light'}`}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
         <textarea className="form-control" style={{backgroundColor: props.mode === 'light'?'white':'rgb(32 52 65)', color: props.mode === 'light'?'black':'white'}} id="myBox" placeholder="Enter your text" value={text} onChange={handlerOnChange} rows="8"></textarea>
         </div>
         <h5>Convert to :</h5>
         <button disabled={text.length===0} className="btn btn-primary m-1" onClick={handleLoClick}>lowercase</button>
         <button disabled={text.length===0} className="btn btn-secondary m-1" onClick={handleUpClick}>UPPERCASE</button>
         <button disabled={text.length===0} className="btn btn-light m-1" onClick={removeExtraSpaces}>RemoveSpace</button>
         <button disabled={text.length===0} className="btn btn-success m-1" onClick={capitalizeCase}>Capital</button>
         <button disabled={text.length===0} className="btn btn-info m-1" onClick={sentanceCase}>Sentance</button>
         <button disabled={text.length===0} className="btn btn-light m-1" onClick={titleCase}>TitleCase</button>
         <button disabled={text.length===0} className="btn btn-dark m-1" onClick={alternateCase}>AlTeRnAtEcAsE</button>
         <button disabled={text.length===0} className="btn btn-primary m-1" onClick={alternateCase}>InVeRsEcAsE</button>
         <button disabled={text.length===0} className="btn btn-warning m-1" onClick={handleCopy}>Copy to Clipboard</button>
         <button disabled={text.length===0} className="btn btn-danger m-1" onClick={clearAll}>Clear All</button>
    </div>
    <div className={`container my-4 text-${props.mode === 'light'?'dark':'light'}`}>
      <h4>Your text summary</h4>
      <p>{text.split(/\s+/).filter((word) => {return word.length !==0}).length} Words, {text.length} Characters</p>
      <h6>Time Take for reading</h6>
      <p>{0.004 * text.length} Seconds to read</p>
      <h5>Text Preview</h5>
      <p>{text.length > 0 ? text : "Enter some text above to preview it here" }</p>
    </div>
    </>
  );
}
