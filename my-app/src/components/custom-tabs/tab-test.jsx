import CustomTabs from "./index";


export default function TabTest(){

    const tabs = [
        {
            lable: 'Tap 1',
            content: <div>This is tap 1</div>
        },
        {
            lable: 'Tap 2',
            content: <div>This is tap 2</div>
        },
        {
            lable: 'Tap 3',
            content: <div>This is tap 3</div>
        },
    ];

    function handleChangeTap(currentTabIndex) {
            console.log(currentTabIndex);
    }

    
    return  <CustomTabs tabsContent ={tabs} onChange={handleChangeTap}/>
    
}