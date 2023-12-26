export interface TabbarMenuItemProps {
  className?: string;
  icon: React.ReactNode;
  label: string;
  count?: string;
}

export interface TabbarDropdownProps {
  dropdownMenu: DropdownItem[];
  onBurgerClose?: () => void;
}

interface DropdownItem {
  label: DropdownParentItem;
  list: DropdownSubItem[];
}

interface DropdownSubItem {
  name: string;
  path: string;
}

interface DropdownParentItem {
  name: string;
  path: string;
}
