import {GET_TECHS,ADD_TECHS,DELETE_TECH,SET_LOADING,TECHS_ERROR} from './types';


//Get tech 

export const getTech = () => async dispatch => {
    try{
        setLoading();
        const res = await fetch('http://localhost:5000/techs');
        const data = await res.json();

        dispatch({
            type:GET_TECHS,
            payload:data
        })
    }
    catch(err){
        dispatch({
            type:TECHS_ERROR,
            payload:err.response.data
        })
    }
}

//Add new Technician
export const addTech = (tech) => async dispatch => {
    try{
        setLoading();
        const res = await fetch('http://localhost:5000/techs',{
            method:'POST',
            body:JSON.stringify(tech),
            headers: {
                'Content-Type':'application/json'
            }
        });
        const data = await res.json();

        dispatch({
            type:ADD_TECHS,
            payload:data
        })

    }
    catch(err){
        dispatch({
            type:TECHS_ERROR,
            payload:err.response.data
        })
    }
}

//delete techs from server
export const deleteTech = id => async dispatch => {
    try{
      await fetch(`http://localhost:5000/techs/${id}`, {
            method:'DELETE'
        })
       
        dispatch({
            type:DELETE_TECH,
            payload:id
        })
    }catch(err){
        dispatch({
            type:TECHS_ERROR,
            payload:err.response.data
        })
    }
}

//Set loading to true
export const setLoading = () => {
    return{
        type:SET_LOADING
    }
}