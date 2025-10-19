import React, { useState } from 'react'

export default function About(props) {
    // const [MyStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // });
    let MyStyle = {
      color : props.mode === 'dark'?'white':'black',
      backgroundColor : props.mode === 'dark'?'rgb(58 62 105)':'white',
    }
  return (
    <>
      <div className="container my-2">
        <h2  style={{color : props.mode === 'dark'?'white':'black'}}>About Us</h2>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
           <h2 className="accordion-header" id="headingOne">
             <button className="accordion-button" style={MyStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
               Our First React App
             </button>
           </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
           <div className="accordion-body"  style={MyStyle}>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam minima placeat iste officiis nobis aliquid eos ab voluptatibus natus Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, autem. </p>
           </div>
         </div>
       </div>
       <div className="accordion-item">
         <h2 className="accordion-header" id="headingTwo">
             <button className="accordion-button collapsed"  style={MyStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        All About App
      </button>
       </h2>
         <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
           <div className="accordion-body"   style={MyStyle}>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam minima placeat iste officiis nobis aliquid eos ab voluptatibus natus Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, autem. </p>
      </div>
    </div>
       </div>
    <div className="accordion-item">
       <h2 className="accordion-header" id="headingThree">
          <button className="accordion-button collapsed"  style={MyStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        What we done
          </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
           <div className="accordion-body"   style={MyStyle}>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam minima placeat iste officiis nobis aliquid eos ab voluptatibus natus Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, autem. </p>
            </div>
          </div>
        </div>
     </div>
      </div>
    </>
  )
}
