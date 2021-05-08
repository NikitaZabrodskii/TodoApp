import React from 'react';
import Todo from './Todo';
import PropTypes from 'prop-types';

function Todos(props) {
    return  ( 
        <div>
            <ul>
            
                {props.todos.map((todo, index) =>{
                return <Todo todo={todo} key={todo.id} index={index+1} onChange={props.onToggle}/>
            
          })}
          </ul>
        </div>
    )
}

Todos.propTypes={
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired


}





export default Todos;
