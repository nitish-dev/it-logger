import React from 'react';
import {connect} from 'react-redux';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import {deleteLog, setCurrent} from '../../actions/logAction';

const LogsItem = ({log, deleteLog,setCurrent}) =>{
    const onClick = () =>{
        deleteLog(log.id)
    }
    return (
        <li className="collection-item">
            <a href="#edit-log-modal" onClick={() => setCurrent(log)} className={`modal-trigger ${log.attention ? 'red-text' : 'blue-text'}`}>{log.message}</a>
            <br />
            <span className="grey-text">
            <span className="black-text">ID #{log.id} </span>
                last updated by {''}
                <span className="black-text">{log.tech} </span>
                on {''}
                <Moment format="MMMM Do YYYY, h:mm:ss a">{log.date}</Moment>
            </span>
            <a href="#!" onClick={onClick} className="secondary-content">
                <i className="material-icons grey-text">delete</i>
            </a>
        </li>
    )
}
LogsItem.propTypes = {
    log:PropTypes.object.isRequired,
    deleteLog:PropTypes.func.isRequired
}
export default connect(null, {deleteLog,setCurrent})(LogsItem);