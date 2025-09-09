const KEY = "user_data";

export function getSession() {
  try {
    return JSON.parse(localStorage.getItem(KEY) || "null");
  } catch {
    return null;
  }
}

export function setSession(payload) {
  localStorage.setItem(KEY, JSON.stringify(payload));
}

export function clearSession() {
  localStorage.removeItem(KEY);
}

export function isAuthed() {
  return !!getSession();
}
