/**
 * Photography.
 *
 * These are Unsplash IDs used as placeholders — replace them with your own
 * warehouse, counter and product photos before publishing. `img()` builds a
 * sized, auto-formatted URL so each slot only downloads what it needs.
 */

const BASE = 'https://images.unsplash.com/photo-'

export const img = (id, w = 1200) =>
  `${BASE}${id}?w=${w}&q=75&auto=format&fit=crop`

export const photos = {
  warehouseAisle: '1644079446600-219068676743',
  wheelsRack: '1611633235555-45e252fe48c8',
  engineBelts: '1486262715619-67b85e0b08d3',
  bearingMacro: '1643933871541-090062935680',
  engineChrome: '1527383418406-f85a3b146499',
  mechanicEngine: '1615906655593-ad0386982a0f',
  serviceFloor: '1596986952526-3be237187071',
  wrenchWall: '1599256630445-67b5772b1204',
  handsEngine: '1618783129985-dd97dbe4ad99',
  fleetAerial: '1565793298595-6a879b1d9492',
  nightHighway: '1578991132108-16c5296b63dc',
  sprocketChain: '1580327947782-55ff50b37f01',
}

/** Alt text lives with the image so every use stays accessible. */
export const alts = {
  warehouseAisle: 'Racked warehouse aisle stacked with boxed stock',
  wheelsRack: 'Wheels stored on steel racking in a dim warehouse',
  engineBelts: 'Drive belts and pulleys on an engine',
  bearingMacro: 'Close-up of a taper roller bearing',
  engineChrome: 'Chrome engine bay of a commercial vehicle',
  mechanicEngine: 'Technician working under the bonnet of a vehicle',
  serviceFloor: 'Service workshop with vehicles raised on lifts',
  wrenchWall: 'Spanners hung in order on a workshop wall',
  handsEngine: 'Hands fitting a component in an engine bay',
  fleetAerial: 'Aerial view of a truck fleet parked in rows',
  nightHighway: 'Long-exposure light trails on a highway at night',
  sprocketChain: 'Macro shot of a sprocket and drive chain',
}
