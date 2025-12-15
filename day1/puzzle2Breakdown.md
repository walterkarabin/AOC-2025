# Puzzle 2 Walkthrough

Size = 5

[0, 1, 2, 3, 4]

Start at 1
[0, *1*, 2, 3, 4]

Rotations are broken down into direction and amount
R## [R/L for right(+)/left(-), and ## amount as an integer] ex L5 = -5

1. R14

## Parsing the input

converting this to direction = (+)1 and amount = 14

## Examining the input

- this would result in the dial being turned 2 full rotations, (Math.floor(Amount/Size) = Math.floor(14/5) = 2)
- now we must calculate the remainder and whether or not we pass 0.
  - to do so, we must first check the direction (+/-) to determine the distance from 0
  - we must check the distance from the end of (array + 1) or the 'Size'
    - for right(+)
      - to get the distance: `(size - current_position)`
      - Ex: if we start at 1 and are moving right, we can calculate the distance from zero as `(size - current_position) = (5 - 1) = 4`
    - for left(-)
      - to get the distance: `(current_position)`
      - Ex: if we start at 1 and are moving left, we can calculate the distance from zero as `(current_position) = (1) = 1`
  - now we must check the amount we are moving
    - this amount should be calibrated to be within the range of the padlock [0 to size-1]
    - **formula:** `amount % size`
      lands on or surpasses 0 - `if (amount >= (size - current_position))`
