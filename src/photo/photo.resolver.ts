import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { PhotoService } from './photo.service';
import { Photo } from './entities/photo.entity';
import { CreatePhotoInput } from './dto/create-photo.input';
// import { UpdatePhotoInput } from './dto/update-photo.input';

@Resolver(() => Photo)
export class PhotoResolver {
  constructor(private readonly photoService: PhotoService) {}

  @Mutation(() => Photo)
  createPhoto(@Args('createPhotoInput') createPhotoInput: CreatePhotoInput) {
    return this.photoService.create(createPhotoInput);
  }

  @Query(() => [Photo], { name: 'photo' })
  findAllPhotos() {
    return this.photoService.findAll();
  }

  @Query(() => Photo, { name: 'photo' })
  findPhoto(@Args('id', { type: () => Int }) id: number) {
    return this.photoService.findOne(id);
  }

  // @Mutation(() => Photo)
  // updatePhoto(@Args('updatePhotoInput') updatePhotoInput: UpdatePhotoInput) {
  //   return this.photoService.update(updatePhotoInput.id, updatePhotoInput);
  // }

  //TODO: archivePhoto
  // @Mutation(() => Photo)
  // archivePhoto(@Args('id', { type: () => Int }) id: number, archivePhoto: boolean) {
  //   return this.photoService.update(id), { archived: archivePhoto };
  // }

  @Mutation(() => Photo)
  removePhoto(@Args('id', { type: () => Int }) id: number) {
    return this.photoService.remove(id);
  }
}
