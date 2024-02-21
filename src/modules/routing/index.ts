import { FC, LazyExoticComponent } from 'react';
import path from './path';
import page from './page';

interface Route {
  path: string;
  component: LazyExoticComponent<FC<any>>;
}

export const PrivateRoutes: Route[] = [
  {
    path: path.main,
    component: page.main,
  },
  {
    path: path.filters,
    component: page.filters,
  },
  {
    path: path.sales,
    component: page.sales,
  },
  {
    path: path.cities,
    component: page.cities,
  },
  {
    path: path.support,
    component: page.support,
  },
];
