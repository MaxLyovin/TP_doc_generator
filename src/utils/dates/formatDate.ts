import { format } from "date-fns";

import { dateFormatDash } from "../../constants/dateFormats";

export const formatDate = (date: Date | string) => format(date, dateFormatDash);
