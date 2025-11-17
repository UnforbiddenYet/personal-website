import photo from '../assets/dmytro-pixelated.png'
import tree from '../assets/tree.ico'
import world from '../assets/world.ico'

import styles from './AboutPage.module.css'

export function AboutPage() {
  return (
    <section className={styles.about}>
      {/* Header Section */}
      <div className={styles.header}>
        <img src={tree} width={24} alt="Tree icon" />
        {' '}
        <h1>Welcome to Dmytro's About Page!</h1>
        {' '}
        <img src={world} width={24} alt="World globe icon" />
        <br />
        <small>This page was last updated on October 19, 2025. Please check back soon!</small>
      </div>

      <hr className="separator" />

      {/* About Me Section */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          About Me
        </div>
        <div className={styles.sectionContent}>
          <div className={styles.contentRich}>
            <p>Hi, I'm Dmytro Lubenets. I'm a tinkerer by heart and Software Engineer by profession.</p>
            <p>I'm passionate about the Internet & web technologies and always on a lookout where they lead us next.</p>
            <p><strong>My Story:</strong> Born and raised in the 90s in independent Ukraine during extremely tense times for the country. The tough environment shaped me and taught adaptability, creativity and resilience. Eventually in my late 20s I moved to Toronto, Canada where I met amazing people and survived strict 2 year-long Covid-19 lock-down. Fast forward to 2025, I'm currently residing in Paris, France.</p>
            <p>Over the course of my career I've worked as a Software Engineer for a range of great startups and companies, ranging from tiny hacker groups to scaled-up businesses and influential enterprises.</p>
            <p>I've learned to make calculated risks and I'm eager to partner up with inspiring people as a <strong>Founding Engineer</strong>.</p>
          </div>
          <div className={styles.contentImage}>
            <div className={styles.imageContainer}>
              <img src={photo} alt="A pixelated self portrait of Dmytro." width={150} />
            </div>
          </div>
        </div>
      </div>

      <hr className="separator" />

      {/* How I Work */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          How I Work
        </div>
        <div className={styles.content}>
          <p>• I like to write plans and specifications before executing the task to make sure I'm set for the goal well prepared</p>
          <p>• I'm autonomous and continuously improving person and engineer</p>
          <p>• I have entrepreneurial mindset and think big</p>
          <p>• I dig deep and do very thorough research</p>
          <p>• As a creative person, I tend to look for and find uncommon ways to obvious solutions</p>
          <p>• I believe in close collaboration producing the biggest impact</p>
        </div>
      </div>

      <hr className="separator" />

      {/* My Values */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          My Values
        </div>
        <div className={styles.content}>
          <p><strong>Honesty, Kindness and Fairness</strong> (3 elements of ethics) are my main motivating drivers in life.</p>
          <p>I value knowledge and hard process of seeking of it (education) that's why I never stop learning.</p>
          <p>Empathy goes a long way in building good connections with clients, colleagues and friends.</p>
        </div>
      </div>

      <hr className="separator" />

      {/* Tech Stack */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          What I Work With
        </div>
        <div className={styles.content}>
          <p>I am well-seasoned web developer and have worked with a range of tech over the years.</p>
          <p><strong>Current stack:</strong> TypeScript, React.js, Node.js, Claude Code</p>
          <p>Depending on a task I could pick up on a new technology like WebRTC, Canvas API, WebExtensions API, or even Python or Bash.</p>
          <p>I'm learning design and deployment of cloud-native DevOps so my most recent additions are <strong>Docker, Kubernetes, Terraform</strong> hosted either on big Google Cloud Platform or self-hosted on Hetzner.</p>
        </div>
      </div>

      <hr className="separator" />

      {/* Free Time */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          What I Do in Free Time
        </div>
        <div className={styles.content}>
          <p>As a creative person, I enjoy frying my brain in creating or learning something new like writing a novel or photography or beat making.</p>
          <p>As much tempting staying in warm indoors is, I enjoy spending my time in the nature: mountains, forests and plains.</p>
          <p>I'm an avid video gamer, enjoy fast action games. I ride mountainbikes, though less aggressively than before (freeride).</p>
        </div>
      </div>

      <hr className="separator" />

      {/* Achievements */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          Achievements in Life
        </div>
        <div className={styles.content}>
          <p>• I was awarded countless certificates of merit and then a silver medal for "For high academic achievements" upon completion of high school</p>
          <p>• My first job was a DJ at 19 years old</p>
          <p>• In my student years I became a Microsoft Student Partner</p>
          <p>• I have been to 21 countries. I have lived for more than a year in 5 countries, 4 capitals and 9 cities</p>
          <p>• I co-organized the first grand Angel-Hack startup-event hackathon in Ukraine in Lviv in 2015</p>
          <p>• I'm self-taught Software Engineer</p>
          <p>• I have traveled across Georgia with a backpack and a tent in Summer 2015 for 1.5 months</p>
          <p>• I build north-shore like trails as a teenager in my small town</p>
        </div>
      </div>

      <hr className="separator" />

      {/* Contact Buttons */}
      <div className={styles.buttonGroup}>
        <button className="win95-button">
          ✉ Contact me
        </button>
        <button className="win95-button">
          ☕ Buy me a coffee
        </button>
      </div>

      <hr className="separator" />

      {/* Footer Section */}
      <div className={styles.footer}>
        <div className={styles.visitorSection}>
          <p>You are visitor number <span className={styles.visitorCounter}>000001</span> on this page</p>
        </div>

        <div className={styles.badgeList}>
          <div className={styles.badge}>
            Coded<br />on Mac OS
          </div>
          <div className={styles.badge}>
            Made with<br />Web tech
          </div>
          <div className={styles.badge}>
            Hosted on<br />Linux
          </div>
        </div>
      </div>
    </section>
  )
}