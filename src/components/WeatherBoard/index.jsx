import styles from './index.module.scss'

export default function WeatherBoard({ weather: { state, conditions } }) {
  return (
    <div className={styles.weatherBoard}>
      <img height={160} width={160} />
      <span className={styles.weatherBoard__temperature}>22&#8451;</span>
      <h3 className='headline-2'>{state}</h3>
      <div className={styles.weatherBoard__conditions}>
        {conditions.map(([, condition, value]) => (
          <div className={styles.weatherBoard__conditionsCondition} key={value}>
            <img height={36} width={36}></img>
            <span>{condition}</span>
            <span>{value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
