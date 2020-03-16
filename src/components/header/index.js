import React from "react"
import { AppBar, Toolbar, Button } from "@material-ui/core"
import { useHistory } from 'react-router-dom'

export const Header = (props) => {

    const history = useHistory()

    const logout = () => {
        delete window.localStorage.user
        delete window.localStorage.token
        history.push('/login')
    }

    if (!window.localStorage.user) return null

    return (
        <AppBar>
            <Toolbar>
                <Button onClick={()=> logout() } variant={"contained"}>Wyloguj się</Button>
            </Toolbar>
        </AppBar>
    )
}



// funkcje w js

// function method() {
//     return 'asd'   
// }
// function method(param1, param2) {
//     return 'asd' + param1 / param2
// }


// method()
// method(0,2)