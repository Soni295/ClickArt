import React, { useContext } from 'react'

import { ModalContext } from './../../../Context/ModalContext'

export const DoYouHaveAccount = () => {
  const { setModal } = useContext(ModalContext)

  return(
    <p>
      Do you have account?
      <button
        className='boton-link'
        onClick={setModal.enable}
      >
        Click here
      </button>
    </p>
  )
}
