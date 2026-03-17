import ChatList from './ChatList'
import Search from './Search'

const Sidebar = () => {
	return (
		<div className='min-w-[280px] flex flex-col h-full'>
			<Search />
			<ChatList />
		</div>
	)
}

export default Sidebar
