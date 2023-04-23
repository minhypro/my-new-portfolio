import React from 'react'

type Props = {
	text: string
	icon: React.ReactNode
	link?: string
}

const SocialLink: React.FC<Props> = ({text, link, icon}) => {
	return (
		<div className="my-3 flex w-1/2 items-center text-sm lg:w-full xl:my-5 xl:text-base">
			<div className="inline-block">{icon}</div>
			<a
				className={`ml-2 ${
					link ? 'text-sky-500 hover:text-sky-400' : ''
				}`}
				href={link}
			>
				{text}
			</a>
		</div>
	)
}

export default SocialLink
