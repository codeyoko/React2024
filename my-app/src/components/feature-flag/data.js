


const dummyApiResponse =  {
    showLightDarkMode: true,
    showTicTacToeBoard:true,
    showQRCodeGenerator:true,
    showRandomColorGenerator:true

}

function featureFlagsDataServiceCall(){

    return new Promise((resolve, reject) => {

        if(dummyApiResponse){
            setTimeout(resolve(dummyApiResponse),1000);
        }else{
            reject("Some error occured! Please try agin");
        }
    })
}

export default featureFlagsDataServiceCall;