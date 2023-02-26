import styled from 'styled-components';

export const Img = styled.img`
  border-radius: 4px 4px 8px 8px;
  object-fit: cover;
  width: 225px;
  height: 250px;
  cursor: pointer;
`
export const CardSliderContainer = styled.section`
  display: flex;
  padding-bottom: 12px;
  overflow-x: scroll;
  overflow-y: hidden;
  scroll-behavior: smooth;
  gap: 16px;
`
