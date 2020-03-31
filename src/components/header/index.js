import React from "react"
import { useDispatch, useSelector } from 'react-redux'
import { AppBar, Toolbar, Button } from "@material-ui/core"
import { useHistory } from 'react-router-dom'
import { userSelectors } from "../../store/selectors"
import { UserActions } from "../../store/actions"

export const Header = (props) => {

    const history = useHistory()

    const dispatch = useDispatch()
    
    const user = useSelector(userSelectors.getUser)

    const logout = () => {
        dispatch(UserActions.logout())
        history.push('/login')
    }

    if (!user.token) return null

    return (
        <AppBar>
            <Toolbar>
                <span>{user.email}</span>
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