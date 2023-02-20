const FetchProduct = async () => {
  const apiRes = await fetch(
    `https://mocki.io/v1/c92b424a-1655-4b38-af44-c0c9ebe8dd96`
  );

  if (!apiRes.ok) {
    throw new Error(`fetch not ok`);
  }

  return apiRes.json();
};

export default FetchProduct;
