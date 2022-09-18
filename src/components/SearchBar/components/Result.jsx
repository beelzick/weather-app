import cn from 'classnames'
import styles from '@/components/SearchBar/index.module.scss'
import { getCommonPart } from '@/utils/helpers'

export default function Result({ debouncedValue, item, handleRecommendationClick }) {
  const { main_text: cityName } = item.structured_formatting
  // eslint-disable-next-line no-magic-numbers
  const capitalizedDebuncedValue = debouncedValue.charAt(0).toUpperCase() + debouncedValue.slice(1)
  const commonPart = getCommonPart(cityName, capitalizedDebuncedValue)

  return (
    <span className={cn('paragraph', styles.container__promptsElement)} onClick={handleRecommendationClick(cityName)}>
      {commonPart ? (
        <>
          <span>{commonPart}</span>
          <span className={styles.container__promptsElementLight}>{cityName.replace(commonPart, '')}</span>
        </>
      ) : (
        <span>{cityName}</span>
      )}
    </span>
  )
}
