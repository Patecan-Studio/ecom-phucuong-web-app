export const isPositiveInteger = (value: any) => {
    if (value === "") {
      return true;
    }
    const regEx = new RegExp(/^(\d+|\d{1,3}(,\d{3})*)?$/);
    return regEx.test(value);
  };
  
  export const isNegativeInteger = (value: any) => {
    if (value === "") {
      return true;
    }
    const regEx = new RegExp(/^[-+]?(\d+|\d{1,3}(,\d{3})*)?$/);
    return regEx.test(value);
  };
  
  export const isPositiveDecimal = (
    value: any,
    integerDigits: number,
    fractionDigits: number
  ) => {
    if (value === "") {
      return true;
    }
    const comma = Math.round(integerDigits / 3);
    const regEx = new RegExp(
      `^(\\d{1,${integerDigits}}|\\d{1,3}(,\\d{3}){0,${
        comma - 1
      }})(?:\\.[0-9]{1,${fractionDigits}})?$`
    );
    return regEx.test(value);
  };
  