import moment from 'moment';

export const formatDate = (date) => {
    return typeof(date) === 'string' && moment(date).format('DD MMM YYYY')
}