import test from 'ava';
import s from '.';

test('Testing Merge Sort', t => {
	t.deepEqual([1, 2, 4, 5, 7], s([4, 2, 5, 1, 7]));
});
