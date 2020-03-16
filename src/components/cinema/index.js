import React, { useEffect, useState } from 'react';
import { Card } from '@material-ui/core';
import { MonetizationOn, BackspaceOutlined } from '@material-ui/icons'

const cinemaPlaces = [
    { _id: 1, row: 1, place: 1, taken: true },
    { _id: 2, row: 1, place: 2 },
    { _id: 3, row: 1, place: 3 },
    { _id: 4, row: 1, place: 4 },
    { _id: 5, row: 2, place: 1 },
    { _id: 6, row: 2, place: 2 },
    { _id: 7, row: 3, place: 1 },
]


export const Cinema = () => {

    const [user, setUser] = useState('no user')

    useEffect(() => {
        setUser(window.localStorage.user)
        console.log('cinema component', user)
    }, [])

    return (
        <div style={{ 
            flexGrow: 1,
            display: 'flex',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'black'
        }}>
            <Card style={{
                margin: '5%',
                minWidth: 500,
                minHeight: 340,
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                flexDirection: 'column'
            }}>
                <span>Oto miejsca w kinie:</span>
                <div>
                    {cinemaPlaces.map((place) => {
                        return <span style={{
                            height: 40,
                            width: 40,
                            margin: 6,
                            padding: 4
                        }}>
                            {place.taken ? <MonetizationOn/> : <BackspaceOutlined/> }
                            </span>
                    })}
                </div>
            </Card>
            </div>
    )
}