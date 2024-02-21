import React, { FC } from 'react';
import { TableWrapper } from './styled';

interface Props {
  targets: any;
  channels: any;
  filteredSales: any;
  cityNames: any;
}

const Table: FC<Props> = ({ targets, channels, cityNames, filteredSales }) => {
  return (
    <TableWrapper>
      <thead>
        <tr>
          <th></th>
          {targets?.map((target: any) => (
            <th key={target.id} colSpan={channels?.length}>
              {target.name}
            </th>
          ))}
        </tr>
        <tr>
          <th></th>
          {targets?.map((target: any) =>
            channels?.map((channel: any) => (
              <th key={channel.id}>{channel.name}</th>
            ))
          )}
        </tr>
      </thead>
      <tbody>
        {cityNames?.map((city: any) => (
          <tr key={city.id}>
            <td>{city.name}</td>
            {targets?.map((target: any) =>
              channels?.map((channel: any) => (
                <td key={`${city.id}_${target.id}_${channel.id}`}>
                  {
                    filteredSales?.filter(
                      (sale: any) =>
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
    </TableWrapper>
  );
};

export default Table;
