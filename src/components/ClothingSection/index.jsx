import Image from 'next/image'
import cn from 'classnames'
import styles from './index.module.scss'

export default function ClothingSection({ clothing }) {
  return (
    <div className={styles.container}>
      <h2 className={cn('headline-2', styles.container__headline)}>Jak się ubrać na dzisiejszą pogodę?</h2>
      <p className={cn('headline-3', styles.container__subHeadline)}>Biorąc pod uwagę warunki pogodowe wybierz</p>
      <div className={styles.container__weatherRecommendations}>
        {clothing.map(({ name, path }) => (
          <div key={name} className={styles.container__weatherRecommendationsElement}>
            <div className={styles.container__weatherRecommendationsElementImg}>
              <Image height={45} width={45} src={path} />
            </div>
            <span className='paragraph'>{name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
