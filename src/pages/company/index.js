import { Spin } from 'antd'
import { useQueryGetUser } from "../../services/user"

export const Company = () => {
   
    const {data, isLoading } = useQueryGetUser({userName: 'JoaoDeluchi'})
    
    if(isLoading){
        return <Spin />
    }
    
    return(
        <>
        <div>{data?.company}</div>
        </>
    )
}