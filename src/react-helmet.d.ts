// src/types/react-helmet.d.ts
declare module "react-helmet" {
  import * as React from "react";

  export interface HelmetProps {
    children?: React.ReactNode;
    defaultTitle?: string;
    titleTemplate?: string;
    defer?: boolean;
    encodeSpecialCharacters?: boolean;
    onChangeClientState?: (newState: any, addedTags: any[], removedTags: any[]) => void;
  }

  export class Helmet extends React.Component<HelmetProps> {}
}
