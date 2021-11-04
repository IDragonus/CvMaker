import SideBarMenu from './components/sidebarmenu/SideBarMenu'
import { SideBarMenuCard, SideBarMenuItem } from './types/types'
import { FcSms, FcSettings, FcDownload, FcVoicePresentation, FcLeft } from 'react-icons/fc'
import profileImage from './images/The_Batman.jpg'

export default function App() {
	const items: SideBarMenuItem[] = [
		{
			id: '1',
			label: 'Contacts',
			icon: FcVoicePresentation,
			url: '/',
		},
		{
			id: '2',
			label: 'Messages',
			icon: FcSms,
			url: '/',
		},
		{
			id: '3',
			label: 'Down load CV',
			icon: FcDownload,
			url: '/',
		},
		{
			id: '4',
			label: 'Settings',
			icon: FcSettings,
			url: '/',
		},
		{
			id: '5',
			label: 'Sign out',
			icon: FcLeft,
			url: '/',
		},
	]

	const card: SideBarMenuCard = {
		id: 'card01',
		displayName: 'Bruce Wayne',
		title: 'The Batman',
		photoUrl: profileImage,
		url: '/',
	}

	return (
		<div>
			<SideBarMenu items={items} card={card} />
		</div>
	)
}
