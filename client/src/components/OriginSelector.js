import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles/DepartureBoardStyles.js'

class OriginSelector extends React.Component {

  static propTypes = {
    selectedOrigin: PropTypes.string,
    onSetOrigin: PropTypes.func,
    originOptions: PropTypes.arrayOf(PropTypes.string),
  }

  render() {
    return (
      <div style={ styles.OriginSelectorComponent }>
        <select style={ styles.OriginSelectorSelect }
          value={ this.props.selectedOrigin }
          onChange={ this.change.bind(this) }
        >
          {
            this.props.originOptions.map(option => (
              <option key={ option } value={ option }>{ option }</option>
            ))
          }
        </select>
      </div>
    )
  }

  change(e) {
    const originSelected = e.target.value
    this.props.onSetOrigin(originSelected)
  }
}

export default OriginSelector

