import { styled } from "styled-components";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

interface Props {
  date: Date | null;
  handleDateChange: (selectedDate: Date | null) => void;
}

export const UiDatePicker = ({ date, handleDateChange }: Props) => (
  <DatePickerWrapper>
    <DatePicker
      selected={date}
      onChange={handleDateChange}
      dateFormat={`dd/MM/yyyy`}
      customInput={
        <DateButton>{date ? format(date, "dd/MM/yyyy") : ""}</DateButton>
      }
    />
  </DatePickerWrapper>
);

const DatePickerWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const DateButton = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 16px;
  border: 2px solid #ca410a;
  background-color: #feb761;
  color: #ca410a;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: #f94904;
    border: 2px solid #f94904;
  }
`;
