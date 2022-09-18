import { useState } from 'react'
import { useRouter } from 'next/router'
import { useDetectClickOutside } from 'react-detect-click-outside'
import cn from 'classnames'
import Result from '@/components/SearchBar/components/Result'
import { recommendations } from '@/utils/mocks'
import styles from './index.module.scss'
import Spinner from '../Spinner'
import useSearchEngine from './useSearchEngine'

export default function SearchBar() {
  const [isSearchVisible, setIsSearchVisible] = useState(false)
  const { isSearchingAllowed, handleInputChange, isPlacePredictionsLoading, placePredictions, debouncedValue } =
    useSearchEngine()

  const router = useRouter()
  const headlineText = isSearchingAllowed ? 'Najlepsze sugestie' : 'Popularne terminy wyszukiwania'

  const handleInputFocus = () => {
    setIsSearchVisible(true)
  }

  const closeSearchBar = () => {
    setIsSearchVisible(false)
  }

  const ref = useDetectClickOutside({ onTriggered: closeSearchBar })

  const handleRecommendationClick = (recommendation) => () => {
    closeSearchBar()
    router.push(recommendation.toLowerCase())
  }

  return (
    <div className={styles.container} ref={ref}>
      <input
        className={styles.container__input}
        placeholder='Wpisz nazwę miasta...'
        onFocus={handleInputFocus}
        onChange={handleInputChange}
      />
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
