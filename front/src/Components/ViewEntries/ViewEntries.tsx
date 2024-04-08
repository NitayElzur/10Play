import { useEffect, useState } from 'react'
import './ViewEntries.css'
import axios from 'axios';
import { fetchAll } from '../../utils/data';
function ViewEntries() {
    const [objects, setObjects] = useState<string[][] | null>(null);
    useEffect(() => {
        !objects && axios.get(fetchAll)
            .then(({ data }) => setObjects(data))
            .catch(err => console.log(err))
    }, [objects])
    return (
        <div id="view-entries">
            All objects key whithin bucket:
            <div id="keys">
                {objects?.map((row, index) => {
                    return (
                        <div key={index} className="row">
                            {row.map((item, jndex) => {
                                return (
                                    <div key={jndex} className="item">{item}</div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ViewEntries