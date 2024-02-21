import React, { FC } from 'react';
import { cityNames, regionGroups, regions } from 'src/modules/data/rp';

interface Props {
  state?: string;
}

const CityList: FC<Props> = ({ state }) => {
  // отображать все 3 списка и дать выбор - что отображать в фильтрах Города или группы
  return <div>CityList</div>;
};

export default CityList;
