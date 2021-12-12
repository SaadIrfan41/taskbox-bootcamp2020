import { useSelector } from 'react-redux'
import { RootState } from '../../../store/rootReducer'
import TaskList from '../TaskList'

const IndoxScreen = () => {
  const task = useSelector((state: RootState) => state.Task)
  return (
    <div>
      <TaskList loading={false} tasks={task} />
    </div>
  )
}

export default IndoxScreen
