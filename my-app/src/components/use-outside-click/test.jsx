import { useRef, useState } from "react";
import useOutSideClick from ".";


export default function UseOnClickOutsideTest() {

    const [showContent, setShowContent] = useState(false);
    const ref = useRef();
    useOutSideClick(ref, () => setShowContent(false));

    return (
        <div>
            {
                showContent ? 
                    <div ref = {ref}>
                        <h1>This is Random Content</h1>
                        <p>Please click outside of this to close this.
                            If won't close if you click inside this content
                        </p>
                    </div> 
                    :
                    <button onClick={() => setShowContent(true)}>Show Content</button> 
            }
            

        </div>
    )
}