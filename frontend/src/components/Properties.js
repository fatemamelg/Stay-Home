import React, { Component } from 'react'
import Element1 from './Element1'
import Element2 from './Element2'
import Element3 from './Element3'
import './Backgroundproperty.css'

class Property extends Component {
  render() {
    return (
      <div>
        <section class="hero-wrap">
          <div class="container">
            <div class="row no-gutters slider-text align-items-end justify-content-start">
              <div class="col-md-9 pb-4">
                <h1 class="mb-3 bread">Properties</h1>
              </div>
            </div>
          </div>
        </section>

        <div class="row justify-content-center">
          <Element1 className="item"/>
          <Element2 className="item"/>
          <Element3 className="item"/>
        </div>

        <style>{"\
          .item{\
              margin: 15px;\
          }\
        "}</style>
      </div>

    )
  }
}
export default Property