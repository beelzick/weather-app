import Head from 'next/head'
import axios from 'axios'
import cn from 'classnames'
import getClothing from '../src/utils/getClothing'
import { capitalize } from '../src/utils/helpers'
import styles from '../src/styles/pages/city.module.scss'
import WeatherBoard from '../src/components/WeatherBoard'
import ClothingSection from '../src/components/ClothingSection'
import MainSlider from '../src/components/MainSlider'

export default function CityPage({ city, clothing, currentConditions, hours }) {
  const capitalizedCity = capitalize(city)
  const title = `Pogoda ${capitalizedCity}`

  return (
    <>
      <Head>
        <title>{`${title}, sprawdź prognozę na dzisiaj | Weatherdrobe`}</title>
        <meta
          name='description'
          // eslint-disable-next-line max-len
          content={`Sprawdź aktualną pogodę w mieście ${capitalizedCity}. Prognoza pogody na dzisiejszy dzień. Zobacz w co się dzisiaj ubrać. Prognoza dla każdej godziny.`}
        />
      </Head>
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
