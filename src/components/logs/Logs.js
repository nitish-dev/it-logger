import React, {useState, useEffect} from 'react';
import LogsItem from './LogsItem';

const Logs = () => {
    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getLogs();
    },[]);
    const getLogs = async () => {
        setLoading(true);
        const res = await fetch('http://localhost:5000/logs');
        const data = await res.json();
        setLogs(data);
        setLoading(false);
    }
    if(loading){
        return <p>loading...</p>
    }else{
    return (
        <ul className="collection with-header">
            <li className="collection-header">
                <h4 className="center">System Logs</h4>
            </li>
            {!loading && logs.length ===0 ? (<p className="center">No logs to show.</p>) : (
                logs.map(log => <LogsItem log={log} key={log.id} />)
            )}
        </ul>
    )
    }
}

export default Logs;