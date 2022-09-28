import styles from './index.module.scss'
import Condition from './components/Conditions'
import Image from 'next/image'

const getConditions = (currentConditions) => [
    { name: 'Wilgotność', value: `${currentConditions.humidity}%`, icon: '/test/c1.svg' },
    { name: 'Ciśnienie', value: `${currentConditions.pressure} hPa`, icon: '/test/c2.svg' },
    { name: 'Wiatr', value: `${currentConditions.windspeed} km/h`, icon: '/test/c3.svg' },
  ]

export default function WeatherBoard({ currentConditions }) {
  const { temp, conditions, icon } = currentConditions
  return (
    <div className={styles.container}>
      <Image height={160} width={160} src={`/weather-icons/${icon}.svg`} alt={conditions} quality={100} />
      <div className={styles.container__currentState}>
        <span className={styles.container__currentStateTemperature}>{Math.round(temp)}&deg;C</span>
        <h3 className='headline-2'>{conditions}</h3>
      </div>
      <div className={styles.container__conditions}>
        {getConditions(currentConditions).map((condition, index) => (
          <Condition condition={condition} key={index + condition.value} />
        ))}
      </div>
    </div>
  )
}
