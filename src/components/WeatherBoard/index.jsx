import Image from 'next/image'
import styles from './index.module.scss'
import Condition from './components/Conditions'
import { ICONS_PATH } from '@/utils/enums'

const HUMIDITY_PATH = `${ICONS_PATH}humidity/`
const HUMIDITY_ICON_MAP = [
  [60, `${HUMIDITY_PATH}high.svg`],
  [40, `${HUMIDITY_PATH}mid.svg`],
  [0, `${HUMIDITY_PATH}low.svg`],
]

const getHumidityIcon = (humidity) => HUMIDITY_ICON_MAP.find(([k]) => humidity > k)[1]

const getConditions = ({ humidity, pressure, windspeed }) => [
  { name: 'Wilgotność', value: `${humidity}%`, icon: getHumidityIcon(humidity) },
  { name: 'Ciśnienie', value: `${pressure} hPa`, icon: `${ICONS_PATH}pressure.svg` },
  { name: 'Wiatr', value: `${windspeed} km/h`, icon: `${ICONS_PATH}wind-speed.svg` },
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
