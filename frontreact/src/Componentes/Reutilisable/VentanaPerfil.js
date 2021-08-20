import React from "react"

export default ({visible, texto}) => (
  <div style={visible} className="ventana">
    {texto}
  </div>
)
