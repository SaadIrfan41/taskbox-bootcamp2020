import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'

import { addTask } from '../../store/taskSlice'

const InputBox = () => {
  const dispatch = useDispatch()
  const [task, setTask] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(task)
    if (task !== '')
      dispatch(
        addTask({
          id: Math.random(),
          title: task,
        })
      )
    setTask('')
  }
  return (
    <form
      className='flex justify-center items-center w-full'
      onSubmit={handleSubmit}
    >
      <div className='p-5 w-1/4'>
        <div className='mt-1'>
          <input
            placeholder='Enter Your Task Here...'
            value={task}
            onChange={(e) => {
              setTask(e.target.value)
            }}
            required
            className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
          />
        </div>
      </div>
      <div>
        <button
          type='submit'
          className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
        >
          ADD TASK
        </button>
      </div>
    </form>
  )
}

export default InputBox
