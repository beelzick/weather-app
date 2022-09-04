import styles from './index.module.scss'
import cn from 'classnames'

export default function ClothingSection({ clothing }) {
  return (
    <div className={styles.clothingSection}>
      <h2 className={cn('headline-2', styles.clothingSection__headline)}>Jak się ubrać na dzisiejszą pogodę?</h2>
      <p className={cn('headline-3', styles.clothingSection__subHeadline)}>Biorąc pod uwagę warunki pogodowe wybierz</p>
      <div className={styles.clothingSection__weatherRecommendations}>
        {clothing.map((item) => (
          <div key={item} className={styles.clothingSection__weatherRecommendationsItem}>
            <img height={80} width={80}></img>
            <span className={styles.clothingSection__weatherRecommendationsItemText}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
