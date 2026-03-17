import { ReactNode } from 'react'

const ChatMenuButton = ({ children }: { children: ReactNode }) => {
	return (
		<button className='flex items-center justify-center w-14 h-14 bg-(--gray) rounded-xl cursor-pointer'>
			{children}
		</button>
	)
}

export default ChatMenuButton
