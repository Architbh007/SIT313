export const parseTags = (raw) =>
  raw.split(',').map(t => t.trim()).filter(Boolean);

export const formatDate = (ms) =>
  new Date(ms).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });

export const msFromDateInput = (yyyyMmDd) =>
  yyyyMmDd ? new Date(yyyyMmDd).getTime() : '';
