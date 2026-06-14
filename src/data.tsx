/* ============================================================
   SHARED DATA, TYPES & HELPERS
   ============================================================ */

export type Video =
  | { type: 'vimeo'; id: string }
  | { type: 'youtube'; id: string }
  | { type: 'mp4'; url: string };

export type Work = {
  id: string;
  index: string;
  brand: string;
  title: string;
  category: 'Brand Film' | 'Commercial' | 'Documentary';
  year: string;
  image: string;
  video: Video;
};

/* Full portfolio — brand + film + category + source */
export const WORKS: Work[] = [
  {
    id: 'avt-onam',
    index: '01',
    brand: 'AVT',
    title: 'Onam',
    category: 'Brand Film',
    year: '2024',
    image:
      'https://firstpictureshowcompany.com/en/wp-content/uploads/2024/11/1.18.1_1.18.1-scaled.jpg',
    video: { type: 'youtube', id: 'f6fw-E6antE' },
  },
  {
    id: 'manappuram-diwali',
    index: '02',
    brand: 'Manappuram Finance',
    title: 'Diwali',
    category: 'Commercial',
    year: '2024',
    image: '/firstpictureshowcompany/uploads/Yeahhhhh..... Hooooooo.png',
    video: { type: 'youtube', id: '_KBqYgNyusU' },
  },
  {
    id: 'kerala-vision',
    index: '03',
    brand: 'Kerala Vision Broadband',
    title: 'Brand Film',
    category: 'Brand Film',
    year: '2024',
    image:
      'https://firstpictureshowcompany.com/en/wp-content/uploads/2024/05/IMG_5971-scaled.jpg',
    video: { type: 'youtube', id: 'FpY9NjLKVXU' },
  },
  {
    id: 'suguna-delfrez',
    index: '04',
    brand: 'Suguna Delfrez',
    title: 'x Kerala Blasters',
    category: 'Commercial',
    year: '2024',
    image:
      'https://firstpictureshowcompany.com/en/wp-content/uploads/2024/05/IMG_9022.jpeg.jpg',
    video: { type: 'youtube', id: 'ZbrmBotVIGw' },
  },
  {
    id: 'southern-hills-bride',
    index: '05',
    brand: 'Southern Hills',
    title: 'Eatapioca — Bride',
    category: 'Brand Film',
    year: '2023',
    image:
      'https://firstpictureshowcompany.com/en/wp-content/uploads/2023/11/1_1.14.1.jpeg',
    video: { type: 'youtube', id: 'o71MjLjdLec' },
  },
  {
    id: 'southern-hills-youngster',
    index: '06',
    brand: 'Southern Hills',
    title: 'Eatapioca — Youngster',
    category: 'Brand Film',
    year: '2023',
    image: '/firstpictureshowcompany/uploads/1_1.40.1.webp',
    video: { type: 'youtube', id: 'pC7L6OW3PvU' },
  },
  {
    id: 'vesta-ice-crush',
    index: '07',
    brand: 'Vesta Ice Creams',
    title: 'Ice Crush',
    category: 'Commercial',
    year: '2023',
    image:
      'https://firstpictureshowcompany.com/en/wp-content/uploads/2023/11/IMG_2376.jpeg',
    video: { type: 'youtube', id: 'ClAvTLqfcII' },
  },
  {
    id: 'vesta-treats',
    index: '08',
    brand: 'Vesta Ice Creams',
    title: 'Treats',
    category: 'Commercial',
    year: '2024',
    image:
      'https://firstpictureshowcompany.com/en/wp-content/uploads/2024/05/IMG_9024.jpeg.jpg',
    video: { type: 'youtube', id: '_jFSPf5r8S4' },
  },
  {
    id: 'vesta-indulgence',
    index: '09',
    brand: 'Vesta Ice Creams',
    title: 'Indulgence',
    category: 'Commercial',
    year: '2024',
    image:
      'https://firstpictureshowcompany.com/en/wp-content/uploads/2024/05/IMG_2383.jpeg.jpg',
    video: { type: 'youtube', id: 'gUtb7d7xGqI' },
  },
  {
    id: 'bsc-textile',
    index: '10',
    brand: 'BSC Textile Mall',
    title: 'Festive',
    category: 'Commercial',
    year: '2024',
    image:
      'https://firstpictureshowcompany.com/en/wp-content/uploads/2024/05/IMG_9026.jpeg.jpg',
    video: { type: 'youtube', id: 'p9r6QfMT58k' },
  },
  {
    id: 'sunny-diamonds',
    index: '11',
    brand: 'Sunny Diamonds',
    title: 'Brilliance in Every Bloom',
    category: 'Brand Film',
    year: '2024',
    image: 'https://i.ytimg.com/vi/-Q4DHdtBJso/mqdefault.jpg',
    video: { type: 'youtube', id: '-Q4DHdtBJso' },
  },
  {
    id: 'dawn-aesthetics',
    index: '12',
    brand: 'Dawn Aesthetics',
    title: 'Reveal',
    category: 'Brand Film',
    year: '2024',
    image:
      'https://firstpictureshowcompany.com/en/wp-content/uploads/2024/05/IMG_9029.jpeg.jpg',
    video: { type: 'youtube', id: '8Zu0YJNnXW0' },
  },
  {
    id: 'kalyan-silks',
    index: '13',
    brand: 'Kalyan Silks',
    title: 'Fazyo',
    category: 'Brand Film',
    year: '2024',
    image: '/firstpictureshowcompany/uploads/work1.webp',
    video: { type: 'vimeo', id: '1107472292' },
  },
  {
    id: 'kanchana',
    index: '14',
    brand: 'Kanchana Foods',
    title: 'Sambar — Master Film',
    category: 'Brand Film',
    year: '2023',
    image: '/firstpictureshowcompany/uploads/work3.webp',
    video: { type: 'vimeo', id: '1107472644' },
  },
];

