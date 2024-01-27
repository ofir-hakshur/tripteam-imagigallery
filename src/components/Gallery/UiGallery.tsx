import InfiniteScroll from "react-infinite-scroll-component";
import { styled } from "styled-components";
import { Photo } from "../../types/types";

interface Props {
  data: Photo[];
  fetchMore: VoidFunction;
}

export const UiGallery = ({ data, fetchMore }: Props) => (
  <InfiniteScroll
    dataLength={data.length}
    hasMore
    loader={<Loader>loading..</Loader>}
    next={fetchMore}
  >
    <PhotosContainer>
      {data.map((photo) => (
        <Image key={photo.id} src={photo.download_url} />
      ))}
    </PhotosContainer>
  </InfiniteScroll>
);

const PhotosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const Image = styled.img`
  width: 200px;
  height: 150px;
  border-radius: 8px;
`;

const Loader = styled.h3`
  display: flex;
  justify-content: center;
  padding-top: 50px;
`;
