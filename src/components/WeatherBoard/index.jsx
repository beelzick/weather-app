import styles from './index.module.scss'
import Image from 'next/image'

export default function WeatherBoard({ weather: { state, conditions } }) {
  return (
    <div className={styles.container}>
      <Image height={160} width={160} src='/test/thunder-1.svg' quality={100} />
      <div className={styles.container__currentState}>
        <span className={styles.container__currentStateTemperature}>22&deg;C</span>
        <h3 className='headline-2'>{state}</h3>
      </div>
      <div className={styles.container__conditions}>
        {conditions.map(([iconPath, condition, value]) => (
          <div className={styles.container__conditionsElement} key={value}>
            <Image height={36} width={36} src={iconPath} />
            <span className='paragraph'>{condition}</span>
            <span className='caption'>{value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
