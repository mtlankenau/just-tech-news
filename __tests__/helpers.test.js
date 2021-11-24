const {format_date, format_plural, format_url} = require('../utils/helpers');

test('format_date() returns a date string', () => {
  const date = new Date('2020-03-20 16:12:03');
  
  expect(format_date(date)).toBe('3/20/2020')
});

test('format_plural() returns plural version of word if there are multiple amounts', () => {

  expect(format_plural('tiger', 2)).toBe('tigers');
  expect(format_plural('lion', 1)).toBe('lion');
});

test('format_url() returns a shortened version of url', () => {
  const url1 = 'http://test.com/page/1';
  const url2 = 'https://www.anothertest.com/12abc/';
  const url3 = 'https://www.lasttest.com?q=test';

  expect(format_url(url1)).toBe('test.com');
  expect(format_url(url2)).toBe('anothertest.com');
  expect(format_url(url3)).toBe('lasttest.com');
})

