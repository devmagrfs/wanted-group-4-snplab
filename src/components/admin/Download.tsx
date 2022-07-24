import React from 'react';
import styled from 'styled-components';

export default function Download() {
  return <DownloadContainer>CSV 다운로드</DownloadContainer>;
}

const DownloadContainer = styled.div`
  width: 180px;
  height: 50px;
  background: ${({ theme }) => theme.color.grey_04};
  border-radius: 15px;
  padding: 15px;
  text-align: center;
  font-weight: 700;
  cursor: pointer;
`;