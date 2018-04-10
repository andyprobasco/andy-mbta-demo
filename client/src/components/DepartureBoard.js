import React from 'react'
import Departures from './Departures.js'
import DepartureBoardHeader from './DepartureBoardHeader.js'
import styles from './styles/DepartureBoardStyles.js'


class DepartureBoard extends React.Component {
  state = {departures: [], stationOptions: [], origin:'All Stations' }

  render() {
    return (
      <div style={ styles.DepartureBoardComponent } >
        <DepartureBoardHeader
          stationOptions={ this.state.stationOptions }
          onSetOrigin={ this.onSetOrigin.bind(this) } />
        <Departures
          origin={ this.state.origin }
          departures={ this.state.departures } />
      </div>
    )
  }

  componentDidMount() {
    this.updateTimer = setInterval(
      () => this.tick(),
      60 * 1000
    );
    this.tick()
  }

  tick() {
    this.getApiData()
      .then(departures => {
         this.setOriginOptions(departures)
         this.setState({ departures })
      })
      .catch(error => console.error(error));
  }

  componentWillUnmount() {
    clearInterval(this.updateTimer); 
  }

  getApiData = async () => {
    const response = await fetch('api/departures')
    const body = await response.json()
    if (response.status !== 200) throw Error(body.message);
    return body
  }

  onSetOrigin(origin) {
    this.setState({ origin })
  }

  setOriginOptions(departures) {
    const options = departures.reduce(
      (a, v) => a.add(v.origin),
      new Set(['All Stations']))
    this.setState({stationOptions: Array.from(options)});
  }
}

export default DepartureBoard
