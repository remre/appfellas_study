import moment from 'moment-timezone';

export const formatDate = dateTime => {
  return dateTime ? moment(dateTime).format('LL') : 'N/A';
};

export const formatTime = (dateTime, subtractHours = 0) => {
  return dateTime
    ? moment(dateTime).subtract(subtractHours, 'hours').format('LT')
    : 'N/A';
};

export const calculateDuration = (startDateTime, endDateTime) => {
  if (!startDateTime || !endDateTime) return null;
  const duration = moment.duration(
    moment(endDateTime).diff(moment(startDateTime).subtract(2, 'hours'))
  );
  return `${Math.floor(duration.asHours())}h ${duration.minutes()}m`;
};
