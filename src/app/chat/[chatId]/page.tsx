'use client'

import ChatMenu from '@/components/chat-menu/ChatMenu'
import ChatWindow from '@/components/chat-window/ChatWindow'
import { useParams } from 'next/navigation'
import { useState } from 'react'

const ChatPage = () => {
	const [panelOpen, setPanelOpen] = useState<boolean>(false)
	const params = useParams()

	return (
		<>
			<ChatWindow
				chatId={params.chatId}
				panelOpen={panelOpen}
				setPanelOpen={setPanelOpen}
			/>
			<ChatMenu panelOpen={panelOpen} />
		</>
	)
}

export default ChatPage
