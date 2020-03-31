import React, { useEffect, useState } from 'react';
import { Card } from '@material-ui/core';
import { MonetizationOn, BackspaceOutlined } from '@material-ui/icons'

const cinemaPlaces = [
    { _id: 1, row: 1, place: 1, taken: true },
    { _id: 2, row: 2, place: 1, taken: true },
    { _id: 3, row: 3, place: 1 },
    { _id: 4, row: 4, place: 2 },
    { _id: 5, row: 5, place: 2 },
    { _id: 6, row: 6, place: 2 },
    { _id: 7, row: 7, place: 2 },
    

]


export const Cinema = () => {

    const [user, setUser] = useState('no user')

    useEffect(() => {

        // @TODO change local storage with redux
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
                <div style= {{
                    display: 'flex',
                }}>
                    {cinemaPlaces.map((place) => {

                        const createNewDiv = place.row > initialRow

                        createNewDiv && initialRow++
                        
                        return <div style={{
                            
                            display: 'flex',
                            justifyContent: 'row'
                        }}>
                            {createNewDiv && <hr/>}
                            <span style={{
                            height: 40,
                            width: 40,
                            margin: 6,
                            padding: 4,
                        }}>
                            {place.taken ? <MonetizationOn/> : <BackspaceOutlined/> }

                            </span>

                            </div>
                        })}
                </div>
            </Card>
            </div>
    )
}