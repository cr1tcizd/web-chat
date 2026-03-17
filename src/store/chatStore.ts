import { Message } from '@/types/chat'
import { create } from 'zustand'

interface ChatState {
	messages: Message[]
	addMessage: (msg: Message) => void
	clearMessages: () => void
}

const useChatStore = create<ChatState>(set => ({
	messages: [],
	addMessage: msg => set(state => ({ messages: [...state.messages, msg] })),
	clearMessages: () => set({ messages: [] }),
}))

export default useChatStore
