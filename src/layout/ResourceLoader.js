import axios from "axios";
import React, { useState, useEffect } from "react";
import { products } from "../Lists";

const ResourceLoader = ({ resourceURL, resourceName, children }) => {
    const [ state, setState ] = useState(null)

    useEffect(() => {
        (async() => {
            const response = await axios.get(resourceURL)

            setState(response.data)
        })()
    }, [resourceURL])

    return (

        <>
            {React.Children.map(children, child => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, { [resourceName]: state })
                }

                return child
            })}
        </>
    )
}

export default ResourceLoader
