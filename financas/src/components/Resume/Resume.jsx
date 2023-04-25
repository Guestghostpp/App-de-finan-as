import { ResumeItem } from "../ResumeItem/ResumeItem";
import * as C from "./Styles";
import {
  FaRegArrowAltCircleDown,
  FaRegArrowAltCircleUp,
  FaDollarSign,
} from "react-icons/fa";

export const Resume = ({income, expense, total}) => {
  return (
    <C.Container>
      <ResumeItem title="Entrada" Icon={FaRegArrowAltCircleUp} value={income}/>
      <ResumeItem title="Saída" Icon={FaRegArrowAltCircleDown} value={expense}/>
      <ResumeItem title="Total" Icon={FaDollarSign} value={total}/>
    </C.Container>
  );
};
