import React from 'react'
import PropTypes from 'prop-types'
import OriginSelector from './OriginSelector.js'
import styles from './styles/DepartureBoardStyles.js'


class TodaysDate extends React.Component {
  render() {
    return (
      <div>
        <div>{ new Date().toLocaleDateString('en-US', { weekday: 'long' }) }</div>
        <div>{ new Date().toLocaleDateString('en-US') }</div>
      </div>
    )
  }
}

class CurrentTime extends React.Component {
  render() {
    return (
      <div style={ styles.CurrentTimeComponent }>
        <div>Current Time</div>
        <div>{
          new Date().toLocaleTimeString(
              'en-US',
              { hour:'2-digit', minute:'2-digit'})
        }</div>
      </div>
    )
  }
}

class DepartureBoardHeader extends React.Component {
  static propTypes = {
    stationOptions: PropTypes.arrayOf(PropTypes.string),
    onSetOrigin: PropTypes.func,
  }

  render() {
    return (
      <h1 style={ styles.DepartureBoardHeaderComponent }>
        <TodaysDate />
        <OriginSelector style={{textAlign: 'right'}}
          originOptions={ this.props.stationOptions }
          onSetOrigin={ this.props.onSetOrigin.bind(this) }
        />
        <CurrentTime style={{'text-align': 'right'}}/>
      </h1>
    )
  }
}

export default DepartureBoardHeader
