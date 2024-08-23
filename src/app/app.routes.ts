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
import { MessageComponent } from './components/settings/message/message.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AccountComponent } from './components/settings/account/account.component';
import { ProfileComponent } from './components/settings/profile/profile.component';
import { PreferenceComponent } from './components/settings/preference/preference.component';
import { NotificationComponent as SettingsNotificationsComponent } from './components/settings/notification/notification.component'

export const routes: Routes = [
  {
    path: '',
     component: DashboardComponent
  },
   {
    path: 'expense',
    component: ExpensesComponent
  },
  {
    path: 'incomes',
     component: IncomesComponent
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
    component: SettingsComponent,  
    children:
    [
       {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'messages',
        component: MessageComponent
      }
      ,
      {
        path: 'notifications',
        component: SettingsNotificationsComponent
      },
      {
        path: 'preferences',
        component: PreferenceComponent
      },
      {
        path: 'account',
        component: AccountComponent
      }
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    pathMatch: 'full'
  }
];
