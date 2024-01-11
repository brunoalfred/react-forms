import './App.css'
import {SubmitHandler, useForm} from "react-hook-form";
import {useState} from "react";

enum TaskCategory {
    WORK = 'work',
    PERSONAL = 'personal',
    SHOPPING = 'shopping',
    OTHER = 'other',
}

type Task = {
    item: string,
    category: TaskCategory,
}

function App() {

    const [todo, setTodo] = useState<Task[]>([])

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<Task>()
    const onSubmit: SubmitHandler<Task> = (data: Task) => {
        setTodo([...todo, data])
    }

  return (
    <>
        <h1>React Form</h1>
      <div className="card">
          <div style={{
              color: 'red',
              fontSize: '15px',
              marginBottom: '10px',
              marginLeft: '10px',
              marginTop: '10px',
              textAlign: 'left',
              width: '400px',
          }}>
              {errors.item && <span>This field is required</span>}
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
              <input type="text"
                     {...register("item", {required: true, maxLength: 80})}
                     defaultValue=""
                     style={{height: '40px', width: '300px', paddingLeft: '10px'}}
                     placeholder="Add a todo"/>

              <select {...register("category")}
                      style={{height: '40px', width: '100px', paddingLeft: '10px', marginLeft: '20px'}}>
                  <option value={TaskCategory.WORK}>Work</option>
                  <option value={TaskCategory.PERSONAL}>Personal</option>
                  <option value={TaskCategory.SHOPPING}>Shopping</option>
                  <option value={TaskCategory.OTHER}>Other</option>
              </select>
              <button type="submit"
                      style={{backgroundColor: 'green', color: 'white', marginLeft: '20px', width: '150px'}}>Add
              </button>
          </form>
      </div>
        <div>
            <h2>Todo List</h2>
            <ul>
                {todo.map((todo, index) => (
                    <li key={index}>
                        <p>{todo.item} - {todo.category} </p>
                    </li>
                ))}
            </ul>
        </div>
      <p className="read-the-docs">
        Visit react-hook-form.com to learn more about React Hook Form!
      </p>
    </>
  )
}

export default App
