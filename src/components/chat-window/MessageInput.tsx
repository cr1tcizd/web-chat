const MessageInput = () => {
	return (
		<div className='relative'>
			<input
				type='text'
				placeholder='Сообщение..'
				className='w-full bg-(--gray) p-4 px-6 rounded-xl outline-none'
			/>
			<div className='pointer-events-none absolute bottom-14 left-0 right-0 h-10 bg-gradient-to-t from-(--background) to-transparent'></div>
		</div>
	)
}

export default MessageInput
