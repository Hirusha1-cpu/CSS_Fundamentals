import React from 'react'


function package1() {
  return (
    <div className="App">
       <div className='background_image'></div>
      <header class="main-header">
        <div>
          <a href="/" class="main-header__brand">
            uHost
          </a>
        </div>
        <nav class="main-nav">
          <ul class="main-nav__items">
            <li class="main-nav__item">
              <a href="packages/index.html">Packages</a>
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
        <div >
          <section className='package' id='free'>
            <a href="#">

              <h1 className='package_title'>
                Our Plus Plan
              </h1>
              <h2 className='package_subtitle'>
                The most popular choice
              </h2>
              <h6 className='package_info'>
                Hirusha Fernando is a good web developer
              </h6>
            </a>
          </section>

        </div>
        <div className='clearfix'>

        </div>
        <div >

          <section className='package' id='plus'>

            <a href="#">

              <h1 className='package_title'>
                Our Plus Plan
              </h1>
              <h2 className='package_badge'>RECOMMENDED</h2>
              <h2 className='package_subtitle'>
                The most popular choice
              </h2>
              <h6 className='package_info'>
                Hirusha Fernando is a good web developer
              </h6>
            </a>
          </section>
        </div>
        <div >

          <section className='package' id='premium'>
            <a href="#">

              <h1 className='package_title'>
                Our Plus Plan
              </h1>
              <h2 className='package_subtitle'>
                The most popular choice
              </h2>
              <h6 className='package_info'>
                Hirusha Fernando is a good web developer
              </h6>
            </a>
          </section>
        </div>




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

export default package1