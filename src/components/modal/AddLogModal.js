import React,{useState} from 'react';

const AddLogModal = () => {
    const [message, setMessage] = useState('');
    const [attension, setAttension] = useState(false);
    const [tech, setTech] = useState('');
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
                <input type="checkbox" className="filled-in" />
                <span>Need Attension</span>
                </label>
            </p>
                
            </div>
        </div>
    </div>
    <div className="modal-footer">
      <a href="#!" class="modal-close waves-effect black white-text waves-green btn-flat">Enter</a>
    </div>
  </div>
    )
}

export default AddLogModal; 