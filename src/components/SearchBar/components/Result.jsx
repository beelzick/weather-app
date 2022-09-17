import { useRouter } from 'next/router'
import cn from 'classnames'
import styles from '@/components/SearchBar/index.module.scss'
import { getCommonPart, handleRecommendationClick } from '@/components/SearchBar/utils'

export default function Result({ debouncedValue, item }) {
  const { main_text: cityName } = item.structured_formatting
  // eslint-disable-next-line no-magic-numbers
  const capitalizedDebuncedValue = debouncedValue.charAt(0).toUpperCase() + debouncedValue.slice(1)
  const commonPart = getCommonPart(cityName, capitalizedDebuncedValue)
  const router = useRouter()

  return (
    <span
      className={cn('paragraph', styles.container__promptsElement)}
      onClick={handleRecommendationClick(cityName, router)}
    >
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
