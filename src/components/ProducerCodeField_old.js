import React from 'react';

// Action
const setProducerCd = (id, date) => ({
  type: "SET_PRODCD_SEARCH",
  id: {id},
  producerCd: {date}
})

const ProducerCodeField = ({ id, value }) => (
  <input
    id={id}
    type="text"
    name='producerCode'
    onChange={setProducerCd(id)}
    value={value} />
    // Add error message field

)

export default ProducerCodeField
