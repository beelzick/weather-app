import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import cn from 'classnames'
import styles from './index.module.scss'
import Image from 'next/future/image'
import roundMinutes from '@/utils/roundMinutes'
import { formatDatetime } from '@/utils/helpers'

export default function MainSlider({ hours }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    dragFree: true,
    align: 'start',
    containScroll: 'keepSnaps',
  })

  const currentIndex = hours.findIndex(({ datetime }) => datetime.slice(0, 2) === roundMinutes(new Date()))

  useEffect(() => {
    emblaApi?.scrollTo(currentIndex - 1)
  }, [emblaApi, currentIndex])

  return (
    <div className={styles.container} ref={emblaRef}>
      <div className={styles.container__content}>
        {hours.map(({ icon, temp, conditions, datetime, datetimeEpoch }, index) => (
          <div
            className={styles.container__slideContainer}
            key={`${styles.container__slide}-${index}-${datetimeEpoch}`}
          >
            <div
              className={cn(styles.container__slide, {
                [styles['container__slide--current']]: currentIndex === index,
              })}
            >
              <span className={cn('headline-2', styles.container__slideTemperature)}>{Math.round(temp)}&deg;C</span>
              <Image src={`/weather-icons/${icon}.svg`} width={80} height={80} alt={conditions} />
              <span className='headline-3'>{formatDatetime(datetime)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
