import React, { Component } from 'react'
import './Spinner.css'

export default class Spinner extends Component {
  render() {
    return (
      <div>
        <div className="spinnerContainer">
            <span className="cssload-loader"><span className="cssload-loader-inner"></span></span>

        </div>
      </div>
    )
  }
}
