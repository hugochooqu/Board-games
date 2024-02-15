import React from 'react'
import Modal from '../UI/Modal'
import rules from '../assets/images/image-rules.svg'

const Rules = (props) => {
  return (
    <Modal onHideRules={props.onHideRules}>
    <div>
        <div className='rules'>
            <h1>RULES</h1>
        </div>
        <img className='rules-img' src={rules} />
    </div>
    </Modal>
  )
}

export default Rules;