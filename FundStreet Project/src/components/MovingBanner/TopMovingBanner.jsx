import styles from './TopMovingBanner.module.css'

function TopMovingBanner() {
  return (
    <div className = {styles.marqueecontainer} >
    <h1 className= {styles.marqueecontent} >
        Investing Made Simple with FundStreet.
    </h1>
    </div>
  )
}

export default TopMovingBanner