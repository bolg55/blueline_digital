// Interface for the top-level API response
export interface ApiResponse {
  id: number;
  attributes: MainMenuAttributes;
}

// Interface for attributes within the main API response
export interface MainMenuAttributes {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  MainMenuItems: NavItem[];
}

// Interface for items within the MainMenuItems array
export interface NavItem {
  id: number;
  __component:
    | 'navigation.nav-link'
    | 'navigation.dropdown'
    | 'navigation.menu-button';
  title: string;
  url: string;
  children?: DropdownMenu; // Optional, only for dropdown components
  type?: string; // Optional, mainly for buttons
}

// Interface for dropdown children (special case for navigation.dropdown)
export interface DropdownMenu {
  data: {
    id: number;
    attributes: DropdownAttributes;
  };
}

// Interface for attributes within dropdown menus
export interface DropdownAttributes {
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  links: NavLink[]; // Array of NavLink items
}

// Interface for navigation links within dropdowns
export interface NavLink {
  id: number;
  title: string;
  url: string;
  icon?: Icon;
}

// Interface for icons within navigation links
export interface Icon {
  data: {
    id: number;
    attributes: {
      name: string;
      alternativeText: string;
      caption: string;
      width: number;
      height: number;
      formats: {
        thumbnail: IconFormat;
        large: IconFormat;
        medium: IconFormat;
        small: IconFormat;
      };
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl: null | string;
      provider: string;
      provider_metadata: null | string;
      createdAt: string;
      updatedAt: string;
    };
  };
}

interface IconFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: null | string;
  size: number;
  width: number;
  height: number;
  url: string;
  sizeInBytes: number;
}
