import React, { useState } from "react";
import data from "./data";
import  './style.css';
export default function Accoridian() {

    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false)
    const [multiple, setMultiple] = useState([])

    function handleSingleSelection(getCurrentId) {
        setSelected(getCurrentId === selected ? null : getCurrentId)
    }
    //console.log('selected:', selected);
    console.log('enableMultiSelection:', enableMultiSelection);
    function handeleEnableSelection () {

    }
    return (
        <div className="wrapper">
            
            <div className="accordion">
                {data && data.length > 0 ? 
                    data.map((item, index) => {
                        return(
                            <div className="accordion-item" key={item.id}>
                                <div className="accordion-question">
                                    <div onClick={() => handleSingleSelection(item.id)} className="accordion-title">
                                        <h3> {item.question}</h3>
                                    </div>
                                    <span>+</span>
                                </div>
                               
                                <div className="accordion-answer"> 
                                    {selected === item.id ?
                                        <div >
                                            {item.answer}
                                        </div>
                                    :
                                    null
                                    } 
                                </div>
                            </div>   
                        )
                    }) 
                    :
                    <div>Data not found !</div>

                }

                
            </div>            
        </div>
    )
}