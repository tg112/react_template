import Badge from './Badge';

export default {
  title: 'Badge',
  component: Badge
};

export const Badges = () => (
  <>
    <Badge label="反射的動機付け" color="green" />
    <br />
    <Badge label="SNS" color="green" />
    <br />
    <Badge label="3.2 実用的な社会支援" color="blue" />
    <br />
    <Badge label="3.2 実用的な社会支援" color="white" />
  </>
);

export const hasPriorityBadges = () => (
  <>
    <Badge color="red" priority="高" />
    <br />
    <Badge color="yellow" priority="中" />
    <br />
    <Badge color="priority-gray" priority="低" />
  </>
);
