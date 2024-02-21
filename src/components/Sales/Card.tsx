import React, { FC } from 'react';
import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { SaleInterface } from 'src/modules/data/sales';

import { Card } from './styled';

interface Props {
  selectedChannels?: any;
  selectedTargets?: any;
}

type UniProps = Props & SaleInterface;

const SaleCard: FC<UniProps> = (props: UniProps) => {
  console.log('selectedChannels:', props.selectedChannels);
  console.log('selectedTargets:', props.selectedTargets);
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant='outlined'>
        <CardContent>
          <Typography gutterBottom sx={{ fontSize: 14 }} color='text.secondary'>
            скоро конец акции!
          </Typography>
          <Typography variant='h5' component='div'>
            • {props.title} •
          </Typography>
          <Typography sx={{ mb: 1.5 }} color='text.secondary'>
            Приобретите продукции на 1000 рублей в физических магазинах Комус и
            получите в подарок сумку-шоппер.
          </Typography>
          <Typography variant='body1'>
            Сроки проведения акции:
            <br />
            23.05.2024 - 11.11.2024
          </Typography>
          <Typography variant='body2'>
            Подарок:
            <br />
            {props.gift}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small'>Узнать больше об акции</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default SaleCard;
