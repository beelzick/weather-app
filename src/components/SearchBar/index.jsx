import { useContext, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { useDetectClickOutside } from 'react-detect-click-outside'
import cn from 'classnames'
import Result from '@/components/SearchBar/components/Result'
import { OverlayContext } from '@/utils/OverlayContext'
import { recommendations } from '@/utils/mocks'
import styles from './index.module.scss'
import Spinner from '../Spinner'
import useSearchEngine from './useSearchEngine'

export default function SearchBar() {
  const [isSearchVisible, setIsSearchVisible] = useState(false)
  const { setIsOverlayVisible } = useContext(OverlayContext)
  const { isSearchingAllowed, handleInputChange, isPlacePredictionsLoading, placePredictions, debouncedValue } =
    useSearchEngine()

  const inputRef = useRef()

  const router = useRouter()
  const headlineText = isSearchingAllowed ? 'Najlepsze sugestie' : 'Popularne terminy wyszukiwania'

  const handleInputFocus = () => {
    setIsSearchVisible(true)
  }

  const closeSearchBar = () => {
    setIsSearchVisible(false)
    inputRef.current.value = ''
  }

  const ref = useDetectClickOutside({ onTriggered: closeSearchBar })

  const handleRecommendationClick = (recommendation) => () => {
    closeSearchBar()
    router.push(recommendation.toLowerCase())
  }

  useEffect(() => {
    setIsOverlayVisible(isSearchVisible)
    if (!isSearchVisible) {
      inputRef.current.blur()
    }
  }, [isSearchVisible])

  return (
    <div className={cn(styles.container, { [styles['container--focused']]: isSearchVisible })} ref={ref}>
      <div className={cn(styles.container__inputWrapper)}>
        <input
          className={cn(styles.container__input, { [styles['container__input--focused']]: isSearchVisible })}
          placeholder='Wpisz nazwę miasta...'
          onFocus={handleInputFocus}
          onChange={handleInputChange}
          ref={inputRef}
        />
      </div>
      {isSearchVisible && (
        <div className={styles.container__prompts}>
          <h2 className={cn('caption', styles.container__promptsHeadline)}>{headlineText}</h2>
          <div className={styles.container__promptsElements}>
            {!isSearchingAllowed &&
              recommendations.map((element, index) => (
                <span
                  key={`${element}-${index}`}
                  className={cn('paragraph', styles.container__promptsElement)}
                  onClick={handleRecommendationClick(element)}
                >
                  {element}
                </span>
              ))}
            {isSearchingAllowed &&
              (isPlacePredictionsLoading ? (
                <Spinner svgClass={styles.container__spinner} />
              ) : (
                placePredictions.map((item) => (
                  <Result
                    debouncedValue={debouncedValue}
                    item={item}
                    key={item.place_id}
                    handleRecommendationClick={handleRecommendationClick}
                  />
                ))
              ))}
          </div>
        </div>
      )}
    </div>
  )
}
