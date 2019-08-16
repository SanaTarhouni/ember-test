import { helper } from '@ember/component/helper';

export default helper(function formatDate([value, ...rest]/*, hash*/) {
  let openeningDate = value.slice(0, 9)
  let newOpeneningDate = new Date(openeningDate)
  var today = new Date();
  var timeDiff = today.getTime() - newOpeneningDate.getTime();
  var DaysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
  return DaysDiff;
});
