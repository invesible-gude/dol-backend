import React from 'react';

const Employee = React.lazy(() => import('./views/Employee'));
const Department = React.lazy(() => import('./views/Department'));
const ServiceGroup = React.lazy(() => import('./views/ServiceGroup'));
const ServiceType = React.lazy(() => import('./views/ServiceType'));
const Service = React.lazy(() => import('./views/Service'));


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/employee', name: 'Employee', component: Employee },
  { path: '/department', name: 'Department', component: Department },
  { path: '/servicegroup', name: 'ServiceGroup', component: ServiceGroup },
  { path: '/servicetype', name: 'ServiceType', component: ServiceType },
  { path: '/service', name: 'Service', component: Service },



];

export default routes;
