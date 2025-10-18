import photo from '../assets/dmytro-pixelated.png'

export function AboutPage() {
  return (
    <div style={{ overflow: 'scroll', padding: 15, background: '#fff', textAlign: 'center', height: '100%' }}>
      <h1>HELLO! I'M Dmytro.</h1>
      <h2>Welcome to my Web!</h2>

      <div className="pasted-image-container">
        <img src={photo} alt="A pixelated self portrait of Dmytro." />
      </div>

      <p>I'm awesome human being!</p>

      <div>
        <small>Also, I build amazing apps!</small>
        <br />
        <button className="win95-button">
          View My Work {"->"}
        </button>
      </div>
    </div>
  )
}