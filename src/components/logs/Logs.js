import React, { useEffect} from 'react';
import LogsItem from './LogsItem';
import Preloader from '../layout/Preloader';
import {connect} from 'react-redux';
import {getLogs} from '../../actions/logAction';
import PropTypes from 'prop-types';

const Logs = ({log:{logs,loading}, getLogs}) => {
    

    useEffect(() => {
        getLogs();
    },[]);
   
    if(loading || logs=== null){
        return <Preloader />
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
const mapStateToProps = state => ({
    log:state.log
});
Logs.propTypes={
    log:PropTypes.object.isRequired,
    getLogs:PropTypes.func.isRequired
}
export default (connect(mapStateToProps, {getLogs}))(Logs);