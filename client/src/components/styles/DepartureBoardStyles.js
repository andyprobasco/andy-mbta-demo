const lightBlack = '#002b36'
const white = '#eee8d5'
const red = '#dc322f'
const green = '#859900'
const yellow = '#b58900'
const orange = '#cb4b16'

const DepartureBoardComponent = {
  backgroundColor: lightBlack,
  color: yellow,
  fontFamily: 'Monaco, monospace',
  fontSize: '2vw',
  whiteSpace: 'nowrap',
  display: 'grid',
  height: '100%',
  width: '100%',
  position: 'absolute',
  gridTemplateRows: '15vw 1fr'
}

const DepartureBoardHeaderComponent = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  margin: 'auto 2vw'
}

const DeparturesComponent = {
  margin: '0 2vw'
}

const DepartureInfoHeading = {
  color: white,
  fontFamily: '"Lucida Sans Unicode", "Lucide Grande", sans-serif',
  textTransform: 'uppercase',
  textAlign: 'center'
}

const DepartureTime = {
  textAlign: 'right',
  paddingRight: '2vw'
}

const OriginSelectorComponent = {
  textAlign: 'center'
}

const OriginSelectorSelect = {
  border:0,
  fontSize:'4vw',
  color: white,
  backgroundColor: lightBlack,
}

const CurrentTimeComponent = {
  textAlign: 'right'
}

const NormalDepartureStatus = {
  color: green
}

const UrgentDepartureStatus = {
  color: orange 
}

const VeryUrgentDepartureStatus = {
  color: red
}

const styles = {
  DepartureBoardComponent,
  DepartureBoardHeaderComponent,
  DeparturesComponent,
  DepartureInfoHeading,
  OriginSelectorComponent,
  OriginSelectorSelect,
  CurrentTimeComponent,
  DepartureTime,
  NormalDepartureStatus,
  UrgentDepartureStatus,
  VeryUrgentDepartureStatus,
}

export default styles
