import Lens, { lensSchema } from '../interfaces/Lens';
import Service, { ServiceError } from '.';
import LensModel from '../models/Lens';

class LensService extends Service<Lens> {
  constructor(model = new LensModel()) {
    super(model);
  }

  public async create(obj: Lens): Promise<Lens | ServiceError | null> {
    const parsed = lensSchema.safeParse(obj);
    if (!parsed.success) {
      return { error: parsed.error };
    }
    return this.model.create(obj);
  }

  public async update(id: string, obj: Lens)
    : Promise<Lens | null | ServiceError> {
    const parsed = lensSchema.safeParse(obj);
    if (!parsed.success) {
      return { error: parsed.error };
    }
    return this.model.update(id, obj);
  }
}

export default LensService;