import React, { FC, useState } from 'react';

import { targets } from '../data/target.';
import { channels } from '../data/kanal_sbyta';
import { brArr } from '../data/br';
import { salesArray } from '../data/sales';
import { regions, cityNames, regionGroups } from '../data/rp';

import { Wrapper, Table } from './styles';

interface Props {
  state?: string;
}

const Filters: FC<Props> = ({ state }) => {
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
      <Wrapper>
        <label>Выберите цель акции:</label>
        {targets.map((el) => (
          <div>
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
          <div>
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
          <div>
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
        <Table>
          <thead>
            <tr>
              <th></th>
              {targets.map((target) => (
                <th key={target.id} colSpan={channels.length}>
                  {target.name}
                </th>
              ))}
            </tr>
            <tr>
              <th></th>
              {targets.map((target) =>
                channels.map((channel) => (
                  <th key={channel.id}>{channel.name}</th>
                ))
              )}
            </tr>
          </thead>
          <tbody>
            {cityNames.map((city) => (
              <tr key={city.id}>
                <td>{city.name}</td>
                {targets.map((target) =>
                  channels.map((channel) => (
                    <td key={`${city.id}_${target.id}_${channel.id}`}>
                      {
                        // salesArray
                        filteredSales.filter(
                          (sale) =>
                            sale.targetId === target.id &&
                            sale.kanalId === channel.id
                        )[0]?.sum
                      }
                    </td>
                  ))
                )}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Filters;
