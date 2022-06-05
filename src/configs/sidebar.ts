import { MdOutlineScheduleSend, MdScheduleSend } from 'react-icons/md';
import { RiDashboardFill, RiDashboardLine } from 'react-icons/ri';
import { TbReport } from 'react-icons/tb';

import { IconType } from 'react-icons';

export interface LinkItemProps {
  name: string;
  icon: IconType;
  activeIcon: IconType;
  route: string;
}

export const sidebarConfig: Array<LinkItemProps> = [
  {
    name: 'Dashboard',
    icon: RiDashboardLine,
    activeIcon: RiDashboardFill,
    route: '/dashboard',
  },
  {
    name: 'Schedule',
    icon: MdOutlineScheduleSend,
    activeIcon: MdScheduleSend,
    route: '/schedule',
  },
  { name: 'Report', icon: TbReport, activeIcon: TbReport, route: '/report' },
];
