import { useState } from "react";
import { useGetPhotos } from "../../hooks/useGetPhotos";
import { UiDatePicker } from "./UiDatePicker";
import { UiGallery } from "./UiGallery";

export const Gallery = () => {
  const { data, handleResetGallery, fetchMore } = useGetPhotos();
  const [date, setDate] = useState<Date | null>(new Date());

  const handleDateChange = (selectedDate: Date | null) => {
    const randomPage = Math.floor(Math.random() * 20) + 1;
    setDate(selectedDate);
    handleResetGallery(randomPage);
  };
  return (
    <>
      <UiDatePicker date={date} handleDateChange={handleDateChange} />
      <UiGallery data={data} fetchMore={fetchMore} />
    </>
  );
};
