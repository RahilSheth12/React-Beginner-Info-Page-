import styles from './Footer.module.css'
import t from './t.png'
import f from './f.png'
import i from './i.png'
import g from './g.png'

export default function Footer(){
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };
    return(
        <div className={styles.container}>
            <footer className={styles.foot}>
                <div className={styles.icons}>
                <img src={t} alt="bird" onClick={() => openInNewTab('https://twitter.com/RahilSheth_12')}/>
                <img src={i} alt="bird" onClick={() => openInNewTab('https://www.instagram.com/rahil_sheth_28/')}/>
                <img src={f} alt="bird" onClick={() => openInNewTab('https://www.facebook.com/rahil.sheth.9237')}/>
                <img src={g} alt="bird" onClick={() => openInNewTab('https://github.com/RahilSheth12')}/>
                </div>
            </footer>
        </div>
    );
}