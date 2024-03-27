import { Injectable } from '@nestjs/common';
import { Tag } from './models/tag.model';

@Injectable()
export class TagsService {
  private readonly tags: Tag[] = [
    { id: 1, label: 'NestJS' },
    { id: 2, label: 'GraphQL' },
    { id: 3, label: 'TypeScript' },
  ];

  findAll() {
    return this.tags;
  }

  findOneById(id: number) {
    return this.tags.find((tag) => tag.id === id);
  }
}
