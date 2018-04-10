import React from 'react'
import PropTypes from 'prop-types'
import Departure from './Departure.js'
import styles from './styles/DepartureBoardStyles.js'


class Departures extends React.Component {
  static propTypes = {
    origin: PropTypes.string,
    departures: PropTypes.arrayOf(
      PropTypes.objectOf(
        PropTypes.string
      )),
  }

  render() {
    return (
      <table style={styles.DeparturesComponent}>
        <tbody>
          <tr style={ styles.DepartureInfoHeading }>
            <td>Time</td><td>Destination</td><td>Train#</td><td>Track#</td><td>Status</td>
          </tr>
          {
            this.filteredDepartures().map(row => (
              //·I'm·assuming·here·that·'trip'·is·a·unique·identifier.
              //·If·not,·we'll·have·to·use·a·different·key
              <Departure key={ row.trip } departureData={ row } />
            ))
          }
        </tbody>
      </table>
    )
  }

  filteredDepartures() {
    if (this.props.origin === 'All Stations') {
      return this.props.departures;
    }
    return this.props.departures.filter(row => row.origin === this.props.origin);
  }
}

export default Departures
