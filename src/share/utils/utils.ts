import _ from "lodash";
import { notification } from "antd";
import dayjs from "dayjs";
import { IApiResponse } from "../interface";
import { API_STATUS, FORMAT_DATE, NOTIFICATION_TYPE } from "../constant";

export const isSuccessResponse = (responseData: IApiResponse<any>) => {
  return responseData && responseData.status === API_STATUS.SUCCESS;
};

export const isFailureResponse = (responseData: IApiResponse<any>) => {
  return responseData && responseData.status === API_STATUS.FAILURE;
};

export const handleServerError = (serverError: any) => {
  let errors: string[] = [];

  if (serverError?.data?.hasOwnProperty("errors")) {
    errors = serverError?.data?.errors.reduce(
      (c: any, n: any) => [...c, n.message],
      []
    );
  } else {
    errors.push(serverError.message);
  }

  return errors;
};

export const openNotification = (
  type: NOTIFICATION_TYPE,
  msg: string,
  description?: string
) => {
  notification.open({
    message: msg,
    description: description ?? "",
    type: type,
  });
};

export const showServerError = (messages: string[]) => {
  messages?.slice(0, 5).forEach((message: string) => {
    openNotification(NOTIFICATION_TYPE.ERROR, message, "");
  });
};

export const convertToNumber = (value: any): string => {
  if (_.isNil(value) || value === "" || (value && _.trim(value).length === 0)) {
    return "";
  }

  /* Check if the first position is "-". If true, the input number is negative. Otherwise it is positive or non-numeric. */
  if (String(value).indexOf("-") === 0) {
    const numberValue = String(value).replace(/,/g, "");
    return isNaN(numberValue as any) ? "" : numberValue.toString();
  }
  if (_.isFinite(Number(value))) {
    return String(value);
  }
  const numberValue = String(value).replace(/[,|\\-]/g, "");
  return isNaN(numberValue as any) ? "" : numberValue.toString();
};

export const formatNumber = (
  value: string | number,
  maximumFractionDigits = 0,
  minimumFractionDigits = 0
) => {
  if (
    _.isNil(value) ||
    value === "" ||
    (typeof value === "number" && isNaN(value)) ||
    (value && typeof value === "string" && _.trim(value).length === 0)
  ) {
    return "";
  }

  const newValue = convertToNumber(value);

  if (newValue === "0") {
    return newValue;
  }

  return new Intl.NumberFormat("ja-JP", {
    minimumFractionDigits,
    maximumFractionDigits,
  }).format(newValue as any);
};

export const upperCaseFirstLetter = (value: string) => {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

// Clear all notification when init page
export const clearNotification = () => {
  notification.destroy();
};

export const isNullOrUndefined = (value: any) =>
  _.isNil(value) || _.isNull(value);

/**
 * If the value is null or undefined, or if the value is a string and it's empty or contains only
 * whitespace, then return true.
 * @param {string | null} [value] - The value to check.
 */
export const isBlank = (value?: string | null) =>
  isNullOrUndefined(value) ||
  value === "" ||
  (value && _.trim(value).length === 0);

export const isNotEmpty = (value: any) =>
  !_.isNil(value) && !_.isNull(value) && !_.isNaN(value) && !isBlank(value);

/**
 * It returns an empty string if the value is not null or undefined
 * @param {any} value - any
 */
export const emptyStringIfNull = (value: any) =>
  isNotEmpty(value) ? value : "";

/**
 * The function returns the current financial year based on the current date.
 * @returns The function `getCurrentFinanceYear` returns the current financial year based on the
 * current date. If the current date is after March 31st of the current year, it returns the current
 * year as the financial year. Otherwise, it returns the previous year as the financial year.
 */
export const getCurrentFinanceYear = () => {
  const currentYear = dayjs().year();
  if (dayjs().isAfter(dayjs(`${currentYear}-03-31`))) {
    return currentYear;
  }
  return currentYear - 1;
};

export const checkInvaidDateDayjs = (dayjsValue: any) => {
  if (dayjsValue === "Invalid Date") {
    return "";
  }
  return dayjsValue;
};

export const formatDateWithDayjs = (date: any, formatDate: FORMAT_DATE) => {
  if (!date) {
    return "";
  }
  if (dayjs(date).isValid()) {
    return checkInvaidDateDayjs(dayjs(date).format(formatDate));
  }
  return date;
};

export const isStateLoading = (responseData: IApiResponse<any>) => {
  return responseData && responseData.status === API_STATUS.LOADING;
};

export const compareString = (a: any, b: any) => {
  if (a && b) {
    return a.localeCompare(b);
  } else if (a && !b) {
    return -1;
  } else if (!a && b) {
    return 1;
  } else {
    return 0;
  }
};

export const convertToCurrencyFormat = (value: number | string) => {
  if (value === null || value === undefined) return "";

  return value.toLocaleString("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
};
