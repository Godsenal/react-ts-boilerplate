import {
  setFilter,
} from '../../actions/filter';
import filter from '../filter';
import Filter from '../../types/Filter';


describe('filter reducer', () => {
  const initialState = {
    filter: Filter.ALL,
  };
  it('should have initial state', () => {
    // arrange
    const expected = initialState;
    // act
    const actual = filter(undefined, {} as any);
    // assert
    expect(actual).toEqual(expected);
  });
  it('should set filter', () => {
    // arrange
    const expected = { filter: Filter.COMPLETED };
    // act
    const actual = filter(undefined, setFilter(Filter.COMPLETED));
    // assert
    expect(actual).toEqual(expected);
  });
});