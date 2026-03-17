import { getChatMessages } from '@/assets/data'
import Message from './Message'
import { useEffect, useMemo, useRef } from 'react'
import { ParamValue } from 'next/dist/server/request/params'

const MessageList = ({ chatId }: { chatId: ParamValue }) => {
	const messages = useMemo(() => getChatMessages(chatId), [chatId])

	const bottomRef = useRef<HTMLDivElement | null>(null)
	const isFirstRender = useRef(true)

	useEffect(() => {
		if (!bottomRef.current) return
		bottomRef.current?.scrollIntoView({
			behavior: isFirstRender.current ? 'auto' : 'smooth',
		})
		isFirstRender.current = false
	}, [messages])

	return (
		<div className='relative flex flex-col justify-end flex-1 overflow-y-auto'>
			<div className='flex flex-col gap-4 py-4 overflow-y-auto no-scrollbar'>
				{messages.map(msg => (
					<Message key={msg.id} message={msg} messages={messages} />
				))}
				<div ref={bottomRef}></div>
			</div>
		</div>
	)
}

export default MessageList
