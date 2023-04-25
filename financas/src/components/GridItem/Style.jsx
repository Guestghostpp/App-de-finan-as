import styled from "styled-components";

export const tr = styled.tr``;

export const td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  word-break: break-all;

  svg {
    width: 18px;
    height: 18px;
    cursor: pointer;
  }
`;
