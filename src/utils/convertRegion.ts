import regions from '../interfaces/regions.interface.json'; 

export function convertRegion(regionId: number | string): string | null {
  const id = typeof regionId === 'number' ? regionId.toString() : regionId;

  if (!id || typeof id !== 'string') {
    return null;
  }

  const region = regions[id as keyof typeof regions];

  return region || null;
}