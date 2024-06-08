export type SomeReturnType = {
  options: object;
};

export const myFunction = (options: object): SomeReturnType => {
  return { options }
}
