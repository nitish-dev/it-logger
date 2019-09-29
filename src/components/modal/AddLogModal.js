import React,{useState} from 'react';
import {connect} from 'react-redux';
import {addLog} from '../../actions/logAction';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddLogModal = ({addLog}) => {
    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');

    const onSubmit = () => {
        if(message === '' || tech ===''){
            M.toast({html: 'Please enter logs and select tech'});
        }else {
            const newLogs = {
                message,
                attention,
                tech,
                date: new Date()
            }
            addLog(newLogs);
            M.toast({html:`logs added be ${tech}`});
        }
    }
    return(
        <div id="add-log-modal" className="modal">
    <div className="modal-content">
      <h4>Enter System Log</h4>
        <div className="row">
            <div className="input-field">
                <input type="text" value={message} onChange={e => setMessage(e.target.value)} name="message" />
                <label htmlFor="message" className="active">Log Message</label>
            </div>
        </div>
        <div className="row">
            <div className="input-field">
                <select name="tech" value={tech} onChange={e => setTech(e.target.value)} className="browser-default">
                    <option value='' disabled>Select Technician</option>
                    <option value='Nitish Singh'>Nitish Singh</option>
                    <option value='Deepak Bharti'>Deepak Bharti</option>
                    <option value='Soumya Biswas'>Soumya Biswas</option>
                </select>
            </div>
        </div>
        <div className="row">
            <div className="input-field">
            <p>
                <label>
                <input type="checkbox" value={attention} checked={attention} onChange={e => setAttention(!attention)} className="filled-in" />
                <span>Need Attention</span>
                </label>
            </p>
                
            </div>
        </div>
    </div>
    <div className="modal-footer">
      <a href="#!" onClick={onSubmit} className="modal-close waves-effect black white-text waves-green btn-flat">Enter</a>
    </div>
  </div>
    )
}

export default connect(null, {addLog})(AddLogModal); 