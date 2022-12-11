import {React, useState} from 'react'
import { dispStudent } from '../asts-api/src/student'

export default function Navbar  ()  {
  const [Stoken, setStoken] = useState(0)
    const connectWallet = async () => {
        if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
            try {
                // Metamask avalable
                const accounts = await window.ethereum.request({ method: "eth_requestAccounts" })
                // setAddress()
                dispStudent(accounts[0]).then(res=>{
                  setStoken(res.tokens.sports)
                })
                console.log(Stoken)
                localStorage.setItem("Stoken",Stoken)
                
            } catch (err) {
                console.log(err.message)
            }
        }
        else {
            console.log("Metamask not installed.")
        }
    }


  return (
    <>
       <header className="site-navbar" role="banner">
          <div className="site-navbar-top">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-6 col-md-4 order-2 order-md-1 site-search-icon text-left">
                  <form action="" className="site-block-top-search">
                    <span className="icon icon-search2" />
                    <input
                      type="text"
                      className="form-control border-0"
                      placeholder="Search"
                    />
                  </form>
                </div>
                <div className="col-12 mb-3 mb-md-0 col-md-4 order-1 order-md-2 text-center">
                  <div className="site-logo">
                    <a href="/" className="js-logo-clone font-weight-bold">
                      SHOPY
                    </a>
                  </div>
                </div>
                <div className="col-6 col-md-4 order-3 order-md-3 text-right">
                  <div className="site-top-icons">
                    <ul>
                      <li>
                        <a href="#">
                          
                          <button onClick={connectWallet}><span className="icon icon-person" /></button>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="icon icon-heart-o" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="site-cart">
                          <span className="icon icon-shopping_cart" />
                          <span className="count">2</span>
                        </a>
                      </li>
                      <li className="d-inline-block d-md-none ml-md-0">
                        <a href="#" className="site-menu-toggle js-menu-toggle">
                          <span className="icon-menu" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <nav
            className="site-navigation text-right text-md-center"
            role="navigation"
          >
            <div className="container">
              <ul className="site-menu js-clone-nav d-none d-md-block">
                <li className="has-children active">
                  <a href="/">Home</a>
                  
                </li>

                <li>
                  <a href="shop">Shop</a>
                </li>
                <li>
                  <a href="#">Catalogue</a>
                </li>
                <li>
                  <a href="#">New Arrivals</a>
                </li>

              </ul>
            </div>
          </nav>
        </header>
    </>
  )
}
