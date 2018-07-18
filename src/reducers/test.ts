export type TestState = Readonly<{
  hello: String,
}>

const initialState: TestState = {
  hello: '',
};

export default function environment(state = initialState, action: any) {
  switch (action.type) {
    default:
      return state;
  }
}
