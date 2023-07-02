import React, { useEffect } from 'react'
import { FetchUserList } from './Redux/Action'
import { connect } from 'react-redux'

function Display(props) {
    useEffect(()=>{
        props.loaduser();
    },[])
    return (
        props.user.loading ? <div>Loading...</div>:
        props.user.errmessage?<div>{props.user.errmessage}</div>:
        <>
        

            <div className='card-body'>
                <table className='table table-bordered'>
                    <thead >
                    <tr className='bg-dark text-white'>
                            <td >Name</td>
                            <td>Qualification</td>
                            <td>Name of the institute</td>
                            <td>Name</td>
                            <td>Name</td>
                    
                    </tr>

                    </thead>
                    <tbody>
                        {
                            props.user.userlist && props.user.userlist.map((item)=>
            
                              <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.hq}</td>
                                <td>{item.institution}</td>
                                <td>{item.Course}</td>
                                <td>{item.Experience}</td>
                              </tr>  
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
} 
const mapStateToProps=(state)=>{
    return{
        user:state.user
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        loaduser:()=>dispatch(FetchUserList())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Display) 