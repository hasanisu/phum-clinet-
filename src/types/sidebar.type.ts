import { ReactNode } from "react";

export type TRoute = {
  path: string;
  element: ReactNode;
};

export type TUserpath = {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: TUserpath[];
};

export type TSidebarItem = {
  key: string;
  label: ReactNode;
  children?: TSidebarItem[];
};
