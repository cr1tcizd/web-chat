import { currentUserId, users } from '@/assets/data'
import type { Message } from '@/types/chat'
import Image from 'next/image'

import noAvatar from '@/assets/avatars/no-avatar.png'

const Message = ({
	message,
	messages,
}: {
	message: Message
	messages: Message[]
}) => {
	const isMine = message.senderId === currentUserId
	const senderUser = users.find(user => user.id === message.senderId)
	const currentUser = users.find(user => user.id === currentUserId)

	const senderMessages = messages.filter(
		msg => msg.senderId === message.senderId,
	)

	const updateTime = message.createdAt

	const hours = updateTime.getHours()
	const minutes = updateTime.getMinutes()

	const formatted = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`

	const index = senderMessages.findIndex(m => m.id === message.id)
	const prevMessage = senderMessages[index - 1]

	const isSameMinute =
		prevMessage &&
		prevMessage.createdAt.getHours() === hours &&
		prevMessage.createdAt.getMinutes() === minutes

	const getAvatarForMessage = () => {
		const user = isMine ? currentUser : senderUser
		return user?.avatar || noAvatar
	}

	return (
		<div className={`flex gap-4 ${isMine ? 'flex-row-reverse' : ''}`}>
			<Image
				className={`self-start ${isSameMinute ? 'opacity-0 min-w-13 h-0' : ''}`}
				src={getAvatarForMessage()}
				alt='avatar'
				height={52}
			/>

			<div
				className={`flex flex-col w-full justify-center ${isMine ? 'items-end' : 'items-start'}`}
			>
				{!isSameMinute && (
					<div className='flex gap-2 items-center mb-1'>
						<span className='text-[14px]'>{senderUser?.name}</span>
						<span className='text-(--gray-text) text-[12px]'>{formatted}</span>
					</div>
				)}

				<div
					className={`
          max-w-[60%] px-4 py-2 rounded-xl text-[14px]
          ${isMine ? 'bg-(--purple) text-white' : 'bg-(--gray) text-gray-100'}
        `}
				>
					{message.text}
				</div>
			</div>
		</div>
	)
}

export default Message
