import { useEffect, useState } from "react"


export default function RandomColor() {
    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000000')


    //random color
    function randomColorUtility(length) {
        return Math.floor(Math.random() * length);
    }

    //handleCreateHexRandomColor
    function handleCreateHexRandomColor() {
        //#123657
        const hex = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
        let hexColor = "#";

        for(let i = 0; i <6; i++) {
            hexColor += hex[randomColorUtility(hex.length)]
        }

        console.log(hexColor);
        setColor(hexColor);
    } 
    
    //handleCreateRgbRandomColor
    function handleCreateRgbRandomColor() {
        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256);
        
        setColor(`rgb(${r}, ${g}, ${b})`);
    } 

    useEffect(() => {
       typeOfColor === 'rgb' ? handleCreateRgbRandomColor() : handleCreateHexRandomColor();
    },[typeOfColor])
    return (
        <div style={{ 
            width: '100vw',
            height: '100vh',
            background: color

        }}>
            <button onClick={() => setTypeOfColor('hex')}>Create HEX Color</button>
            <button onClick={() => setTypeOfColor('rgb')}>Create RGB Color</button>
            <button 
                onClick={ typeOfColor === "hex" ?  handleCreateHexRandomColor : handleCreateRgbRandomColor   
            }>Generate Random Color</button>

            <div style={{ 
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop:70,
                flexDirection: 'column',
            }}>
                <h3>{typeOfColor === 'rgb' ? 'RGB Color' : 'HEX Color'}</h3>
                <h1>{color}</h1>
            </div>
        
        </div>
    )
}