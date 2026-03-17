import { Chat, User, Message, ChatMember } from '@/types/chat'

import avatar1 from '@/assets/avatars/1.png'
import avatar2 from '@/assets/avatars/2.png'
import avatar3 from '@/assets/avatars/3.png'
import avatar4 from '@/assets/avatars/4.png'
import { ParamValue } from 'next/dist/server/request/params'
// import avatar5 from '@/assets/avatars/5.png'
// import avatar6 from '@/assets/avatars/6.png'
// import avatar7 from '@/assets/avatars/7.png'

// ==== USERS ====

export const currentUserId = 'u4'

export const users: User[] = [
	{
		id: 'u1',
		name: 'Дмитрий Иванов',
		username: 'dmitry',
		avatar: avatar1,
		status: 'online',
		lastSeen: new Date(),
		createdAt: new Date('2025-01-01T10:00:00'),
	},
	{
		id: 'u2',
		name: 'Мария Петрова',
		username: 'maria',
		avatar: avatar2,
		status: 'offline',
		lastSeen: new Date('2026-03-12T20:30:00'),
		createdAt: new Date('2025-01-02T11:00:00'),
	},
	{
		id: 'u3',
		name: 'Иван Сидоров',
		username: 'ivan',
		avatar: avatar3,
		status: 'away',
		lastSeen: new Date('2026-03-13T08:15:00'),
		createdAt: new Date('2025-01-05T09:30:00'),
	},
	{
		id: 'u4',
		name: 'Ну тупа я',
		username: 'dimas',
		avatar: avatar4,
		status: 'online',
		lastSeen: new Date('2026-03-13T08:15:00'),
		createdAt: new Date('2025-01-05T09:30:00'),
	},
]

// ==== CHATS ====
export const chats: Chat[] = [
	{
		id: 'c1',
		type: 'private',
		createdAt: new Date('2025-06-01T12:00:00'),
		updatedAt: new Date('2026-03-12T22:00:00'),
	},
	{
		id: 'c2',
		type: 'private',
		createdAt: new Date('2025-07-01T09:00:00'),
		updatedAt: new Date('2026-03-12T21:30:00'),
	},
	{
		id: 'c3',
		type: 'private',
		createdAt: new Date('2025-07-01T09:00:00'),
		updatedAt: new Date('2026-03-12T21:30:00'),
	},
]

export const chatMembers: ChatMember[] = [
	{ chatId: 'c1', userId: 'u1' },
	{ chatId: 'c1', userId: 'u4' },

	{ chatId: 'c2', userId: 'u2' },
	{ chatId: 'c2', userId: 'u4' },

	{ chatId: 'c3', userId: 'u3' },
	{ chatId: 'c3', userId: 'u4' },
]

const randomTexts = [
	'Привет!',
	'Как дела?',
	'Ты тут?',
	'Ок',
	'Понял',
	'Ща сделаю',
	'😂',
	'Серьёзно?',
	'Ну да',
	'Ладно',
	'Давай позже',
	'Го',
	'Не знаю',
	'Возможно',
]

const getRandomText = () =>
	randomTexts[Math.floor(Math.random() * randomTexts.length)]

const getRandomUser = (chatId: string): string => {
	const members = chatMembers.filter(m => m.chatId === chatId)
	return members[Math.floor(Math.random() * members.length)].userId
}

export const generateMessages = (count: number): Message[] => {
	const result: Message[] = []

	const chatIds = chats.map(c => c.id)

	let baseTime = new Date('2026-03-12T10:00:00').getTime()

	for (let i = 0; i < count; i++) {
		const chatId = chatIds[Math.floor(Math.random() * chatIds.length)]
		const senderId = getRandomUser(chatId)

		// иногда одинаковое время (для теста группировки)
		const sameMinute = Math.random() > 0.7

		if (!sameMinute) {
			baseTime += Math.floor(Math.random() * 60000) // до минуты разницы
		}

		result.push({
			id: `m${i + 1}`,
			chatId,
			senderId,
			text: getRandomText(),
			type: 'text',
			createdAt: new Date(baseTime),
		})
	}

	return result
}

// ==== MESSAGES ====

export const messages: Message[] = generateMessages(200)

// export const messages: Message[] = [
// 	{
// 		id: 'm1',
// 		chatId: 'c1',
// 		senderId: 'u4',
// 		text: 'Привет, как дела?',
// 		type: 'text',
// 		createdAt: new Date('2026-03-12T20:00:00'),
// 	},
// 	{
// 		id: 'm2',
// 		chatId: 'c2',
// 		senderId: 'u4',
// 		text: 'Привет! Всё хорошо, спасибо 😊',
// 		type: 'text',
// 		createdAt: new Date('2026-03-12T20:01:00'),
// 	},
// 	{
// 		id: 'm3',
// 		chatId: 'c3',
// 		senderId: 'u3',
// 		text: 'МОЛОДЕЦ! 😊',
// 		type: 'text',
// 		createdAt: new Date('2026-03-12T20:01:00'),
// 	},
// 	{
// 		id: 'm4',
// 		chatId: 'c3',
// 		senderId: 'u3',
// 		text: 'Давай давай! 😊',
// 		type: 'text',
// 		createdAt: new Date('2026-03-12T20:01:00'),
// 	},
// 	{
// 		id: 'm5',
// 		chatId: 'c3',
// 		senderId: 'u4',
// 		text: 'Ты тоже!',
// 		type: 'text',
// 		createdAt: new Date('2026-03-12T20:01:00'),
// 	},
// 	{
// 		id: 'm6',
// 		chatId: 'c3',
// 		senderId: 'u4',
// 		text: 'Ты тоже111!',
// 		type: 'text',
// 		createdAt: new Date('2026-03-12T20:01:00'),
// 	},
// 	{
// 		id: 'm7',
// 		chatId: 'c3',
// 		senderId: 'u4',
// 		text: 'Ты тоже111!',
// 		type: 'text',
// 		createdAt: new Date('2026-03-12T20:01:00'),
// 	},
// 	{
// 		id: 'm8',
// 		chatId: 'c3',
// 		senderId: 'u3',
// 		text: 'Ты тоже111!',
// 		type: 'text',
// 		createdAt: new Date('2026-03-12T20:02:00'),
// 	},
// 	{
// 		id: 'm9',
// 		chatId: 'c3',
// 		senderId: 'u3',
// 		text: 'Ты тоже111!',
// 		type: 'text',
// 		createdAt: new Date('2026-03-12T20:02:00'),
// 	},
// 	{
// 		id: 'm10',
// 		chatId: 'c3',
// 		senderId: 'u3',
// 		text: 'Ты тоже111!',
// 		type: 'text',
// 		createdAt: new Date('2026-03-12T20:02:00'),
// 	},
// ]

export const userChats = chats.filter(chat =>
	chatMembers.some(
		member => member.chatId === chat.id && member.userId === currentUserId,
	),
)

export const getChatMessages = (chatId: ParamValue) => {
	return messages.filter(m => m.chatId === chatId)
}
