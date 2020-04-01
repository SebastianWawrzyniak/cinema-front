import React, { useEffect, useState } from 'react';
import { Card } from '@material-ui/core';
import { MonetizationOn, BackspaceOutlined } from '@material-ui/icons'
import { useStyles } from './style';

const cinemaRows = [ {
_id: 1, taken: false
},
{
_id: 2, taken: false
},
{
_id: 3, taken: false
},
{
_id: 4, taken: false
},
{
_id: 5, taken: false
},
{
_id: 6, taken: false
},

]


export const Cinema = () => {

    const [user, setUser] = useState('no user')

    const classes = useStyles()

    useEffect(() => {

      
        setUser(window.localStorage.user)
        console.log('cinema component', user)
    }, [])

    let initialRow = 1

    return (
        <div style={{ 
            flexdirection: 'column',
            flexGrow: 1,
            display: 'flex',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'black'
        }}>
            <Card style={{
                flexwrap: 'Wrap',
                margin: '5%',
                minWidth: 500,
                minHeight: 340,
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                flexDirection: 'column'
            }}>
            
                <span>Oto miejsca w kinie:</span>
          
                    <div className={classes.mainContainer}>
                        
                    <div className={classes.row}>
                         {cinemaRows.map(p => <button className={classes.rowItem}>{p._id}</button>)}
                    </div>
                    <div className={classes.row}>
                         {cinemaRows.map(p => <button className={classes.rowItem}>{p._id}</button>)}
                    </div>
                    
                    <div className={classes.row}>
                         {cinemaRows.map(p => <button className={classes.rowItem}>{p._id}</button>)}
                    </div>
                    
                    <div className={classes.row}>
                         {cinemaRows.map(p => <button className={classes.rowItem}>{p._id}</button>)}
                    </div>
                    
                    <div className={classes.row}>
                         {cinemaRows.map(p => <button className={classes.rowItem}>{p._id}</button>)}
                    </div>
                 </div>
            </Card>
            </div>
    )
}