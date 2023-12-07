
import moon from './images/moon.svg'
import sun from './images/sun.svg'

function Head({ darkMode, setDarkMode }) {
 
  return (
    <div className={darkMode ? 'home-page-header dark-mode' : 'home-page-header'}>
      <div className='logo-mode-container'>
        <h3 className='logo'>Where in the world?</h3>
        <p className='mode' onClick={() => setDarkMode((prevMode) => !prevMode)}>
            <span className='mode-title'>{darkMode ? 'Light Mode ' : 'Dark Mode '}</span>
            <span className='mode-icon'>
                <img src={darkMode ? sun : moon} alt={darkMode ? sun : moon} id='mode-icon'/>
            </span>
        </p>
      </div>
    </div>
  )
}

export default Head
