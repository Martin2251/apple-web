import { appleImg } from "../utils"


const Navbar = () => {
  return (
 <header>
    <nav>
        <img src={appleImg} alt="apple" width={14} height={18}/>
        <div>
            {['phones', 'Macbooks','Tablets']}
        </div>
    </nav>
 </header>
  )
}

export default Navbar
