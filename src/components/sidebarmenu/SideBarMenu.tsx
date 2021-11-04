import { useState } from 'react'
import { SideBarMenuItem, SideBarMenuCard } from '../../types/types'
import { ClassNames } from '../../util/classes'
import { VscMenu } from 'react-icons/vsc'

import SideBarMenuCardView from '../sidebarmenucardview/SideBarMenuCardView'
import SideBarMenuItemView from '../sidebarmenuitemview/SideBarMenuItemView'

import '../sidebarmenu/SideBarMenu.scss'

interface SideBarMenuProps {
	items: SideBarMenuItem[]
	card: SideBarMenuCard
}

export default function SideBarMenu({ items, card }: SideBarMenuProps) {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	function handleClick() {
		setIsOpen(!isOpen)
	}
	return (
		<div className={ClassNames('SideBarMenu', isOpen ? 'expanded' : 'collapsed')}>
			<div className="menuButton">
				<button className="hamburgerIcon" onClick={handleClick}>
					<VscMenu />
				</button>
			</div>
			<SideBarMenuCardView card={card} isOpen={isOpen} />
			{items.map((item) => (
				<SideBarMenuItemView key={item.id} item={item} isOpen={isOpen} />
			))}
		</div>
	)
}
