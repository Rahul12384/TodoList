import './ListItem.css';

const ListItem = (props) => {
    //console.log(props.task)
    //console.log(props.id)
    const deleteHandler=()=>{
        //console.log(props.id)
        props.onDelete(props.id)
    }

  return (
    <div>
      <div className="list" onClick={deleteHandler}>{props.task}</div>
    </div>
  );
};

export default ListItem;
