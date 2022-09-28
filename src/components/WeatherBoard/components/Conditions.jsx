import styles from '@/components/WeatherBoard/index.module.scss'
import Image from 'next/image'

export default function Condition({ condition: { name, value, icon } }) {
  return (
    <div className={styles.container__conditionsElement} key={value}>
      <Image height={36} width={36} src={icon} alt={name} />
      <span className='paragraph'>{name}</span>
      <span className='caption'>{value}</span>
    </div>
  )
}
