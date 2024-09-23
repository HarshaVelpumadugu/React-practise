import { create } from 'zustand'

const useBearStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))

function BearCounter() {
    const bears = useBearStore((state) => state.bears)
    return <h1>{bears} around here ...</h1>
  }
  
  function Controls() {
    const increasePopulation = useBearStore((state) => state.increasePopulation)
    return <button onClick={increasePopulation}>one up</button>
  }
// Why zustand over redux?
// Simple and un-opinionated
// Makes hooks the primary means of consuming state
// Doesn't wrap your app in context providers
// Can inform components transiently (without causing render)
// Why zustand over context?
// Less boilerplate
// Renders components only on changes
// Centralized, action-based state management

