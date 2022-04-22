import * as S from "./styles";

const ListItem = ({ term, definition }) => (
  <div>
    <S.Term>{term}</S.Term>
    <S.Definition>{definition}</S.Definition>
  </div>
);

export default ListItem;
