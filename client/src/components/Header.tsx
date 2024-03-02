import { Link } from 'react-router-dom'
import { Button } from './ui/button'
function Header() {
  return (
      <div>
          <nav className="w-full h-[60px] bg-gray-900 flex items-center justify-between px-6 text-white">
              <Link to='/'><h2 className='text-2xl select-none'>Front-Forge</h2></Link>
              <ul>
                  <Link to='/compiler'><li><Button variant="secondary" className='text-xl select-none font-thin'>Compiler</Button></li></Link>
              </ul>
          </nav>
    </div>
  )
}

export default Header