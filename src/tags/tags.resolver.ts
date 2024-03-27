import { Args, Int, Query, ResolveReference, Resolver } from '@nestjs/graphql';
import { TagsService } from './tags.service';
import { Tag } from './models/tag.model';

@Resolver((of) => Tag)
export class TagsResolver {
  constructor(private tagsService: TagsService) {}

  @Query((returns) => [Tag])
  async allTags() {
    return this.tagsService.findAll();
  }

  @Query((returns) => Tag)
  async tag(@Args({ name: 'id', type: () => Int }) id: number) {
    return this.tagsService.findOneById(id);
  }

  @ResolveReference()
  resolveReference(reference: { __typename: string; id: number }) {
    return this.tagsService.findOneById(reference.id);
  }
}
