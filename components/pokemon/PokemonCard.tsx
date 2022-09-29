import { FC } from "react";
import { Card, Grid, Row, Text } from "@nextui-org/react";
import { SmallPakemon } from "../../interfaces";
import { useRouter } from "next/router";

interface Props {
  pokemon: SmallPakemon;
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {
  const router = useRouter();

  const { id, img, name } = pokemon;

  const onClick = () => {
    //router.push(`/pokemon/${id}`);
    router.push(`/name/${name}`);
  };

  return (
    <Grid xs={6} sm={3} md={2} xl={1}>
      <Card isHoverable isPressable onClick={onClick}>
        <Card.Body css={{ p: 1 }}>
          <Card.Image src={img} width="100%" height={140} alt={name} />
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            <Text transform="capitalize">{name}</Text>
            <Text>#{id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
