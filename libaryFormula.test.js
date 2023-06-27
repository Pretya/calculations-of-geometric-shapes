
import {
    squareArea, 
    rectangleArea, 
    parallelogramArea, 
    rhombusArea
    } from './libaryFormula';

test('side * side', () => {
    expect(squareArea(2)).toBe(4);
  });

  test('sideA * sideB', () => {
    expect(rectangleArea(2, 3)).toBe(6);
  });

  test('sideA * sideH', () => {
    expect(parallelogramArea(5, 5)).toBe(25);
  });

  test('sideA * sideH', () => {
    expect(rhombusArea(10, 10)).toBe(100);
  });