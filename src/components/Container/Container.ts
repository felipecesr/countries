import styled from 'styled-components';
import media from 'styled-media-query';

const Container = styled.div`
  padding: 1.714rem 1rem;

  ${media.greaterThan('medium')`
    max-width: 1280px;
    margin: 0 auto;
  `}
`;

export default Container
