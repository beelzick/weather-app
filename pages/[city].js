import styles from '@/styles/pages/city.module.scss'
import WeatherBoard from '@/components/WeatherBoard'
import ClothingSection from '@/components/ClothingSection'
import MainSlider from '@/components/MainSlider'

import cn from 'classnames'

export default function CityPage({ weather, clothing }) {
  const { city } = weather
  return (
    <>
      <section className='container'>
        <h1 className={cn('headline-1', styles.detail__title)}>{`Pogoda ${city}`}</h1>
        <div className={styles.detail__content}>
          <WeatherBoard weather={weather} />
          <ClothingSection clothing={clothing} />
        </div>
      </section>
      <MainSlider />
    </>
  )
}

export const getStaticPaths = () => ({
  paths: [{ params: { city: 'warszawa' } }],
  fallback: true,
})

export function getStaticProps() {
  return {
    props: {
      weather: {
        city: 'Warszawa',
        humidity: 37,
        rainChance: 98,
        state: 'Burza',
        temperature: '22',
        wind: 12,
        conditions: [
          ['/test/c1.svg', 'opady', '98%'],
          ['/test/c2.svg', 'wilgotność', '37%'],
          ['/test/c3.svg', 'wiatr', '12 km/h'],
        ],
      },
      clothing: [
        { name: 'krótkie spodenki', path: '/test/cloth1.svg' },
        { name: 't-shirt', path: '/test/cloth2.svg' },
        { name: 'parasolka', path: '/test/cloth3.svg' },
      ],
    },
  }
}
