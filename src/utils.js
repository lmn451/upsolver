export const normalizeData = (data) => {
  const res = [];

  const x = { res };

  data.forEach((filePath) => {
    const parts = filePath
      .split(/[.|//\\.]/g)
      .map((x) => x.replaceAll("\\", ""));
    parts.reduce((acc, part) => {
      if (!acc[part]) {
        acc[part] = { res: [] };
        acc.res.push({ name: part, children: acc[part].res });
      }
      return acc[part];
    }, x);
  });
  return res;
};
