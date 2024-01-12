import { useState } from "react"




export default function CustomTabs({tabsContent, onChange}) {

        const [currentTabIndex, setCurrentTabIndex] = useState(0);

        function handleShowContent(getCurrentIndex){
            setCurrentTabIndex(getCurrentIndex);
            onChange(getCurrentIndex);
        }

    return (
        <>
            <div className="tab-container">
                <div className="tab-heading">
                    {tabsContent.map((item,index) => (
                        <div 
                            onClick={() => handleShowContent(index)}
                             key={item.lable}
                             className={`tab-item ${currentTabIndex === index ? 'active' : ''}`}
                             
                        >
                            <label className="tab-title">{item.lable}</label>

                        </div>

                    ))}     
                </div>
                <div className="tab-content">
                    {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
                </div>
            </div>
        </>
    )
}