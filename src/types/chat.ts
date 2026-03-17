import { StaticImageData } from 'next/image'

export interface User {
	id: string
	name: string
	username: string
	avatar: StaticImageData
	status: 'online' | 'offline' | 'away'
	lastSeen: Date
	createdAt: Date
}

export interface Chat {
	id: string
	type: 'private' | 'group'
	title?: string
	avatar?: string
	createdAt: Date
	updatedAt: Date
}

export interface ChatMember {
	chatId: string
	userId: string
}

export interface Message {
	id: string
	chatId: string
	senderId: string
	text?: string
	type: 'text' | 'image' | 'voice' | 'file'
	createdAt: Date
	editedAt?: Date
	replyToId?: string
}

export interface MessageStatus {
	userId: string
	status: 'sent' | 'delivered' | 'read'
}
