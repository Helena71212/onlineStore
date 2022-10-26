import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DetailPokemon from "../companent";
import { loadProductDetails } from "../reducer";
import { detailSelector } from "../selector";

const DetailContainer = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const productDetails = useSelector(detailSelector);

  useEffect(() => {
    dispatch(loadProductDetails(id));
  }, [id, dispatch]);

  return (
    <DetailPokemon
      product={productDetails.data}
      error={productDetails.error}
      isLoading={productDetails.isLoading}
    />
  );
};

export default DetailContainer;
