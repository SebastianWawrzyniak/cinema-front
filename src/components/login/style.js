import colors from '../../constants/colors'

import backgroundImage from '../../assets/background.jpg'
import color from '@material-ui/core/colors/amber'
import { FilterNone } from '@material-ui/icons'
export default
 {
    cardContainer: {
        width: 460,
        height: 360,
        boxShadow: '1px 3px 1px black',
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
        padding: 30,
       
    },
    div01: {
        width: '100%',
        height: '100%',
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
        
    },
    div02: { 
        marginBottom: 40,
        textAlign: 'center',
        fontSize: 24},

    nav: { 
        width: 460,
        height: 360,
        // boxShadow: '1px 3px 1px black',
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
        // padding: 30
    },
    rejestracja: {
        marginBottom: 40,
        textAlign: 'center',
        fontSize: 24,
        textDecoration: 'none',
    


    }
}

