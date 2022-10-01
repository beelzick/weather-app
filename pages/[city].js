import styles from '@/styles/pages/city.module.scss'
import WeatherBoard from '@/components/WeatherBoard'
import ClothingSection from '@/components/ClothingSection'
import MainSlider from '@/components/MainSlider'
import cn from 'classnames'
import axios from 'axios'
import getClothing from '@/utils/getClothing'

export default function CityPage({ city, clothing, currentConditions, hours }) {
  const title = `Pogoda ${city[0].toUpperCase() + city.slice(1)}`

  return (
    <>
      <section className='container'>
        <h1 className={cn('headline-1', styles.detail__title)}>{title}</h1>
        <div className={styles.detail__content}>
          <WeatherBoard currentConditions={currentConditions} />
          <ClothingSection clothing={clothing} />
        </div>
      </section>
      <MainSlider hours={hours} />
    </>
  )
}

export async function getServerSideProps({ query: { city } }) {
  try {
    const uri = `${encodeURI(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/today`
    )}?include=current%2Chours`
    const { data } = await axios.get(uri, {
      params: {
        unitGroup: 'metric',
        key: process.env.WEATHER_API_KEY,
        contentType: 'json',
        iconSet: 'icons2',
        lang: 'pl',
      },
    })

    const {
      currentConditions,
      days: [{ hours }],
    } = data

    return {
      props: {
        city,
        currentConditions,
        hours,
        clothing: getClothing(currentConditions),
      },
    }
  } catch (e) {
    const isBadRequest = e.code === 'ERR_BAD_REQUEST'
    return {
      redirect: {
        destination: isBadRequest ? '/404' : '/500',
        permanent: false,
      },
    }
  }
}
