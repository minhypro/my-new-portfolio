export const containerWidth = {
	sm: 640,
	ms: 768,
	lg: 1024,
	xl: 1280,
}

export const getCurrentWidth = () => {
	const currentWidth = window.innerWidth
	const containerWidths = Object.values(containerWidth)
	let currentContainer = containerWidth.xl
	for (let i = 0; i < containerWidths.length; i++) {
		if (containerWidths[i] > currentWidth) {
			currentContainer =
				containerWidths[i - 1] === undefined
					? currentWidth
					: containerWidths[i - 1]
			break
		}
	}
	return [currentWidth, currentContainer]
}
