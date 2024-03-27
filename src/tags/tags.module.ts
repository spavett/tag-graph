import { Module } from '@nestjs/common';
import {
  ApolloFederationDriverConfig,
  ApolloFederationDriver,
} from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { TagsService } from './tags.service';
import { TagsResolver } from './tags.resolver';

@Module({
  providers: [TagsService, TagsResolver],
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      path: '/tags',
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
        path: 'src/schema.gql',
      },
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
  ],
})
export class TagsModule {}
