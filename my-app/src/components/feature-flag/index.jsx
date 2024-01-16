
import TicTacToe from './../tic-tac-toe/index';
import LightDarkMode from './../light-dark-mode/index';
import QRCodeGenerator from './../qr-code-generator/index';
import RandomColor from './../random-colos/index';
import { useContext } from 'react';
import { FeatureFlagsContext } from './context';

export default function FeatureFlags() {

    const {loading, enabledFlags} = useContext(FeatureFlagsContext);

    const componentsToRender = [

        {
            key : 'showLightDarkMode',
            component : <LightDarkMode />
        },
        {
            key : 'showTicTacToeBoard',
            component : <TicTacToe />
        },
        {
            key : 'showQRCodeGenerator',
            component : <QRCodeGenerator />
        },
        {
            key : 'showRandomColorGenerator',
            component : <RandomColor />
        }

    ];

    function checkEnabledFlags(getCurrentKey){
        return enabledFlags[getCurrentKey];
    }

    if(loading) {return <h1>Loading...</h1>}

    return(

        <div>
            <h1>Feature Flag</h1>
            {componentsToRender.map((item) => 
                checkEnabledFlags(item.key) ? item.component : null
            )}
        </div>
    )
}