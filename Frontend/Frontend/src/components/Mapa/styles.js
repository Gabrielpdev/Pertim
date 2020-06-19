import styled from 'styled-components';
import { Map } from 'google-maps-react';

export const Container = styled.div``;

export const Maps = styled(Map)`
  border: 2px solid #37759e;
  border-radius: 4px;

  margin: 10px auto 100px auto;
  max-width: 640px;
  max-height: 270px;

  min-width: 640px;
  min-height: 270px;
`;
