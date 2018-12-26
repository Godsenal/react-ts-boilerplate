const delay = async (ms: number = 3000) => {
  return await new Promise(res => setTimeout(res, ms));
}

export default delay;
