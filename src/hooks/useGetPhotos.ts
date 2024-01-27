import { useEffect, useState } from "react";
import { Photo } from "../types/types";

const API_ENDPOINT = "https://picsum.photos/v2/list";

export const useGetPhotos = () => {
  const [data, setData] = useState<Photo[]>([]);
  const [page, setPage] = useState(1);
  const [replaceData, setReplaceData] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async ({ signal }: AbortController) => {
    try {
      setIsLoading(true);
      const url = new URL(API_ENDPOINT);
      url.search = new URLSearchParams({
        page: page.toString(),
      }).toString();
      const res = await fetch(url, { signal });
      const newData = await res.json();
      setData((prevData) =>
        replaceData ? newData : [...prevData, ...newData]
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setReplaceData(false);
      setIsLoading(false);
    }
  };

  const handleResetGallery = (randomPage: number) => {
    setPage(randomPage !== page ? randomPage : randomPage + 1);
    setReplaceData(true);
  };

  const fetchMore = () => setPage((prev) => prev + 1);

  useEffect(() => {
    const abortController = new AbortController();
    fetchData(abortController);
    return () => {
      abortController.abort();
    };
  }, [page]);

  return { data, isLoading, handleResetGallery, fetchMore };
};
