import { createContext, useState } from 'react'
import { createPortal } from 'react-dom'

export const OverlayContext = createContext({
  setIsOverlayVisible: () => {},
})

export default function OverlayContextProvider({ children }) {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false)
  const value = { setIsOverlayVisible }
  const overlay = typeof window !== 'undefined' && createPortal(<div className='overlay' />, document.body)
  return (
    <>
      {isOverlayVisible && overlay}
      <OverlayContext.Provider value={value}>{children}</OverlayContext.Provider>
    </>
  )
}
