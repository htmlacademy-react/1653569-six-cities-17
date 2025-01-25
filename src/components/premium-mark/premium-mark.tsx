import { memo } from 'react';

type TPremiumMarkProps = {
  className?: string;
}

function PremiumMark({ className }: TPremiumMarkProps): JSX.Element {
  return (
    <div className={`${className}__mark`}>
      <span>Premium</span>
    </div>
  );
}

const MemoizedPremiumMark = memo(PremiumMark);
export default MemoizedPremiumMark;
