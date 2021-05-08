import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import './TodoStyles.css';
import './index.css';
import Context from './context';


const styles = {
    li:{
        display:'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        borderRadius: '4px',
        marginBottom:'.5rem',
        border: '1px solid red'

    },
    input:{
        marinRight: '1rem'
    },
    div:{
        width:'1000px',
        margin:'0 auto'

    }
}

 function Todo({todo,index,onChange}) {

    const {removeTodo} = useContext(Context)

    const classes =[]

    if(todo.completed){
        classes.push('done')
    }







    return (

       <div>
           
        <div style={styles.div} className={classes.join(' ')}>
            
            <li style={styles.li}>
            <span>
                <input checked={todo.completed} onChange = { () => onChange(todo.id)} style ={styles.input} type='checkbox'/>
                &nbsp;
          
           <strong>{index} {todo.title}</strong> 
           </span>
             
           
         
           <button onClick={()=> removeTodo(todo.id)}>✓</button>
           </li>
        </div>
        </div>
    )
}


Todo.propTypes={
    todo: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
    

}



export default Todo;