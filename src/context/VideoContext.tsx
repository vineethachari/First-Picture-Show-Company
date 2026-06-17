import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import type { Film } from "../data";

type VideoState = {
  film: Film | null;
  list: Film[];
  open: (film: Film, list?: Film[]) => void;
  close: () => void;
  next: () => void;
  prev: () => void;
  goTo: (i: number) => void;
  index: number;
};

const VideoContext = createContext<VideoState | null>(null);

export function VideoProvider({ children }: { children: ReactNode }) {
  const [film, setFilm] = useState<Film | null>(null);
  const [list, setList] = useState<Film[]>([]);

  const open = useCallback((f: Film, l?: Film[]) => {
    setList(l && l.length ? l : [f]);
    setFilm(f);
  }, []);

  const close = useCallback(() => setFilm(null), []);

  const next = useCallback(() => {
    setFilm((cur) => {
      if (!cur || list.length < 2) return cur;
      const i = list.findIndex((x) => x.id === cur.id);
      return list[(i + 1) % list.length];
    });
  }, [list]);

  const prev = useCallback(() => {
    setFilm((cur) => {
      if (!cur || list.length < 2) return cur;
      const i = list.findIndex((x) => x.id === cur.id);
      return list[(i - 1 + list.length) % list.length];
    });
  }, [list]);

  const index = film ? list.findIndex((x) => x.id === film.id) : -1;

  const goTo = useCallback(
    (i: number) => {
      if (list.length) setFilm(list[i]);
    },
    [list]
  );

  return (
    <VideoContext.Provider value={{ film, list, open, close, next, prev, goTo, index }}>
      {children}
    </VideoContext.Provider>
  );
}

export function useVideo() {
  const ctx = useContext(VideoContext);
  if (!ctx) throw new Error("useVideo must be used within a VideoProvider");
  return ctx;
}
