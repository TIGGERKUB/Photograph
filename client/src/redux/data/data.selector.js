import { createSelector } from "reselect";
const selectGallery = state => state.gallery;
export const selectPicture = createSelector(
  [selectGallery],
  gallery => gallery.collections
);
export const selectCollectionsForPreview = createSelector(
  [selectPicture],
  collections => Object.keys(collections).map(key => collections[key])
);
