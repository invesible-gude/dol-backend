import React from 'react';

const Employee = React.lazy(() => import('./views/Employee'));
const Department = React.lazy(() => import('./views/Department'));
const Process = React.lazy(() => import('./views/Process'));
const ServiceGroup = React.lazy(() => import('./views/ServiceGroup'));
const ServiceType = React.lazy(() => import('./views/ServiceType'));
const Service = React.lazy(() => import('./views/Service'));
const ServiceProcess = React.lazy(() => import('./views/ServiceProcess'));
const Task = React.lazy(() => import('./views/Task'));
const Executive = React.lazy(() => import('./views/Executive'));
const Employee_Update = React.lazy(() => import('./views/Employee_Update'));


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/employee', name: 'Employee', component: Employee },
  { path: '/department', name: 'Department', component: Department },
  { path: '/process', name: 'Process', component: Process },
  { path: '/servicegroup', name: 'ServiceGroup', component: ServiceGroup },
  { path: '/servicetype', name: 'ServiceType', component: ServiceType },
  { path: '/service', name: 'Service', component: Service },
  { path: '/serviceprocess', name: 'ServiceProcess', component: ServiceProcess },
  { path: '/task', name: 'Task', component: Task },
  { path: '/executive', name: 'Executive', component: Executive },
  { path: '/employee_update', name: 'Employee_Update', component: Employee_Update },



];

export default routes;
