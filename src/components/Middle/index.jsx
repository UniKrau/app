import React, { Component } from 'react'

export default class Middle extends Component {
  render() {
    return (
        <section className="p-5 bg-dark text-light text-center text-sm-start">
        <div className="container">
            <div className="row g-4">
                <div className="col-md">
                    <div className="card bg-dark text-light">
                        <div className="card-body text-center">
                            <div className="card-title">Product A</div>
                            <div className="card-text">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Minus voluptatibus
                                consequuntur vitae quo quibusdam
                            </div>
                            <a href="product a" className="btn btn-primary mt-2"
                                >Product A</a
                            >
                        </div>
                    </div>
                </div>
                <div className="col-md">
                    <div className="card bg-secondary text-light">
                        <div className="card-body text-center">
                            <div className="card-title">Product B</div>
                            <div className="card-text">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Minus voluptatibus
                                consequuntur vitae quo quibusdam
                            </div>
                            <a href="product b" className="btn btn-dark mt-2"
                                >Product B</a
                            >
                        </div>
                    </div>
                </div>
                <div className="col-md">
                    <div className="card bg-dark text-light">
                        <div className="card-body text-center">
                            <div className="card-title">Product C</div>
                            <div className="card-text">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Minus voluptatibus
                                consequuntur vitae quo quibusdam
                            </div>
                            <a href="product c" className="btn btn-primary mt-2"
                                >Product C</a
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    )
  }
}