export const CATEGORIES = ['All', 'Brand Film', 'Commercial', 'Documentary'] as const;
export type Category = (typeof CATEGORIES)[number];

/* Brands — add `logo:` path to use original logos. */
export type Brand = { name: string; logo?: string };
export const BRANDS: Brand[] = [
  { name: 'AVT' },
  { name: 'Manappuram Finance' },
  { name: 'Kerala Vision Broadband' },
  { name: 'Kerala Blasters' },
  { name: 'Southern Hills' },
  { name: 'Vesta Ice Creams' },
  { name: 'Entri App' },
  { name: 'BSC Textile Mall' },
  { name: 'Sunny Diamonds' },
  { name: 'Dawn Aesthetics' },
  { name: 'Kalyan Silks' },
  { name: 'Suguna Delfrez' },
];

export const AGENCIES = ['Ogilvy', 'Lowe Lintas', 'M&C Saatchi', 'Dentsu', 'Wunderman Thompson'];

export const AWARDS = [
  { year: '2024', title: 'Brand Film of the Year', category: 'Brand Film', project: 'AVT — Onam' },
  { year: '2024', title: 'Best Commercial', category: 'Commercial', project: 'Vesta — Ice Crush' },
  { year: '2023', title: 'Audience Choice', category: 'Brand Film', project: 'Kanchana — Sambar' },
  { year: '2023', title: 'Craft Excellence — Direction', category: 'Brand Film', project: 'Eatapioca — Bride' },
];

export const NEWS = [
  { date: '2024', outlet: 'Press', title: 'How FPSC is reshaping regional brand films' },
  { date: '2024', outlet: 'Feature', title: 'Meet the duo behind First Picture Show Company' },
  { date: '2023', outlet: 'Interview', title: 'Storytelling that sells — a conversation with Brijith & Aiswarya' },
];

export const NAV_ITEMS = [
  { to: '/', label: 'HOME', num: '01' },
  { to: '/work', label: 'WORK', num: '02' },
  { to: '/about', label: 'ABOUT', num: '03' },
  { to: '/awards', label: 'AWARDS & NEWS', num: '04' },
  { to: '/brands', label: 'BRANDS', num: '05' },
  { to: '/contact', label: 'CONTACT', num: '06' },
];

/* ---------- video helpers ---------- */
export function buildModalEmbedSrc(source: Video): string | null {
  if (source.type === 'vimeo') {
    const params = new URLSearchParams({ autoplay: '1', color: 'ffffff', title: '0', byline: '0', portrait: '0' });
    return `https://player.vimeo.com/video/${source.id}?${params.toString()}`;
  }
  if (source.type === 'youtube') {
    const params = new URLSearchParams({ autoplay: '1', rel: '0', modestbranding: '1', iv_load_policy: '3', playsinline: '1' });
    return `https://www.youtube-nocookie.com/embed/${source.id}?${params.toString()}`;
  }
  return null;
}

export function parseVideoUrl(raw: string): Video | null {
  const url = raw.trim();
  if (!url) return null;
  const yt = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/|youtube\.com\/v\/)([a-zA-Z0-9_-]{11})/);
  if (yt) return { type: 'youtube', id: yt[1] };
  const vm = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vm) return { type: 'vimeo', id: vm[1] };
  return null;
}

export const pad = (n: number) => String(n).padStart(2, '0');

