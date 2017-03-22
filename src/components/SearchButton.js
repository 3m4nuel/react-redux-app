import React from 'react';
import Button from 'react-bootstrap/lib/Button';

const triggerSearch = () => ({
  type: "TRIGGER_SEARCH"
})

const SearchButton = ({ state }) => (
  <Button disable={!(state.effectiveDt && (state.producerCd || state.underwriter))} onClick={triggerSearch}>
    Search
  </Button>
)

export default SearchButton
