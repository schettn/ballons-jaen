export type PageType = {
  name: string;
  url: string;
};

export type TodoType = {
  id: string;
  text: string;
  isCompleted: boolean;
};
export type BookmarkType = {
  id: string;
  title: string;
  description: string;
  url: string;
  image: string;
};
export enum IWidgetType {
  TODO = 'todo',
  STICKY_NOTES = 'sticky-notes',
  BOOKMARK_LINK = 'bookmark-link',
}

export interface IWidget {
  id: string;
  type: IWidgetType;
  component: any;
}
export interface IWhiteSlide {
  image: string;
  date: string;
  title: string;
  text: string;
}
