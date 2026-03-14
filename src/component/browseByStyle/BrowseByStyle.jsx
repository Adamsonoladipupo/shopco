import styles from '../browseByStyle/browseByStyle.module.css'
import images from '../../assets/images';

const BrowseByStyle = () => {
    return (
        <>
        <div className={styles.main_container}>
            <h2>BROWSE BY DRESS STYLE</h2>
            <div className={styles.clothe_styles}>
                <div className={`${styles.style} ${styles.small_width}`} style={{backgroundImage:`url(${images.casualStyle})`}}>
                    <span>Casual</span>
                </div>
                <div className={`${styles.style} ${styles.large_width}`} style={{backgroundImage:`url(${images.formalStyle})`}}>
                    <span>Formal</span>
                </div>
                <div className={`${styles.style} ${styles.small_width}`} style={{backgroundImage:`url(${images.partyStyle})`, backgroundPosition:'center'}}>
                    <span>Party</span>
                </div>
                <div className={`${styles.style} ${styles.large_width}`} style={{backgroundImage:`url(${images.gymStyle})`, backgroundPosition:'center'}}>
                    <span>Gym</span>
                </div>
            </div>
        </div>
        </>
    );
}
export default BrowseByStyle