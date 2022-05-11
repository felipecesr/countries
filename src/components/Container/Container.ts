import styled from "styled-components";
import media from "styled-media-query";

const Container = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;

  ${media.greaterThan("medium")`
    max-width: 1280px;
    margin: 0 auto;
  `}

  ${media.greaterThan("huge")`
    padding-left: 0;
    padding-right: 0;
  `}
`;

export default Container;
