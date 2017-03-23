

function validateProducerCode(producerCode) {
  return fetch('/services/ProducerService/Validate/' + producerCode)
            .then( response => response.json() )
            .then( ({result: isValid}) => isValid )
}

const asyncValidate = (values) => {

  let isOldValid
  let isNewValid

      return validateProducerCode(values.producercodeold).then(function(isValid){
        isOldValid = isValid
        return validateProducerCode(values.producercodenew).then(function(isValid){
           isNewValid = isValid
           console.log(values.earchoption)
           if(values.searchoption !== 'producerCode') {
              return Promise.resolve()
           } else if(!isOldValid && !isNewValid) {
              throw { producercodeold: 'Invalid producer code', producercodenew: 'Invalid producer code' }
           } else if(!isOldValid) {
              throw { producercodeold: 'Invalid producer code' }
           } else if(!isNewValid) {
              throw { producercodenew: 'Invalid producer code' }
           }
    })
  })
}

export default asyncValidate
