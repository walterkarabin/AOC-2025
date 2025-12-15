const padlockSize = 100;

export const rotatePadlock = (
  currentPosition: number,
  rotation: string
): number => {
  // logic to parse the rotation direction
  const direction: number = rotation.slice(0, 1) === 'L' ? -1 : 1;
  // logic to parse the rotation amount
  // const amount = Number(rotation.slice(1));

  // the modulous accounts for values from 0 - (padlockSize - 1)
  const amount = Number(rotation.slice(1)) % padlockSize;

  let newPosition = (currentPosition + direction * amount) % padlockSize;

  // console.log('Mod padlockSize:', newPosition % padlockSize);
  // return newPosition;
  if (newPosition < 0) {
    //  since the newPosition is already formatted in range 0 - 99
    // 0 being any number of full turns (including no turns at all!)
    return padlockSize + newPosition;
  } else {
    return newPosition;
  }
};

export const rotatePadlock2 = (
  currentPosition: number,
  rotation: string
): { passes: number; newPosition: number } => {
  // counter to keep track of number of times 0 is passed
  let passes = 0;

  // logic to parse the rotation direction
  const direction: number = rotation.slice(0, 1) === 'L' ? -1 : 1;

  // check the distance to zero from current position
  let distance = 0;
  if (direction < 0) {
    distance = currentPosition;
  } else if (direction > 0) {
    distance = padlockSize - currentPosition;
  } else {
    distance = 0;
  }

  // logic to parse the rotation amount
  // the modulous accounts for values from 0 - (padlockSize - 1)
  const absoluteAmount = Number(rotation.slice(1));
  const amount = Number(rotation.slice(1)) % padlockSize;

  // the new position of the pointer after rotations
  let newPosition = (currentPosition + direction * amount) % padlockSize;
  if (newPosition < 0) {
    newPosition = padlockSize + newPosition;
  }

  // count the number of full rotations
  const rotos = Math.floor(absoluteAmount / padlockSize);
  passes = rotos;

  if (distance == 0) {
    // if we start at zero we can only ever land on zero after full rotations
    return { passes, newPosition };
  } else {
    // handle cases where we dont start on zero
    if (
      (direction < 0 && amount >= currentPosition) ||
      (direction > 0 && amount >= padlockSize - currentPosition)
    ) {
      passes++;
    }
    return { passes, newPosition };
  }
};
