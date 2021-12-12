import Task from '../Task/index'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/rootReducer'
import InputBox from '../InputBox'
const TaskList = ({ loading, tasks }) => {
  // const task = useSelector((state: RootState) => state.Task)
  // console.log('TASK LIST', task)
  //   const events = {
  //     onPinTask,
  //     onArchiveTask,
  //   }

  if (loading) {
    return (
      <div className=' min-h-screen flex justify-center items-center '>
        <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-black'></div>
      </div>
    )
  }

  const tasksInOrder = [
    ...tasks.filter((t) => t.state === 'TASK_PINNED'),
    ...tasks.filter((t) => t.state !== 'TASK_PINNED'),
  ]

  return (
    <div className='min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-md'>
        <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
          Taskbox App
        </h2>
      </div>
      <InputBox />
      <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
        <div
          className={`bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 ${
            tasks.length === 0 ? 'hidden' : ''
          }`}
        >
          {tasksInOrder.map((task) => (
            <Task
              key={task.id}
              id={task.id}
              title={task.title}
              state={task.state}
            />
          ))}
        </div>
      </div>
      {tasks.length === 0 ? (
        <div className='grid place-items-center rounded-full ring-black  items-center'>
          <div className='flex flex-col items-center text-3xl'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-12 w-12'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4'
              />
            </svg>
            <h3>You Have No Task</h3>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default TaskList
