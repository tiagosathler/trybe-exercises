import fs from 'fs/promises';
import { randomUUID } from 'crypto';
import path from 'path';

interface IPlant {
  id: string,
  breed: string,
  needsSun: Boolean,
  origin: string,
  size: number,
  specialCare?: { waterFrequency: number }
}

interface IOpsInfo { createdPlants: number }

enum FileType {
  plants,
  opsInfo
}

enum Countries {
  Argentina = 7,
  Brazil = 8,
  Europe = 9
}

// callbacks
const plantsNeedsSunCb = (id: string) => (plant: IPlant): boolean => {
  const needsSunById = (plant.needsSun === true) && plant.id === id;
  const specialCare = plant.specialCare === undefined || plant.specialCare.waterFrequency > 2;

  return needsSunById && specialCare;
};

// Plants Class
export default class Plants {
  private static readonly PLANTS_PATH = path.join(__dirname, 'data', 'plants.json');
  
  private static readonly OPS_INFO_PATH = path.join(__dirname, 'data', 'opsInfo.json');

  private static async updateOpsInfo(incrementAmount: number = 1) {
    const opsInfoRaw = await fs.readFile(Plants.OPS_INFO_PATH, { encoding: 'utf8' });
    const opsInfo: IOpsInfo = JSON.parse(opsInfoRaw);
    opsInfo.createdPlants += incrementAmount;
    Plants.saveFile(FileType.opsInfo, opsInfo);
  }

  private static async saveFile(type: FileType, data: IPlant[] | IOpsInfo) {
    let filePath: string;
    if (type === FileType.plants) filePath = Plants.PLANTS_PATH;
    else if (type === FileType.opsInfo) filePath = Plants.OPS_INFO_PATH;
    else return null;

    await fs.writeFile(filePath, JSON.stringify(data));
  }

  private static initPlant(plant: IPlant) {
    const { id, breed, needsSun, origin, specialCare, size } = plant;

    const waterFrequency = needsSun
      ? size * 0.77 + Number(Countries[origin as any])
      : (size / 2) * 1.33 + Number(Countries[origin as any]);

    const newPlant: IPlant = {
      id,
      breed,
      needsSun,
      origin,
      specialCare: {
        ...specialCare,
        waterFrequency,
      },
      size,
    };
    return newPlant;
  }

  public async getPlants(): Promise<IPlant[]> {
    const plantsRaw = await fs.readFile(Plants.PLANTS_PATH, { encoding: 'utf8' });
    const plants: IPlant[] = JSON.parse(plantsRaw);
    return plants;
  }

  public async getPlantById(id: string): Promise<IPlant | null> {
    const plants = await this.getPlants();

    const plantById = plants.find((plant) => plant.id === id);
    if (!plantById) return null;
    return plantById;
  }

  public async removePlantById(id: string): Promise<IPlant | null> {
    const plants = await this.getPlants();

    const removedPlant = plants.find((plant) => plant.id === id);
    if (!removedPlant) return null;

    const newPlants = plants.filter((plant) => plant.id !== id);
    Plants.saveFile(FileType.plants, newPlants);

    await Plants.updateOpsInfo(-1);

    return removedPlant;
  }

  public async getPlantsThatNeedsSunWithId(id: string): Promise<IPlant[]> {
    const plants = await this.getPlants();

    const filteredPlants = plants.filter(plantsNeedsSunCb(id));
    return filteredPlants;
  }

  public async editPlant(plantId: string, newPlant: IPlant): Promise<IPlant | null> {
    const plant = await this.getPlantById(plantId);
    if (!plant) return null;

    const plants = await this.getPlants();

    const updatedPlants = plants.map((plant) => (
      (plant.id === plantId) ? { ...newPlant, id: plant.id } : plant));

    Plants.saveFile(FileType.plants, updatedPlants);
    return newPlant;
  }

