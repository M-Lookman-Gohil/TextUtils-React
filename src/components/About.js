import React from 'react'

export default function About(props){

    
    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white',
    //     })
    let myStyle = {
        color: props.mode === 'dark'?'white':'black',
        backgroundColor : props.mode === 'dark'?'#212529':'white'
    }
    let abtext = {
        color: props.mode === 'dark'?'white':'black',
        backgroundColor : props.mode === 'dark'?'#0e1c2d':'white'
    }

    
  return (
    <div className='container' style={abtext}>
        <h1 className='my-3'>About Us</h1>
            <div className="accordion" id="accordionExample">
    <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
        <button style={myStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <strong>Analyze your text</strong>
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
            <strong>Textutils gives you a way to analyze your text quickly and efficiently..</strong> 
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
        <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <strong>Free to use</strong>
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
            <strong>TextUtils is a free character counter tool 
                    that provides instant character count & word count 
                    statistics for a given text. TextUtils reports the number
                     of words and characters.
                    Thus it is suitable for writing text with word/ 
                    character limit.</strong>    
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
        <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <strong>Browser compatible</strong>
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
           <strong>This word counter software works in any web browsers such as 
            Chrome, Firefox, Internet Explorer, Safari, Opera.
            It suits to count characters in 
            facebook, blog, books, excel document, pdf document, essays, etc.</strong>
        </div>
        </div>
    </div>
    </div>
    </div>
  );
}
