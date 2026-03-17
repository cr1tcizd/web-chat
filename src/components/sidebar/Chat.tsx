'use client'
import { getChatMessages } from '@/assets/data'
import { getChatAvatar, getChatTitle } from '@/lib/chat'
import { Chat as ChatI } from '@/types/chat'
import Image from 'next/image'
import Link from 'next/link'

interface ChatProps {
	chat: ChatI
}

const Chat = ({ chat }: ChatProps) => {
	const messages = getChatMessages(chat.id)
	const title = getChatTitle(chat)
	const avatar = getChatAvatar(chat)
	const lastMessage = messages.at(-1)?.text
	const updateTime = chat.updatedAt

	const hours = updateTime.getHours()
	const minutes = updateTime.getMinutes()

	const formatted = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`

	return (
		<Link
			className='px-2 py-3 hover:bg-(--gray) cursor-pointer rounded-xl block'
			href={`/chat/${chat.id}`}
		>
			<div className='flex'>
				{avatar && (
					<Image
						className='rounded-full object'
						src={avatar}
						alt='avatar'
						height={56}
						width={56}
					/>
				)}
				<div className='flex justify-between w-full ml-2'>
					<div className='flex flex-col self-center'>
						<span className='text-[14px] font-medium'>{title}</span>
						<span className='text-[14px] text-(--gray-text) font-medium'>
							{lastMessage}
						</span>
					</div>
					<div className='flex flex-col items-end self-center gap-1'>
						<div className='text-[12px] text-(--gray-text) font-medium'>
							{formatted}
						</div>
						<div className='w-[15px] h-[15px] bg-(--purple) rounded-full text-center text-[10px] whitespace-nowrap overflow-hidden'>
							2
						</div>
					</div>
				</div>
			</div>
		</Link>
	)
}

export default Chat
