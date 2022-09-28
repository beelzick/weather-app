import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import cn from 'classnames'
import styles from './index.module.scss'
import Image from 'next/future/image'
import { formatDatetime } from '@/utils/helpers'

export default function MainSlider({ hours }) {
  const [emblaRef] = useEmblaCarousel({
    dragFree: true,
    align: 'start',
    containScroll: 'keepSnaps',
  })

  return (
    <div className={styles.container} ref={emblaRef}>
      <div className={styles.container__content}>
        {hours.map(({ icon, temp, conditions, datetime, datetimeEpoch }, index) => (
          <div key={`${styles.container__slide}-${index}-${datetimeEpoch}`} className={styles.container__slide}>
            <span className={cn('headline-2', styles.container__slideTemperature)}>{Math.round(temp)}&deg;C</span>
            <Image src={`/weather-icons/${icon}.svg`} width={80} height={80} alt={conditions} />
            <span className='headline-3'>{formatDatetime(datetime)}</span>
          </div>
        ))}
      </div>
    </div>
  )
}