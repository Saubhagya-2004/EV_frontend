export const saveUser = (user) => {
  localStorage.setItem(user.email, JSON.stringify(user));
};

export const getUserByemail = (email) => {
  if (!getUserByemail) return null
  const data = localStorage.getItem(email);
  return data ? JSON.parse(data) : null;
};
