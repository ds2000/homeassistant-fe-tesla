// Factory Tesla colours for the colour picker — derived from models.json.
// `dir` maps to the image directory name under {model}/{variant}/.

import modelsData from '../models.json';

const colourMap = new Map();
for (const m of modelsData.models)
  for (const v of m.variants)
    for (const c of v.colours)
      if (!colourMap.has(c.id))
        colourMap.set(c.id, { name: c.name, dir: c.id, swatch: c.swatch });

export const FACTORY_COLOURS = Array.from(colourMap.values());
