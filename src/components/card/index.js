import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import styles from "./index.module.css";
import useCart from "../../hook/useCart";

const PokemonsCard = ({
  name,
  image,
  price,
  id,
  quantity,
  handleDetailPokemon,
}) => {
  const { addItem } = useCart();
  return (
    <Card sx={{ maxWidth: 330 }}>
      <CardMedia component="img" height="220" image={image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography>{`${price}$`} </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => addItem({ id, name, image, price, quantity: 1 })}
        >
          Add to cart
        </Button>
        <Button onClick={() => handleDetailPokemon(id)}>Detail</Button>
      </CardActions>
    </Card>
  );
};

export default PokemonsCard;
