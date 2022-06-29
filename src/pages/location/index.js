import React from 'react'
import { useQueryGetUser } from '../../services/user'

export const Location = () => {

    const {data, isLoading } = useQueryGetUser({userName: 'JoaoDeluchi'})
    
    console.log(data)
    if(isLoading){
        return <span>loading...</span>
    }
    
    return(
        <div>{data?.location}</div>
    )
}