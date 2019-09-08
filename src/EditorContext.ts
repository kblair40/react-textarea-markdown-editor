import * as React from 'react';

interface IEditorContext {
  mark?: (prefix: string, suffix: string, defaultText: string, multipleLine: boolean) => void;
  markLine?: (marker: string) => void;
  registerLineMarker?: (marker: string) => void;
  focus?: () => void;
}

export default React.createContext<IEditorContext>({});
