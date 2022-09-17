import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import cn from 'classnames'
import styles from './index.module.scss'
import Image from 'next/future/image'
import { mockData } from '@/utils/mocks'

export default function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({
    dragFree: true,
    align: 'start',
    containScroll: 'keepSnaps',
  })

  return (
    <div className={styles.container} ref={emblaRef}>
      <div className={styles.container__content}>
        {mockData.map(({ temperature, imgPath, hour }, index) => (
          <div key={`${styles.container__slide}-${index}`} className={styles.container__slide}>
            <span className={cn('headline-2', styles.container__slideTemperature)}>{temperature}&deg;C</span>
            <Image src={imgPath} width={80} height={80} alt={`${index}-image`} />
            <span className='headline-3'>{hour}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
