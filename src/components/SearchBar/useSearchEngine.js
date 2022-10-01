import usePlacesService from 'react-google-autocomplete/lib/usePlacesAutocompleteService'
import { useCallback, useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'

const DEBUNCE_VALUE = 500 // Ms
const MINIMUM_SEARCH_QUERY_LENGTH = 2

export default function useSearchEngine() {
  const [value, setValue] = useState('')
  const [debouncedValue] = useDebounce(value, DEBUNCE_VALUE)
  const isSearchingAllowed = debouncedValue.length > MINIMUM_SEARCH_QUERY_LENGTH
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

  useEffect(() => {
    if (isSearchingAllowed) {
      memoizedGetPlacePredictions()
    }
  }, [debouncedValue, isSearchingAllowed, memoizedGetPlacePredictions])

  const handleInputChange = (event) => {
    setValue(event.target.value)
  }

  return {
    isSearchingAllowed,
    isPlacePredictionsLoading,
    placePredictions,
    handleInputChange,
    debouncedValue,
  }
}
