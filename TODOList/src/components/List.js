import './List.css';
import ListItem from './ListItem';
const List = (props) => {
  //console.log(props.items)
  return (    
    <div>
      {props.items.map((list) => (
        <ListItem key={
          list.id}
          id={list.id}
          task={list.task}
          onDelete={props.onDel}
        />
      ))}
    </div>
  );
};

export default List;
