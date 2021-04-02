import * as connectors from "glob:./**/*.slice.js"

export const getSlices = connectors => {
  let slices = []
  for (const [_, definition] of Object.entries(connectors)) {
    if (definition.hasOwnProperty("slice")) {
      slices.push([definition.slice.name, definition.slice])
    }
  }
  return slices
}

export default getSlices(connectors)
