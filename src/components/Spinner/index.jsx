import styles from './index.module.scss'
import cn from 'classnames'

export default function Spinner({ svgClass }) {
  return (
    <svg
      className={cn(styles.spinner, svgClass)}
      width='40px'
      height='40px'
      viewBox='0 0 66 66'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle className={styles.path} fill='none' strokeWidth='6' strokeLinecap='round' cx='33' cy='33' r='30'></circle>
    </svg>
  )
}
