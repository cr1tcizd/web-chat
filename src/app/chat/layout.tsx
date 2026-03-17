import Sidebar from '@/components/sidebar/Sidebar'
import { ReactNode } from 'react'

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<div className='flex h-screen mx-5 py-7'>
			<Sidebar />
			{children}
		</div>
	)
}

export default Layout
