import React,{useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {updateLog} from '../../actions/logAction';
import {getTech} from '../../actions/techAction';
import SelectTech from './SelectTech';  
import M from 'materialize-css/dist/js/materialize.min.js';

const EditLogs = ({tech:{techs}, current, updateLog,getTech}) => {
    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');

    const onSubmit = () => {
        if(message === '' || tech ===''){
            M.toast({html: 'Please enter logs and select tech'});
        }else {
            const updLog ={
                id:current.id,
                message,
                attention,
                tech,
                date:new Date()
            }
            updateLog(updLog)
            //console.log(message, tech, attention)
        }
    }

    useEffect(() => {
        
        if(current){
        setMessage(current.message);
        setAttention(current.attention);
        setTech(current.tech);
        }
        getTech();
    },[current],[]);
    
    return(
        <div id="edit-log-modal" className="modal">
    <div className="modal-content">
      <h4>Edit System Log</h4>
        <div className="row">
            <div className="input-field">
                <input type="text" value={message} onChange={e => setMessage(e.target.value)} name="message" />
                
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
    current:state.log.current,
    tech:state.tech
})
export default connect(mapStateToProps, {updateLog,getTech})(EditLogs); 