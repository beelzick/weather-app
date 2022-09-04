import styles from '@/styles/pages/city.module.scss'
import WeatherBoard from '@/components/WeatherBoard'
import ClothingSection from '@/components/ClothingSection'
import cn from 'classnames'

export default function CityPage({ weather, clothing }) {
  const { city } = weather
  return (
    <>
      <section>
        <h1 className={cn('headline-1', styles.title)}>{`Pogoda ${city}`}</h1>
        <div className={styles.sectionMainContainer}>
          <WeatherBoard weather={weather} />
          <ClothingSection clothing={clothing} />
        </div>
      </section>
      <section></section>
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
        state: 'burza',
        temperature: '22',
        wind: 12,
        conditions: [
          ['icon1', 'opady', '98%'],
          ['icon2', 'wilgotność', '37%'],
          ['icon3', 'wiatr', '12 km/h'],
        ],
      },
      clothing: ['krótkie spodenki', 't-shirt', 'parasolka'],
    },
  }
}
