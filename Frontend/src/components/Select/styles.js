import styled from 'styled-components';
import ReactSelect from 'react-select';

export const Container = styled.div`
  display: ${(props) => (props.visivel ? 'flex' : 'none')} !important;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: ${(props) => (props.funcionamento ? '100%' : '200px')} !important;
  margin: 10px 0 20px auto;

  strong {
    color: #0b639e;
  }
`;

export const Select = styled(ReactSelect)`
  div {
    width: ${(props) => (props.funcionamento ? '300px' : '200px')} !important;
    text-align: center;
  }
  div.select-react__single-value.css-1uccc91-singleValue {
    color: #0b639e;
  }

  div.select-react__indicators.css-1hb7zxy-IndicatorsContainer {
    height: 20px;
    background: #0b639e;
    padding: 0;
    border-radius: 0 0 4px 4px;
    svg {
      position: absolute;
      right: 45%;
      top: 25px;
      color: #fff;
    }
  }
  div.select-react__indicator.select-react__dropdown-indicator.css-tlfecz-indicatorContainer {
    background: #0b639e;
    padding: 0;
  }
  div.select-react__indicator.select-react__dropdown-indicator.css-1gtu0rj-indicatorContainer {
    background: #0b639e;
    padding: 0;
  }
`;
