import { Routes } from '@angular/router';
import { IncomesComponent } from './components/incomes/incomes.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { CashFlowComponent } from './components/cash-flow/cash-flow.component';
import { SettingsComponent } from './components/settings/settings.component';
import { BudgetPerformanceComponent } from './components/budget-performance/budget-performance.component';
import { FinancialIndicatorsComponent } from './components/financial-indicators/financial-indicators.component';
import { ReportsComponent } from './components/reports/reports.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { MessagesComponent } from './components/messages/messages.component';

export const routes: Routes = [
  {
    path: '',
     component: DashboardComponent
  },
  {
    path: 'incomes',
     component: IncomesComponent
  },
  {
    path: 'expenses',
    component: ExpensesComponent
  },
  {
    path: 'financial-indicators',
    component: FinancialIndicatorsComponent
  },
  {
    path: 'reports',
    component: ReportsComponent
  },
  {
    path: 'cash-flow',
    component: CashFlowComponent
  },
  {
    path: 'budget-performace',
    component: BudgetPerformanceComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },{
    path: 'messages',
    component: MessagesComponent
  },
  {
    path: 'notifications',
    component: NotificationsComponent
  }
];
