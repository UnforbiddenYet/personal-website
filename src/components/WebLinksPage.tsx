import internetIcon from '../assets/the-internet.ico'
import tipIcon from '../assets/tip.ico'
import styles from './WebLinksPage.module.css'

export function WebLinksPage() {
  const links = [
    {
      category: 'Tools & Resources',
      items: [
        { name: 'Claude Code', url: 'https://claude.com/claude-code', description: 'AI-powered coding assistant' },
        { name: 'React Documentation', url: 'https://react.dev', description: 'Official React docs' },
        { name: 'TypeScript Handbook', url: 'https://www.typescriptlang.org/docs/', description: 'Learn TypeScript' },
        { name: 'MDN Web Docs', url: 'https://developer.mozilla.org/', description: 'Web development reference' },
      ]
    },
    {
      category: 'DevOps & Cloud',
      items: [
        { name: 'Docker', url: 'https://www.docker.com/', description: 'Containerization platform' },
        { name: 'Kubernetes', url: 'https://kubernetes.io/', description: 'Container orchestration' },
        { name: 'Google Cloud', url: 'https://cloud.google.com/', description: 'Cloud computing services' },
        { name: 'Hetzner', url: 'https://www.hetzner.com/', description: 'Affordable cloud hosting' },
      ]
    },
    {
      category: 'Inspiration',
      items: [
        { name: 'Windows 95 UI Kit', url: 'https://github.com/topics/windows-95', description: 'Nostalgic UI inspiration' },
        { name: 'Brutalist Websites', url: 'https://brutalistwebsites.com/', description: 'Raw web design' },
        { name: 'Awwwards', url: 'https://www.awwwards.com/', description: 'Web design inspiration' },
      ]
    }
  ];

  return (
    <div className={styles.weblinks}>
      <div className={styles.header}>
        <img src={internetIcon} width={32} alt="Internet icon" />
        <h2>My Favorite Web Links</h2>
        <p><small>A curated collection of useful resources and inspiring websites</small></p>
      </div>

      {links.map((section, idx) => (
        <div key={idx}>
          <hr className="separator" />
          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              {section.category}
            </div>
            <div className={styles.linksList}>
              {section.items.map((link, linkIdx) => (
                <div key={linkIdx} className={styles.linkItem}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    <strong>➤ {link.name}</strong>
                  </a>
                  <p>{link.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}

      <hr className="separator" />

      <div className={styles.footer}>
        <p><small><img src={tipIcon} width={12} alt="" style={{ verticalAlign: 'middle', marginRight: '4px' }} /> Links open in a new window</small></p>
      </div>
    </div>
  )
}
