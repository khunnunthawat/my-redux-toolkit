import * as Icon from '@mui/icons-material'

export interface MenuItemProps {
  icon: JSX.Element
  text: string
}

export const MenuItems: MenuItemProps[] = [
  {
    icon: <Icon.HomeOutlined />,
    text: 'Homepage',
  },
  {
    icon: <Icon.List />,
    text: 'Lists',
  },
  {
    icon: <Icon.ShoppingBasketOutlined />,
    text: 'Products',
  },
  {
    icon: <Icon.GroupOutlined />,
    text: 'Groups',
  },
  {
    icon: <Icon.FileCopyOutlined />,
    text: 'Pages',
  },
  {
    icon: <Icon.PhotoSizeSelectActualOutlined />,
    text: 'Photos',
  },
  {
    icon: <Icon.MovieCreationOutlined />,
    text: 'Videos',
  },
  {
    icon: <Icon.ScheduleOutlined />,
    text: 'Schedule',
  },
  {
    icon: <Icon.HearingOutlined />,
    text: 'Wishlist',
  },
  {
    icon: <Icon.Settings />,
    text: 'Settings',
  },
  {
    icon: <Icon.ExitToAppOutlined />,
    text: 'Logout',
  },
]
