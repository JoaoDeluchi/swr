import React from 'react'
import { useQueryGetUser } from '../../services/user'

export const Name = () => {
    const {data, isLoading } = useQueryGetUser({userName: 'JoaoDeluchi'})
    
    if(isLoading){
        return <span>loading...</span>
    }
    
    return(
        <div>{data?.name}</div>
    )
}