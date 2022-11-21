import React, { useState } from 'react'
import Counter from './Counter'
import TableComponent from './TableComponent'
const Main = () => {
    const [counter, setCounter] = useState(0)
    const [url, setUrl] = useState(false)

    return (
        <div className="col w100 flexAIC">
            <button onClick={() => setUrl(false)}>Counter Component</button>
            <button onClick={() => setUrl('https://dummyjson.com/users/filter?key=age&value=30') }>Age Component</button>
            <button onClick={() => setUrl('https://dummyjson.com/users/filter?key=hair.color&value=Black')}>Color Component</button>
            <button onClick={() => setUrl('https://dummyjson.com/users/filter?key=gender&value=male')}>Gender Component</button>

            {
                (url) ? <TableComponent url={url} /> : <Counter count={counter} setCounter={setCounter} />
            }
        </div>
    )
}

export default Main