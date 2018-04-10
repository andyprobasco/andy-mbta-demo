import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles/DepartureBoardStyles.js'

const URGENT_STATUS = ['Now Boarding', 'Delayed', 'Late', 'Bus Substitution']
const VERY_URGENT_STATUS = ['All Aboard', 'Cancelled']

class Departure extends React.Component {

  static propTypes = {
    departureData: PropTypes.objectOf(PropTypes.string)
  }

  render () {
    return (
      <tr>
        <td style={styles.DepartureTime}>{ new Date(this.props.departureData.scheduledTime * 1000).toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit'}) }</td>
        <td>{ this.props.departureData.destination }</td>
        <td>{ this.props.departureData.trip }</td>
        <td>{ this.props.departureData.track || 'TBD' }</td>
        <td style={ this.getStatusStyle() }>{ this.props.departureData.status }</td>
      </tr>
    )
  }

  getStatusStyle() {
    if (VERY_URGENT_STATUS.includes(this.props.departureData.status)) {
      return styles.VeryUrgentDepartureStatus;
    } else if (URGENT_STATUS.includes(this.props.departureData.status)) {
      return styles.UrgentDepartureStatus;
    }
    return styles.NormalDepartureStatus;
  }
}
export default Departure
