import React from 'react'
import { useQueryGetUser } from '../../services/user'

export const HomePage = () => {

    const {data, isLoading } = useQueryGetUser({userName: 'JoaoDeluchi'})

    if(isLoading){
        return <span>Loading....</span>
    }
    
    return(
        <div>{data?.login}</div>
    )
}