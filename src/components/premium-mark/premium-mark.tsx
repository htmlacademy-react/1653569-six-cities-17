type TPremiumMarkProps = {
  className?: string;
}

export default function PremiumMark({ className }: TPremiumMarkProps): JSX.Element {
  return (
    <div className={`${className}__mark`}>
      <span>Premium</span>
    </div>
  );
}
