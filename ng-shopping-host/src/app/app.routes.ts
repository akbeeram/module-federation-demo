import { Routes } from '@angular/router';
import { Demo } from './demo/demo';
import { ReactWrapper } from './react-wrapper/react-wrapper';

export const routes: Routes = [
    {
        path: 'billing',
        loadComponent: () => import('ngBillingRemote/BillingComponent')
        .then(m => m.Billing)
    },
    {
        path: 'orders',
        loadComponent: () => import('ngOrdersRemote/OrdersComponent')
        .then(m => m.Orders)
    },
    {
        path: 'react',
        component: ReactWrapper
    },
    {
        path: '',
        component: Demo
    }
];
