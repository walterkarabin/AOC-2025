import { input1, test, test2, test_input1 } from './input/input1';
import { rotatePadlock, rotatePadlock2 } from './utils/padlockTraversals';

export const puzzle1 = (input: string[]) => {
  // we need to find the number of times the rotations of the padlock end with the pointer at 0.
  let counter = 0;
  let position = 50;
  // console.log(input);

  for (let rotation of input) {
    // console.log('rotation:', rotation);

    position = rotatePadlock(position, rotation);
    // console.log('Current position:', position);
    if (position === 0) {
      // console.log('Zero found:', position);
      counter++;
    }
  }

  console.log('final position:', position);
  console.log('Password:', counter);
};

console.log('Starting puzzle #1!');
// puzzle1(test);
// puzzle1(test_input1);
puzzle1(input1);

export const puzzle2 = (input: string[]) => {
  // we need to find the number of times the rotations of the padlock end with the pointer at or pass 0.
  let counter = 0;
  let position = 50;
  // console.log(input);

  for (let rotation of input) {
    // console.log('################');
    // console.log('Current position:', position);
    // console.log('rotation:', rotation);

    let { passes, newPosition } = rotatePadlock2(position, rotation);
    counter += passes;
    position = newPosition;
  }

  console.log('final position:', position);
  console.log('Password:', counter);
};

console.log('Starting puzzle #2!');
// puzzle2(test);
// puzzle2(test2);
puzzle2(input1);
