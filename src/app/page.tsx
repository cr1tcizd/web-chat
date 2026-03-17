import { redirect, RedirectType } from 'next/navigation'

export default function Home() {
	return redirect('/chat/c1', RedirectType.push)
}
