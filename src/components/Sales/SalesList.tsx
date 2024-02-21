import React, { FC, useState } from 'react';
import SaleCard from './Card';

interface Props {
  filteredSales?: any;
  selectedTargets?: any;
  selectedChannels?: any;
}

const SalesList: FC<Props> = ({
  filteredSales,
  selectedTargets,
  selectedChannels,
}) => {
  // const [isArr, setIsArr] = useState(true);
  //  [...new Array(5)];
  return (
    <div>
      SALE LIST
      <div>
        {filteredSales.length ? (
          filteredSales?.map((el: any) => (
            <SaleCard
              key={el.id}
              {...el}
              selectedChannels={selectedChannels}
              selectedTargets={selectedTargets}
            />
          ))
        ) : (
          <>По результатам вашего поиска ничего не найдено</>
        )}
      </div>
    </div>
  );
};

export default SalesList;
