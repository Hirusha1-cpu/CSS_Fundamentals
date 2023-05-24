import React from 'react'

const Home = () => {
  return (
    <div className="App">
      <header class="main-header">
        <div>
          <a href="/" class="main-header__brand">
            uHost
          </a>
        </div>
        <nav class="main-nav">
          <ul class="main-nav__items">
            <li class="main-nav__item">
              <a href='/packages' >Packages</a>
            </li>
            <li class="main-nav__item">
              <a href="customers/index.html">Customers</a>
            </li>
            <li class="main-nav__item main-nav__item--cta">
              <a href="start-hosting/index.html">Start Hosting</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="product-overview">
          <h1>Get the freedom you deserve.</h1>
        </section>
        <section id="plans">
          <h1 class="section-title">Choose Your Plan</h1>
          {/* <p className='p'>Make sure you get the most for your money!</p> */}
          <div className='plan_list'>
            <article className="plan1">
              <h1 className='plan_title'>Free</h1>
              <h2 className='plan_price'>$6</h2>
              <h3>Fro projects</h3>
              <ul className='plan_features'>
                <li className='plan_features'>1 workspace</li>
                <li className='plan_features'>1 workspace</li>
                <li className='plan_features'>1 workspace</li>
                <li className='plan_features'>1 workspace</li>
                <li className='plan_features'>1 workspace</li>
              </ul>
              <div>
                <button className='plan_annotation'>Choose plan</button>
              </div>
            </article>
            <article className='plan1 plan__highlighted'>
              <h1 className='plan_annotation'>Recomended</h1>
              <h1 className='plan_title'>Free</h1>
              <h2 className='plan_price'>$6</h2>
              <h3>Fro projects</h3>
              <ul className='plan_features'>
                <li className='plan_features'>1 workspace</li>
                <li className='plan_features'>1 workspace</li>
                <li className='plan_features'>1 workspace</li>
                <li className='plan_features'>1 workspace</li>
                <li className='plan_features'>1 workspace</li>
              </ul>
              <div>
                <button className='plan_annotation'>Choose plan</button>
              </div>
            </article>
            <article className='plan1'>
              <h1 className='plan_title'>Free</h1>
              <h2 className='plan_price'>$6</h2>
              <h3>Fro projects</h3>
              <ul className='plan_features'>
                <li className='plan_features'>1 workspace</li>
                <li className='plan_features'>1 workspace</li>
                <li className='plan_features'>1 workspace</li>
                <li className='plan_features'>1 workspace</li>
                <li className='plan_features'>1 workspace</li>
              </ul>
              <div>
                <button className='plan_annotation'>Choose plan</button>
              </div>
            </article>
          </div>
        </section>
        <section id='key-features'>
          <h1 className='section_title'> many Good Reasons to stick</h1>
          <ul className='key_features_list'>
            <li className='key_features' >
              <div>
                <div className='key_features_image'>

                </div>

              </div>
              <p className='key_features_description'>20000 Trusting customers</p>
            </li>
            <li className='key_features'>
              <div>
                <div className='key_features_image'>

                </div>

              </div>
              <p className='key_features_description'>20000 Trusting customers</p>
            </li>
            <li className='key_features'>
              <div>
                <div className='key_features_image'>

                </div>

              </div>
              <p className='key_features_description'>20000 Trusting customers</p>
            </li>
            <li className='key_features'>
              <div>
                <div className='key_features_image'>

                </div>

              </div>
              <p className='key_features_description'>20000 Trusting customers</p>
            </li>
          </ul>
        </section>
      </main>
      <footer className='main-footer'>
        <nav>
          <ul className='main-footer-link'>
            <li>
              <a href='#'>Support</a>
            </li>
            <li>
              <a href='#'>Tems of use</a>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  )
}

export default Home