import TamuLogo from "./tamulogo"

const Footer = ({props}) => {
    return (
      <footer className="c-footer">
        <section>
          {/* <div className="c-footer_logo"> */}
            
            {/* <TamuLogo/> */}
            <div className='footer-horizontal-columns'>
              <div className='footer-vertical-column'>
                <span>
                  <b>RELLIS Starlab Facility</b>
                  <br/>3100 TX-47
                  <br/>Bryan, TX 77807
                </span>

                <a href="mailto:mwalsh@tamu.edu">Contact Us</a>
              </div>
              <div className='footer-vertical-column'>


              <a href='https://pvfa.tamu.edu/staff/michael-walsh/' alt="Michael Walsh Profile">Director <br/> Michael Walsh</a>
              <div>Dr James Hubbard</div>
              <div>Srikanth Sripalli</div>
              <div>Zohaib Hasnain</div>
              {/* <a href='https://engineering.tamu.edu/mechanical/profiles/hubbard-james.html' alt='Dr James Hubbard Profile'>Dr James Hubbard</a> */}
              {/* <a href='https://engineering.tamu.edu/mechanical/profiles/saripalli.html' alt='Srikanth Saripalli Profile'>Dr Srikanth Saripalli</a> */}
              {/* <a href='https://engineering.tamu.edu/mechanical/profiles/hasnain-zohaib.html' alt='Zohaib Hasnain Profile'>Dr Zohaib Hasnain</a> */}
              <a href='https://rellis.tamus.edu/'>RELLIS at Texas A&M</a>
              <a href='https://tees.tamu.edu/' alt="Texas Engineering Experiment Station">
                <img src='/images/TEES-white.webp' alt='TEES logo'/>
              </a>
                
              </div>
            {/* </div> */}
          </div>

          {/* <div className="c-footer_social-items">
          <ul>
            <li>
              <a href="https://www.facebook.com/tamu"><i className="fab fa-facebook-f fa-lg" title="Facebook">
                </i><span className="sr-only">Facebook</span></a>
            </li>
            <li>
              <a href="https://twitter.com/tamu">
                <i className="fab fa-twitter fa-lg" title="Twitter"></i>
                <span className="sr-only">Twitter</span>
              </a>
            </li>
            <li>
              <a href="http://instagram.com/tamu#">
                <i className="fab fa-instagram fa-lg" title="Instagram"></i>
                <span className="sr-only">Instagram</span>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCOsw8OTNbXrtTurx5c3RDLQ">
                <i className="fab fa-youtube fa-lg" title="YouTube"></i>
                <span className="sr-only">YouTube</span>
              </a>
            </li>

            <li>
              <a href="https://www.linkedin.com/edu/school?id=19491">
                <i className="fab fa-linkedin fa-lg" title="LinkedIn"></i>
                <span className="sr-only">LinkedIn</span>
              </a>
            </li>

            <li>
              <a href="https://www.reddit.com/user/tamu">
                <i className="fab fa-reddit-alien fa-lg" title="Reddit"></i>
                <span className="sr-only">Reddit</span>
              </a>
            </li>

            <li>
              <a href="https://open.spotify.com/user/tamu">
                <i className="fab fa-spotify fa-lg" title="Spotify"></i>
                <span className="sr-only">Spotify</span>
                </a>
            </li>

            <li>
              <a href="http://www.pinterest.com/TAMU/">
                <i className="fab fa-pinterest-p fa-lg" title="Pinterest"></i>
                <span className="sr-only">Pinterest</span>
              </a>
            </li>

            <li>
              <a href="https://www.snapchat.com/add/tamuofficial">
                <i className="fab fa-snapchat-ghost fa-lg" title="Snapchat"></i>
                <span className="sr-only">Snapchat</span>
              </a>
            </li>
          </ul>
        </div> */}

        
      </section>

      <nav className="c-footer_submenu">
        <ul>
          <li>
            <a href="https://tamu.edu">&copy; 2024 Texas A&amp;M University</a>
          </li>
          <li>
            <a href="https://www.tamu.edu/statements/index.html">Site Policies</a>
          </li>
        </ul>
      </nav>
    </footer>
    )
  }
  
  
  export default Footer