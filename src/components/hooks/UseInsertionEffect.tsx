import { useEffect, useInsertionEffect, useLayoutEffect, useState } from "react";
import Menu from "../Menu";
import { Container } from "react-bootstrap";

export const UseInsertionEffect = () => {
    const [theme, setTheme] = useState('dark')

    useEffect(() => {
        console.log("useEffect");
    }, [])

    useLayoutEffect(() => {
        console.log("useLayoutEffect");
    }, [])

    useInsertionEffect(() => {
        console.log("useInsertionEffect");
        const styleRule = getStyleRule(theme);

        document.head.appendChild(styleRule);

        return () => { document.head.removeChild(styleRule) }
    }, [theme])

    return (
        <div>
            <Menu />
            <Container>
                <h3 className=" mt-3">UseInsertionEffect</h3>

                <p></p>
                <div>
                    <button onClick={() => setTheme(theme === 'dark' ? 'white' : 'dark')}>Change theme</button>
                </div>
            </Container>
        </div>
    )

}

const getStyleRule = (theme: string) => {
    const tag = document.createElement('style')
    tag.innerHTML = `
        button {
            color : ${theme === 'dark' ? 'white' : 'black'};
            background-color : ${theme === 'dark' ? 'black' : 'white'};
            border : 1px solid ${theme === 'dark' ? 'white' : 'black'};
        }

    `

    return tag
}