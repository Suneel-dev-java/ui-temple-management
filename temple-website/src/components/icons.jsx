const common = { width: 26, height: 26, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.6 };

export const icons = {
  flame: (
    <svg {...common}><path d="M12 2c1 3-2 4-2 7a4 4 0 108 0c0-1-.5-2-1-2 .5 2-1 3-2 2 1.5-2-1-3-1-5 0-1 0-1.5-2-2zM8 15a4 4 0 108 0c0 3-2 4-4 4s-4-1-4-4z" /></svg>
  ),
  home: (
    <svg {...common}><path d="M3 11l9-7 9 7" /><path d="M5 10v10h14V10" /><path d="M10 20v-6h4v6" /></svg>
  ),
  eye: (
    <svg {...common}><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" /></svg>
  ),
  hand: (
    <svg {...common}><path d="M8 13V6a1.5 1.5 0 013 0v6M11 12V4a1.5 1.5 0 013 0v8M14 12V6a1.5 1.5 0 013 0v7" /><path d="M8 12l-2 1c-.6 1 0 2 .5 3l3 5h7l2-5c.5-1.5.5-3-1-4l-3-2" /></svg>
  ),
  calendar: (
    <svg {...common}><rect x="3" y="5" width="18" height="16" rx="1" /><path d="M8 3v4M16 3v4M3 10h18" /></svg>
  ),
  help: (
    <svg {...common}><circle cx="12" cy="12" r="9" /><path d="M9.5 9a2.5 2.5 0 015 .5c0 1.5-2 1.8-2 3.5" /><circle cx="12" cy="17" r=".1" /></svg>
  ),
};
