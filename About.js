import styles from './About.module.css'
import me from './me.jpeg'
import mail from './mail.png'
export default function About(){
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };
    return(
        <div className={styles.all}>
                <div className={styles.container}>
                    <img src={me} className={styles.pic} alt="me"/>
                </div>
                <div className={styles.back}>
                    <h1>Rahil Sheth</h1>
                    <h3>Highschool Student</h3>
                    <div className={styles.btns}>
                        {/* <a href="mailto:rahilsheth05@gmail.com?subject=test">email me</a> */}
                        <button className={styles.email} onClick={() => openInNewTab('mailto:rahilsheth05@gmail.com?subject=test')}> Email</button>
                        {/* <button className={styles.github} onClick={() => openInNewTab('https://github.com/RahilSheth12')}>GitHub</button> */}
                    </div>
                    <div className={styles.about}>
                        <h2>About</h2>
                        <p>I am a highschool student that is 
                            looking into majoring in Com Sci, 
                            and is currently trying to learn Web Dev!
                        </p> 
                        <h2>Interests</h2>
                        <p>I love to play and watch sports like basketball and football. 
                            I also play some golf, table tennis, bowling, and pretty much anything tbh. 
                            I enjoy coding and math. 
                            I also like music a lot, but mainly listen to rap, hip-hop, R&B, pop, and lofi. 
                            I also love to travel and see the world! 
                        </p>    
                    </div>      
                </div>
                
        </div>
    );
}