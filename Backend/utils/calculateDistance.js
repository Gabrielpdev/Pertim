function deg2rad (deg) {
  return deg * (Math.PI / 180)
}

module.exports = function getDistanceFromLatLonInKm (lat1, lon1, lat2, lon2, empresaID) {
  const radius = 6371

  const distancia = [0]
  distancia.splice(0, 1)
  for (var i = 0; i < empresaID.length; i++) {
    const dLat = deg2rad(lat2[i] - lat1)
    const dLon = deg2rad(lon2[i] - lon1)

    const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2[i])) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2)

    const center = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    distancia.push(radius * center)
  }
  return { distancia: distancia, empresa_id: empresaID }
}
