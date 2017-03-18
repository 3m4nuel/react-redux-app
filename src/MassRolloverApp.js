


const searchType = (state, action) => {
  switch(action.type) {
    case 'PRODUCERCD_SEARCH':
      return 'producer';
    case 'UW_SEARCH'
      return 'underwriter';
    default:
      return '';
  }
}
