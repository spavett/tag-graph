import { Directive, Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "id")')
export class Tag {
  @Field((type) => Int)
  id: number;

  @Field({ nullable: true })
  label: string;
}
