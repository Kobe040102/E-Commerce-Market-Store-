import '../Style/Home.css';
import logo from '../Images/Logo.png'
function HomePage() {
    return (
        <>
            <section id='nav_sec'>
                <nav className='navbar'>
                    <img src={logo} className='logo-img' alt="Logo" />
                    <ul>
                        <a href=""><li>Clothing</li></a>
                        <a href=""><li>Electronics</li></a>
                        <a href=""><li>Accessories</li></a>
                        <a href=""><li>HomeGoods</li></a>
                        <a href=""><li>Support</li></a>
                    </ul>
                </nav>
            </section>
            <section id='main-sec'>


            </section>

        </>

    )
}

export default HomePage;