import useLoaclStorage from "./useLoaclStorage"
import './theme.css'

export default function LightDarkMode() {

    const [theme, setTheme] = useLoaclStorage('theme', 'dark');


    function handleToggleTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }
    console.log(theme);
    return (

        <>
            <div className="light-dark-mode" data-theme={theme}>
                <div className="container">
                    <h2>Hello Theme</h2>
                    <button onClick={handleToggleTheme}>Change Theme</button>
                </div>

            </div>
        </>
    )
}