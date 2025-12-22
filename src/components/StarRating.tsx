import styled from "styled-components";

interface StarRatingProps {
  rating: number;
}

const StarRating = ({ rating }: StarRatingProps) => {
  return (
    <Star_rating>
      {Array.from({ length: 5 }, (_, index) => {
        const starValue = index + 1;

        if (rating >= starValue) {
          return <StarFull key={index}>★</StarFull>;
        }
        if (rating >= starValue - 0.5) {
          return <StarHalf key={index}>★</StarHalf>;
        }
        return <StarEmpty key={index}>★</StarEmpty>;
      })}
    </Star_rating>
  );
};

const Star_rating = styled.div`
  display: flex;
  gap: 2px;
  font-size: 20px;
`;
const StarFull = styled.span`
  color: #facc15;
`;

const StarHalf = styled.span`
  background: linear-gradient(90deg, #facc15 50%, #e5e7eb 50%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StarEmpty = styled.span`
  color: #e5e7eb;
`;

export default StarRating;
