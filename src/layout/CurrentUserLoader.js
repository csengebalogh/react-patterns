import React, { useState, useEffect } from "react"
import axios from 'axios'

const CurrentUserLoader = ({ children }) =>  {

    const [ user, setUser ] = useState(null)

    useEffect(() => {
        (async () => { 
            const response = await axios.get('/current-user')

            let currentUser = response.data
            
            setUser(currentUser)
            
        })()
    }, [])

    return (
        <>
            {React.Children.map(children, child => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, { user })
                }

                return child;
            })}
        </>
    )
}

export default CurrentUserLoader
