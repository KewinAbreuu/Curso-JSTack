import PropTypes from 'prop-types'
import { Overlay, Container, Footer } from './style'

import Button from '../Button'

export default function Modal ({ danger }) {
  return (
    <Overlay>
      <Container danger={danger}>
          <h1>Titulo do modal</h1>
          <p>Corpo</p>

          <Footer>
            <button type="button" className='cancel-button'>
              Cancelar
            </button>

            <Button type="button" danger={danger}>
              Deletar
            </Button>
          </Footer>
      </Container>
    </Overlay>
  )
}

Modal.propTypes = {
  danger: PropTypes.bool
}

Modal.defaultProps = {
  danger: false
}
