import { makeAutoObservable } from 'mobx';

class Store {
  // menu data - originaly comes from backend
  menu = [
    {
      id: 1,
      title: 'Overview',
      link: 'dashboard/overview',
      alias: 'overview',
      active: true,
    },
    {
      id: 2,
      title: 'Tickets',
      link: 'dashboard/tickets',
      alias: 'tickets',
      active: false,
    },
    {
      id: 3,
      title: 'Ideas',
      link: 'dashboard/tickets',
      alias: 'ideas',
      active: false,
    },
    {
      id: 4,
      title: 'Contacts',
      link: 'dashboard/tickets',
      alias: 'contacts',
      active: false,
    },
    {
      id: 5,
      title: 'Agents',
      link: 'dashboard/tickets',
      alias: 'agents',
      active: false,
    },
    {
      id: 6,
      title: 'Articles',
      link: 'dashboard/tickets',
      alias: 'articles',
      active: false,
    },
  ];
  menuSettings = [
    {
      id: 1,
      title: 'Settings',
      link: 'dashboard/overview',
      alias: 'settings',
      active: false,
    },
    {
      id: 2,
      title: 'Subscription',
      link: 'dashboard/overview',
      alias: 'subscription',
      active: false,
    },
  ];
  name = 'Jones Ferdinand';
  constructor() {
    makeAutoObservable(this);
  }
}

const store = new Store();
export { store };
