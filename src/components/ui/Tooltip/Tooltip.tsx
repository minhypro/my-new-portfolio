import type {Placement} from '@floating-ui/react'
import {
	arrow,
	autoUpdate,
	flip,
	FloatingArrow,
	FloatingPortal,
	offset,
	shift,
	useDismiss,
	useFloating,
	useFocus,
	useHover,
	useInteractions,
	useMergeRefs,
	useRole,
} from '@floating-ui/react'
import * as React from 'react'

interface TooltipOptions {
	initialOpen?: boolean
	placement?: Placement
	open?: boolean
	onOpenChange?: (open: boolean) => void
}

export function useTooltip({
	initialOpen = false,
	placement = 'top',
	open: controlledOpen,
	onOpenChange: setControlledOpen,
}: TooltipOptions = {}) {
	const arrowRef = React.useRef(null)
	const [uncontrolledOpen, setUncontrolledOpen] = React.useState(initialOpen)

	const open = controlledOpen ?? uncontrolledOpen
	const setOpen = setControlledOpen ?? setUncontrolledOpen

	const data = useFloating({
		placement,
		open,
		onOpenChange: setOpen,
		whileElementsMounted: autoUpdate,
		middleware: [offset(5), flip(), shift(), arrow({element: arrowRef})],
	})

	const context = data.context

	const hover = useHover(context, {
		move: true,
		delay: 200,
		enabled: controlledOpen == null,
	})
	const focus = useFocus(context, {
		enabled: controlledOpen == null,
	})
	const dismiss = useDismiss(context)
	const role = useRole(context, {role: 'tooltip'})

	const interactions = useInteractions([hover, focus, dismiss, role])

	return React.useMemo(
		() => ({
			open,
			setOpen,
			arrowRef,
			...interactions,
			...data,
		}),
		[open, setOpen, arrowRef, interactions, data],
	)
}

type ContextType = ReturnType<typeof useTooltip> | null

const TooltipContext = React.createContext<ContextType>(null)

export const useTooltipState = () => {
	const context = React.useContext(TooltipContext)

	if (context == null) {
		throw new Error('Tooltip components must be wrapped in <Tooltip />')
	}

	return context
}

export interface TooltipProps {
	/**
	 * TooltipTrigger and TooltipContent component
	 */
	children: React.ReactNode
	/**
	 * Open tooltip on init
	 */
	initialOpen?: boolean
	/**
	 * Set the placement of the tooltip
	 */
	placement?: Placement
	/**
	 * Tooltip open state
	 */
	open?: boolean
	/**
	 * Side function when open state changes
	 */
	onOpenChange?: (open: boolean) => void
}
export const Tooltip: React.FC<TooltipProps> = ({
	children,
	initialOpen,
	placement,
	open,
	onOpenChange,
}) => {
	const options = {initialOpen, placement, open, onOpenChange}
	const tooltip = useTooltip(options)
	return (
		<TooltipContext.Provider value={tooltip}>
			{children}
		</TooltipContext.Provider>
	)
}

export const TooltipTrigger = React.forwardRef<
	HTMLElement,
	React.HTMLProps<HTMLElement> & {asChild?: boolean}
>(function TooltipTrigger({children, asChild = false, ...props}, propRef) {
	const state = useTooltipState()

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const childrenRef = (children as any).ref
	const ref = useMergeRefs([state.refs.setReference, propRef, childrenRef])

	// `asChild` allows the user to pass any element as the anchor
	if (asChild && React.isValidElement(children)) {
		return React.cloneElement(
			children,
			state.getReferenceProps({
				ref,
				...props,
				...children.props,
				'data-state': state.open ? 'open' : 'closed',
			}),
		)
	}

	return (
		<div
			className="inline-block cursor-default"
			ref={ref}
			// The user can style the trigger based on the state
			data-state={state.open ? 'open' : 'closed'}
			{...state.getReferenceProps(props)}
		>
			{children}
		</div>
	)
})

export const TooltipContent = React.forwardRef<
	HTMLDivElement,
	React.HTMLProps<HTMLDivElement>
>(function TooltipContent(props, propRef) {
	const state = useTooltipState()
	const ref = useMergeRefs([state.refs.setFloating, propRef])

	return (
		<FloatingPortal>
			{state.open && (
				<div
					ref={ref}
					style={state.floatingStyles}
					{...state.getFloatingProps(props)}
					className="rounded bg-gray-900/80 p-2 text-white"
				>
					{props.children}
					<FloatingArrow
						ref={state.arrowRef}
						context={state.context}
						className="fill-gray-900 opacity-80"
					/>
				</div>
			)}
		</FloatingPortal>
	)
})
