export interface TabbarMenuItemProps {
  className?: string;
  icon: React.ReactNode;
  label: string;
  count?: string;
}

export interface TabbarDropdownProps {
  dropdownMenu: DropdownItem[];
}

interface DropdownItem {
  label: string;
  list: DropdownSubItem[];
}

interface DropdownSubItem {
  name: string;
  path: string;
}