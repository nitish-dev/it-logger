import React,{useState,useEffect} from 'react';
import TechList from './TechList';

const TechListModal =  () => {
    const[techs, setTechs] = useState([]);
    const[loading, setLoading] = useState(false);

    useEffect( () => {
        getTechs();
    },[]);

    const getTechs = async() => {
        setLoading(true);
        const res = await fetch('http://localhost:5000/techs');
        const data = await res.json();
        setTechs(data);
        setLoading(false);
    }

    return (
        <div id="tech-list-modal" className="modal">
        <div className="modal-content">
        <h4>Technician List</h4>
            <ul className="collection">
                {!loading && techs.map(tech => <TechList key={tech.id} tech={tech} />)}
            </ul>
        </div>
         </div>
    )
}

export default TechListModal;