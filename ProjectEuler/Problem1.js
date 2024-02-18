function solution(int) {

  const sumMultiples = (multiplesQuantity, int) => {
    return (multiplesQuantity * (int + int * multiplesQuantity)) / 2
  }

  const sumOnlyMultiplesOfFiveAndNotThree = (multiplesOfFive) => {
    let sumMultiplesOfFive = sumMultiples(multiplesOfFive, 5);

    let sumMultiplesOfFifteen;
    if (multipleOfFive > 2)
    {
      sumMultiplesOfFifteen = sumMultiples(~~(multiplesOfFive / 3), 15);
    }
    else
    {
      sumMultiplesOfFifteen = 0;
    }

    return sumMultiplesOfFive - sumMultiplesOfFifteen;
  }

  let multipleOfThree = ~~((int - 1) / 3);
  let multipleOfFive = ~~((int - 1) / 5);

  console.log(
    `
    ${multipleOfThree},
    ${multipleOfFive},
    ${sumOnlyMultiplesOfFiveAndNotThree(multipleOfFive, 5)},
    ${sumMultiples(multipleOfThree, 3)}
    `
  )

  return sumOnlyMultiplesOfFiveAndNotThree(multipleOfFive, 5) + sumMultiples(multipleOfThree, 3);
}

console.log(
  solution(1000)
);
