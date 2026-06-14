import { createContext, useContext } from 'react';
import type { Video } from './data';

/* Modal opener exposed to any page via context. */
type OpenModalFn = (source: Video, title: string, tag: string) => void;

export const ModalContext = createContext<OpenModalFn>(() => {});
export const useModal = () => useContext(ModalContext);
