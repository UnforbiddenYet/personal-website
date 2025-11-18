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
            <p>Hi, I'm Dmytro. I grew up in a small Ukrainian town in the 90s—those chaotic years right after independence when everything was uncertain and you had to be resourceful just to get by. That's where I learned to tinker, to figure things out on my own.</p>
            <p>As a teenager, I built mountain bike trails in the woods behind my town. North-shore style—wooden ramps, bridges, and berms. Creating something from nothing.</p>
            <p>In my late twenties I moved to Toronto, which felt like stepping into a different world. Made incredible friends there, rode out the long Covid lockdowns, and kept learning. Then in 2025, life brought me to Paris, where I'm living now.</p>
            <p>These days I build things for the web. I love the internet—the weird, creative, experimental corners of it. I'm always curious about where technology is taking us next, especially when it opens up new ways for people to create and connect.</p>
          </div>
          <div className={styles.contentImage}>
            <div className={styles.imageContainer}>
              <img src={photo} alt="A pixelated self portrait of Dmytro." width={150} />
            </div>
          </div>
        </div>
      </div>

      <hr className="separator" />

      {/* How I Approach Things */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          How I Approach Things
        </div>
        <div className={styles.content}>
          <p>I like understanding how things work before jumping in. Give me a problem and I'll disappear down a research rabbit hole, coming back with context and unusual angles.</p>
          <p>The best work happens when people actually collaborate—not just divide tasks, but genuinely work through problems together. Different perspectives make everything better.</p>
          <p>I'm self-taught in most things I do, which means I'm comfortable with not knowing and figuring it out as I go.</p>
        </div>
      </div>

      <hr className="separator" />

      {/* What Matters to Me */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          What Matters to Me
        </div>
        <div className={styles.content}>
          <p>Be honest. Be kind. Be fair. Those three things guide most of my decisions.</p>
          <p>I can't help being curious about how things work and why people do what they do. Learning is just part of how I move through the world.</p>
          <p>Understanding where someone else is coming from makes everything easier, whether you're working together, solving a problem, or just having a conversation.</p>
        </div>
      </div>

      <hr className="separator" />

      {/* What I'm Into Right Now */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          What I'm Into Right Now
        </div>
        <div className={styles.content}>
          <p>Most of my work these days involves TypeScript and React, which I've grown to really appreciate after years of working with different web technologies. Lately I've been experimenting a lot with Claude Code—it's fascinating how AI is changing the way we build things.</p>
          <p>I pick up whatever technology the project needs. WebRTC for real-time stuff, Canvas API when I want to make things visual and interactive, browser extensions when I have an idea for something useful. Sometimes that means diving into Python or writing shell scripts.</p>
          <p>Currently learning my way around Docker, Kubernetes, and Terraform. Cloud infrastructure is one of those things that seems intimidating until you start playing with it, and then it becomes this whole new puzzle to solve.</p>
        </div>
      </div>

      <hr className="separator" />

      {/* When I'm Not Coding */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          When I'm Not Coding
        </div>
        <div className={styles.content}>
          <p>I jump between creative projects—writing, photography, making beats. I like making things.</p>
          <p>I get outside as much as possible. Mountains, forests, wide open spaces. Being in nature helps reset my brain after staring at screens all day.</p>
          <p>I still ride mountain bikes, though I'm more careful now than I was as a teenager doing freeride. And I play a lot of video games, usually fast-paced action ones.</p>
        </div>
      </div>

      <hr className="separator" />

      {/* Some Random Things */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          Some Random Things About Me
        </div>
        <div className={styles.content}>
          <p>My first real job was DJing at 19. Terrible pay, amazing experience. Learned more about reading a room than any book could teach.</p>
          <p>I've lived in 21 countries. The constant moving taught me adaptability—how to start over, make connections quickly, and find my way in unfamiliar places.</p>
          <p>In 2015, I backpacked across Georgia for a month and a half with just a tent. Slept in forests, on beaches, met strangers who became friends.</p>
          <p>That same year, I helped organize the first AngelHack hackathon in Lviv, Ukraine. Watching people build wild ideas in 24 hours never gets old.</p>
          <p>Everything I know about programming, I taught myself. Same with photography, music production, and most things I'm interested in. The internet is an incredible teacher if you're willing to put in the time.</p>
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