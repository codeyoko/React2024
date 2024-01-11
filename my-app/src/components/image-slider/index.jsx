import { useEffect, useState } from "react"
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs" 
import './style.css'
export default function ImageSlider({url,page,limit}){

    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMgs, setErrorMgs] = useState(null);
    const [loading, setLoading] = useState(false);

    //fetch API
    async function fetchImages(getUrl){
        try{
            setLoading(true);
            const response = await fetch(`${getUrl}?page=R${page}&limit=${limit}`);
            const data = await response.json();

            if(data){
                setImages(data);
                setLoading(false);
            }

        }catch(err){
            setErrorMgs(err.message);
        }
    }

    //useEffect

    useEffect(() => {
        if(url !== ''){
            fetchImages(url);
        }
    },[url]);

    console.log(images);

    if(loading){
        return <div>Loading data! please wait</div>
    }

    if(errorMgs !==null){
        return <div>Error: {errorMgs}</div>
    }

    function handlePrevious () {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide -1)
    }

    function handleNext () {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
    }
    return (
        <div className="container">
            <BsArrowLeftCircleFill className="arrow arrow-left" onClick={handlePrevious} />
            {
                images && images.length > 0 
                    ?
                        images.map((imageItem,index) => {
                            return (
                                <img
                                    key={imageItem.id}
                                    alt={imageItem.download_url}
                                    src={imageItem.download_url}
                                    className={currentSlide === index ?  "image-item" : "image-item-hide" }
                                />
                            )
                            

                        })
                    :
                    null
            }

            <BsArrowRightCircleFill className="arrow arrow-right" onClick={handleNext}/>
            
                <span className="circle-indicator">
                    {
                        images && images.length > 0 
                        ?
                            images.map((_,index) => (
                                <button 
                                    key={index} 
                                    className={currentSlide === index ? "current-indicator": "current-indicator-hide"}
                                    onClick={() => setCurrentSlide(index)}
                                ></button>
    
                            ))
                        :
                        null
                    }
                </span>
                
           
        </div>
    )
}