/* ---------- brand logo ---------- */
export function Logo() {
  return (
    <svg width="46" height="60" viewBox="0 0 46 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="First Picture Show Company">
      <path d="M12.6992 12.1558H9.98717V0H14.581V0.952185H12.6992V7.84625H14.3043V8.80462H12.6992V12.1558Z" fill="#FCCB3D" />
      <path d="M18.0679 0H15.3559V12.1558H18.0679V0Z" fill="#FCCB3D" />
      <path d="M22.1636 12.1558H19.4516V0H24.6358L24.0516 7.64221H23.3444L24.5866 12.1558H23.4981L22.1636 7.5V12.1558ZM22.1636 0.952185V6.68384H23.0123L23.4612 0.952185H22.1636Z" fill="#FCCB3D" />
      <path d="M30.1767 12.1558H25.3061V11.1974H27.4647V5.46579H25.3061V0H30.1767V0.952185H28.0182V4.5136H30.1767V12.1558Z" fill="#FCCB3D" />
      <path d="M31.9909 0.952185H30.6933V0H36.0128V0.952185H34.7029V12.1558H31.9909V0.952185Z" fill="#FCCB3D" />
      <path d="M6.08209 28.1018H3.37005V15.946H8.72647L7.70561 24.7506H6.08209V28.1018ZM6.08209 23.7984H6.84465L7.61952 16.9044H6.08209V23.7984Z" fill="#FCCB3D" />
      <path d="M12.2134 15.946H9.50134V28.1018H12.2134V15.946Z" fill="#FCCB3D" />
      <path d="M18.1909 28.1018H13.5971V15.946H18.1909V16.8982H16.3091V27.1496H18.1909V28.1018Z" fill="#FCCB3D" />
      <path d="M20.1404 16.8982H18.8428V15.946H24.1684V16.8982H22.8524V28.1018H20.1404V16.8982Z" fill="#FCCB3D" />
      <path d="M24.9433 28.1018V15.9646H25.9826V27.1496H27.5877V15.9646H30.2997V28.1018H24.9433Z" fill="#FCCB3D" />
      <path d="M31.665 28.1018V15.946H36.8492L36.265 23.5882H35.5578L36.8 28.1018H35.7115L34.3832 23.446V28.1018H31.665ZM34.377 16.8982V22.6298H35.2257L35.6746 16.8982H34.377Z" fill="#FCCB3D" />
      <path d="M37.7778 28.1018V15.946H42.3717V16.8982H40.4898V24.7506H42.0765V25.709H40.4898V27.1496H42.3717V28.1018H37.7778Z" fill="#FCCB3D" />
      <path d="M13.6832 44.054H8.80642V43.0956H10.9711V37.364H8.80642V31.892H13.6832V32.8504H11.5184V36.4118H13.6832V44.054Z" fill="#FCCB3D" />
      <path d="M15.8417 44.054H14.8024V31.892H15.8417V40.6966H17.4468V31.892H20.1588V44.054H17.4468V41.655H15.8417V44.054Z" fill="#FCCB3D" />
      <path d="M26.8805 44.054H21.5425V31.892H26.8805V44.054ZM24.1684 32.8504H22.5818V43.0956H24.1684V32.8504Z" fill="#FCCB3D" />
      <path d="M28.8791 44.054L27.6553 31.892H28.6885L29.6786 41.5499L30.6441 31.892H32.3537L33.3193 41.5499L34.2171 31.892H36.9291L35.7914 44.054H32.5628L31.5051 33.6665L30.4535 44.054H28.8791Z" fill="#FCCB3D" />
      <path d="M4.59385 60H0V47.8442H4.59385V48.7964H2.71203V59.0416H4.59385V60Z" fill="#FCCB3D" />
      <path d="M10.7989 60H5.46096V47.8442H10.7989V60ZM8.0869 48.7964H6.50027V59.0416H8.0869V48.7964Z" fill="#FCCB3D" />
      <path d="M13.2158 60H12.1765V47.8442H14.0275L15.0299 57.7061L16.0139 47.8442H19.5377V60H16.8257V50.0453L15.8233 60H14.2182L13.2158 50.033V60Z" fill="#FCCB3D" />
      <path d="M23.6334 60H20.9214V47.8442H26.2778L25.257 56.6488H23.6334V60ZM23.6334 55.6904H24.396L25.1709 48.7964H23.6334V55.6904Z" fill="#FCCB3D" />
      <path d="M27.7906 60H26.7021L27.8275 47.8442H31.2283L32.3537 60H29.6048L29.2912 56.6488H28.0981L27.7906 60ZM28.1904 55.6904H29.2112L28.6947 50.1876L28.1904 55.6904Z" fill="#FCCB3D" />
      <path d="M34.4262 60H33.3869V47.8442H34.5308L36.0313 55.4864V47.8442H38.7433V60H36.0313L34.4262 52.3578V60Z" fill="#FCCB3D" />
      <path d="M40.7297 57.601L39.5243 47.8442H40.5267L41.6275 56.6488H42.1318L43.1527 47.8442H46L44.5856 60H40.8711V59.0416H41.8366L42.0088 57.601H40.7297Z" fill="#FCCB3D" />
    </svg>
  );
}
