import { chatMembers, currentUserId, users } from '@/assets/data'
import { Chat } from '@/types/chat'

export const getChatTitle = (chat: Chat) => {
	if (chat.type === 'group') return chat.title

	const memberIds = chatMembers
		.filter(m => m.chatId === chat.id)
		.map(m => m.userId)

	const otherUserId = memberIds.find(id => id !== currentUserId)

	const user = users.find(u => u.id === otherUserId)

	return user?.name || 'Unknown'
}

export const getChatAvatar = (chat: Chat) => {
	if (chat.type === 'group') return chat.avatar

	const memberIds = chatMembers
		.filter(m => m.chatId === chat.id)
		.map(m => m.userId)

	const otherUserId = memberIds.find(id => id !== currentUserId)

	const user = users.find(u => u.id === otherUserId)

	return user?.avatar
}
