import { FC } from "react";
import { Grid } from "@nextui-org/react";
import { FavoriteCardPokemos } from "./FavoriteCardPokemos";

interface Props {
  pokemons: number[];
}

export const FavoritePokemons: FC<Props> = ({ pokemons }) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {pokemons.map((id) => (
        <FavoriteCardPokemos pokemonId={id} key={id} />
      ))}
    </Grid.Container>
  );
};
