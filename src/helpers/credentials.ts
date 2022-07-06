export function getUserCredentials() {
  const USER_API_TOKEN = localStorage.getItem('tahdig');

  return USER_API_TOKEN;
}

export function setUserCredentials(credentials: string) {
  localStorage.setItem('tahdig', credentials);
}

export function clearUserCredentials() {
  localStorage.removeItem('tahdig');
}
