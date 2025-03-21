import '../Style/Home.css';
import logo from '../Images/Logo.png'
function HomePage() {
    return (
        <>
            <section id='nav_sec'>
                <div className='nav-sub'>
                    <h1 className='title'><marquee scrollamount="15" direction="right">E-Commerce Website</marquee></h1>
                </div>
                <nav className='navbar'>
                    <div className='title-container'>
                        <img src={logo} className='logo-img' alt="Logo" />
                        <input type="text" className='bar' placeholder='Find..' />
                    </div>
                </nav>
            </section>
            <section id='main-sec'>


            </section>
        </>

    )
}

export default HomePage;