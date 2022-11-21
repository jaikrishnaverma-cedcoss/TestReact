import React, { useEffect, useState } from 'react'
import axios from 'axios'

const TableComponent = (props) => {

    let [data, setData] = useState([])
    useEffect(() => {
     axios.get(props.url)
            .then(res =>setData([...res.data.users]))

    }, [props.url])
    
    return (
        <table >
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>HAIR COLOR</th>
                    <th>GENDER</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map(x => <tr key={props.url+x.id}>
                        <td>{x.id}</td>
                        <td>{x.firstName}</td>
                        <td>{x.age}</td>
                        <td>{x.hair.color}</td>
                        <td>{x.gender}</td>
                    </tr>)
                }
            </tbody>

        </table>
    )
}

export default TableComponent