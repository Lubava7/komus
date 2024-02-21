import React, { FC, useCallback, useState } from 'react';

import { targets } from '../../modules/data/target.';
import { channels } from '../../modules/data/kanal_sbyta';
import { brArr } from '../../modules/data/br';
import { salesArray } from '../../modules/data/sales';
import { regions, cityNames, regionGroups } from '../../modules/data/rp';

import Table from '../Table/Table';
import SalesList from '../Sales/SalesList';

import { Wrapper } from './styles';

interface Props {
  state?: string;
}

const Filters: FC<Props> = () => {
  const [selectedTargets, setSelectedTargets] = useState<number[]>([]);
  const [selectedChannels, setSelectedChannels] = useState<number[]>([]);
  const [selectedCity, setSelectedCity] = useState<number[]>([]);

  const handleTargetChange = (id: number) => {
    if (selectedTargets.includes(id)) {
      setSelectedTargets(selectedTargets.filter((targetId) => targetId !== id));
    } else {
      setSelectedTargets([...selectedTargets, id]);
    }
  };

  const handleChannelChange = (id: number) => {
    if (selectedChannels.includes(id)) {
      setSelectedChannels(
        selectedChannels.filter((channelId) => channelId !== id)
      );
    } else {
      setSelectedChannels([...selectedChannels, id]);
    }
  };

  const filteredSales = salesArray.filter(
    (sale) =>
      selectedTargets.includes(sale.targetId) &&
      selectedChannels.includes(sale.kanalId)
  );

  return (
    <div>
      <h1>ВАСИЛИСА, для того, чтобы увидеть данные в таблице</h1>
      <h1>выбери только Цель и Канал - данные сразу отобразятся</h1>
      <Wrapper>
        <label>Выберите цель акции:</label>
        {targets.map((el) => (
          <div key={el.id}>
            <input
              type='checkbox'
              id={`${el?.id}`}
              name={el?.name}
              value={el?.id}
              checked={selectedTargets.includes(el.id)}
              onChange={() => handleTargetChange(el.id)}
            />
            <label htmlFor='subscribeNews'>{el?.name}</label>
          </div>
        ))}
      </Wrapper>
      <Wrapper>
        <label>Выберите канал сбыта:</label>
        {channels.map((el) => (
          <div key={el.id}>
            <input
              type='checkbox'
              id={`${el?.id}`}
              name={el?.name}
              value={el?.id}
              checked={selectedChannels.includes(el.id)}
              onChange={() => handleChannelChange(el.id)}
            />
            <label htmlFor='subscribeNews'>{el?.name}</label>
          </div>
        ))}
      </Wrapper>
      <Wrapper>
        {/* <label>Выберите регион проведения (РП):</label> */}
        <label>Выберите группу региона:</label>
        {regionGroups.map((el) => (
          <div key={el.id}>
            <input
              type='checkbox'
              id={`${el?.id}`}
              name={el?.name}
              value={el?.id}
            />
            <label htmlFor='subscribeNews'>{el?.name}</label>
          </div>
        ))}
      </Wrapper>
      <div>
        {/* <Table
          targets={targets}
          channels={channels}
          filteredSales={filteredSales}
          cityNames={cityNames}
        /> */}
        <SalesList
          filteredSales={filteredSales}
          selectedChannels={selectedChannels}
          selectedTargets={selectedTargets}
        />
      </div>
    </div>
  );
};

export default Filters;
