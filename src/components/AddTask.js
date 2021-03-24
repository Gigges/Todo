import {useState} from "react"


const AddTask = ({onAdd}) => {
  const[name,setName] = useState("");
  const[done,setDone] = useState(false);

  const onSubmit= (e) => {
      e.preventDefault();
      if(!name){
          alert("add a name")
         return
      }

      onAdd({name,done})
      setName("");
      setDone(false);
  }
    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type='text'
                 placeholder="add To-Do"
                 value={name}
                onChange= {(e)=> setName(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>Done?</label>
                <input className="form-control-check"
                checked={done}
                type='checkbox'
                onChange= {(e)=> setDone(e.currentTarget.checked)}/>
            </div>
            
            <input className="btn btn-block" type="submit" value="save Task"/>
        </form>
    )
}

export default AddTask
