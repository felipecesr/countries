import * as S from "./styles";

const ListItem = ({ term, definition }) => (
  <S.Wrapper>
    <S.Term>{term}</S.Term>
    <S.Definition>{definition}</S.Definition>
  </S.Wrapper>
);

export default ListItem;
