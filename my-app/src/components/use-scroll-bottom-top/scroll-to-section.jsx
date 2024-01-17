
import { useRef } from 'react';

export default function ScrollToSection() {
    const ref = useRef(null);
    const data = [
        {
            lable: 'First Card',
            style:{
                width: '100%',
                height: '500px',
                background:'red'
            }
        },
        {
            lable: 'Second Card',
            style:{
                width: '100%',
                height: '500px',
                background:'lightgreen'
            }
        },
        {
            lable: 'Third Card',
            style:{
                width: '100%',
                height: '500px',
                background:'yellow'
            }
        }

    ];

    
    function handleScrollToSection () {

        let position = ref.current.getBoundingClientRect().top;

        window.scrollTo({
            top: position,
            behavior: "smooth"
        })

    }


    return (

        <>
            <div>
                <h1>Scroll To Particular Pattern</h1>
                <button onClick={handleScrollToSection}>Click To Scroll</button>

                {
                    data && data.map((item,index) => (

                        <div key={item.key} ref = {index === 2 ? ref : null} style = {item.style}>
                            <h3>{item.lable}</h3>
                        </div> 
                    ))
                              
                }
            </div>
        </>
    )
}