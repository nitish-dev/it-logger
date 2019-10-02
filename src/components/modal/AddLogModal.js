import React,{useState,useEffect} from 'react';
import {connect} from 'react-redux';
import {addLog} from '../../actions/logAction';
import {getTech} from '../../actions/techAction';
import SelectTech from '../modal/SelectTech';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddLogModal = ({tech:{techs},addLog,getTech}) => {
    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');

    //get tech
    useEffect(() => {
        getTech();
    },[]);

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

            //Clear field after submit
            setMessage('');
            setTech('');
            setAttention('');
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
                    {techs !== null && techs.map(tech => <SelectTech key={tech.id} tech={tech} />)}
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
const mapStateToProps = state => ({
    tech:state.tech
})
export default connect(mapStateToProps, {addLog,getTech})(AddLogModal); 