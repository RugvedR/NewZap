import React, { Component } from 'react'
import './Spinner.css'

export default class Spinner extends Component {
  render() {
    return (
      <div>
        <div className="spinnerContainer">
            <span class="cssload-loader"><span class="cssload-loader-inner"></span></span>

        </div>
      </div>
    )
  }
}
