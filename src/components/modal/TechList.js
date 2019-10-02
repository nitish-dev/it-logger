import React from 'react';
import {connect} from 'react-redux';
import {deleteTech} from '../../actions/techAction';

const TechList = ({tech:{firstName, lastName, id}, deleteTech}) => {

    const onClick = () => {
        deleteTech(id);
    }
    return (
        <li className="collection-item">
            <div>
                {firstName} {lastName}
                <a href="#!" onClick={onClick} className="secondary-content">
                <i className="material-icons grey-text">delete</i>
            </a>
            </div>
        </li>
    )
}

export default connect(null, {deleteTech})(TechList);