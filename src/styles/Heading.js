import styled from 'styled-components';
import theme from './theme';
import media from './media';
const { colors, fontSizes, fonts } = theme;

const Heading = styled.h3`
  position: relative;
  display: flex;
  align-items: center;
  margin: -150px 300px 40px;
  width: 100%;
  font-family: ${fonts.Calibre};
  color: ${colors.red};
  white-space: nowrap;
  font-size: 56px;
  ${media.tablet`font-size: 24px;`};

  

  
`;

export default Heading;
