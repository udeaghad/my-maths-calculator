import { render, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import CreateCalculator from './Calculator';
import calculate from './logic/calculate';
import operate from './logic/operate';
import HomePage from './pages/HomePage';
import QuotePage from './pages/QuotePage';

describe('To check calculator buttons', () => {
  test('To make sure the number of buttons are complete', () => {
    const { getAllByRole } = render(<CreateCalculator />);
    const button = getAllByRole('button');
    expect(button).toHaveLength(19);
  });
  test('To check if correct value is displayed on button click', () => {
    const { getByTestId } = render(<CreateCalculator />);
    const showResult = getByTestId('display-result');
    const btnClick = getByTestId('btn-7');
    const getValue = btnClick.innerHTML;
    fireEvent.click(btnClick, { target: { innerText: getValue } });
    expect(showResult.textContent).toContain('7');
  });
});

describe('To test calculator logic functions', () => {
  test('To test calculate function', () => {
    const buttonName = '=';

    const obj = {
      total: 10,
      next: 5,
      operation: '+',
    };

    const totalValue = (calculate(obj, buttonName));

    const { total } = totalValue;

    expect(total).toBe('15');
  });

  test('To test the operate fuctions', () => {
    const obj = {
      total: 10,
      next: 5,
      operation: 'x',
    };

    const { total, next, operation } = obj;

    const totalValue = operate(total, next, operation);

    expect(totalValue).toBe('50');
  });
});

describe('To do snapshot of the React component', () => {
  test('To do snapshot of CreateCalculate component', () => {
    const tree = renderer.create(<CreateCalculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('To do snapshot of HomePage component', () => {
    const tree = renderer.create(<HomePage />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('To do snapshot of QuotePage component', () => {
    const tree = renderer.create(<QuotePage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
