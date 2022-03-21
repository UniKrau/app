import React, { Component } from 'react'
// import "./index.jsx"
export default class Header extends Component {
  render() {
    return (
      <section className="p-5 bg-dark text-light text-center text-sm-start"> 
                <div className='contaner'>
                        <section>
                        <div className="d-flex">
                            <div>
                            <h1 className="text-warn">EzSwap PROTOCOL
                                Swap, earn, and trade on the leading decentralized crypto trading protocol.</h1>
                            <p className="my-4">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, maxime? Odio quia unde id, aut dignissimos totam officia? Nihil sed molestias velit soluta omnis dolore esse minus quidem itaque? Quidem?
                            </p>
                            <button className="btn btn-primary btn-sm">Use Wallet</button>
                            <button >Join Community</button>
                            </div>
                            <video className="w-50 h-40" src="https://yieldly.finance/wp-content/uploads/2021/08/yieldly-homepage-animation-compressed1c.mp4" autoPlay muted loop/>
                        </div>
                        </section>
                  </div>
      </section>
  
    )
  }
}
