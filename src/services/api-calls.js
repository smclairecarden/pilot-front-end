const baseUrl = "https://dev.virtualearth.net/REST/v1/Imagery/Map/imagerySet?pushpin={pushpin_1}&pushpin={pushpin_2}&pushpin={pushpin_n}&mapLayer={mapLayer}&format={format}&mapMetadata={mapMetadata}&keyy=AhLV0AjsXLmRnBcUmR_zMIa1ap6jxunRi_AS4k4Jguxg6cxbMIx5FI9tMUK56-iM"

export function getMapLocation() {
  return fetch(`${baseUrl}`)
  .then(res => res.json())
}