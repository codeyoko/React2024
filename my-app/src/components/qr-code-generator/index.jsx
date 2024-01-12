import { useState } from "react"
import QRCode from "react-qr-code"

export default function QRCodeGenerator() {

    const [qrCode, setQrCode] = useState('');
    const [input, setInput] = useState('');

    function handleGenerateQRCode () {
        setQrCode(input);
        setInput('')
    }
    return (
        <>
            <div>
                <h1>QR Code Generator</h1>
                <div>
                    <input 
                        type="text" 
                        name="qr-code-value" 
                        value={input}
                        placeholder="Enter your value here"
                        onChange={(event) => setInput(event.target.value)}
                    />
                    <button 
                        onClick={handleGenerateQRCode}
                        disabled={input && input.trim() !== "" ? false : true}
                    
                    >Generate</button>
                </div>
            </div>
            <div>
                <QRCode 
                    id="qr-code"
                    value={qrCode}
                    size={300}
                    bgColor="#fff"
                
                />
            </div>
        </>

    )
}