import { useCallback, useEffect, useState } from 'react'
import usePlacesService from 'react-google-autocomplete/lib/usePlacesAutocompleteService'
import { useDetectClickOutside } from 'react-detect-click-outside'
import cn from 'classnames'
import Result from '@/components/SearchBar/components/Result'
import { recommendations } from '@/utils/mocks'
import { handleRecommendationClick } from './utils'
import styles from './index.module.scss'
import { useRouter } from 'next/router'
import { useDebounce } from 'use-debounce'
import Spinner from '../Spinner'

const DEBUNCE_VALUE = 500 // Ms
const MINIMUM_SEARCH_QUERY_LENGTH = 2

export default function SearchBar() {
  const [isSearchVisible, setIsSearchVisible] = useState(false)
  const [value, setValue] = useState('')
  const [debouncedValue] = useDebounce(value, DEBUNCE_VALUE)
  const router = useRouter()
  const isSearchingAllowed = debouncedValue.length > MINIMUM_SEARCH_QUERY_LENGTH
  const headlineText = isSearchingAllowed ? 'Najlepsze sugestie' : 'Popularne terminy wyszukiwania'
  const { placePredictions, getPlacePredictions, isPlacePredictionsLoading } = usePlacesService({
    apiKey: 'AIzaSyArqLV9dtuFnWiG7O4XGaaV3127rjzeqEY',
    options: {
      types: ['(cities)'],
      componentRestrictions: { country: 'pl' },
    },
  })

  const memoizedGetPlacePredictions = useCallback(() => {
    getPlacePredictions({ input: debouncedValue })
  }, [debouncedValue])

  const handleOutsideClick = () => {
    setIsSearchVisible(false)
  }

  const handleInputFocus = () => {
    setIsSearchVisible(true)
  }

  useEffect(() => {
    if (isSearchingAllowed) {
      memoizedGetPlacePredictions()
    }
  }, [debouncedValue, isSearchingAllowed, memoizedGetPlacePredictions])

  const handleInputChange = (event) => {
    setValue(event.target.value)
  }

  const ref = useDetectClickOutside({ onTriggered: handleOutsideClick })

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
                  onClick={handleRecommendationClick(element, router)}
                >
                  {element}
                </span>
              ))}
            {isSearchingAllowed &&
              (isPlacePredictionsLoading ? (
                <Spinner svgClass={styles.container__spinner} />
              ) : (
                placePredictions.map((item) => (
                  <Result debouncedValue={debouncedValue} item={item} key={item.place_id} />
                ))
              ))}
          </div>
        </div>
      )}
    </div>
  )
}
