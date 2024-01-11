import './App.css'
import {SubmitHandler, useForm} from "react-hook-form";

type Task = {
    task: string,
}

function App() {
    // const [todos, setTodo] = useState<string>([])

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<Task>()
    const onSubmit: SubmitHandler<Task> = (data: Task) => console.log(data)
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
              {errors.task && <span>This field is required</span>}
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
              <input type="text"
                     {...register("task", {required: true})}
                     defaultValue="Something to Accomplish"
                     style={{height: '40px', width: '400px', paddingLeft: '10px'}}
                     placeholder="Add a todo"/>
              <button type="submit"
                      style={{backgroundColor: 'green', color: 'white', marginLeft: '20px', width: '150px'}}>Add
              </button>
          </form>
      </div>
      <p className="read-the-docs">
        Visit react-hook-form.com to learn more about React Hook Form!
      </p>
    </>
  )
}

export default App
