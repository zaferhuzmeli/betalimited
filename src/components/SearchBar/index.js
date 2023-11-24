import { TextField, Button } from '@material-ui/core';

function SearchBar({ onSearch }) {
  return (
    <div>
      <TextField label="Ürün Ara" variant="outlined" />
      <Button onClick={onSearch}>Ara</Button>
    </div>
  );
}

export default SearchBar;
