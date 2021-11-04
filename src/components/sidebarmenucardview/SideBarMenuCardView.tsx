import { SideBarMenuCard } from '../../types/types'
import { ClassNames } from '../../util/classes'

import '../sidebarmenucardview/sideBarMenuCardView.scss'

interface SideBarMenuCardViewProps {
	card: SideBarMenuCard
	isOpen: boolean
}

export default function SideBarMenuCardView({ card, isOpen }: SideBarMenuCardViewProps) {
	return (
		<div className="SideBarMenuCardView">
			<img src={card.photoUrl} alt={card.displayName} width="100%" className="profile" />
			<div className={ClassNames('profileInfo', isOpen ? '' : 'collapsed')}>
				<div className="name">{card.displayName}</div>
				<div className="title">{card.title}</div>
				<div className="url">
					<a href={card.url}>Ir al perfil</a>
				</div>
			</div>
		</div>
	)
}
