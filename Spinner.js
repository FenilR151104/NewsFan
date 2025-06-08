import React, { Component } from 'react'
import loading from './loading.gif'

{/*commented line of code is class based we can also use this bu in this i have used function based components */}

// export class Spinner extends Component {
const Spinner = () => {
  // render() {
    return (
      <div className="text-center">
        <img className= "my-3" src={loading} alt="loading" />
      </div>
    )
  // }
// }
}

export default Spinner
