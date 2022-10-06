const {format_date, format_plural, format_url} = require('../utils/helpers');

test('format_url() returns a simplified url string', () => {
  const url1 = format_url('http://test.com/page/1');
  const url2 = format_url('https://www.testing-two.com/abcdefg/');
  const url3 = format_url('https://www.testing-three.com?q=hello');

  expect(url1).toBe('testing.com');
  expect(url2).toBe('testing-two.com');
  expect(url3).toBe('testing-three.com');
});

test('format_plural() returns a pluralized word', () => {
  const word1 = format_plural('pear', 1);
  const word2 = format_plural('apple', 2);

  expect(word1).toBe('pear');
  expect(word2).toBe('apples');
});

test('format_date() returns a date string', () => {
  const date = new Date('2022-10-02 19:44:00');

  expect(format_date(date)).toBe('10/2/2022');
});