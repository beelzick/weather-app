import cn from 'classnames'
import styles from '@/styles/pages/404.module.scss'
import Image from 'next/future/image'

const SECOND_IMAGE_DIMENSIONS = 350

export default function NotFound() {
  return (
    <section className={cn('container', styles.container)}>
      <div className={styles.container__left}>
        <Image width={532} height={221} src='/icons/404.svg' className={styles.container__404title} alt='404 title' />
        <h2 className={cn(styles.container__subTitle, 'headline-2')}>
          Niestey nie znaleźliśmy adresu, którego szukasz
        </h2>
        <p className={cn('paragraph', styles.container__paragraph)}>
          Spróbuj użyć innej nazwy miasta lub inny adres strony. Jeżeli dalej nie możesz znaleźć czego potrzebujesz,
          skontaktuj się z nami.
        </p>
        <div className={styles.container__help}>
          <Image width={25} height={25} src='/icons/email.svg' alt='email icon' />
          <span>help@weatherdrobe.co</span>
        </div>
      </div>
      <div className={styles.container__right}>
        <Image
          width={SECOND_IMAGE_DIMENSIONS}
          height={SECOND_IMAGE_DIMENSIONS}
          src='/icons/404-picture.png'
          alt='404 picture sad magnifying glass'
          className={styles.container__picture}
        />
      </div>
    </section>
  )
}
