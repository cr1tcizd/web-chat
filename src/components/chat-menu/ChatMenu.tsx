import Image from 'next/image'
import ChatMenuButton from './ChatMenuButton'
import PersonAdd from '@/assets/icons/person-add.svg'
import Info from '@/assets/icons/info.svg'
import Delete from '@/assets/icons/delete.svg'
import Notifications from '@/assets/icons/notifications.svg'

const ChatMenu = ({ panelOpen }: { panelOpen: boolean }) => {
	return (
		<div
			className={`
			transition-all duration-300
			overflow-hidden
			${panelOpen ? 'w-[280px]' : 'w-0'}
			`}
		>
			<div className=''>
				<h3 className='font-medium text-[18px] mb-[25px] text-(--gray-text) whitespace-nowrap'>
					Chat Details
				</h3>
				<div className='flex justify-between'>
					<ChatMenuButton>
						<Image src={PersonAdd} alt='Add' width={24} />
					</ChatMenuButton>
					<ChatMenuButton>
						<Image src={Notifications} alt='Notification' width={24} />
					</ChatMenuButton>
					<ChatMenuButton>
						<Image src={Info} alt='Info' width={24} />
					</ChatMenuButton>
					<ChatMenuButton>
						<Image src={Delete} alt='Delete' width={24} />
					</ChatMenuButton>
				</div>
			</div>
		</div>
	)
}

export default ChatMenu
