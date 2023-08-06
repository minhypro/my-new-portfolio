import {create} from 'zustand'

interface TabNavigationState {
	activeTab: number
	setActiveTab: (newActiveTab: number) => void
}

export const useTabNavigation = create<TabNavigationState>(set => ({
	activeTab: 0,
	setActiveTab: newActiveTab => set({activeTab: newActiveTab}),
}))
