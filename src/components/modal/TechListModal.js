import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {getTech} from '../../actions/techAction';
import TechList from './TechList';


const TechListModal =  ({tech:{techs},getTech}) => {
    
    useEffect( () => {
        getTech();
    },[]);

    return (
        
            <div id="tech-list-modal" className="modal">
        <div className="modal-content">
        <h4>Technician List</h4>
            <ul className="collection">
                {techs !== null && techs.map(tech => <TechList key={tech.id} tech={tech} />)}
            </ul>
        </div>
         </div>   
        
    )
}

const mapStateToProps = state => ({
    tech:state.tech
})
export default connect(mapStateToProps, {getTech})(TechListModal);