  public async savePlant(plant: IPlant): Promise<IPlant> {
    const plants = await this.getPlants();

    const newPlant = Plants.initPlant({ ...plant, id: randomUUID() });
    plants.push(newPlant);
    Plants.saveFile(FileType.plants, plants);

    await Plants.updateOpsInfo(1);

    return newPlant;
  }
}

// import fs from 'fs/promises';

// const PLANTS = 'plants.json';

// enum Countries {
//   Argentina = 7,
//   Brazil = 8,
// }
// interface IPlant {
//   id: string,
//   breed: string,
//   needsSun: Boolean,
//   origin: string,
//   size: number,
//   specialCare?: { waterFrequency: number }
// }

// interface IOpsInfo { createdPlants: number }

// export default class Plants {
//   public static initPlant(plant: IPlant): IPlant {
//     const { id, breed, needsSun, origin, specialCare, size } = plant;

//     const waterFrequency = needsSun
//       ? size * 0.77 + Number(Countries[origin as any])
//       : (size / 2) * 1.33 + Number(Countries[origin as any]);

//     const newPlant: IPlant = {
//       id,
//       breed,
//       needsSun,
//       origin,
//       specialCare: {
//         ...specialCare,
//         waterFrequency,
//       },
//       size,
//     };
//     return newPlant;
//   }

//   async getPlants() {
//     const plantsRaw = await fs.readFile(PLANTS, { encoding: 'utf8' });
//     const plants: IPlant[] = JSON.parse(plantsRaw);
//     return plants;
//   }

//   async getPlantById(id: string) {
//     const plantsRaw = await fs.readFile(PLANTS, { encoding: 'utf8' });
//     const plants: IPlant[] = JSON.parse(plantsRaw);

//     const plantById = plants.find((plant) => plant.id === id);
//     if (!plantById) return null;
//     return plantById;
//   }

//   async removePlantById(id: string) {
//     const plantsRaw = await fs.readFile(PLANTS, { encoding: 'utf8' });
//     const plants: IPlant[] = JSON.parse(plantsRaw);

//     const removedPlant = plants.find((plant) => plant.id === id);
//     if (!removedPlant) return null;

//     const newPlants = plants.filter((plant) => plant.id !== id);
//     await fs.writeFile(PLANTS, JSON.stringify(newPlants));

//     return removedPlant;
//   }

//   async getPlantsThatNeedsSunWithId(id: string) {
//     const plantsRaw = await fs.readFile(PLANTS, { encoding: 'utf8' });
//     const plants: IPlant[] = JSON.parse(plantsRaw);

//     const filteredPlants = plants.filter((plant) => (
//       (
//         plant.needsSun
//         && plant.id === id
//         && (!plant.specialCare || plant.specialCare.waterFrequency > 2)
//       )
//     ));
//     return filteredPlants;
//   }

//   async editPlant(plantId: string, newPlant: IPlant) {
//     const plantsRaw = await fs.readFile(PLANTS, { encoding: 'utf8' });
//     const plants: IPlant[] = JSON.parse(plantsRaw);

//     const updatedPlants = plants.map((plant) => {
//       if (plant.id === plantId) return newPlant;
//       return plant;
//     });

//     await fs.writeFile(PLANTS, JSON.stringify(updatedPlants));
//     return newPlant;
//   }

//   async savePlant(plant: IPlant) {
//     const plantsRaw = await fs.readFile(PLANTS, { encoding: 'utf8' });
//     const plants: IPlant[] = JSON.parse(plantsRaw);

//     const newPlant = Plants.initPlant({ ...plant });
//     plants.push(newPlant);

//     const opsInfoRaw = await fs.readFile('opsInfo.json', { encoding: 'utf8' });
//     let { createdPlants }: IOpsInfo = JSON.parse(opsInfoRaw);
//     createdPlants += 1;
//     await fs.writeFile('opsInfo.json', JSON.stringify({ createdPlants }));

//     await fs.writeFile(PLANTS, JSON.stringify(plants));
//     return newPlant;
//   }
// }