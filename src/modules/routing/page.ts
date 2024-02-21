import { lazy } from 'react';

export default {
  main: lazy(async () => await import('../../components/Main/Main')),
  filters: lazy(async () => await import('../../components/Filters/Filters')),
  sales: lazy(async () => await import('../../components/Sales/SalesList')),
  cities: lazy(async () => await import('../../components/City/CityList')),
  support: lazy(async () => await import('../../components/Support/Support')),
  history: lazy(async () => await import('../../components/History/History')),
} as const;
