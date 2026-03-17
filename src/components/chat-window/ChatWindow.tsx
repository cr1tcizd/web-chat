import { ParamValue } from 'next/dist/server/request/params'
import ChatHeader from './ChatHeader'
import MessageInput from './MessageInput'
import MessageList from './MessageList'

const ChatWindow = ({
	panelOpen,
	setPanelOpen,
	chatId,
}: {
	panelOpen: boolean
	setPanelOpen: (panelOpen: boolean) => void
	chatId: ParamValue
}) => {
	return (
		<div className='flex flex-col flex-1 w-full h-full mx-12'>
			<ChatHeader
				panelOpen={panelOpen}
				setPanelOpen={setPanelOpen}
				chatId={chatId}
			/>

			<MessageList chatId={chatId} />

			<MessageInput />
		</div>
	)
}

export default ChatWindow
