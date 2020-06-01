import React from 'react';
import PropTypes from 'prop-types';

import { Container, Select } from './styles';

export default function SelectComponent({
  label,
  placeholder,
  options,
  onChange,
  defaultValue,
  visivel,
  funcionamento,
}) {
  const customStyles = {
    control: (styles) => ({
      ...styles,

      backgroundColor: '#dbefff',
      border: 0,
    }),
    option: (provided, state) => ({
      ...provided,

      color: state.isSelected ? '#dbefff' : '#0b639e',
      backgroundColor: state.isSelected ? '#0b639e' : '#dbefff',
    }),
  };

  return (
    <Container visivel={visivel} funcionamento={funcionamento}>
      <strong>{label}</strong>
      <Select
        funcionamento={funcionamento}
        styles={customStyles}
        classNamePrefix="select-react"
        isSearchable={false}
        options={options}
        onChange={onChange}
        defaultValue={defaultValue}
        placeholder={placeholder}
      />
    </Container>
  );
}

SelectComponent.propTypes = {
  options: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  onChange: PropTypes.func.isRequired,
  defaultValue: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
    .isRequired,
  label: PropTypes.string.isRequired,
  visivel: PropTypes.bool.isRequired,
  placeholder: PropTypes.string.isRequired,
};
