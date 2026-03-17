import Chat from './Chat'

import { userChats } from '@/assets/data'

const ChatList = () => {
	return (
		<div className='flex-1 overflow-y-auto no-scrollbar'>
			{userChats.map(chat => (
				<Chat chat={chat} key={chat.id} />
			))}
		</div>
	)
}

export default ChatList
