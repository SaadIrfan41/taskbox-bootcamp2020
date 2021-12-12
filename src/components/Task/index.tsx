import { useAppDispatch } from '../../../store/store'
import { archiveTask, pinTask } from '../../../store/taskSlice'
export interface TaskProps {
  title: string
  id: string
  state: string
}

const Task = ({ id, title, state }: TaskProps) => {
  const dispatch = useAppDispatch()
  return (
    <div className='text-gray-700 '>
      <fieldset>
        <div className='mt-4  border-b border-gray-200'>
          <div className='relative flex items-start py-4'>
            <div className='mr-3 flex items-center h-5'>
              <input
                id={id}
                name={id}
                type='checkbox'
                className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded'
                onClick={() => dispatch(archiveTask(id))}
              />
            </div>
            <div className='min-w-0 flex-1 text-sm'>
              <label className='font-medium text-gray-700 select-none'>
                {title}
              </label>
            </div>
            <div
              className={`ml-3 flex items-center h-5 ${
                state === 'TASK_ARCHIVED' ? 'hidden' : ''
              }`}
              onClick={(event) => event.stopPropagation()}
            >
              <span
                className=' cursor-pointer'
                onClick={() => dispatch(pinTask(id))}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill={`${state === 'TASK_PINNED' ? 'currentColor' : 'none'}`}
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    className='text-blue-500'
                    d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  )
}

export default Task
