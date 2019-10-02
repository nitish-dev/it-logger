import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addTech} from '../../actions/techAction';

import M from 'materialize-css/dist/js/materialize.min.js';

const AddTechModal = ({addTech}) => {

    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');

    const onSubmit = () => {
        if(firstName ==='' || lastName ===''){
            M.toast({html: 'Please enter the first and last name'});
        }else{
           
            const techs={
                firstName,
                lastName
            }
            addTech(techs);
            M.toast({html: 'tech added'});
        }

        //Clear the fields
        setfirstName('');
        setlastName('');
    }
    return(
        <div id="add-tech-modal" className="modal">
    <div className="modal-content">
      <h4>Add New Technician</h4>
        <div className="row">
            <div className="input-field">
                <input type="text" value={firstName} onChange={e => setfirstName(e.target.value)} name="firstName" />
                <label htmlFor="firstName" className="active">First Name</label>
            </div>
        </div>
        <div className="row">
            <div className="input-field">
                <input type="text" value={lastName} onChange={e => setlastName(e.target.value)} name="lastName" />
                <label htmlFor="lastName">Last Name</label>
            </div>
        </div>
      
    </div>
    <div className="modal-footer">
      <a href="#!" onClick={onSubmit} className="modal-close waves-effect black white-text waves-green btn-flat">Enter</a>
    </div>
  </div>
    )
}

export default connect(null, {addTech})(AddTechModal);