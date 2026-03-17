'use client'

import { chatMembers, chats, currentUserId, users } from '@/assets/data'
import DotMenu from '@/assets/icons/dot-menu.svg'
import { getChatAvatar, getChatTitle } from '@/lib/chat'
import { ParamValue } from 'next/dist/server/request/params'
import Image from 'next/image'

const ChatHeader = ({
	panelOpen,
	setPanelOpen,
	chatId,
}: {
	panelOpen: boolean
	setPanelOpen: (open: boolean) => void
	chatId: ParamValue
}) => {
	const chat = chats.find(chat => chat.id === chatId)!
	const avatar = getChatAvatar(chat)
	const title = getChatTitle(chat)

	const memberIds = chatMembers
		.filter(m => m.chatId === chat.id)
		.map(m => m.userId)

	const sendUserId = memberIds.find(member => member !== currentUserId)
	const sendUser = users.find(user => user.id === sendUserId)

	if (!chat) return null

	return (
		<header className='relative w-full'>
			<div className='flex sticky w-full bg-background z-10 justify-between'>
				<div className='flex'>
					{avatar && <Image src={avatar} alt='avatar' width={52} />}
					<div className='flex flex-col ml-3 self-center'>
						<span className='text-[16px]'>{title}</span>
						<span className='text-[14px] opacity-40'>
							{sendUser?.status === 'online' ? 'в сети' : 'не в сети'}
						</span>
					</div>
				</div>
				<Image
					className='cursor-pointer'
					src={DotMenu}
					alt='Chat'
					width={32}
					onClick={() => setPanelOpen(!panelOpen)}
				/>
			</div>
			<div className='flex absolute top-13 left-0 right-0 z-20 h-16 bg-gradient-to-b from-(--background) to-transparent'></div>
		</header>
	)
}

export default ChatHeader
