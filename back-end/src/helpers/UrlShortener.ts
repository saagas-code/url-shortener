
const generateShortId = (): any => {
  const id = Math.random().toString(36).slice(-6);
  return id
};

export default generateShortId;
